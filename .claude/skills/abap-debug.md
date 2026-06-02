---
name: abap-debug
description: Debug ABAP code in VS Code using the built-in ABAP Debugger. Set breakpoints, step through execution, inspect variables and call stack. Also covers syntax checking and running ABAP applications (classrun).
---

# ABAP: Debug, Syntax Check & Run

## Enable the Debugger (once)

`Ctrl+Shift+P` → `Preferences: Open Settings (UI)` → Extensions → ABAP Development → ✅ **Enable ABAP Debugger** → restart VS Code.

## Debug a class

1. Open the ABAP class in the editor
2. **Set a breakpoint** — click the gutter (left of line numbers); a red dot appears
3. **Start debugging** — press `F5` or `Ctrl+Shift+P` → `Debug: Start Debugging`
4. When execution hits the breakpoint, the debugger opens in the Run & Debug view

### Debug toolbar (top of editor during session)

| Button | Key | Action |
|--------|-----|--------|
| Continue | `F5` | Resume to next breakpoint |
| Step Over | `F10` | Run current line, skip into calls |
| Step Into | `F11` | Step inside a called method/function |
| Step Out | `Shift+F11` | Finish current routine, return to caller |
| Disconnect | `Shift+F5` | Detach debugger (program continues) |
| Stop | `Shift+F5` | Terminate the program |

### Run & Debug view panels

- **Variables** — locals, ME (class level), globals; hover a variable to see type info
- **Watch** — add expressions like `instance->table[5]-component` to evaluate live
- **Breakpoints** — list; click to navigate, toggle to enable/disable
- **Call Stack** — shows method/form/FM chain; click to navigate; system frames marked `[system]`

## Syntax Check

Syntax is checked **automatically** while you type — errors appear in the **Problems** panel with red underlines in the editor.

**Manual check:** `Ctrl+Shift+P` → `ABAP: Check Object`

## Run an ABAP class (console output)

1. In the class `PUBLIC SECTION`, add: `INTERFACES if_oo_adt_classrun.`
2. Implement the method: `METHOD if_oo_adt_classrun~main.`
3. Activate the class (`Ctrl+F3`)
4. **Run:** press `F5`, right-click → `Run ABAP Application (Console)`, or `Ctrl+Shift+P` → `ABAP: Run ABAP Application (Console)`
5. Output appears in the **Output** panel

> ⚠️ Parameters are not supported — using them causes a runtime error.

## Start debugging via unit tests

`Ctrl+Shift+P` → `ABAP: Run ABAP Unit Tests` — or press `Ctrl+Shift+F10`
The debugger attaches when execution hits a breakpoint during the test run.
