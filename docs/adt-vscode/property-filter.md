---
title: "Property Filter"
source: https://help.sap.com/docs/abap-cloud/abap-development-tools-for-visual-studio-code/property-filter?locale=en-US
last_updated: 2026-06-02
---

# Property Filter

Filter criteria allow you to restrict search results to a certain object type, package, owner, and so on.

Property Filter Criteria:

You can use the properties from the following table to filter your results:

Name

	

Description




type (Object Type)

	

The four character object type of the development object. Alias types are used for nonunique transport types.




group (Object Type Group)

	

The group to which the type of the object belongs. Examples are dictionary or source code library.




package (Package)

	

The package to which the development object is assigned.




appl (Application Component)

	

Application component of the development object.




owner (Owner)

	

Usually the user who created the development object. Often it's also considered as the responsible user.




api (API State)

	

The release state of the development object.




language (Original Language)

	

The original language of the development object.




system (Source System)

	

The original system of a development object.




version (Active or Inactive)

	

The version (active or inactive) of the development object.




docu (Documentation Status)

	

The kind of longtext documentation of the development object, which can be KTD, SAPSCRIPT, or NONE.




fav (Favorites)

	

This is either the name of a user (personal favorites) or the name of a shared favorite list.




created (Creation Year)

	

The year when the development object was created.




month (Creation Month)

	

The month when the development object was created.




date (Creation Date)

	

The day when the development object was created.




comp (Software Component)

	

The software component of the development object.




abaplv (ABAP Language Version)

	
The ABAP language version of the development object. See ABAP Language Versions for Cloud Development or ABAP Language Versions for AS ABAP.
Note

 This feature is supported as of SAP S/4HANA 2025 FPS00.

Examples
Example

You can limit your filter, for example, as follows:

#type:clas for ABAP classes

#package:basis for ABAP objects that are saved in the ABAP package "basis"

Example

You can also combine filters, such as:

#type:clas,tabl #package:basis for ABAP classes and database tables that are saved in the ABAP package "basis"

#type:intf #version:active #language:en for ABAP interfaces with an active version that have English as their original language

Example

In many instances, a property filter is used alongside an object name pattern. A typical example could look like this:

*test?< for the object name pattern

#type:clas for the property filter to filter your results specifically for classes

Related Information
Opening ABAP Development Objects
