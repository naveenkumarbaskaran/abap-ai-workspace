#!/usr/bin/env node
/**
 * deep-crawl.mjs — Deep crawler for SAP Help Portal using Crawlee + Playwright.
 *
 * SAP Help Portal requires authentication. Two ways:
 *
 *   Option A — Interactive login (saves session for future runs):
 *     node scripts/deep-crawl.mjs --login
 *     Opens a visible browser → log in once → session saved to scripts/sap-session.json
 *
 *   Option B — Cookie file (export from your logged-in browser):
 *     1. Install "Cookie-Editor" Chrome extension
 *     2. Go to help.sap.com while logged in → Cookie-Editor → Export JSON
 *     3. Save file to: scripts/sap-cookies.json
 *     Then: node scripts/deep-crawl.mjs --start <URL>
 *
 * Usage:
 *   node scripts/deep-crawl.mjs --login
 *   node scripts/deep-crawl.mjs --start <URL> [--domain eam] [--depth 5] [--dry-run]
 *
 * Options:
 *   --start <URL>         Root URL to crawl (required unless --login)
 *   --login               Interactive login mode — opens visible browser, saves session
 *   --domain eam          Knowledge domain folder (default: eam)
 *   --depth <n>           Max crawl depth (default: 5)
 *   --concurrency <n>     Parallel tabs (default: 2)
 *   --delay <ms>          Ms between requests (default: 1200)
 *   --dry-run             Preview pages without writing files
 *   --output <dir>        Output dir (default: knowledge/<domain>)
 *   --cookies <file>      Cookie JSON file (default: scripts/sap-cookies.json)
 *   --session <file>      Saved session file (default: scripts/sap-session.json)
 *   --name <slug>         Force output filename (overrides auto-detected section)
 *
 * Examples:
 *   node scripts/deep-crawl.mjs --login
 *   node scripts/deep-crawl.mjs --start "https://help.sap.com/docs/SAP_S4HANA_CLOUD/2dfa044a255f49e89a3050daf3c61c11/0f9b90d573cf4e3bb2fe97ef983a6939.html?locale=en-US&version=2602.VAL" --domain eam --depth 6
 *   node scripts/deep-crawl.mjs --start <URL> --dry-run
 */

import { PlaywrightCrawler } from "crawlee";
import { chromium } from "playwright";
import { writeFileSync, readFileSync, existsSync, mkdirSync } from "fs";
import { join, resolve, dirname } from "path";
import { fileURLToPath } from "url";

const __dir = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dir, "..");

// ── Argument parsing ──────────────────────────────────────────────────────────

const args = process.argv.slice(2);
const opts = {
  start: null,
  login: false,
  domain: "eam",
  depth: 5,
  concurrency: 2,
  delay: 1200,
  dryRun: false,
  output: null,
  prefix: null,
  name: null,
  cookiesFile: join(__dir, "sap-cookies.json"),
  sessionFile: join(__dir, "sap-session.json"),
};

for (let i = 0; i < args.length; i++) {
  if      (args[i] === "--start")       opts.start       = args[++i];
  else if (args[i] === "--login")       opts.login       = true;
  else if (args[i] === "--domain"   || args[i] === "-d") opts.domain = args[++i];
  else if (args[i] === "--depth")       opts.depth       = parseInt(args[++i], 10);
  else if (args[i] === "--concurrency") opts.concurrency = parseInt(args[++i], 10);
  else if (args[i] === "--delay")       opts.delay       = parseInt(args[++i], 10);
  else if (args[i] === "--dry-run")     opts.dryRun      = true;
  else if (args[i] === "--output" || args[i] === "-o") opts.output = args[++i];
  else if (args[i] === "--prefix")      opts.prefix      = args[++i];
  else if (args[i] === "--name")        opts.name        = args[++i];
  else if (args[i] === "--cookies")     opts.cookiesFile = resolve(args[++i]);
  else if (args[i] === "--session")     opts.sessionFile = resolve(args[++i]);
  else if (!args[i].startsWith("--"))   opts.start       = args[i];
}

// ── Interactive login mode ────────────────────────────────────────────────────

if (opts.login) {
  console.log(`
╔══════════════════════════════════════════════════════╗
║  SAP Help Portal — Interactive Login                 ║
╚══════════════════════════════════════════════════════╝
  A browser window will open.
  Log into help.sap.com with your SAP Universal ID.
  After logging in, return here and press Enter.
`);
  const browser = await chromium.launch({ headless: false });
  const ctx = await browser.newContext();
  const page = await ctx.newPage();
  await page.goto("https://help.sap.com/", { waitUntil: "domcontentloaded", timeout: 30000 });

  // Wait for user to log in
  await new Promise(resolve => {
    process.stdout.write("  Waiting — press Enter after you have logged in... ");
    process.stdin.once("data", resolve);
  });

  // Save session state (cookies + localStorage)
  const state = await ctx.storageState();
  writeFileSync(opts.sessionFile, JSON.stringify(state, null, 2));
  await browser.close();
  console.log(`\n  ✅ Session saved to ${opts.sessionFile}`);
  console.log(`  You can now run the crawler:\n`);
  console.log(`  node scripts/deep-crawl.mjs --start <URL> --domain eam --depth 6\n`);
  process.exit(0);
}

if (!opts.start) {
  console.error(`Usage: node scripts/deep-crawl.mjs --start <URL> [options]
       node scripts/deep-crawl.mjs --login`);
  process.exit(1);
}

// ── Load auth state ───────────────────────────────────────────────────────────

let storageState = undefined;

if (existsSync(opts.sessionFile)) {
  storageState = opts.sessionFile;
  console.log(`  Auth: using saved session from ${opts.sessionFile}`);
} else if (existsSync(opts.cookiesFile)) {
  // Convert Cookie-Editor JSON format to Playwright format
  const rawCookies = JSON.parse(readFileSync(opts.cookiesFile, "utf-8"));
  const cookies = rawCookies.map(c => ({
    name: c.name, value: c.value, domain: c.domain,
    path: c.path || "/", httpOnly: !!c.httpOnly, secure: !!c.secure,
    sameSite: c.sameSite || "None",
  }));
  // Write a minimal Playwright state file
  const tmpState = join(__dir, ".sap-session-tmp.json");
  writeFileSync(tmpState, JSON.stringify({ cookies, origins: [] }, null, 2));
  storageState = tmpState;
  console.log(`  Auth: loaded ${cookies.length} cookies from ${opts.cookiesFile}`);
} else {
  console.log(`  ⚠  No auth found — run --login first, or export cookies to scripts/sap-cookies.json`);
  console.log(`     Continuing without auth (will fail on protected pages)\n`);
}

// ── Config ────────────────────────────────────────────────────────────────────

const startUrl  = new URL(opts.start);
const BASE_HOST = startUrl.hostname;
const defaultPrefix = startUrl.pathname.split("/").slice(0, 4).join("/");
const URL_PREFIX = opts.prefix || defaultPrefix;
const OUTPUT_DIR = opts.output
  ? resolve(ROOT, opts.output)
  : join(ROOT, "knowledge", opts.domain);
const today = new Date().toISOString().slice(0, 10);

console.log(`
╔══════════════════════════════════════════════════════╗
║  EAM Intelligence — Deep Crawler (Playwright)        ║
╚══════════════════════════════════════════════════════╝
  Start URL  : ${opts.start}
  Scope      : https://${BASE_HOST}${URL_PREFIX}/...
  Domain     : ${opts.domain}
  Max depth  : ${opts.depth}
  Concurrency: ${opts.concurrency}
  Delay      : ${opts.delay}ms
  Output     : ${opts.dryRun ? "(dry run — no files written)" : OUTPUT_DIR}
`);

if (!opts.dryRun) mkdirSync(OUTPUT_DIR, { recursive: true });

// ── State ─────────────────────────────────────────────────────────────────────

const sections    = new Map();  // slug → { title, pages[] }
const visitedUrls = new Set();
const dryRunPages = [];

// ── Helpers ───────────────────────────────────────────────────────────────────

function slugify(str) {
  return (str || "misc").toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .trim()
    .slice(0, 60);
}

function cleanUrl(raw) {
  try {
    const u = new URL(raw, `https://${BASE_HOST}`);
    // Strip fragment only — keep all query params (SAP Help Portal needs state/version/locale)
    u.hash = "";
    return u.toString();
  } catch { return raw; }
}

function isInScope(url) {
  try {
    const u = new URL(url);
    return u.hostname === BASE_HOST
      && u.pathname.startsWith(URL_PREFIX)
      && !u.pathname.endsWith("/docs/link-disclaimer")  // skip disclaimer redirects
      && !u.hash;  // skip same-page anchor links
  } catch { return false; }
}

// ── Content extraction (runs inside browser page) ─────────────────────────────

async function extractContent(page) {
  // Check if we're on a login page — bail early
  const currentUrl = page.url();
  if (currentUrl.includes("/login") || currentUrl.includes("accounts.sap.com")) {
    return { title: "__LOGIN_REQUIRED__", content: "", wordCount: 0, links: [] };
  }

  // Wait for SPA router to update title away from generic "SAP Help Portal"
  await page.waitForFunction(
    () => document.title && !document.title.startsWith("SAP Help Portal"),
    { timeout: 20000 }
  ).catch(() => null);

  await page.waitForSelector(
    ".body-wrapper, .topic-body, .loBody, article, [role='main'], #content",
    { timeout: 10000 }
  ).catch(() => null);

  await page.waitForTimeout(800);

  return page.evaluate(() => {
    // Extract links BEFORE removing nav — SAP Help Portal TOC links live inside <nav>
    const links = Array.from(document.querySelectorAll("a[href]"))
      .map(a => a.href)
      .filter(h => h && h.includes("help.sap.com"));

    // Remove chrome elements
    const removeSelectors = [
      "script", "style", "nav", "header", "footer", "aside", "noscript",
      "[class*='breadcrumb']", "[class*='feedback']", "[class*='rating']",
      "[class*='sidebar']", "[class*='cookie']", "[class*='navigation']",
      "[class*='share']", "[class*='related']", "[class*='toc']",
      "[id*='nav']", "[id*='toc']", "dialog", ".dropdown",
      "[aria-label='navigation']", "[aria-label='breadcrumb']",
    ];
    removeSelectors.forEach(sel => {
      document.querySelectorAll(sel).forEach(el => el.remove());
    });

    const title = document.querySelector("h1")?.textContent?.trim()
      || document.title.replace(/\s*[|\-–].*/, "").trim()
      || "Untitled";

    // Find main content area — SAP Help Portal specific selectors first
    const contentSelectors = [
      ".body-wrapper", ".loBody", ".topic-body", ".sap-content",
      "article", '[role="main"]', ".help-content", ".content-area",
      "#content", "main",
    ];
    let container = null;
    for (const s of contentSelectors) {
      container = document.querySelector(s);
      if (container) break;
    }
    if (!container) container = document.body;

    // DOM → Markdown converter
    function toMd(node) {
      if (!node) return "";
      if (node.nodeType === 3) return node.textContent.replace(/\s+/g, " ");
      if (node.nodeType !== 1) return "";

      const tag  = node.tagName.toLowerCase();
      const kids = () => Array.from(node.childNodes).map(toMd).join("");

      if (/^h([1-6])$/.test(tag)) {
        const lvl = "#".repeat(parseInt(tag[1]));
        return `\n\n${lvl} ${node.textContent.trim()}\n\n`;
      }
      if (tag === "p")          return `\n\n${kids().trim()}\n\n`;
      if (tag === "br")         return "\n";
      if (tag === "hr")         return "\n\n---\n\n";
      if (tag === "blockquote") return `\n\n> ${kids().trim()}\n\n`;
      if (tag === "strong" || tag === "b") return `**${kids().trim()}**`;
      if (tag === "em"     || tag === "i") return `*${kids().trim()}*`;
      if (tag === "code" && node.parentElement?.tagName !== "PRE")
        return `\`${node.textContent}\``;
      if (tag === "pre") {
        const code = node.querySelector("code");
        const lang = (code?.className || "").replace(/language-/, "");
        return `\n\n\`\`\`${lang}\n${(code || node).textContent.trim()}\n\`\`\`\n\n`;
      }
      if (tag === "a") {
        const inner = kids().trim();
        const href = node.getAttribute("href") || "";
        return inner ? (href && !href.startsWith("javascript") ? `[${inner}](${href})` : inner) : "";
      }
      if (tag === "ul" || tag === "ol") {
        const items = Array.from(node.children).filter(c => c.tagName === "LI");
        return "\n" + items.map((li, i) =>
          (tag === "ol" ? `${i + 1}. ` : "- ") + toMd(li).trim().replace(/\n/g, " ")
        ).join("\n") + "\n";
      }
      if (tag === "li") return kids();
      if (tag === "table") {
        const rows = Array.from(node.querySelectorAll("tr"));
        if (!rows.length) return "";
        const parsed = rows.map(tr =>
          Array.from(tr.querySelectorAll("th,td"))
            .map(c => c.textContent.trim().replace(/\|/g, "\\|").replace(/\n/g, " "))
        ).filter(r => r.length);
        if (!parsed.length) return "";
        let md = "\n\n";
        parsed.forEach((row, i) => {
          md += "| " + row.join(" | ") + " |\n";
          if (i === 0) md += "| " + row.map(() => "---").join(" | ") + " |\n";
        });
        return md + "\n";
      }
      if (["tbody","thead","tfoot","tr","th","td"].includes(tag)) return kids();
      if (tag === "img") {
        const alt = node.getAttribute("alt") || "";
        return alt ? `[Image: ${alt}]` : "";
      }
      if (["script","style","noscript","svg","path","button","input",
           "select","form","iframe","dialog"].includes(tag)) return "";
      return kids();
    }

    const raw = toMd(container);
    const content = raw.replace(/\n{3,}/g, "\n\n").trim();
    const wordCount = content.replace(/[#\-|*`\[\]]/g, "").split(/\s+/).filter(Boolean).length;

    return { title, content, wordCount, links };
  });
}

// ── Crawler ───────────────────────────────────────────────────────────────────

const crawler = new PlaywrightCrawler({
  maxConcurrency: opts.concurrency,
  navigationTimeoutSecs: 45,
  requestHandlerTimeoutSecs: 60,
  maxRequestRetries: 2,
  maxRequestsPerCrawl: opts.dryRun ? 400 : 5000,

  // Reuse the authenticated browser context
  browserPoolOptions: {
    useFingerprints: false,
    preLaunchHooks: [],
  },
  launchContext: {
    launchOptions: {
      headless: true,
      args: ["--no-sandbox", "--disable-dev-shm-usage", "--disable-gpu"],
    },
    ...(storageState ? { userDataDir: undefined } : {}),
  },

  // Set domcontentloaded + block heavy resources + inject auth
  preNavigationHooks: [
    async ({ page, request }, gotoOptions) => {
      gotoOptions.waitUntil = "domcontentloaded";
      gotoOptions.timeout   = 35000;

      // Block images/fonts/media to speed up crawling
      await page.route("**/*", (route) => {
        const type = route.request().resourceType();
        if (["image", "media", "font"].includes(type)) return route.abort();
        return route.continue();
      });

      // Inject saved session cookies if available
      if (storageState && typeof storageState === "string") {
        try {
          const state = JSON.parse(readFileSync(storageState, "utf-8"));
          if (state.cookies?.length) {
            await page.context().addCookies(state.cookies);
          }
        } catch { /* session file may not be valid yet */ }
      }
    },
  ],

  async requestHandler({ request, page, log }) {
    const url = cleanUrl(request.url);
    const depth = request.userData?.depth ?? 0;
    if (visitedUrls.has(url)) return;
    visitedUrls.add(url);

    // Polite delay
    await page.waitForTimeout(opts.delay);

    let data;
    try {
      data = await extractContent(page);
    } catch (err) {
      log.warning(`Extract failed: ${url} — ${err.message}`);
      return;
    }

    const { title, content, wordCount, links } = data;

    // Detect auth redirect
    if (title === "__LOGIN_REQUIRED__") {
      log.error(`🔒 Auth required — run --login first to save a session`);
      log.error(`   Or export cookies from your browser to scripts/sap-cookies.json`);
      return;
    }

    const hasContent = wordCount >= 30;
    log.info(`[d${depth}] ${hasContent ? "✓" : "○"} ${title.slice(0, 55)} (${wordCount}w)`);

    if (opts.dryRun) {
      dryRunPages.push({ depth, title, url, wordCount, hasContent });
    } else if (hasContent) {
      const words = title.toLowerCase().replace(/[^a-z\s]/g, "").trim().split(/\s+/);
      const sectionKey = opts.name
        ? slugify(opts.name)
        : slugify(words.slice(0, 4).join(" "));

      if (!sections.has(sectionKey)) {
        sections.set(sectionKey, { title, slug: sectionKey, pages: [] });
      }
      sections.get(sectionKey).pages.push({ url, title, content, depth });
    }

    // Enqueue child links
    if (depth < opts.depth) {
      for (const href of links) {
        const clean = cleanUrl(href);
        if (isInScope(clean) && !visitedUrls.has(clean)) {
          await crawler.addRequests([{
            url: clean,
            userData: { depth: depth + 1 },
          }]).catch(() => {});
        }
      }
    }
  },

  failedRequestHandler({ request, log }) {
    log.warning(`Failed (${request.retryCount} retries): ${request.url}`);
  },
});

// ── Run ───────────────────────────────────────────────────────────────────────

await crawler.run([{ url: opts.start, userData: { depth: 0 } }]);

// ── Output ────────────────────────────────────────────────────────────────────

if (opts.dryRun) {
  console.log(`\n${"═".repeat(62)}`);
  console.log(`  Dry Run — ${dryRunPages.length} pages discovered\n`);
  let contentCount = 0;
  const byDepth = {};
  for (const p of dryRunPages) {
    byDepth[p.depth] = byDepth[p.depth] || [];
    byDepth[p.depth].push(p);
    if (p.hasContent) contentCount++;
  }
  for (const d of Object.keys(byDepth).sort((a, b) => a - b)) {
    const pages = byDepth[d];
    console.log(`  Depth ${d}  (${pages.length} pages)`);
    for (const { title, wordCount, hasContent } of pages.slice(0, 25)) {
      console.log(`    ${hasContent ? "✓" : "○"} ${title.slice(0, 56).padEnd(56)} ${wordCount}w`);
    }
    if (pages.length > 25) console.log(`    … and ${pages.length - 25} more`);
  }
  console.log(`\n  ✓ = has content (${contentCount})   ○ = TOC/nav only (${dryRunPages.length - contentCount})`);
} else {
  console.log(`\n${"═".repeat(62)}`);
  console.log(`  Writing knowledge files to ${OUTPUT_DIR}\n`);

  let written = 0, skipped = 0;

  for (const [slug, section] of sections) {
    section.pages.sort((a, b) => a.depth - b.depth || a.title.localeCompare(b.title));

    const totalWords = section.pages.reduce((n, p) =>
      n + p.content.replace(/[#\-|*`\[\]]/g, "").split(/\s+/).filter(Boolean).length, 0);

    if (totalWords < 50) { skipped++; continue; }

    const destPath = join(OUTPUT_DIR, `${slug}.md`);
    const exists   = existsSync(destPath);
    const urls     = [...new Set(section.pages.map(p => p.url))];

    let body = "";
    for (let i = 0; i < section.pages.length; i++) {
      const pg = section.pages[i];
      if (i === 0) {
        body += pg.content + "\n\n";
      } else {
        const demoted = pg.content
          .replace(/^# /gm, "## ")
          .replace(/^## /gm, "### ")
          .replace(/^### /gm, "#### ");
        body += `---\n\n${demoted}\n\n`;
      }
    }

    const file = [
      `---`,
      `source: ${urls[0]}`,
      `last_updated: ${today}`,
      `domain: ${opts.domain}`,
      urls.length > 1 ? `pages: ${urls.length}` : null,
      `---`,
      ``,
      body.replace(/\n{3,}/g, "\n\n").trim(),
    ].filter(l => l !== null).join("\n");

    writeFileSync(destPath, file);
    console.log(`  ${exists ? "🔄" : "✅"} ${slug}.md  (${section.pages.length} pages, ~${totalWords}w)`);
    written++;
  }

  console.log(`\n${"═".repeat(62)}`);
  console.log(`  Done! ${written} files written, ${skipped} skipped (too thin)`);
  if (written > 0) {
    console.log(`\nNext:\n  python -m core.ingest   # rebuild search index`);
  }
}
