---
title: "Scenario: Agentic Loop"
source: https://help.sap.com/docs/abap-cloud/abap-development-tools-for-visual-studio-code/scenario-agentic-loop?locale=en-US
last_updated: 2026-06-02
---

# Scenario: Agentic Loop

An agentic loop represents the autonomous sequence of reasoning and tool execution an AI agent performs to complete a user request.

The agent independently discovers requirements, validates decisions, and executes coordinated actions to achieve the desired outcome, without requiring step-by-step user guidance.

Scenario
This example demonstrates the complete agentic loop for creating an ABAP class that outputs text to the console using the classrun API. The loop showcases systematic tool usage, validation, and implementation phases.
Note

This example demonstrates the utilization of tools from the ADT MCP Server. The actual number of tool calls and their sequence may vary depending on the MCP host implementation.

User prompt: Create an ABAP class that demonstrates how to output text to the console using the classrun API.

Agentic Loop Iterations

Agent Action

	

Tool Used

	

Result




Identifies available ABAP systems

	

abap_lists_destinations

	

Agent picks the target system, example MY_S4_SYSTEM




Identifies the correct object type for an ABAP class

	

abap_creation-get_all_creatable_objects

	

Identifies ABAP Class object type, example CLAS/OC




Identifies the fields required to create that object type

	

abap_creation-get_object_type_details

	

Identifies required fields (packageName, name, description)




Validates the chosen name and package before creation

	

abap_creation-run_validation

	

Confirmation that the inputs are valid




Creates transport request

	

abap_transport-create

	

Transport created successfully, example UIAK900123




Creates the ABAP class skeleton on the system

	

abap_creation-create_object

	

Class is created; source file opens in the editor




Adds implementation to output text to the console using the classrun API

	

Built-in edit tool from MCP host (Not from ADT MCP Server)

	

Source code implementing IF_OO_ADT_CLASSRUN interface is added by Agent to opened source file in editor




Activates the created object

	

abap_activate_objects

	

Class activated in system




Validates implementation through testing

	

abap_run_unit_tests

	

All tests passed

Expected Outcome
The agent delivers:

A ready-to-run ABAP class ZCL_HELLO_CONSOLE implementing IF_OO_ADT_CLASSRUN.

The class is activated and open in the editor.

The user is informed that they can press F5 to run the class and see console output.
