---
title: "Creating Change Document Objects"
source: https://help.sap.com/docs/abap-cloud/abap-development-tools-for-visual-studio-code/creating-change-document-objects?locale=en-US
last_updated: 2026-06-02
---

# Creating Change Document Objects

Create change document objects using quick pick.

Procedure
To launch the creation dialog, open the Command Palette with Ctrl + Shift + P and select ABAP: Create New ABAP Object. Alternatively, choose Ctrl + Shift + Alt + N and select the relevant entry from the list.
Select the Change Document Object (Type: CHDO/CHD) entry from the list.
Enter or select the Package Name, the Name, and the Description for the change document object.
Assign a transport request.
Results

In the selected package, the ABAP back-end system creates an inactive version of a change document object and stores it in the ABAP Repository.

In the Explorer, the new change document object is added to the Change Document Management node of the corresponding package node. As a result of this creation procedure, the source-based editor will be opened.
