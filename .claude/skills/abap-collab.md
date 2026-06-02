---
name: abap-collab
description: Collaboration features in ADT VS Code — share direct links to ABAP objects (HTTP and ADT links), switch between VS Code and Eclipse ADT, and navigate shared references with teammates.
---

# ABAP: Collaboration & Link Sharing

Share precise links to ABAP source code with teammates, or switch between VS Code and Eclipse ADT.

## Share a link to an ABAP object

`Ctrl+Shift+P` → `ABAP: Share Link...`

Two link types:

### ADT Link (Eclipse-compatible)
1. Choose **Copy ADT Link to Clipboard**
2. Send to teammate
3. In Eclipse: **Navigate** → **Open ADT Link...** → paste → **OK**
4. Opens at the exact line your cursor was on

### HTTP Link (browser-compatible)
1. Choose **Copy HTTP Link to Clipboard**
2. Paste in browser → opens the object in the SAP Help Portal viewer
3. From there → click **Open in ABAP Development Tools** → opens in Eclipse

## Switch directly to Eclipse ADT

`Ctrl+Shift+P` → `ABAP: Open with ADT for Eclipse`

Eclipse opens at the **exact cursor position** you were at in VS Code.

## Use cases
- Code reviews: share a link to a specific method line
- Bug reports: share the exact line with the issue
- Documentation: reference specific implementations
- Cross-IDE teams: some devs on Eclipse, some on VS Code — links work both ways
