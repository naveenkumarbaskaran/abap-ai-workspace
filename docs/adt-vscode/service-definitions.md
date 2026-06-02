---
title: "Creating Service Definition"
source: https://help.sap.com/docs/abap-cloud/abap-development-tools-for-visual-studio-code/creating-service-definition-749a325ae4c14d86980bc9bee84780d9?locale=en-US
last_updated: 2026-06-02
---

# Creating Service Definition

A service definition provides the CDS entities that are part of the ABAP data model
to be exposed as a business service.
Prerequisites
You need the standard developer authorization profile to create ABAP development
objects.


Context
You want to define the data to be exposed as a business service by one or more
service bindings.


Procedure
To launch the creation dialog, open the command palette with 
Ctrl
 + Shift
 + P
 and select ABAP: Create New ABAP
Object. Alternatively, choose 
Ctrl
 + Shift
 + Alt
 + N
 and select the relevant entry from the list.

Select the Service Definition (Type:
SRVD/SRV) entry from the list.

Enter or select the Package Name, the
Name, and the Description.

Choose Definition.

Enter or choose the relevant entity name as Referenced Object.

Assign a transport request.

Results
In the selected package, the ABAP back-end system creates an inactive version of a
service definition and stores it in the ABAP Repository.
In the Explorer, the new service definition is
added to the Business Services folder of the
corresponding package node. As a result of this creation procedure, the source-based
editor will be opened. Here, you enter the CDS entities to be exposed as a business
service.

 Related InformationCreating a Service Definition ExtensionService Definition CDS SDL - DEFINE SERVICE (ABAP Keyword Documentation) CDS SDL - DEFINE SERVICE (ABAP Keyword Documentation)
