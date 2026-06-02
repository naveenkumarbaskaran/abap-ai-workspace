---
title: "Configuring ADT MCP Server"
source: https://help.sap.com/docs/abap-cloud/abap-development-tools-for-visual-studio-code/configuring-adt-mcp-server-ed94320814734d97801f51a5b6deb802?locale=en-US
last_updated: 2026-06-02
---

# Configuring ADT MCP Server

You can configure the ADT MCP server in GitHub Copilot or other MCP hosts to perform ABAP development tasks in an agentic workflow.

Prerequisites
You have set up the MCP host.
Context
GitHub Copilot

To start the connection between the GitHub Copilot chat and the MCP server, open the command palette and run the command MCP: List Servers.

Select the ADT MCP sever and choose Start Server.

The Output section dispays the number of tools available.

After the connection is established, to view the available ADT MCP tools, choose the Configure Tools option in the GitHub Copilot chat.

Select or deselect tools to control which ones are available for the current request.

Other MCP Hosts

After the ADT MCP Server is enabled, it can also be configured for other MCP hosts in Visual Studio Code. The ADT MCP server uses HTTP transport and runs locally.

The MCP server URL is http://localhost:<port>/mcp, where the <port> is the value configured in  Adt > Mcp Server: Port settings.

The ADT MCP server uses bearer token-based authorization. Therefore, the configuration must include an Authorization header with the bearer token.

After the ADT MCP server is enabled, the required bearer token is automatically generated and stored in the preference Adt > Mcp Server: Token.

Configure the ADT MCP server in the MCP host of your choice.

An example MCP Server configuration template is given below:
Sample Code


   "com.sap.adt/mcp": {
		"type": "http",
		"url": "http://localhost:2236/mcp",			
			"headers": {
		"Authorization": "Bearer 2CM8fWW_9G0UPPHwF514gg"
			}
		}

Note

The configuration format may differ across MCP hosts, but the core details remain the same.
