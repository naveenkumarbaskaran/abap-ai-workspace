---
title: "Model Context Protocol Tools"
source: https://help.sap.com/docs/abap-cloud/abap-development-tools-for-visual-studio-code/mcp-tools?locale=en-US
last_updated: 2026-06-02
---

# Model Context Protocol Tools

The open Model Context Protocol (MCP) is used to make ABAP development tools easily accessible to AI systems, streamlining development tasks, simplifying workflows, and improving overall efficiency in ABAP environments.

MCP tools are executable capabilities exposed through an MCP server that can be invoked by an LLM to perform specific development or runtime tasks. Each tool has a unique identifier and metadata describing its schema, enabling models to automatically discover and invoke the right tool based on context and user prompts.

The following sets of tools are available:

Toolset

	

Tools

	

Description

	

Joule License




ABAP Server Destinations tools

	

abap_lists_destinations

	

Gets list of available ABAP system destinations.

	

Not required




ABAP Object Creation tools

	

abap_creation-create_object

	

Creates an ABAP object.

	

Not required




abap_creation-get_object_type_details

	

Gets details required for creating an ABAP object such as name, description.




abap_creation-get_all_creatable_objects

	

Lists all the objects available for creation based on the system version




abap_creation-run_validation

	

Validates input details before creating object.




ABAP Object Activation tools

	

abap_activate_objects

	

Activates ABAP objects in the system.

	

Not required




ABAP Transport tools

	

abap_transport-create

	

Creates a new transport request relevant for given ABAP object.

	

Not required




abap_transport-get

	

Displays relevant transport requests for the given ABAP object.




Execute ABAP Unit Test tools

	

abap_run_unit_tests

	

Runs ABAP unit tests for a given set of ABAP tests.

	

Not required




ABAP Repository Objects Generation tools

	

abap_generators-list_generators

	

Lists the available ABAP repository object generators.

	

Not required




abap_generators-get_schema

	

Retrieves JSON schema for the generator.




abap_generators-generate_objects

	

Validates and generates ABAP repository objects such as tables, CDS views, behaviour definitions, service definition, service binding, based on the generator and prompt.




ABAP Business Service tools

	

abap_business_services-fetch_service_information

	

Fetches OData service information such as URL, entity sets, navigations.

	

Not required




abap_business_services-fetch_services

	

Retrieves OData services from service binding (metadata, links, versions).
