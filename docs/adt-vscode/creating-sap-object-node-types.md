---
title: "Creating SAP Object Node Types"
source: https://help.sap.com/docs/abap-cloud/abap-development-tools-for-visual-studio-code/creating-sap-object-node-types?locale=en-US
last_updated: 2026-06-02
---

# Creating SAP Object Node Types

You want to create and define a node that you want to assign to an SAP Object
Type.
PrerequisitesYou have created and activated the underlying SAP Object Type.
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
 and select the relevant entry from the list.

Select the SAP Object Node Type (Type: NONT/NOT) entry
from the list.

Enter or select the Package Name, the
Name, and the Description.

Select the SAP Object Type.




To define the SAP Object Node Type on top level within the SAP Object Type,
select the Root Node.




Assign a transport request.

Results
In the selected package, the ABAP back-end system creates an inactive version of an SAP Object
Node Type and stores it in the ABAP Repository. In the Project
Explorer, the new SAP Object Type is added to the SAP
Object Type Management node of the corresponding package node. 
After developing and checking your new object, you can activate it.
