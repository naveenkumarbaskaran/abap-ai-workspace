---
name: abap-create
description: Create any ABAP development object (class, interface, CDS view, function module, etc.) on a connected SAP system via the ADT MCP server. Runs the full agentic loop: validate → create → edit → activate.
---

# ABAP: Create Object

You are creating an ABAP development object via the ADT MCP server.

## Step 1 — Gather intent

If the user hasn't specified, ask:
- **What to create**: object type (class, interface, CDS view, function group, etc.)
- **Name**: object name (e.g. `ZCL_MY_CLASS`)
- **Package**: `$TMP` for local dev, or a real package for productive dev
- **System**: which SAP destination (if multiple connected)
- **Description**: short description for the object

## Step 2 — Agentic loop

Run in this exact sequence:

1. **`abap_lists_destinations`** — confirm available systems, pick the target
2. **`abap_creation-get_all_creatable_objects`** — find the correct object type key (e.g. `CLAS/OC` for class, `INTF/OI` for interface, `DDLS/DF` for CDS data definition)
3. **`abap_creation-get_object_type_details`** — get the exact required fields for that type
4. **`abap_creation-run_validation`** — validate the name + package before proceeding
5. **`abap_transport-create`** — create transport (skip if package is `$TMP`)
6. **`abap_creation-create_object`** — create the object skeleton; it will open in the VS Code editor
7. **Edit source** — add implementation via the VS Code editor (use built-in file edit tools)
8. **`abap_activate_objects`** — activate the object
9. **`abap_run_unit_tests`** — run tests if the object has a test class

## Rules

- Use cloud-compliant ABAP only (no WRITE, CALL TRANSACTION, etc.)
- For `$TMP` classes, use prefix `ZCL_TMP_`
- Always open the file in the editor before editing — ABAP uses a virtual file system
- Tell the user the keyboard shortcut `Ctrl+Shift+Alt+N` as an alternative for future use
- After activation, tell the user they can press `F5` to run a class implementing `IF_OO_ADT_CLASSRUN`
