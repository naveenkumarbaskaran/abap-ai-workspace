---
title: "Sharing and Using Links"
source: https://help.sap.com/docs/abap-cloud/abap-development-tools-for-visual-studio-code/sharing-links?locale=en-US
last_updated: 2026-06-02
---

# Sharing and Using Links

Learn how to share and use links in and between ABAP development tools for VS
Code and ABAP development tools for Eclipse.
Share direct links to ABAP development objects, allowing seamless collaboration and navigation
within development teams and between IDEs. This feature facilitates code reviews,
documentation, and team communication by providing precise references to specific ABAP
artifacts. There are two types of links you can work with to collaborate between IDEs:
HTTP and ADT links.
Procedure

To create and use an ADT link, follow these steps:

From the Command Palette, select command ABAP:
Share Link....
Select Copy ADT Link to Clipboard.
The ADT link leading to the line of code your cursor is placed is created and
copied to your clipboard.
Open ABAP development tools for Eclipse.
To open the link, do the following:
Select Navigate, then Open ADT
Link....
Paste the link in the Open ADT Link pop-up window
and choose OK.

The code the link leads to should now appear in your editor.

To create and use an HTTP link, do the following:

From the Command Palette, select command ABAP:
Share Link....
Select Copy HTTP Link to Clipboard.
The HTTP link leading to the line of code your cursor is placed is created and copied to
your clipboard.
Open your browser and paste the link in the browser search bar.
The link is opened and you should now see the code.
To open the link in ABAP development tools for Eclipse, select Open
in ABAP Development Tools in the top right-hand corner.
The link is opened in the IDE.

There is a third way to use links in ABAP development tools for
VS Code to switch between IDEs:

From the Command Palette, select command ABAP:
Open with ADT for Eclipse.
Eclipse is opened. You're now at the exact position your cursor was placed in
the code in VS Code.
