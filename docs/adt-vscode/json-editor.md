---
title: "Working with the JSON Editor"
source: https://help.sap.com/docs/abap-cloud/abap-development-tools-for-visual-studio-code/json-editor-88db8e1c2aec4255b359f49f24196637?locale=en-US
last_updated: 2026-06-02
---

# Working with the JSON Editor

Learn about the key functionalities of the JSON editor.
Context

The JSON editor in ABAP development tools for VS Code provides specialized tooling for working
with ABAP metadata represented in JSON format.

Key Features


Navigation

Navigate between related ABAP artifacts and within JSON structures. These are the available
navigation types:
Go to Definition (F12)
Jump from service binding references to service definition files
Navigate from entity names to CDS view definitions
Follow field references to data element or type definitions

Peek Definition (
Alt
 + F12
)

Inline preview of referenced artifacts without leaving current file

Symbol Navigation (
Ctrl
 + Shift
 + O
)
Quick jump to entities, properties, or annotations within large JSON
files
Hierarchical outline view of JSON structure


Code Completion

Get context-aware suggestions while editing ABAP JSON files by:
Typing " for property names
Pressing 
Ctrl
 + Space
 for manual invocation


Where-Used Functionality

Understand dependencies and usage relationships.
Find All References (
Shift
 + F12
)

Locate all usages of a service definition across binding files
Identify all references to CDS entities within service definitions
Track field usage across multiple metadata files

Dependency Visualization

Hierarchical view of dependent objects
Reverse lookup showing which bindings consume a service


Custom Actions
CodeLens
CodeLens overlays are displayed directly within the JSON editor, providing inline
contextual actions for service bindings without needing to leave the file. These
interactive annotations appear above relevant sections of the binding definition
and allow developers to act on the service binding status quickly and
efficiently.
To enable CodeLens, go to File  Preferences  Settings  Extensions  JavaScript and TypeScript Language Features and make sure the check box under Editor: Code
Lens is ticked.

When a service binding has not yet been published, a
Publish CodeLens action is displayed. Publishing
a service binding activates it on the ABAP system, making it accessible to
consumers such as SAP Fiori applications or external API clients.
When a service binding is already published, an
Unpublish CodeLens action is displayed instead.
This allows developers to deactivate the service binding directly from the
editor, for example when maintenance, refactoring, or decommissioning is
required.
