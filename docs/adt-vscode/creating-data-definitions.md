---
title: "Creating and Activating Data Definitions"
source: https://help.sap.com/docs/abap-cloud/abap-development-tools-for-visual-studio-code/creating-and-activating-data-models?locale=en-US
last_updated: 2026-06-02
---

# Creating and Activating Data Definitions

A data definition is a transportable development object in the ABAP Repository. It
defines or extends a CDS entity using language elements in ABAP Core Data Services (CDS) and
enables you to develop an ABAP data model.
Creation and Activation

You create and activate a CDS data definition to make CDS entities available for
developing an ABAP data model.
After creation, the back-end creates an inactive version of it in the ABAP Repository and opens
it in the CDS source code editor. From here, you can start developing the CDS
entity.
When activating the inactive version of a data definition, the CDS entity is created in
the ABAP Dictionary and can then be used in business applications.

List of the Supported CDS Entities
You can create the following CDS entities using a data definition:


CDS Entity
 
Back-End Dependencies
Use Case
Further Information



CDS view entity




You want to create a data model which retrieves the relevant
data, for example, from a database table on the recommended
way.



 CDS DDL - DEFINE VIEW ENTITY
(ABAP Keyword Documentation) 

 CDS DDL - DEFINE VIEW ENTITY
(ABAP Keyword Documentation) 
CDS View Entities (ABAP Data Models guide)




CDS view entity extension




You want to extend an existing CDS view entity.



 CDS DDL - DEFINE VIEW ENTITY
(ABAP Keyword Documentation)

 CDS DDL - DEFINE VIEW ENTITY
(ABAP Keyword Documentation)




CDS DDIC-based view extension




You want to extend an existing CDS DDIC-based view.



 CDS DDL - EXTEND VIEW
ddic_based_view (ABAP Keyword Documentation)


 CDS DDL - EXTEND VIEW
ddic_based_view (ABAP Keyword Documentation)





Abstract CDS entity




You want to model an abstract CDS entity like a structure
without persisting a new ABAP Dictionary object. To do this,
you use abstract entities, for example, during development
of an action for an OData service. In this case, abstract
entities are used to define the type information for the
action parameters.



 ABAP CDS - DEFINE ABSTRACT ENTITY
(ABAP Keyword Documentation)

 ABAP CDS - DEFINE ABSTRACT ENTITY
(ABAP Keyword Documentation)
CDS Abstract Entities (ABAP Data Models guide)




CDS external entities




You want to access data from a remote data source within the
AS ABAP and make it available in your ABAP data
model.


External Entities (ABAP Data Models guide)

External Entities (ABAP Data Models guide)
 ABAP CDS - External Entities
(ABAP Keyword Documentation)
 ABAP CDS - External Entities
(ABAP Keyword Documentation)



CDS custom entity




You want to access data that exceeds the CDS feature set.



 CDS DDL - DEFINE CUSTOM ENTITY
(ABAP Keyword Documentation) 

 CDS DDL - DEFINE CUSTOM ENTITY
(ABAP Keyword Documentation)
Custom Entities (ABAP Data Models guide)




CDS hierarchy




You want to structure application data to make it easier to
consume. This enables you, for example, to select data that
is relevant for a specific time frame or to handle grouped
objects simultaneously.



 ABAP CDS - Hierarchies (ABAP
Keyword Documentation)

 ABAP CDS - Hierarchies (ABAP
Keyword Documentation) 
Hierarchies (ABAP Data Models guide)




CDS projection view




In a transactional scenario, you want to create and define,
for example, a consumption-specific OData service that only
exposes relevant data of an underlying data model using a
service definition and service binding.


Projection Views

 CDS DDL - DEFINE VIEW ENTITY AS
PROJECTION (ABAP Keyword Documentation)

 CDS DDL - DEFINE VIEW ENTITY AS
PROJECTION (ABAP Keyword Documentation)
Projection Views (ABAP Data Models guide)




CDS table entity




You want to describe a physical database table on the SAP HANA database connected to the current
AS ABAP.



 ABAP CDS - Table Entities (ABAP
Keyword Documentation)

 ABAP CDS - Table Entities (ABAP
Keyword Documentation)
Table Entities (ABAP Data Models guide)




CDS table function




You want to use a CDS table function as the data source in
ABAP SQL read statements.



 CDS DDL - DEFINE TABLE FUNCTION
(ABAP Keyword Documentation)

 CDS DDL - DEFINE TABLE FUNCTION
(ABAP Keyword Documentation)




CDS DDIC-based view (obsolete)




You want to create a data model that retrieves the relevant data, for example, from a
database table.



 CDS DDL - DEFINE VIEW ddic_based
(ABAP Keyword Documentation)

 CDS DDL - DEFINE VIEW ddic_based
(ABAP Keyword Documentation)
CDS DDIC-Based Views (Obsolete)





 Related InformationCreating Data DefinitionUsing ABAP CDS Code TemplatesCreating ABAP CDS Objects With Reference to Other ObjectsActivating Data Definitions ABAP CDS - Data Definitions (ABAP Keyword Documentation) ABAP CDS - Data Definitions (ABAP Keyword Documentation)
