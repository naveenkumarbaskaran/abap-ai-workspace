---
title: "Launching ABAP Unit Tests"
source: https://help.sap.com/docs/abap-cloud/abap-development-tools-for-visual-studio-code/launching-abap-unit-tests?locale=en-US
last_updated: 2026-06-02
---

# Launching ABAP Unit Tests

Learn how to launch ABAP Unit tests using different commands and shortcuts in the ABAP
development environment.

To launch ABAP unit tests, you need the
following authorizations:
S_DEVELOP with ACTVT = 'EU' (Automated Tests) or ACTVT = '16'
(Execute).
If a language version check is active in your system, you also need:
S_ABPLNGVS with ABP_LNG_VS = '5' and ACTVT =
'EU' or ACTVT = '16'.


Launching Unit Tests in Different Run Modes

Several modes are available for running ABAP Unit tests. The run mode that you choose
determines how detailed the test results are. The following table shows the
available commands and shortcuts for each run mode:
Launching Unit Tests in Different Run Modes

Command in Command Palette
Shortcut
Description



ABAP: Preview ABAP Unit Tests

Ctrl
 + Shift
 + F9

This mode lets you inspect which ABAP Unit test classes and test
methods would be run without actually running them. It only
discovers and lists the tests. Use this mode to verify the test
scope and ensure the correct tests are selected before
execution.


ABAP: Run ABAP Unit Tests

Ctrl
 + Shift
 + F10

This mode runs the selected ABAP Unit tests using the default settings. It runs all
applicable test classes and methods and reports pass and fail
results, including errors and assertions. This mode is intended
for quick validation and doesn't collect coverage
measurements.


ABAP: Run ABAP Unit Tests with Coverage

Ctrl
 + Shift
 + F11

This mode runs the ABAP Unit tests and collects code coverage measurements at the same
time. It shows which parts of the code are exercised by tests
and which parts aren't. Because additional measurement data is
recorded, execution may take longer than a standard test
run.


ABAP: Run ABAP Unit Tests with...

Ctrl
 + Shift
 + F12

This mode allows you to configure how ABAP Unit tests are run. You can control the test
scope, collect coverage measurements, and apply settings such as
risk level or duration. It's intended for advanced test
scenarios.



 Related InformationEvaluating ABAP Unit Test Results
