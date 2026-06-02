---
title: "Testing and Quality Checking"
source: https://help.sap.com/docs/abap-cloud/abap-development-tools-for-visual-studio-code/testing-and-quality-checking?locale=en-US
last_updated: 2026-06-02
---

# Testing and Quality Checking

The ABAP Unit Framework and ABAP Test Cockpit (ATC) are the central tools for
ensuring the quality of an ABAP Repository object.
Running and Previewing an ABAP Unit Test


Realization in ABAP Development Tools for
Eclipse
Realization in ABAP Development Tools for Visual
Studio Code



To run an ABAP Unit Test, choose the relevant Run As  ABAP Unit Test
											(Ctrl+Shift+F10) or Run As  ABAP Unit Test With...
											(Ctrl+Shift+F12) entry from the context menu in the Project Explorer or ABAP source
code editor of the development object to be tested.The test result is displayed in the ABAP Unit view.
To run an ABAP Unit Test, open the development object to be
tested.In the Command Palette, you can perform one of the
following commands:
ABAP: Preview ABAP Unit Tests (Ctrl+Shift+F9)
ABAP: Run ABAP Unit Tests (Ctrl+Shift+F10)
ABAP: Run ABAP Unit Tests with Coverage
(Ctrl+Shift+F11)
ABAP: Run ABAP Unit Tests with... (Ctrl+Shift+F12)
The test result is displayed in the Test Results panel.



Running an ABAP Class in the Console View


Realization in ABAP Development Tools for
Eclipse
Realization in ABAP Development Tools for Visual
Studio Code



Open the relevant ABAP class that defines the
if_oo_adt_classrun
ABAP interface in the PUBLIC section. In the source code editor,
choose Run As  ABAP Application (Console)  from the context menu.The content will be displayed in the Console view.
To run an ABAP Unit test, open the development object to be
tested.In the Command Palette, use the ABAP: Run ABAP Application
(Console) command or choose F5.The content will then be displayed in the Output panel.


