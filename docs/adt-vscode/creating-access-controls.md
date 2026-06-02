---
title: "Creating Access Controls"
source: https://help.sap.com/docs/abap-cloud/abap-development-tools-for-visual-studio-code/creating-access-controls-0855a74aea7646b0a35eefcfd2180148?locale=en-US
last_updated: 2026-06-02
---

# Creating Access Controls

An access control enables you to limit the results returned by a CDS entity to those
results you authorize a user to see.
Prerequisites

You have the standard developer authorization profile to create development
objects.
You have created the CDS entities for which you want to restrict access.


Context
An access control is a development object, which supports standard functions such as
transport, syntax check, and activation.

Procedure
To launch the creation dialog, use the ABAP: Create
New ABAP Object command in the Command
Palette. Alternatively, choose 
Ctrl
 + Shift
 + Alt
 + N
.

Select the Access Control (Type DCLS/DL)
command from the list.

Enter the Package Name, the Name the Description for the access control to be created.
Optional: 
If you want to create an access control for a specific CDS entity, enter the
relevant entity name as the Protected
Entity.





Assign a transport request.

Results
In the selected package, inactive version of an access control is created and stored
in the ABAP Repository. 
In the Explorer, the new access control is
added to the Access Controls node of the
corresponding destination.
As a result of this procedure, the access control is opened. Here, define the role
for the CDS entity.

 Related InformationAccess ControlsEditing ABAP CDS Source Code
