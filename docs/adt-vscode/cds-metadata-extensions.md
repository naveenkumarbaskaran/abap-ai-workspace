---
title: "CDS Metadata Extensions"
source: https://help.sap.com/docs/abap-cloud/abap-development-tools-for-visual-studio-code/cds-metadata-extensions?locale=en-US
last_updated: 2026-06-02
---

# CDS Metadata Extensions

A CDS metadata extension (in short: metadata extension) is a transportable repository
object that is used to add customer-specific annotations to existing CDS
entities.
Creation

You create a metadata extension for a data definition to add functionality.

To create a metadata extension, use the ABAP:
Create New ABAP Object command in the Command Palette and select the Metadata
Extension (DDLX/EX) command from the list.


Activation

In general, in a metadata extension are only those annotations permitted that do
not affect the activation/generation of an ABAP Dictionary
object or secondary objects. A syntax error occurs if annotations that are
not permitted are specified.

 Related Information ABAP CDS - Metadata Extension (ABAP Keyword
Documentation) ABAP CDS - Metadata Extension (ABAP Keyword
Documentation)Metadata Extensions (ABAP Data Models guide)Extracting CDS Annotations to a CDS Metadata ExtensionCDS Metadata ExtensionsAnnotation Propagation View
