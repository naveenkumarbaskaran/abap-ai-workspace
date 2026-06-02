---
name: abap-rap-generate
description: Generate a full RAP (ABAP RESTful Application Programming Model) business object stack — database table, CDS views, behavior definition, service definition, and service binding — from a single prompt using the ADT generators.
---

# ABAP: Generate RAP Stack

Generate a complete RAP business object using the ADT generator tools.

## What gets generated

A full RAP stack includes:
- **Database table** (TABL) — persistence layer
- **CDS data definition** (DDLS) — root view entity + projection view
- **Behavior definition** (BDEF) — CRUD operations, draft handling
- **Behavior implementation class** (CLAS) — handler + saver classes
- **Service definition** (SRVD) — exposes the entity
- **Service binding** (SRVB) — OData v2/v4 endpoint

## Steps

1. **`abap_lists_destinations`** — pick target system
2. **`abap_generators-list_generators`** — list available generators (look for RAP-related ones)
3. **`abap_generators-get_schema`** — get the input schema for the chosen generator
4. **Confirm with user**: entity name, package, transport, key fields, and any domain-specific fields
5. **`abap_generators-generate_objects`** — pass the validated input; generator creates all artefacts
6. **`abap_activate_objects`** — activate everything generated
7. **`abap_business_services-fetch_services`** — confirm the OData service is available
8. **Report** — give the user the service URL and list all generated objects

## Naming convention (cloud-compliant)

| Artefact | Pattern |
|----------|---------|
| Table | `Z<ENTITY>` |
| Root view | `ZI_<Entity>` |
| Projection view | `ZC_<Entity>` |
| Behavior definition | `ZI_<Entity>` / `ZC_<Entity>` |
| Service definition | `ZUI_<Entity>_O4` |
| Service binding | `ZUI_<Entity>_O4` |

## Rules

- Always use managed RAP pattern (not unmanaged) unless user explicitly asks
- Use draft-enabled behavior unless user says otherwise
- All objects go in the same package and transport
