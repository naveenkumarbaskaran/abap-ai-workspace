---
title: "Evaluating ABAP Unit Test Results"
source: https://help.sap.com/docs/abap-cloud/abap-development-tools-for-visual-studio-code/evaluating-abap-unit-test-results?locale=en-US
last_updated: 2026-06-02
---

# Evaluating ABAP Unit Test Results

Evaluate the results of ABAP Unit tests to determine whether your test objects behave
as expected.
After you run unit tests, you can analyze the results in different views in VS Code. To learn
more about how to launch unit tests with different run modes, see Launching ABAP Unit
Tests.
Test Explorer

The Test Explorer refers to the tree view inside the
Testing view that lists discovered unit
tests and shows their current status. It displays successful tests, failed tests,
running tests, and tests that haven't yet been run. The ABAP Development Tools extension provides the following features in
the Test Explorer:
Test Explorer Features

Feature
Description



Run Tests
Select Run Tests to run all unit tests in the
list. To run a single test, select Run
Test next to the method.


Run Tests with Coverage
Select Run Tests with Coverage to run unit tests
and display code coverage measurements. The coverage results are
displayed in the Test Coverage
view. To run a single test with coverage, select Run Test with Coverage next to the
method.



Test Results

The Test Results view is used to inspect the outcome of
executed tests in detail. It supports the following tasks:
Reviewing test outcomes such as passed, failed, or skipped tests
Displaying a test run summary with test counts
Displaying the overall test run status


Test Coverage

The Test Coverage view displays how much of your code is
covered by tests and helps you identify untested areas. When you run unit tests with
coverage by using the ABAP: Run ABAP Unit Tests with
Coverage command or the shortcut 
Ctrl
 + Shift
 + F11
, the coverage results are shown in the Test
Coverage view.
The following types of coverage measurements are available. You can view the details
by hovering over each color indicator:
Statement coverage: The number and percentage of
statements that are covered.
Function/procedure coverage: The number and percentage of functions
that are covered.
Branch coverage: The number and percentage of branches
that are covered.



 Related InformationUnit Testing in ABAPWriting ABAP Unit Tests
