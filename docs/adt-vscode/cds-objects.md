---
title: "Accessing CDS Objects"
source: https://help.sap.com/docs/abap-cloud/abap-development-tools-for-visual-studio-code/accessing-cds-objects?locale=en-US
last_updated: 2026-06-02
---

# Accessing CDS Objects

Use Case
Description



Checking if the relevant data can be selected without an underlying access control 
You can check if your data model can access the relevant data on the data source without
using an access control. In this case, you can use the WITH
PRIVILEGED ACCESS addition, for example in a
FROM clause of an ABAP SQL query. This enables
you to check which data a CDS entity results with or without CDS
access control.For more information, see: 
Access Controls
 SELECT, FROM data_source (ABAP
Keyword Documentation)
 SELECT, FROM data_source (ABAP
Keyword Documentation)



