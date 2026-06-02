---
title: "Creating CDS Aspects"
source: https://help.sap.com/docs/abap-cloud/abap-development-tools-for-visual-studio-code/creating-cds-aspects-700c439d21df4b79b8c6eb0264ed5b1c?locale=en-US
last_updated: 2026-06-02
---

# Creating CDS Aspects

A CDS aspect is used, for example, to store field definitions and calculations, such
as CDS expressions to reuse them in other data definitions.
Prerequisites
You must activate a CDS aspect, before you can use it in a data definition.


Context
You want to create a CDS aspect to provide a group of fields and calculations in a
data definition.

Procedure
To launch the creation dialog, use the ABAP: Create
New ABAP Object command in the Command
Palette. Alternatively, choose 
Ctrl
 + Shift
 + Alt
 + N
.

Select the CDS Aspect (Type: DRAS/RAS)
entry from the list.

Enter the Package Name, the Name, and the Description for the CDS aspect to be created.

Assign a transport request.

Choose Enter to confirm the creation.

Results
In the selected package, the ABAP back-end system creates an inactive version of the
aspect and stores it in the ABAP Repository.
In the Explorer, the new aspect is added to the
Core Data Services folder of the
corresponding package node.
As a result of this creation procedure, the CDS source editor is opened. Here, you
can start defining an aspect by using the define aspect statement
and assign a name.

 Related InformationAspects (ABAP Data Models guide) ABAP CDS - Aspects (ABAP Keyword Documentation) ABAP CDS - Aspects (ABAP Keyword Documentation)
