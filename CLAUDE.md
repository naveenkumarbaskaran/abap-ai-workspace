# ABAP Workspace — Claude Code Instructions

This workspace connects to SAP systems via the **ADT for VS Code** extension (`sapase.adt-vscode`).

## Connected Systems

**Always call `abap_lists_destinations` at the start of every task** — never assume which systems are available.

### System Classification Rules

After getting the destination list, classify each system:

**Development system (writable) — ER1, ER2, ER3, ED1, ED2, DEV, D01, D02, D03, or any system with "dev" in the name**
- ✅ Create, edit, activate, test, transport — all operations allowed

**Quality / Test system — QA, Q01, Q02, QC3, QEF, or any system with "qa", "qas", "test" in name**
- ❌ No create/edit — read-only unless user explicitly says this is their dev system

**Reference / Production-like — CC3, CC7, CCF, C02, PRD, P01, or any system with "cc", "prd", "prod" in name**
- ❌ No create/edit/activate/transport — read-only always, no exceptions

**When in doubt:** ask the user "Is this a development system or read-only reference?"

### Your current workspace systems

Read from `ABAP.code-workspace` — these may change:

```
ER1_001_BASKARANN_EN  → Development (ER1 = DEV) ✅
CC3_708__SAPI572120_EN → Read-only reference (CC3 = never write) ❌
```

**If user asks to create/change on a read-only system:** respond *"[SYSTEM] is a reference system — development is not allowed there. I'll use [DEV_SYSTEM] instead."* then proceed on the dev system.

## MCP Connection

ADT MCP server: `http://localhost:2236/mcp` (bearer token required).
First-time setup: `/abap-mcp-setup`

## Skills — Full Coverage

| Skill | Trigger | Covers |
|-------|---------|--------|
| `/abap-help` | "how do I", "what is", "where is", "can I", any ADT question | Search crawled docs and answer; re-crawls if outdated |
| `/abap-mcp-wire` | "wire MCP", "auto setup MCP", first run | **Auto-discovers token + writes settings.json in one shot** |
| `/abap-mcp-setup` | "setup MCP", "how do I connect Claude to SAP" | Manual setup guide with troubleshooting |
| `/abap-create` | "create a class/CDS/interface/object" | Full agentic creation loop via MCP tools |
| `/abap-activate` | "activate", after any edit | Activate inactive objects |
| `/abap-open` | "open", "find", "search object" | Open/search objects, virtual FS paths, navigation |
| `/abap-transport` | "transport", "create TR", "assign transport" | Create, view, assign transport requests |
| `/abap-test` | "run tests", "unit test", "ABAP Unit" | Write, run, evaluate ABAP Unit tests + TDD |
| `/abap-atc` | "ATC", "quality check", "code quality" | ABAP Test Cockpit checks |
| `/abap-debug` | "debug", "breakpoint", "step through", "run" | Debugger, syntax check, run class (F5/classrun) |
| `/abap-cds` | "CDS", "data definition", "extend CDS", "access control" | Full CDS lifecycle — create, edit, extend, DCL |
| `/abap-rap-generate` | "RAP", "generate business object", "OData service" | Generate full RAP stack via generators |
| `/abap-ai` | "ghost text", "Joule", "AI completion", "prompt" | Predictive code completion, Joule chat, prompt best practices |
| `/abap-collab` | "share link", "share object", "Eclipse", "collaborate" | Share links, switch to Eclipse ADT |
| `/abap-ref` | "shortcuts", "cheat sheet", "object types", "how do I" | Keyboard shortcuts, object types, file structure, Eclipse→VSCode mapping |

## Always Apply

- Use **cloud-compliant ABAP** only (no WRITE, CALL TRANSACTION, SUBMIT, etc.)
- `$TMP` = local objects, no transport needed
- Search Explorer directory tree before grepping — ABAP uses a virtual file system
- Edit source via the VS Code editor (open file first, then edit)
- Run unit tests after every source code change
