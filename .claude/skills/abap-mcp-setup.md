---
name: abap-mcp-setup
description: Configure the ADT MCP server connection in Claude Code. Auto-discovers the bearer token from VS Code settings, checks if server is running, and writes .claude/settings.json. Run this once per machine.
---

# ABAP: Setup ADT MCP Server Connection

## Step 1 — Auto-discover token and check server

Run these commands to check everything in one shot:

```bash
# 1. Find the bearer token from VS Code settings (macOS)
cat ~/Library/Application\ Support/Code/User/settings.json | grep -E "adt.mcpServer"

# Windows (PowerShell)
# Get-Content "$env:APPDATA\Code\User\settings.json" | Select-String "adt.mcpServer"

# Linux
# cat ~/.config/Code/User/settings.json | grep -E "adt.mcpServer"

# 2. Check if MCP server is actually running
curl -s http://localhost:2236/mcp -H "Content-Type: application/json" | head -c 100
```

**Expected output from step 1:**
```
"adt.mcpServer.enabled": true,
"adt.mcpServer.token": "YOUR_TOKEN_HERE"
```

**Expected output from step 2** (server running, token not yet provided):
```json
{"error":"Authentication failed: Missing or invalid Authorization header"}
```
→ Server is running. Proceed to Step 3.

## Step 2 — If token is missing or server not running

### Token missing from settings.json
The ADT extension hasn't generated a token yet. Enable the MCP server first:

`Ctrl+Shift+P` → `Preferences: Open Settings (UI)` → search `ADT MCP Server`
- ✅ Enable: **Adt › McpServer: Enable**
- Set port: `2236`
- Restart VS Code

Then re-run Step 1 — token will now appear.

### Server not running (`Connection refused`)
VS Code is not open, or the MCP server setting is not enabled. Open VS Code with the ABAP workspace and ensure the setting is enabled.

### Port conflict
Change port in VS Code settings (any value 1024–65535), then update the URL in Step 3 accordingly.

## Step 3 — Write the config

Once you have the token, write `.claude/settings.json` in your project:

```bash
TOKEN=$(cat ~/Library/Application\ Support/Code/User/settings.json | grep "adt.mcpServer.token" | sed 's/.*: "\(.*\)".*/\1/')
PORT=$(cat ~/Library/Application\ Support/Code/User/settings.json | grep "adt.mcpServer.port" | sed 's/[^0-9]//g')
PORT=${PORT:-2236}

mkdir -p .claude
cat > .claude/settings.json << EOF
{
  "mcpServers": {
    "com.sap.adt/mcp": {
      "type": "http",
      "url": "http://localhost:${PORT}/mcp",
      "headers": {
        "Authorization": "Bearer ${TOKEN}"
      }
    }
  }
}
EOF
echo "Written. Token: ${TOKEN:0:6}... Port: $PORT"
```

> **Windows users:** Copy the token manually from VS Code settings and write `.claude/settings.json` by hand using the template above.

## Step 4 — Verify

Restart Claude Code (or run `/mcp` to reload), then ask:
> "List my ABAP destinations"

Claude calls `abap_lists_destinations` — you should see your connected SAP systems.

## Troubleshooting

| Symptom | Cause | Fix |
|---------|-------|-----|
| `Connection refused` | VS Code not open or MCP disabled | Open VS Code, enable `Adt › McpServer: Enable` |
| `401 Unauthorized` | Stale token in settings.json | Re-run Step 1 to get fresh token, re-run Step 3 |
| `0 tools` after connecting | Extension not fully started | Restart VS Code, wait 10s, retry |
| Token not in settings.json | MCP server never enabled | Enable it in VS Code settings, restart VS Code |
| Port mismatch | Custom port set | Check `adt.mcpServer.port` in VS Code settings |

## Token locations by OS

| OS | Path |
|----|------|
| macOS | `~/Library/Application Support/Code/User/settings.json` |
| Windows | `%APPDATA%\Code\User\settings.json` |
| Linux | `~/.config/Code/User/settings.json` |

## Shareability note

**Do NOT commit `.claude/settings.json`** — it contains your personal bearer token.
Add to `.gitignore`:
```
.claude/settings.json
```
Share `.claude/settings.local.json.example` instead (token placeholder). Each developer runs this skill once on their own machine.
