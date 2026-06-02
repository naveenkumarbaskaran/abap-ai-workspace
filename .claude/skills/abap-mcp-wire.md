---
name: abap-mcp-wire
description: Automatically discovers the ADT bearer token from VS Code settings, checks the MCP server is running, and writes .claude/settings.json — zero manual steps. Run this once per machine to connect Claude to SAP.
---

# ABAP: Auto-Wire MCP Connection

This skill does the full setup automatically. Just run `/abap-mcp-wire`.

## What I will do

1. Read the bearer token from VS Code's `settings.json`
2. Check the MCP server is actually running on the configured port
3. Write `.claude/settings.json` with the correct config
4. Verify the connection works

## Execution

Run these steps in order:

### 1. Read token + port + destinations

```bash
# macOS — token + port
cat ~/Library/Application\ Support/Code/User/settings.json | grep -E "adt\.mcpServer"

# Read available destinations from workspace file + classify them
cat ABAP.code-workspace | python3 -c "
import json, sys, re

ws = json.load(sys.stdin)
dests = [(f['name'], f.get('uri','')) for f in ws.get('folders',[]) if f.get('uri','').startswith('abap:/')]

dev_prefixes = ('ER1','ER2','ER3','ED1','ED2','D01','D02','D03','DEV')
ref_prefixes  = ('CC','CCF','C02','PRD','P01','PROD')
qa_prefixes   = ('QA','Q0','QC','QEF','TST')

for name, uri in dests:
    sid = name.split('_')[0].upper()
    if any(sid.startswith(p) for p in dev_prefixes):
        role = 'DEVELOPMENT ✅ (write allowed)'
    elif any(sid.startswith(p) for p in ref_prefixes):
        role = 'REFERENCE ❌ (read-only)'
    elif any(sid.startswith(p) for p in qa_prefixes):
        role = 'QA/TEST ❌ (read-only)'
    else:
        role = 'UNKNOWN — ask user'
    print(f'  {name} → {role}')
"
```

Show the user the classified list so they can confirm or correct it.

**If token is missing:** The MCP server was never enabled. Tell the user:
> "Open VS Code → Ctrl+Shift+P → Preferences: Open Settings (UI) → search 'ADT MCP Server' → enable it and restart VS Code, then re-run /abap-mcp-wire"

### 2. Verify server is running

```bash
curl -s -o /dev/null -w "%{http_code}" http://localhost:2236/mcp
```

- `400` or `401` → server is running ✓ (proceed)
- `000` or `Connection refused` → server not running

**If not running:** Tell the user VS Code must be open with the ABAP workspace active.

### 3. Write .claude/settings.json

Use the token and port discovered above. Write this file (create `.claude/` dir if needed):

```json
{
  "mcpServers": {
    "com.sap.adt/mcp": {
      "type": "http",
      "url": "http://localhost:<PORT>/mcp",
      "headers": {
        "Authorization": "Bearer <TOKEN>"
      }
    }
  }
}
```

If `.claude/settings.json` already exists, merge — preserve any existing keys, only add/update `mcpServers`.

### 4. Add to .gitignore

Check if `.gitignore` exists. If so, add `.claude/settings.json` if not already present (token must not be committed).

### 5. Confirm

Tell the user:
- Token found: first 6 chars + `...` (never show full token)
- Port used
- File written to: `.claude/settings.json`
- Next step: restart Claude Code or run `/mcp` to reload, then say "list my ABAP destinations"

## If anything fails

| Problem | What to tell the user |
|---------|----------------------|
| Token missing from VS Code settings | Enable MCP server in VS Code: `Ctrl+Shift+P` → Settings → search "ADT MCP Server" → enable → restart VS Code |
| Server not running (curl returns 000) | Open VS Code with the ABAP workspace; the MCP server only runs while VS Code is open |
| `adt.mcpServer.enabled` is false | Enable it in VS Code settings |
| Port is non-standard | Use the port from `adt.mcpServer.port` setting, not the default 2236 |
| `.claude/settings.json` has merge conflict | Show user the current file and ask before overwriting |
