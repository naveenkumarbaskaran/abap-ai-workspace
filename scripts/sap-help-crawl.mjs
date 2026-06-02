#!/usr/bin/env node
/**
 * sap-help-crawl.mjs — Single-session SAP Help Portal crawler.
 *
 * Uses ONE persistent browser page to navigate each URL so the React SPA
 * keeps its session state and renders the correct sub-page content.
 *
 * Usage:
 *   node scripts/sap-help-crawl.mjs --start <URL> --output docs/adt-vscode
 *   node scripts/sap-help-crawl.mjs --start <URL> --output docs/adt-vscode --depth 4 --delay 800
 */

import { chromium } from "playwright";
import { writeFileSync, mkdirSync, existsSync, readFileSync } from "fs";
import { join, resolve, dirname } from "path";
import { fileURLToPath } from "url";

const __dir = dirname(fileURLToPath(import.meta.url));
const ROOT  = resolve(__dir, "..");

// ── Args ──────────────────────────────────────────────────────────────────────
const args = process.argv.slice(2);
const opts = {
  start:       null,
  output:      null,
  depth:       4,
  delay:       800,
  dryRun:      false,
  sessionFile: join(__dir, "sap-session.json"),
};
for (let i = 0; i < args.length; i++) {
  if      (args[i] === "--start")   opts.start   = args[++i];
  else if (args[i] === "--output" || args[i] === "-o") opts.output = args[++i];
  else if (args[i] === "--depth")   opts.depth   = parseInt(args[++i], 10);
  else if (args[i] === "--delay")   opts.delay   = parseInt(args[++i], 10);
  else if (args[i] === "--dry-run") opts.dryRun  = true;
  else if (args[i] === "--session") opts.sessionFile = resolve(args[++i]);
  else if (!args[i].startsWith("--")) opts.start = args[i];
}
if (!opts.start) { console.error("Usage: node scripts/sap-help-crawl.mjs --start <URL> [--output dir]"); process.exit(1); }

const OUTPUT_DIR = opts.output ? resolve(ROOT, opts.output) : join(ROOT, "docs", "adt-vscode");
const startUrl   = new URL(opts.start);
// Scope = just the docs section prefix (first 4 path segments), no query params
const pathParts  = startUrl.pathname.split("/").filter(Boolean);
const SCOPE_PATH = "/" + pathParts.slice(0, 4).join("/");   // /docs/abap-cloud/abap-development-tools-for-visual-studio-code
const SCOPE      = `${startUrl.origin}${SCOPE_PATH}`;
const today      = new Date().toISOString().slice(0, 10);

console.log(`
╔══════════════════════════════════════════════════════╗
║  SAP Help Portal — Single-Session Crawler            ║
╚══════════════════════════════════════════════════════╝
  Start  : ${opts.start}
  Scope  : ${SCOPE}/*
  Depth  : ${opts.depth}
  Output : ${opts.dryRun ? "(dry run)" : OUTPUT_DIR}
`);

if (!opts.dryRun) mkdirSync(OUTPUT_DIR, { recursive: true });

// ── Browser setup ─────────────────────────────────────────────────────────────
const browser = await chromium.launch({ headless: true, args: ["--no-sandbox"] });

// Load saved session if available
let storageState = undefined;
if (existsSync(opts.sessionFile)) {
  try {
    storageState = JSON.parse(readFileSync(opts.sessionFile, "utf-8"));
    console.log(`  Auth: session loaded from ${opts.sessionFile}`);
  } catch { /* ignore */ }
}
const ctx  = await browser.newContext({ storageState });
const page = await ctx.newPage();

// Block images/fonts/media
await page.route("**/*", route => {
  const t = route.request().resourceType();
  return ["image", "media", "font", "stylesheet"].includes(t) ? route.abort() : route.continue();
});

// ── Navigate and extract ──────────────────────────────────────────────────────
async function navigateAndExtract(url) {
  await page.goto(url, { waitUntil: "domcontentloaded", timeout: 45000 });

  // Wait for React router to render the correct sub-page.
  // SAP Help Portal starts with title "SAP Help Portal | SAP Online Help" and
  // updates it once the SPA finishes routing. Poll until it changes.
  const deadline = Date.now() + 15000;
  while (Date.now() < deadline) {
    const t = await page.title();
    if (t && !t.startsWith("SAP Help Portal")) break;
    await page.waitForTimeout(300);
  }

  await page.waitForSelector(".body-wrapper, main, article", { timeout: 8000 }).catch(() => null);
  await page.waitForTimeout(opts.delay);

  return page.evaluate((scopePrefix) => {
    const title = document.querySelector("h1")?.textContent?.trim()
      || document.title.replace(/\s*[|\-–].*/, "").trim()
      || "Untitled";

    // Collect in-scope links BEFORE removing nav
    const links = Array.from(document.querySelectorAll("a[href]"))
      .map(a => a.href)
      .filter(h => h && h.startsWith(scopePrefix) && !h.includes("link-disclaimer"));

    // Strip chrome
    ["script","style","nav","header","footer","aside","noscript","dialog",
     "[class*='breadcrumb']","[class*='feedback']","[class*='cookie']",
     "[class*='toc']","[id*='toc']","[id*='nav']","[aria-label='navigation']"
    ].forEach(sel => document.querySelectorAll(sel).forEach(e => e.remove()));

    const container = document.querySelector(".body-wrapper, main, article") || document.body;

    function toMd(node) {
      if (!node) return "";
      if (node.nodeType === 3) return node.textContent.replace(/\s+/g, " ");
      if (node.nodeType !== 1) return "";
      const tag  = node.tagName.toLowerCase();
      const kids = () => Array.from(node.childNodes).map(toMd).join("");
      if (/^h([1-6])$/.test(tag)) return `\n\n${"#".repeat(parseInt(tag[1]))} ${node.textContent.trim()}\n\n`;
      if (tag === "p")   return `\n\n${kids()}\n\n`;
      if (tag === "li")  return `\n- ${kids()}`;
      if (tag === "ul" || tag === "ol") return `\n${kids()}\n`;
      if (tag === "strong" || tag === "b") return `**${node.textContent.trim()}**`;
      if (tag === "code") return `\`${node.textContent}\``;
      if (tag === "pre") {
        const code = node.querySelector("code");
        return `\n\n\`\`\`\n${(code || node).textContent.trim()}\n\`\`\`\n\n`;
      }
      if (tag === "table") {
        const rows = Array.from(node.querySelectorAll("tr"));
        if (!rows.length) return "";
        const toRow = tr => "| " + Array.from(tr.querySelectorAll("th,td"))
          .map(c => c.textContent.trim().replace(/\|/g, "\\|").replace(/\n/g, " "))
          .join(" | ") + " |";
        const header = toRow(rows[0]);
        const sep    = "| " + Array.from(rows[0].querySelectorAll("th,td")).map(() => "---").join(" | ") + " |";
        return "\n\n" + [header, sep, ...rows.slice(1).map(toRow)].join("\n") + "\n\n";
      }
      if (tag === "a") {
        const href = node.getAttribute("href") || "";
        const inner = kids();
        return inner ? (href && !href.startsWith("javascript") ? `[${inner}](${href})` : inner) : "";
      }
      return kids();
    }

    const raw = toMd(container);
    const content   = raw.replace(/\n{3,}/g, "\n\n").trim();
    const wordCount = content.replace(/[#\-|*`\[\]]/g, "").split(/\s+/).filter(Boolean).length;

    return { title, content, wordCount, links };
  }, SCOPE);
}

// ── Crawl queue ───────────────────────────────────────────────────────────────
function slugify(str) {
  return (str || "page").toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "").trim()
    .replace(/\s+/g, "-").replace(/-+/g, "-").slice(0, 60);
}

const visited = new Set();
const queue   = [{ url: opts.start, depth: 0 }];
const written = [];
let skipped   = 0;

while (queue.length > 0) {
  const { url, depth } = queue.shift();
  const cleanUrl = url.split("#")[0];
  if (visited.has(cleanUrl)) continue;
  visited.add(cleanUrl);

  process.stdout.write(`  [d${depth}] ${cleanUrl.split("/").pop()?.slice(0, 60)} ... `);

  let data;
  try {
    data = await navigateAndExtract(cleanUrl);
  } catch (err) {
    console.log(`FAILED: ${err.message.split("\n")[0]}`);
    continue;
  }

  const { title, content, wordCount, links } = data;
  const hasContent = wordCount >= 30;
  console.log(`${hasContent ? "✓" : "○"} ${title.slice(0, 50)} (${wordCount}w)`);

  if (hasContent && !opts.dryRun) {
    const slug     = slugify(title);
    const filename = `${slug}.md`;
    const filepath = join(OUTPUT_DIR, filename);
    const md = `---\ntitle: "${title}"\nsource: ${cleanUrl}\nlast_updated: ${today}\n---\n\n# ${title}\n\n${content}\n`;
    writeFileSync(filepath, md, "utf-8");
    written.push(filename);
  } else if (!hasContent) {
    skipped++;
  }

  // Enqueue child links
  if (depth < opts.depth) {
    for (const link of links) {
      const clean = link.split("#")[0];
      if (!visited.has(clean)) {
        queue.push({ url: clean, depth: depth + 1 });
      }
    }
  }
}

await browser.close();

console.log(`
══════════════════════════════════════════════════════════
  Done! ${written.length} files written, ${skipped} skipped (too thin)
  Output: ${OUTPUT_DIR}
`);
if (written.length > 0) {
  console.log("  Files:");
  written.forEach(f => console.log(`    ${f}`));
}
