---
title: "Establishing a System Connection via RFC Destination"
source: https://help.sap.com/docs/abap-cloud/abap-development-tools-for-visual-studio-code/establishing-system-connection-8e91041894104c5b8567274954dbed1a?locale=en-US
last_updated: 2026-06-02
---

# Establishing a System Connection via RFC Destination

Establish a system connection between frontend and backend via RFC.

Context
To establish a system connection between frontend and backend, you need to create a destination.
Procedure
In the Command Palette, choose ABAP: New Destination.
Between the two connection types displayed, choose RFC.

RFC for on-premise or SAP S/4HANA Cloud Private Edition

HTTP for SAP BTP ABAP environment or SAP S/4HANA Cloud Public Edition

After choosing RFC, select your system from the list.
Enter user name, client, and login language.
Results
The system connection has been established and is visible under Workspace in the Explorer view. You can now edit it by selecting ABAP: Open Destination Settings (JSON) in the Command Palette.
Tip

Should yor system connection not appear under Workspace, choose ABAP: Add Destination as Folder to Workspace..., ABAP: Add Package as Folder to Workspace... or ABAP: Add Local Objects of User as Folder to Workspace... and select your connection.

Even without a connected workspace folder, you can still work with destinations. For example, to quickly check an object, use the ABAP: Open Object… command or the object search shortcut Ctrl + Shift + A .
