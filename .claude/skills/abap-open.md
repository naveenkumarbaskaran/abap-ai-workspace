---
name: abap-open
description: Search for and open ABAP development objects (classes, CDS views, function modules, etc.) on a connected SAP system. Use Ctrl+Shift+A or the MCP tools.
---

# ABAP: Open / Search Objects

Find and open ABAP development objects.

## How to open an object

**Via keyboard (fastest):** `Ctrl+Shift+A` — opens the ABAP object search dialog directly in VS Code.

**Via MCP (when working agentically):**
1. `abap_lists_destinations` — confirm which system to search
2. Use the VS Code workspace Explorer to browse the destination folder tree
3. Open the file directly from the virtual file system path

## File path structure in virtual workspace

ABAP objects appear under the destination folder as:
```
<DESTINATION>/
  src/
    <package>/
      <object_name>.<object_type>.abap      ← main source
      <object_name>.<object_type>.xml       ← properties/metadata
```

Example:
```
ER1_001_BASKARANN_EN/
  src/
    $tmp/
      zcl_my_class.clas.abap
      zcl_my_class.clas.xml
      zcl_my_class.clas.testclasses.abap
```

## Searching

- **Object search:** `Ctrl+Shift+A` → type name with wildcards (e.g. `ZCL_MY*`)
- **Source search:** Use VS Code Search (`Ctrl+Shift+F`) — searches across the virtual workspace
- **Find references:** Right-click an identifier → `Find All References` (`Alt+Shift+F12`)
- **Peek references inline:** `Shift+F12`

## Navigation shortcuts

| Action | Shortcut |
|--------|---------|
| Go to definition | `F12` or `Ctrl+Click` |
| Peek definition (inline) | `Alt+F12` |
| Find all references | `Alt+Shift+F12` |
| Outline view | `Ctrl+Shift+O` |
