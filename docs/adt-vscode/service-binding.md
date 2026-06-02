---
title: "Creating Service Binding"
source: https://help.sap.com/docs/abap-cloud/abap-development-tools-for-visual-studio-code/creating-service-binding?locale=en-US
last_updated: 2026-06-02
---

# Creating Service Binding

Using service binding you can enable a service definition to create a business service
with a protocol of your choice.
PrerequisitesYou need the standard developer authorization profile to create ABAP development
objects.
Context
You can use an existing service definition to create a business service with an OData V2 and
OData V4 protocol.

Procedure
To launch the creation dialog, open the Command Palette
with 
Ctrl
 + Shift
 + P
 and select ABAP: Create New ABAP
Object. Alternatively, use the 
Ctrl
 + Shift
 + Alt
 + N
 and select the relevant entry from the list.

Select the Service Binding (Type:
SRVB/SVB) entry from the list.

Enter or select the Package Name, the
Name, and the Description for the service binding to be
created.

Select the Binding Type. The binding types are OData V2
- UI and OData V4 - UI.

Enter the Service Definition. You can also search for
the service definition that you want to use as a base for your service
binding.

Assign a transport request.

Results
In the selected package, the ABAP back-end system creates an inactive version of a service
binding and stores it in the ABAP Repository. In the Explorer, the new service
binding is added to the Business Services folder of the corresponding package node.
As a result of this creation procedure, the source-based editor will be opened.

 Related InformationWorking with the JSON Editor
