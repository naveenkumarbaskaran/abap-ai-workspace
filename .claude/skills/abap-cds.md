---
name: abap-cds
description: Full CDS (Core Data Services) development in ADT VS Code — create data definitions, edit source, code completion, format, extend entities/metadata, create CDS types/aspects, manage access controls (DCL). Covers the entire CDS lifecycle.
---

# ABAP: CDS Development

CDS (Core Data Services) defines SAP HANA-optimized semantic data models used in RAP apps, analytics, and Fiori.

## Create a CDS object

`Ctrl+Shift+Alt+N` → select the object type:

| Type | Key | Purpose |
|------|-----|---------|
| Data Definition | `DDLS/DF` | CDS view entity, projection view |
| CDS Metadata Extension | `DDLX/EX` | Add annotations without modifying base entity |
| CDS Entity Extension | `DDLS/DF` (extend) | Add fields to an existing CDS entity |
| CDS Type | `DDLS/DT` | Reusable scalar type |
| CDS Aspect | `DDLS/DA` | Reusable structural fragment |
| Access Control | `DCLS/DL` | Row-level authorization (DCL) |

## Edit CDS source

Open the `.ddls.asddls` file in the Explorer.

### Code completion
- **Auto-trigger**: starts typing → list appears automatically
- **Manual trigger**: `Ctrl+Space`
- After typing `.` on a data source → component list appears automatically

### Format
Right-click in editor → **Format Document** — applies SAP standard CDS formatting profile.

### Syntax check
Runs automatically. Manual: `Ctrl+Shift+P` → `ABAP: Check Object`.
Errors appear in **Problems** panel.

### Element information
Hover over an element to see its type. Or: right-click → **Peek** → **Peek Definition** (`Alt+F12`) to see source inline.

## Extend CDS entities

### CDS Entity Extension (add fields)
1. Create a new Data Definition (`Ctrl+Shift+Alt+N` → `DDLS/DF`)
2. Use `extend view entity <Base> with <Extension> { ... }` syntax
3. Activate — extended fields are immediately available everywhere the base entity is used

### CDS Metadata Extension (add annotations)
1. `Ctrl+Shift+Alt+N` → select `Metadata Extension (DDLX/EX)`
2. Reference the entity to annotate
3. Add/override `@` annotations (only those that don't affect DB activation are allowed)
4. Activate

> ⚠️ Metadata extensions cannot contain annotations that affect ABAP Dictionary activation.

## CDS Access Controls (DCL)

Access controls filter query results based on user authorizations.

### Create
1. `Ctrl+Shift+Alt+N` → **Access Control** (`DCLS/DL`)
2. Enter package, name, description
3. Optionally enter the **Protected Entity** name
4. Assign transport → access control opens in editor
5. Write DCL using `define role` syntax

### Key concepts
- Without an access control, any authorized user sees **all data** from the entity
- DCL can reference classical ABAP authorization objects
- Supports: static filters, user-based conditions, combining with classical auth

## Activate CDS objects
`Ctrl+F3` (current) or `Ctrl+Shift+F3` (multiple)

After activating a CDS entity extension → extended fields are reflected in SQL and all consumers immediately.

## Open / search CDS objects
`Ctrl+Shift+A` → type name (supports wildcards, e.g. `ZI_SALES*`)

Explorer path:
```
<DESTINATION>/src/<package>/
  <name>.ddls.asddls      ← CDS source
  <name>.ddls.xml         ← metadata/properties
```
