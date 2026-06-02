---
title: "Access Controls"
source: https://help.sap.com/docs/abap-cloud/abap-development-tools-for-visual-studio-code/access-controls?locale=en-US
last_updated: 2026-06-02
---

# Access Controls

ABAP Core Data Services (CDS) uses its own
authorization approach, which is based on CDS access controls and the Data Control Language
(DCL). You can specify declarative, model-based authorization rules directly next to your
CDS data model.
The CDS authorization framework supports many authorization scenarios. In addition to its
own constructs, it can reuse existing authorization information from the classical ABAP
authorization framework. You can reference classical roles and authorizations within CDS
access controls when needed. However, these are not the only mechanisms available.
The CDS authorization concept works together with the classical authorization method of
Application Server
ABAP (AS ABAP).
You can use both methods independently or together, based on your application's
requirements.
Sample




 Related InformationAdding Access Controls to CDS EntitiesAccess Control (ABAP Data Models guide)ABAP CDS - Access Control
