---
title: "Creating SAP Object Types"
source: https://help.sap.com/docs/abap-cloud/abap-development-tools-for-visual-studio-code/creating-sap-object-types?locale=en-US
last_updated: 2026-06-02
---

# Creating SAP Object Types

You can create a container to group development objects that belong together semantically.

Procedure
To launch the creation dialog, open the Command Palette with Ctrl + Shift + P and select ABAP: Create New ABAP Object. Alternatively, choose Ctrl + Shift + Alt + N and select the relevant entry from the list.
Select the SAP Object Type (Type: RONT/ROT) entry from the list.
Enter or select the Package Name, the Name, and the Description.
Note

Provide a name without special characters, such as underscores and so on. Instead, you might want to use camel case for name creation.

For SAP customers, the name of the development object must start with Z or be part of a customer-specific namespace.

To define the character of the SAP Object Type, select the Type Category from the list.

The following categories are provided:

Type

	

Description




Business Object

	

Business functionality that can be instantiated separately




Technical Object

	

An object that has been introduced for technical reasons, for example, an object that is used to establish a connection between two systems.




Analytical Object

	

An object that is used to model analytical functionality, such as KPIs.




Configuration Object

	

An object that is used for a configuration and that is created by the customer or created by SAP. This includes, for example, code lists.




Dependent Object

	

A dependent object is a reusable object that cannot stand alone. It can only be used in the context of a hosting object.




Hierarchy Object

	

An object that is used to model hierarchical functionality.

Assign a transport request.
[Optional:] To specify your own and unique code in the global technical name catalog, enter the Object Type Code.
Recommendation

SAP recommends using the following ranges:

Range

	

Description




1-89999

	

Reserved for SAP standard




90000-99999

	

SAP customer-specific

Results

In the selected package, the ABAP back-end system creates an inactive version of an SAP Object Type and stores it in the ABAP Repository. In the Project Explorer, the new SAP Object Type is added to the SAP Object Type Management node of the corresponding package node.

After developing and checking your new object, you can activate it.

You can now assign the SAP Object Type to the relevant development objects, such as event bindings or data definitions.
