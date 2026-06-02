---
name: abap-atc
description: Run ABAP Test Cockpit (ATC) quality checks on development objects. ATC catches syntax errors, performance issues, security gaps, standards violations, and ABAP Unit test failures — all from VS Code.
---

# ABAP: ATC Quality Checks

The ABAP Test Cockpit (ATC) is the central quality tool. It runs a wide range of checks:
- Syntax errors
- Performance anti-patterns
- Security vulnerabilities
- Usability and accessibility issues
- ABAP Unit test execution
- Standards/naming convention violations

## Run ATC on an object

1. Open the development object in the editor
2. `Ctrl+Shift+P` → `ABAP: Run ABAP Test Cockpit`
3. Results appear in the **Problems** panel

## ATC vs ABAP Unit Tests

| | ATC | ABAP Unit |
|---|---|---|
| **What it checks** | Static + dynamic quality | Functional correctness at runtime |
| **How to run** | `ABAP: Run ABAP Test Cockpit` | `ABAP: Run ABAP Unit Tests` (`Ctrl+Shift+F10`) |
| **Results in** | Problems panel | Problems panel + Test Results |
| **Requires license** | No | No |

> ATC can also **execute ABAP Unit tests** as part of its check suite — so running ATC gives you both static analysis and test results in one pass.

## Fix workflow

1. Run ATC → see findings in Problems panel
2. Click a finding to navigate to the exact line
3. Fix the issue in the editor
4. Re-run ATC to confirm it's clean
5. Activate the object (`Ctrl+F3`)
