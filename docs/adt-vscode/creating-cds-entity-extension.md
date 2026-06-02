---
title: "Creating a CDS Entity Extension"
source: https://help.sap.com/docs/abap-cloud/abap-development-tools-for-visual-studio-code/creating-cds-entity-extension-6700f82ae38c4be7a8291248f0a1485d?locale=en-US
last_updated: 2026-06-02
---

# Creating a CDS Entity Extension

A CDS entity extension (in short: entity extension) allows you to extend the
structure of an existing CDS entity that is provided, for example, in the SAP standard. This
extension will then not cause any modifications.
Prerequisites
You need the standard developer authorization profile to create ABAP development
objects.
At first, you need to create a data definition that you'll use as an
extension.
You can create an entity extension for specific CDS entities using the relevant ABAP
CDS language element. For more information, see:


 ABAP CDS - Feature Table (ABAP Keyword Documentation)
> CDS Entity Extensions


 ABAP CDS - Feature Table (ABAP Keyword Documentation)
> CDS Entity Extensions


Context
You want to add new elements to a CDS entity view of the SAP standard. Your changes
need to be stable when upgrading your ABAP system.


Procedure


Open the data definition that you want to us as an extension.

Edit the source code using code completion (
Ctrl
 + Space
) in accordance.

Results
In the selected package, the ABAP system creates an inactive version of a data definition and
stores it in the ABAP Repository.
In the Explorer, the new data
definition is added to the Core Data Services
folder. As a result of this creation procedure,
the source editor will be opened. Here, you can start to enter the name of the CDS
view entity to be extended and the element(s) that is to be added.
When activating the data definition that represents the extend view, the extended
element(s) is added to the existing CDS view entity.
In the extended data definition, the  indicator is then added to the
define statement. It indicates that an extension exists for
this development object. You can navigate to the extend view by hovering over the
indicator and following the link provided in the extension popup.

 Related InformationCDS Entity ExtensionsCreating Data DefinitionViewing Generated SQL StatementsUsing ABAP CDS Code Templates
