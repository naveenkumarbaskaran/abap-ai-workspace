---
title: "CDS Entity Extensions"
source: https://help.sap.com/docs/abap-cloud/abap-development-tools-for-visual-studio-code/cds-entity-extensions?locale=en-US
last_updated: 2026-06-02
---

# CDS Entity Extensions

A CDS entity extension is a transportable repository object that provides additional
components to the referenced object.
Creation

To create a CDS view entity extension, you need to create a data
definition at first. You then adapt and add the relevant source code, for example, by using
code completion (
Ctrl
 + Space
).



Activation

When activating a data definition containing the CDS entity extension, the extended fields are
added to the existing CDS entity. They are then considered for every occurrence
where the extended CDS view is used and represented in the SQL
create statement.

 Related Information ABAP CDS - CDS Entity Extension (ABAP Keyword
Documentation) ABAP CDS - CDS Entity Extension (ABAP Keyword
Documentation)Extend (ABAP Data Models guide)Creating a Data DefinitionCreating and Activating Data Definitions
