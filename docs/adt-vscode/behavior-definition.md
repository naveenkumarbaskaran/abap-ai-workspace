---
title: "Creating a Behavior Definition"
source: https://help.sap.com/docs/abap-cloud/abap-development-tools-for-visual-studio-code/creating-behavior-definition-f4f9d67bcea94298a52567bc4b4bbfff?locale=en-US
last_updated: 2026-06-02
---

# Creating a Behavior Definition

Context
You want to define the behavior of business objects in the ABAP RESTful Application
Programming Model. To do this, you
create a behavior definition as the corresponding ABAP Repository object.

Procedure
To launch the creation dialog, open the Command
Palette with 
Ctrl
 + Shift
 + P
 and select ABAP: Create New ABAP
Object. Alternatively, choose 
Ctrl
 + Shift
 + Alt
 + N
.

Select the Behavior Definition (Type:
BDEF/BDO) entry from the list.

Select the Behavior Definition entry from the list.


Enter or select the Package Name from the
list.

Enter or select the Root Entity from the
proposal list.
In the subsequent input field, the name of the behavior definition is
displayed as information.

Check and confirm the displayed name of the Root
Entity.




Enter a Description.

From the list of the Implementation Type
field, select the Managed or Unmanaged implementation type.




Assign a transport request.

Results
The created behavior definition object represents the root node of a new business
object in RAP.
In the Explorer, the new behavior definition is
added to the Core Data Services node.
In the editor, a new behavior definition is opened with a basic structure. You can
now start editing or refining the behavior definition using predefined CDS BDL - entity behavior
definition (ABAP Keyword Documentation).
