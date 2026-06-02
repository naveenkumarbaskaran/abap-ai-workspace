---
title: "Creating CDS Types"
source: https://help.sap.com/docs/abap-cloud/abap-development-tools-for-visual-studio-code/creating-cds-types-9f0511f7758d48b09f0288901a0c3dc3?locale=en-US
last_updated: 2026-06-02
---

# Creating CDS Types

A CDS type can be used for typing, casting, and as operands of expressions in CDS
entities and in other CDS objects and in ABAP after the addition
TYPES.
Prerequisites


Context
You want to create a new custom-defined type that can be used within your data model,
for example for elements.

Procedure
To launch the creation dialog, use the ABAP: Create
New ABAP Object command in the Command
Palette. Alternatively, choose 
Ctrl
 + Shift
 + Alt
 + N
.

Select the CDS Type (Type: DRTY/STY)
entry from the list.

Enter the Package Name, the Name, and the Description for the CDS type to be created.

Assign a transport request.

Choose Enter to confirm the creation.

Results
In the selected package, the ABAP back-end system creates an inactive version of the
type and stores it in the ABAP Repository.
In the Explorer, the new CDS type is added to
the Core Data Services folder of the
corresponding package node.
As a result of this creation procedure, the source editor is opened. Here, you can
start defining a type by using the define type statement and assign
a name, data types, and annotations.
The type is defined at activation. You can then use the CDS type in CDS view
entities.

 Related InformationUser-Defined Types (ABAP Data Models guide) ABAP CDS - Simple Type (ABAP Keyword Documentation) ABAP CDS - Simple Type (ABAP Keyword Documentation) ABAP CDS - Enumerated Types (ABAP Keyword Documentation) ABAP CDS - Enumerated Types (ABAP Keyword Documentation)
