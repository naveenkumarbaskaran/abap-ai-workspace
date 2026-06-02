---
title: "Code Completion"
source: https://help.sap.com/docs/abap-cloud/abap-development-tools-for-visual-studio-code/code-completion-7f7fe0f03d484737bc0c929150e77819?locale=en-US
last_updated: 2026-06-02
---

# Code Completion

In the CDS source code editor, you can trigger
code completion manually at any position to get the list of the best matching keywords or
identifiers.
Context
You want to get a list with proposals of ABAP keywords or identifiers that can be added at
the current cursor position.
This functionality enables you to ...
add possible ABAP CDS keywords or identifiers (such as fields, data elements, CDS annotations, and parameters) that are
typed with a data element or a predefined ABAP type
select and add the component of the related identifier, such as one or more fields from a
data source (for example, a database table or a select from another CDS
view)
 to your CDS source code.

ProcedureCode completion depends on the position from where you trigger it within
the source code. You have the following possibilities to trigger code completion
manually:
To trigger code completion for an ABAP CDS keywords, the name of an identifier, for example, the name
of a data source and its parameters, proceed as follows:


At the position where you want to add an identifier, type the first
letter(s) of the name from the data source.
The list with the relevant proposals is
opened by default.


Choose 
Ctrl
 + Space
.

The list with the elements of the signature is automatically
displayed after you have typed a dot as the component selector. This
enables you to add a component of a table to your CDS source
code.



Select the relevant proposal.


To add an ABAP keyword or an identifier, choose Enter. To
add a parameter binding for a data source, choose Enter.






ResultsThe relevant elements are added to the CDS entity.
A note that informs about possible associations is added as comment. If a key field is added,
the ABAP keyword key will be added in front of key fields.
 Related InformationAdding ElementsInserting CDS Annotations
