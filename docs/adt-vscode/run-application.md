---
title: "Running an ABAP Application"
source: https://help.sap.com/docs/abap-cloud/abap-development-tools-for-visual-studio-code/running-abap-application?locale=en-US
last_updated: 2026-06-02
---

# Running an ABAP Application

Run an ABAP class or program directly using ABAP development tools for Visual Studio Code.

Context
You can run an ABAP application for different purposes, for example:

Executing business logic that may update the database

Displaying output in the Output view

Analyzing or presenting data stored in internal tables

Note

Parameters aren't supported. If they're used, a runtime error is displayed.

Procedure
Open the relevant ABAP class or program.
If you opened a class:
In the PUBLIC section, add the interface if_oo_adt_classrun.
Implement the if_oo_adt_classrun~main method in your class to define the logic.
Check and activate the class or program.
Remember

The application is run with the active version.

Assign a transport request, if prompted.
Run the application using one of the following options:

Select Run ABAP Application (Console) from the context menu.

Open the Command Palette with Ctrl + Shift + P and run the command ABAP: Run ABAP Application (Console).

Press F5.

Related Information
ABAP Classes and Interfaces
Creating ABAP Classes
