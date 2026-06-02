---
title: "Agent Configuration"
source: https://help.sap.com/docs/abap-cloud/abap-development-tools-for-visual-studio-code/agent-configuration?locale=en-US
last_updated: 2026-06-02
---

# Agent Configuration

Agents perform tasks autonomously, but you can control how much autonomy they have for invoking tools and terminal commands.

By default, agents operate without contextual information about their working environment. They lack knowledge of system configuration, domain-specific requirements, coding standards, etc. You provide comprehensive contextual information to enable effective agent operation. When an agent produces inadequate results, it is necessary to enhance the contextual information in the beginning of the task. The agent can be configured or provided instructions in multiple ways:

agents.md: Industry-standard configuration files recognized by most agentic development environments. If your MCP host supports, add the template below to your custom agents.md file.

Custom agent file: MCP hosts may provide their own methods for adding custom agents or agent instructions. Refer to your specific MCP host’s documentation to understand how to configure agent instructions, then apply the following template to your agent setup.

This template provides a starting foundation for providing instructions for your ABAP development tasks to your agent:
Sample Code


# General

- Always use cloud compliant ABAP syntax and APIs
- The package $tmp is used for local development. No transports are needed
- When creating classes in $tmp use the prefix <your prefix>
- Use the abap-tools MCP server for creating new ABAP development objects
- You MUST adjust the file search because the ABAP extension uses the virtual workspace file system. Always search via the directory first!
- Always add and edit source code via the VS Code editor. If needed open the editor first via the provided file paths.

## Testing instructions

- ALWAYS run unit tests after adding new tests or changing source code
- You MUST add unit tests to the testclass include which is a dedicated file

