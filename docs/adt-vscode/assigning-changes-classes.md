---
title: "Assigning Changes in ABAP Classes"
source: https://help.sap.com/docs/abap-cloud/abap-development-tools-for-visual-studio-code/assigning-changes-in-abap-class?locale=en-US
last_updated: 2026-06-02
---

# Assigning Changes in ABAP Classes

A class consists of several subobjects, such as a public section, method implementation,
or local class.
If you want to modify an ABAP class that is currently assigned to another user’s transport
request, you can choose to assign the changes to:
A transport request where parts of the current class are already assigned
A different transport request

The source code editor will then use and assign all of your changes to the selected
transport request.
Sub-object already locked
When a class sub-object is already locked in another user’s transport request, you must
assign your changes to that same transport request. You cannot choose a different
transport request. 
Sub-object not locked
When editing a sub-object that isn’t part of any transport request—even if other
sub-objects in the same class are already assigned to transport requests. You can either:
Assign your changes to an existing transport request, or
Create a new transport request for your change

Once the changes are saved, your changes are stored, assigned to the selected transport
request, and can now be transported to subsequent systems through your releasing the
transport request.
