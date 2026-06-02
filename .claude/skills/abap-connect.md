---
name: abap-connect
description: Install ADT for VS Code and connect to SAP systems (on-premise via RFC, cloud via HTTP). Covers first-time setup, adding destinations, logging on, and workspace configuration.
---

# ABAP: Install & Connect to SAP Systems

## Install ADT for VS Code

**Prerequisites:**
- Windows 10+ or macOS 14+
- Windows only: [Microsoft Visual C++ v14 Redistributable (x64)](https://aka.ms/vs/17/release/vc_redist.x64.exe)

**Steps:**
1. Download & install [VS Code](https://code.visualstudio.com)
2. Open Extensions (`Ctrl+Shift+X`)
3. Search **ABAP Development Tools**
4. Install (`sapase.adt-vscode`) → restart VS Code

## Add a SAP system destination

`Ctrl+Shift+P` → `ABAP: New Destination`

| System type | Choose | Details |
|-------------|--------|---------|
| On-premise / S/4HANA Cloud Private Edition | **RFC** | Select system from SAPLogon list; enter user, client, language |
| BTP ABAP environment / S/4HANA Cloud Public Edition | **HTTP** | Enter cloud system URL; enter system ID |

After creation, add it to your workspace:
`Ctrl+Shift+P` → `ABAP: Add Destination as Folder to Workspace`

Or add just a package:
`Ctrl+Shift+P` → `ABAP: Add Package as Folder to Workspace`

Or your local objects:
`Ctrl+Shift+P` → `ABAP: Add Local Objects of User as Folder to Workspace`

> **Tip:** Even without a workspace folder you can still open objects with `Ctrl+Shift+A`.

## Log on

Logon triggers automatically when you first access a destination.

Manual logon: In Explorer, right-click the destination folder → **Logon to Destination**

## Edit destination settings

`Ctrl+Shift+P` → `ABAP: Open Destination Settings (JSON)` — opens the `destinations.json` file for advanced configuration (host, port, protocol, SNC, etc.)

## View communication log

`Ctrl+Shift+P` → `Developer: Open Log...` → choose **Terminal** → switch to **Output** panel → select **ADT Communication Log** from the dropdown.

## Security notes for MCP server

- The bearer token is per-installation — never commit it to git
- Verify all installed MCP servers before use — third-party servers are your responsibility
- If a workstation is compromised, ADT, the MCP server, and connected systems may all be exposed
- Prompt injection via MCP is a real risk — only use trusted MCP servers

## Your current connections

| Destination | Type | System |
|-------------|------|--------|
| `ER1_001_BASKARANN_EN` | HTTP | S/4HANA Cloud Public Edition |
| `CC3_708__SAPI572120_EN` | RFC | S/4HANA Cloud Private Edition |
