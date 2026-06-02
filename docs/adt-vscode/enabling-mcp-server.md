---
title: "Enabling ADT MCP Server"
source: https://help.sap.com/docs/abap-cloud/abap-development-tools-for-visual-studio-code/enabling-adt-mcp-server?locale=en-US
last_updated: 2026-06-02
---

# Enabling ADT MCP Server

You can enable the ADT MCP Server in ADT for VS Code to perform ABAP development tasks in an agentic workflow.

Prerequisites
You have logged on to ADT for VS Code and added ABAP project.
Context

MCP servers are specialized components that expose external tools to AI Agents, which leverage AI models to securely call external tools for ABAP development tasks.

Procedure
Open the command palette with Ctrl + Shift + P , and then run the command Preference: Open Settings (UI).
Search for ADT MCP Server.
Set a port in preference Adt > McpServer: Port to start the local  HTTP based MCP server.
You can choose between 1024 to 65535. By default the port is set to 2236.
Select the option to Enable ADT MCP server.
Results

After the ADT MCP server is enabled, it starts a local HTTP server at http://localhost:<port>/mcp. By default, the port is set to 2236 unless modified.
