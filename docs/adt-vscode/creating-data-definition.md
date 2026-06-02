---
title: "Creating Data Definition"
source: https://help.sap.com/docs/abap-cloud/abap-development-tools-for-visual-studio-code/creating-data-definition-ac616cf61cfc49e3b2471e61235b8a8c?locale=en-US
last_updated: 2026-06-02
---

# Creating Data Definition

A CDS data definition (in short data definition) is a repository object that allows you to define a CDS entity. It
also accesses the standard functionality (for example, transport, syntax check,
activation).
Prerequisites
You need the standard developer authorization profile to create development
objects.

Context
You want to create a CDS entity view that can be used, for example, as a data source
in other CDS entities.


Procedure
To launch the creation dialog, open the Command
Palette with 
Ctrl
 + Shift
 + P
 and select ABAP: Create New ABAP
Object. Alternatively,choose 
Ctrl
 + Shift
 + Alt
 + N
 and select the relevant entry from the list.

Select the Data Definition (Type:
DDLS/DF) entry from the list.

Enter the Package Name, the Name, and the Description for the data definition to be created.
Optional: 
If you want to create a data definition using the elements from
another CDS entity, enter the relevant name as the Referenced Object.




Assign a transport request.

Results
In the selected package, the ABAP back-end system creates an inactive version of a
data definition and stores it in the ABAP Repository.
In the Explorer, the new data definition is added to the
Core Data Services folder of the
corresponding package node. As a result of this creation procedure, the source
editor will be opened. Here, you can start defining a CDS entity.
In addition, you can start modifying the inserted code template and add annotations
to the relevant elements and/or parameters.
The CDS entity is defined at activation of the data definition.

 Related Information ABAP CDS - Feature Tables (ABAP Keyword Documentation) ABAP CDS - Feature Tables (ABAP Keyword Documentation) ABAP CDS - Data Definitions (ABAP Keyword Documentation) ABAP CDS - Data Definitions (ABAP Keyword Documentation)Editing ABAP CDS Source CodeActivating Data Definitions
