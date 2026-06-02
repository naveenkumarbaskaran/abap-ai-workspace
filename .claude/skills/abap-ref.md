---
name: abap-ref
description: Quick reference for ADT VS Code — keyboard shortcuts, object types, virtual file system structure, Eclipse vs VS Code feature mapping, and common Command Palette commands.
---

# ABAP: Quick Reference

## Keyboard Shortcuts

### Navigation
| Action | Shortcut |
|--------|---------|
| Open / search any ABAP object | `Ctrl+Shift+A` |
| Go to definition | `F12` or `Ctrl+Click` |
| Peek definition (inline) | `Alt+F12` |
| Find all references | `Alt+Shift+F12` |
| Peek references inline | `Shift+F12` |
| Outline view | `Ctrl+Shift+O` |

### Development
| Action | Shortcut |
|--------|---------|
| Create new ABAP object | `Ctrl+Shift+Alt+N` |
| Activate current object | `Ctrl+F3` |
| Activate multiple objects | `Ctrl+Shift+F3` |
| Check syntax | `Ctrl+Shift+P` → `ABAP: Check Object` |
| Run application (console) | `F5` |
| Code completion (manual) | `Ctrl+Space` |
| Accept ghost text (AI) | `Tab` |
| Dismiss ghost text | `Esc` |
| Accept next word of ghost text | `Ctrl+Right` |

### Testing & Quality
| Action | Shortcut |
|--------|---------|
| Run ABAP Unit Tests | `Ctrl+Shift+F10` |
| Run ATC checks | `Ctrl+Shift+P` → `ABAP: Run ABAP Test Cockpit` |
| Start debugger | `F5` |
| Step over | `F10` |
| Step into | `F11` |
| Step out | `Shift+F11` |

### Settings & Tools
| Action | Shortcut |
|--------|---------|
| Open Settings UI | `Ctrl+,` |
| Open Command Palette | `Ctrl+Shift+P` |
| Share link | `Ctrl+Shift+P` → `ABAP: Share Link...` |
| Open with Eclipse ADT | `Ctrl+Shift+P` → `ABAP: Open with ADT for Eclipse` |
| View ADT communication log | `Ctrl+Shift+P` → `Developer: Open Log...` |

---

## Common Object Types

| Object | Type Key | Extension |
|--------|----------|-----------|
| ABAP Class | `CLAS/OC` | `.clas.abap` |
| ABAP Interface | `INTF/OI` | `.intf.abap` |
| CDS Data Definition | `DDLS/DF` | `.ddls.asddls` |
| CDS Metadata Extension | `DDLX/EX` | `.ddlx.asddlxs` |
| CDS Entity Extension | `DDLS/DF` (extend) | `.ddls.asddls` |
| CDS Type | `DDLS/DT` | `.ddls.asddls` |
| CDS Aspect | `DDLS/DA` | `.ddls.asddls` |
| Access Control (DCL) | `DCLS/DL` | `.dcls.asdcls` |
| Service Definition | `SRVD/SD` | `.srvd.assrvd` |
| Service Binding | `SRVB/SB` | `.srvb.assrvb` |
| Behavior Definition | `BDEF/BD` | `.bdef.asbdef` |
| Number Range Object | `NROB/NR` | `.nrob.xml` |
| Change Document Object | `CHDO/CD` | `.chdo.xml` |
| SAP Object Type | `SOTS/OT` | `.sots.xml` |
| SAP Object Node Type | `SONT/NT` | `.sont.xml` |

---

## Virtual File System Structure

```
<DESTINATION>/
  src/
    <PACKAGE>/
      <object>.<type>.abap          ← main source
      <object>.<type>.xml           ← properties / metadata
      <object>.<type>.testclasses.abap  ← test class (for CLAS)
      <object>.<type>.locals_def.abap   ← local definitions (for CLAS)
      <object>.<type>.locals_imp.abap   ← local implementations (for CLAS)
```

> Always search the Explorer directory tree before using grep — ABAP uses a virtual file system.

---

## Eclipse ADT → VS Code Feature Mapping

| Feature | Eclipse | VS Code |
|---------|---------|---------|
| Create object | Menu: New → [type] | `Ctrl+Shift+Alt+N` |
| Open object | `Ctrl+Shift+A` | `Ctrl+Shift+A` |
| Activate | `Ctrl+F3` / `Ctrl+Shift+F3` | `Ctrl+F3` / `Ctrl+Shift+F3` |
| Go to definition | `F3` | `F12` |
| Find references | `Ctrl+Shift+G` | `Alt+Shift+F12` |
| Peek definition | F2 popup | `Alt+F12` |
| Outline | `Ctrl+O` | `Ctrl+Shift+O` |
| Run unit tests | Context menu | `Ctrl+Shift+F10` |
| ATC checks | `Ctrl+Shift+F2` | `ABAP: Run ABAP Test Cockpit` |
| Properties view | Windows → Show Views → Properties | Open `.xml` file in Explorer |
| Communication log | Windows → Show View → ABAP Communication Log | `Developer: Open Log...` → Output → ADT Communication Log |

---

## Package Conventions

| Package | Use |
|---------|-----|
| `$TMP` | Local objects — no transport, not exported |
| `Z*` | Customer namespace — productive development |
| `Y*` | Also customer namespace |

---

## Naming Conventions (Cloud-Compliant)

| Object | Pattern |
|--------|---------|
| Class (local/test) | `ZCL_TMP_<name>` |
| Class (productive) | `ZCL_<name>` |
| Interface | `ZIF_<name>` |
| CDS root view | `ZI_<Entity>` |
| CDS projection | `ZC_<Entity>` |
| Service definition | `ZUI_<Entity>_O4` |
| Service binding | `ZUI_<Entity>_O4` |
