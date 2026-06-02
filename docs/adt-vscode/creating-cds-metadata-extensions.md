---
title: "Creating CDS Metadata Extensions"
source: https://help.sap.com/docs/abap-cloud/abap-development-tools-for-visual-studio-code/creating-cds-metadata-extensions-e85b7c9a796f4f3bb9fa7316df1de1a3?locale=en-US
last_updated: 2026-06-02
---

# Creating CDS Metadata Extensions

A CDS metadata extension (in short: metadata extension) allows you to extend a CDS
entity with CDS annotations or to modify existing CDS annotations. 
Prerequisites
You need the standard developer authorization profile to create ABAP development
objects.


Context
You want to add further metadata using CDS annotations to a CDS entity.

Procedure
To launch the creation dialog, use the ABAP: Create
New ABAP Object command in the Command
Palette. Alternatively, choose 
Ctrl
 + Shift
 + Alt
 + N
.

Select the Metadata Extension (Type:
DDLX/EX) entry from the list.

Enter the Package Name, the Name the Description for the metadata extension to be created.
Optional: 
If you want to create a metadata extension for a specific CDS entity, enter the
name of the relevant data definition as the Extended
Entity.




Assign a transport request.

Results
The source editor will be opened.
In the selected package, the ABAP back-end system creates an inactive version of a
metadata extension and stores it in the ABAP Repository.
In the Explorer, the new metadata extension is
added to the Core Data Services folder.

 Related InformationActivating Data Definitions CDS DDL - ANNOTATE ENTITY, VIEW (ABAP Keyword
Documentation) CDS DDL - ANNOTATE ENTITY, VIEW (ABAP Keyword
Documentation)
