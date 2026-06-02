---
name: abap-help
description: Answer any question about ABAP Development Tools for VS Code by searching the crawled SAP documentation. Use when user asks "how do I", "what is", "where is", "can I", or any question about ADT VS Code features, shortcuts, CDS, RAP, debugging, testing, MCP, Joule, or any other ADT topic.
---

# ABAP: Help & Documentation Search

Answer questions about ADT for VS Code using the crawled SAP documentation in `docs/adt-vscode/`.

## When this skill applies

Trigger on any of these:
- "how do I [do something in VS Code / ADT]"
- "what is [feature / term]"
- "where is [setting / button / command]"
- "can I [do X with ADT]"
- "what shortcut for [action]"
- "how does [feature] work"
- "difference between [X] and [Y]"
- Any question about: CDS, RAP, debugging, unit tests, ATC, Joule, MCP, transport, activation, object creation, navigation, code completion, extensions, access controls, service bindings

## How to answer

### Step 1 — Find the relevant doc file(s)

Map the question to the right file(s) in `docs/adt-vscode/`:

| Topic | Doc file(s) |
|-------|------------|
| Install, connect, add system | `installing.md`, `system-connection-rfc.md`, `system-connection-http.md`, `logging-on.md` |
| Keyboard shortcuts | `keyboard-shortcuts.md`, `abap-ref.md` (in skills) |
| Create any object | `creating-objects.md`, `creating-classes.md`, `creating-interfaces.md` |
| Open / search objects | `opening-objects.md`, `property-filter.md`, `object-name-patterns.md` |
| Activate objects | `activation.md`, `activating-objects.md` |
| Transport requests | `transport-request.md` |
| Syntax check | `syntax-check.md` |
| Run a class (console) | `run-application.md` |
| Debug | `debugging.md`, `debugger.md` |
| Unit tests | `unit-testing.md`, `writing-unit-tests.md`, `launching-unit-tests.md`, `evaluating-unit-tests.md`, `tdd-abap.md`, `unit-test-classes.md`, `unit-glossary.md` |
| ATC / code quality | `atc.md`, `running-atc.md`, `code-quality.md` |
| CDS — create | `creating-data-definitions.md`, `creating-data-definition.md` |
| CDS — edit, format, complete | `editing-cds.md`, `cds-code-completion.md`, `formatting-data-definitions.md` |
| CDS — extend | `extending-cds.md`, `cds-entity-extensions.md`, `creating-cds-entity-extension.md` |
| CDS — metadata extensions | `cds-metadata-extensions.md`, `creating-cds-metadata-extensions.md` |
| CDS — access controls / DCL | `access-controls.md`, `adding-access-controls.md`, `creating-access-controls.md` |
| CDS — types, aspects | `creating-cds-types.md`, `creating-cds-aspects.md` |
| RAP — service definition | `service-definitions.md` |
| RAP — service binding | `service-binding.md` |
| RAP — behavior definition | `behavior-definition.md` |
| RAP — generate full stack | `abap-rap-tools.md` |
| Classes and interfaces | `abap-classes.md`, `creating-classes.md`, `creating-interfaces.md`, `assigning-changes-classes.md` |
| Number range objects | `number-range-objects.md`, `number-range-object.md` |
| Change document objects | `change-document-objects.md`, `creating-change-document-objects.md` (skill: `change-document-objects-overview.md`) |
| SAP object types/node types | `sap-object-types.md`, `creating-sap-object-types.md`, `sap-object-node-types.md`, `creating-sap-object-node-types.md` |
| JSON editor | `json-editor.md` |
| Share link / open in Eclipse | `sharing-links.md` |
| Joule / AI code completion | `joule-overview.md`, `predictive-code-completion.md`, `using-predictive-code-completion.md`, `getting-ai-coding-assistance.md` |
| Agent prompts / MCP | `agent-configuration.md`, `agent-prompt-best-practices.md`, `agentic-loop.md` |
| MCP setup | `enabling-mcp-server.md`, `configuring-mcp-server.md`, `mcp-tools-reference.md`, `using-mcp-tools.md` |
| Security | `security-recommendations.md` |
| Eclipse vs VS Code comparison | `feature-compare.md`, `abap-core-development.md`, `abap-rap-tools.md`, `testing-quality.md` |
| Getting started | `getting-started-devs.md`, `installing.md` |
| Support | `support.md`, `opening-support-case.md` |
| Overview / what can ADT do | `overview.md`, `capabilities.md` |

### Step 2 — Read the file(s)

Read the relevant file(s) from `docs/adt-vscode/`. Read up to 3 files max per question — if more are needed, answer from the most relevant and offer to look up the rest.

### Step 3 — Answer

Structure the answer based on what was asked:

**"How do I X"** → numbered procedure steps, exact command/shortcut
**"What is X"** → 1-2 sentence definition, then key facts
**"What shortcut for X"** → shortcut table directly
**"Difference between X and Y"** → side-by-side comparison
**"Can I X"** → yes/no first, then how

Always include:
- The exact `Ctrl+Shift+P` command name if one exists
- The keyboard shortcut if one exists
- Any important prerequisites or notes from the doc

### Step 4 — If not found or outdated

**Not in docs at all:**
1. Say "This isn't covered in the crawled ADT documentation."
2. Point to SAP Help Portal: `https://help.sap.com/docs/abap-cloud/abap-development-tools-for-visual-studio-code/`
3. Offer to re-crawl: "I can fetch the latest docs — want me to run the crawler?"

**Doc exists but seems outdated** (check `last_updated` in frontmatter, or user says "that's not right / I don't see that"):
1. Tell user: "The doc was last updated [date] — let me re-crawl for the latest content."
2. Re-crawl that specific page:
```bash
cd ~/Documents/Area/WorkSpace/ABAP && node scripts/sap-help-crawl.mjs \
  --start "https://help.sap.com/docs/abap-cloud/abap-development-tools-for-visual-studio-code/<SLUG>?locale=en-US" \
  --output docs/adt-vscode --depth 1 --delay 600
```
3. Re-read the updated file and answer again.

**Re-crawl the entire section** (new ADT release, many things changed):
```bash
cd ~/Documents/Area/WorkSpace/ABAP && node scripts/sap-help-crawl.mjs \
  --start "https://help.sap.com/docs/abap-cloud/abap-development-tools-for-visual-studio-code/abap-development-tools-for-visual-studio-code?locale=en-US" \
  --output docs/adt-vscode --depth 4 --delay 600
```

**Triggers for re-crawl:**
- `last_updated` > 30 days old and user reports something wrong
- User says "that changed", "I don't see that option", "new version came out"
- Answer contradicts what user sees in their VS Code

## Quick answers (no file read needed)

These are asked so often they should be answered immediately:

| Question | Answer |
|----------|--------|
| How to create an object? | `Ctrl+Shift+Alt+N` or Command Palette → `ABAP: Create New ABAP Object` |
| How to open/search an object? | `Ctrl+Shift+A` |
| How to activate? | `Ctrl+F3` (one) or `Ctrl+Shift+F3` (multiple) |
| How to run a class? | `F5` — class must implement `IF_OO_ADT_CLASSRUN` |
| How to run unit tests? | `Ctrl+Shift+F10` or Command Palette → `ABAP: Run ABAP Unit Tests` |
| How to run ATC? | Command Palette → `ABAP: Run ABAP Test Cockpit` |
| How to debug? | Set breakpoint (click gutter) → `F5` to start |
| How to check syntax? | Auto (always on) or Command Palette → `ABAP: Check Object` |
| How to share a link? | Command Palette → `ABAP: Share Link...` |
| How to open in Eclipse? | Command Palette → `ABAP: Open with ADT for Eclipse` |
| Where is the communication log? | Command Palette → `Developer: Open Log...` → Output → ADT Communication Log |
