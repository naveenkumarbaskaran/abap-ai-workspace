---
name: abap-ai
description: Use SAP Joule AI features in ADT VS Code — predictive code completion (ghost text), AI coding assistance via chat, and best practices for writing effective agent prompts. Covers setup, usage, and known constraints.
---

# ABAP: AI-Powered Development (Joule)

> ⚠️ SAP Joule for Developers requires an **additional license** beyond the base ADT extension.

## Predictive Code Completion (Ghost Text)

AI suggests code inline as you type — no license required for basic code completion.

### How it works
- As you pause while typing, grey **ghost text** appears ahead of the cursor
- It predicts the next line(s) based on your current code context
- Supports: ABAP classes, interfaces, method bodies, comments, ABAP Doc

### Controls

| Action | Key |
|--------|-----|
| Accept full suggestion | `Tab` |
| Accept next word only | `Ctrl+Right` |
| Dismiss suggestion | `Esc` |
| Manually trigger | Assign via `Trigger Inline Suggestion` in Command Palette |

### Enable/disable
`File` → `Preferences` → `Settings` → Extensions → ABAP Development → **Adt › Joule › Editor: Predictive Code Completion** checkbox

To hide the key bindings toolbar above ghost text:
`File` → `Preferences` → `Settings` → Text Editor → Suggestions → **Inline Suggest: Show Toolbar** → `never`

### Important caveats
- Ghost text is AI-generated — **always review before accepting**
- Same prompt can give different results at different times (non-deterministic)
- Hallucinations are possible — verify the suggested code is valid ABAP

## AI Coding Assistance (Joule Chat)

Use the Joule chat panel in VS Code (requires Joule license + admin configuration).

### Best practices for prompts

1. **Give complete context** — "I'm building a RAP business object for sales orders with fields: order_id, customer, amount"
2. **Break into steps** — "1. Create the class. 2. Add the interface. 3. Implement the method."
3. **Treat it as pair programming** — guide, redirect, and correct as you go
4. **Stop and redirect** — if the agent goes off-track, intervene with clearer instructions
5. **Provide examples** — attach sample code to help the agent understand patterns faster
6. **Add relevant packages** — include necessary APIs in the Explorer view so the agent can find them
7. **Keep context focused** — too much unrelated context reduces effectiveness

### For agentic tasks (MCP-based)
See `/abap-create` and `/abap-mcp-setup` — these use the ADT MCP server tools directly, which is more reliable than free-form chat for structured tasks like creating objects.

## Configure Joule (admin task)

Admins configure Joule for side-by-side use via:
`Ctrl+Shift+P` → `Preferences: Open Settings (UI)` → search `Joule`

See `configuring-joule-side-by-side-admin.md` in `docs/adt-vscode/` for full admin steps.
