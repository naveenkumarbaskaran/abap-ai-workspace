---
title: "ABAP Development Objects"
source: https://help.sap.com/docs/abap-cloud/abap-development-tools-for-visual-studio-code/abap-development-objects?locale=en-US
last_updated: 2026-06-02
---

# ABAP Development Objects

Development objects are the individual components used to build an ABAP application.

The Application Server ABAP stores the development objects in a repository, which is why they're also known as repository objects. When a user activates development objects, the system generates corresponding runtime versions. These runtime objects are also stored in the repository.

Common examples of development objects include:

ABAP development object types, such as classes or interfaces

Core Data Services (CDS) objects, such as CDS views and behavior definitions

ABAP packages group development objects into semantically related units. In addition to organizing the development objects, packages manage the assignment of development objects to the software logistics processes.

Within the ABAP repository, some objects have subobjects. For example, a class is a main object that contains methods as subobjects.

A main development object is uniquely identified by its name and object type. To identify a subobject, the system requires the name and object type of the main object, in addition to the subobject’s own name.

Related Information
Activation
Activating ABAP Development Objects
