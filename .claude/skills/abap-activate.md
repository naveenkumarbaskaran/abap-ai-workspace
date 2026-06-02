---
name: abap-activate
description: Activate one or multiple inactive ABAP development objects on a connected SAP system. Use after creating or editing objects.
---

# ABAP: Activate Objects

Activate inactive ABAP objects using the ADT MCP server.

## Steps

1. **Confirm what to activate** — the current file, a named object, or all inactive objects in a package
2. **`abap_activate_objects`** — call with the object(s) to activate
3. **Report result** — list what was activated and flag any activation errors

## If activation fails

- Read the error message carefully — it usually points to a syntax error or missing dependency
- Open the problematic file in the editor and fix the issue
- Re-run `abap_activate_objects`

## Keyboard shortcut (tell the user)

| Action | Shortcut |
|--------|---------|
| Activate current object | `Ctrl+F3` |
| Activate multiple objects | `Ctrl+Shift+F3` |
