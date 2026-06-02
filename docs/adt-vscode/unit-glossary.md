---
title: "ABAP Unit Glossary"
source: https://help.sap.com/docs/abap-cloud/abap-development-tools-for-visual-studio-code/abap-unit-glossary?locale=en-US
last_updated: 2026-06-02
---

# ABAP Unit Glossary

Use these definitions to understand the terminology used in ABAP Unit
testing.


Term
Description



depended-on component
Component on which the objects under test depend. Examples of
depended-on components are classes, function calls, and database
tables. 


object under test
Tested development objects such as ABAP programs, classes, or CDS
objects. 


own test
 Tests located in the same repository object as the object under
test. 


production code
We use the term production code for any code that isn't test
code.


repository object
Development objects such as ABAP programs, classes, or CDS
objects.


test
We use the term test for a test method.


test class
Local class that contains test methods for testing production code.



test code
Code written to test an object under test. 


test container
Generic term for repository objects that can contain tests. 


test double
Object created to replace a depended-on component. It provides the
same API as the real object so that the object under test can use
it. 


test method
A method of a test class.


test relation
A link between a foreign test and an object under test. It's
especially important for objects that can't have their own tests,
such as CDS views. 


test run
A test or test suite can be executed many times, each time
potentially yielding a different test result. We use the term test
run for any execution of tests, whether they're still running or
already finished.


