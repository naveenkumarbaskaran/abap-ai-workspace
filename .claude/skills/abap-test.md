---
name: abap-test
description: Run ABAP unit tests for a class or package using the ADT MCP server. Reports pass/fail per test method with error details.
---

# ABAP: Run Unit Tests

Run ABAP unit tests via the ADT MCP server.

## Steps

1. **Confirm scope** — a single class, a list of classes, or a package
2. **`abap_run_unit_tests`** — execute the tests
3. **Report results** — summarize:
   - Total: X passed, Y failed
   - For each failure: test method name + error message + line number
4. **Fix failures** — if the user asks, open the source, fix the code, re-activate with `abap_activate_objects`, then re-run tests

## When to run automatically

- After `abap-create` creates a new class
- After any source code edit that touches a class with a local test class (`LTCL_*`)
- When the user says "check", "test", or "verify"

## ABAP Unit test structure (for guidance when writing tests)

```abap
CLASS ltcl_test DEFINITION FINAL FOR TESTING
  DURATION SHORT RISK LEVEL HARMLESS.
  PRIVATE SECTION.
    METHODS test_my_method FOR TESTING.
ENDCLASS.

CLASS ltcl_test IMPLEMENTATION.
  METHOD test_my_method.
    " arrange
    " act
    " assert
    cl_abap_unit_assert=>assert_equals(
      act = <actual>
      exp = <expected> ).
  ENDMETHOD.
ENDCLASS.
```
