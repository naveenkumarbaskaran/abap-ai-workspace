---
title: "Logging on to Destinations"
source: https://help.sap.com/docs/abap-cloud/abap-development-tools-for-visual-studio-code/logging-on-to-destinations?locale=en-US
last_updated: 2026-06-02
---

# Logging on to Destinations

Log on to destinations to establish a system connection between frontend and backend.

Context

You need to log on to establish a system connection between frontend and backend. To do this, follow either of these steps:

Procedure
In the Explorer view, open the context menu from your workspace folder and select Logon to Destination.
Alternatively, you can start working right away; for example, by opening a development object using the ABAP: Open Object… command. The logon procedure will be triggered automatically when required. Depending on the destination type, a quick pick menu may guide you through the logon steps.
Results
You're logged on to your destination.
Note

ABAP development tools for VS Code stores data on disk for caching purposes. The cache is placed inside the one of the Data Storage locations provided by VS Code. Different VS Code workspaces use different storage locations. This cache is created in the background and is not explicitly disclosed or prompted to the developer. These caching locations are managed by VS Code.
