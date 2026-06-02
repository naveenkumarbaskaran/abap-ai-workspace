---
title: "Creating ABAP Classes"
source: https://help.sap.com/docs/abap-cloud/abap-development-tools-for-visual-studio-code/creating-abap-classes?locale=en-US
last_updated: 2026-06-02
---

# Creating ABAP Classes

Learn how to create ABAP classes.

Context

Follow the steps below to create ABAP classes.

Procedure
To launch the creation dialog, open the Command Palette with Ctrl + Shift + P , choose ABAP: Create New ABAP Object..., then choose ABAP Class. Alternatively, use the Ctrl + Shift + Alt + N and select the relevant entry from the list.
Specify Package Name, Name, and Description.
[Optional:] Specify a Superclass.
[Optional:] Specify an Interface.
Enter a transport request under Select Transport Request or create a new one.
Results
The back-end system creates an inactive version of a class pool in the selected package that is stored in the class library of the repository. In the Explorer view, the new class is added to the Source Library of the corresponding package node. In the source code editor, the initially generated source code is displayed and ready for editing.
Related Information
ABAP Classes and Interfaces
