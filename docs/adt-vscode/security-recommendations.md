---
title: "Security Considerations and Recommendations"
source: https://help.sap.com/docs/abap-cloud/abap-development-tools-for-visual-studio-code/security-recommendations-and-considerations?locale=en-US
last_updated: 2026-06-02
---

# Security Considerations and Recommendations

The following section provides an overview of security recommendations and
considerations for developers before using the ADT MCP Server.


Developers who configure the MCP Server are solely responsible for installing VS Code and
the GitHub Copilot extension and for ensuring Copilot is configured
correctly. Company administrators may manage Copilot’s settings for all
developers, and SAP bears no responsibility for any developer’s development
environment. For more information, see Configuring the MCP allowlist policy for an
enterprise.
If an end user's workstation or laptop is compromised, protective measures no
longer provide effective defense. In such cases, ADT for Eclipse, ADT for VS
Code, and the MCP Server may all be exposed to potential threats.
Prompt injection attacks may compromise the client system; verify that the user’s
environment is secure and that all installed MCP servers have been properly
validated. 
Any additional MCP Servers a user adds in GitHub Copilot are the user’s sole
responsibility, and SAP disclaims any responsibility for MCP tools or
services provided by those servers. Users should be fully aware of the
potential risks of adding third‑party MCP Servers.
