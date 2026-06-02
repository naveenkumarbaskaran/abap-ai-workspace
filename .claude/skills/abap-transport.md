---
name: abap-transport
description: Create, view, or assign ABAP development objects to transport requests using the ADT MCP server.
---

# ABAP: Transport Management

Manage transport requests for ABAP objects.

## Operations

### View existing transports for an object
1. `abap_transport-get` with the object name and type
2. Report: transport number, description, owner, status

### Create a new transport
1. `abap_transport-create` with: object name, object type, destination, and a description
2. Report the transport number back to the user

### Assign object to a transport (during creation)
- Pass the transport number when calling `abap_creation-create_object`

## When to skip transports

Objects in package `$TMP` (local objects) **never need a transport** — skip all transport steps when working in `$TMP`.

## Transport number format

SAP transport numbers follow the pattern: `<SID>K<6digits>` — e.g. `UIAK900123`, `ER1K000042`
