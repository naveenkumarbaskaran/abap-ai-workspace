---
title: "Debugging ABAP Code"
source: https://help.sap.com/docs/abap-cloud/abap-development-tools-for-visual-studio-code/debugging-abap-code?locale=en-US
last_updated: 2026-06-02
---

# Debugging ABAP Code

Learn how to use the ABAP Debugger in ABAP development tools for VS
Code.
ContextDebug your ABAP source code.The following steps describe how to set breakpoints, start
the ABAP Debugger, and step through your code.
Procedure
Ensure the debugger is enabled in the Settings: In the menu bar, choose File  Preferences  Settings  Extensions  ABAP Development. Check the box next to Enable ABAP Debugger (change
requires IDE restart).

In your ABAP class, set a breakpoint by clicking in the gutter next to your
selected line of code. When you hover there, a breakpoint indicator appears to
show you can set one. Breakpoints are listed in the sidebar of the
Run and Debug view. Navigate between different views
using the activity bar located on the left side of the VS Code interface.

To run your program, use Debug: Start Debugging in the
Command Palette or press F5.
Alternatively, start the unit tests of the program with ABAP: Run ABAP Unit Tests in the command palette
or press 
Ctrl
 + Shift
 + F10
.
Once program flow hits one of the breakpoints, the ABAP Debugger is
started, and you can see the Variables,
Breakpoints, and Call Stack in
the sidebar.

At the top of the editor, use the debug panel toolbar to step through your
code. From left to right:


Continue (F5) resumes execution until the
next breakpoint.
Step Over (F10) runs the current
statement without stepping into called methods or functions.
With Step Into (F11), you'll step into
the next method, function module, include, or form being called.
Choose Step Out (
Shift
 + F11
) to run the current routine until it returns to its caller.
Disconnect (
Shift
 + F5
) detaches the debugger, while the program continues to run,
Stop (
Shift
 + F5
) terminates the program you're debugging.


 Related InformationABAP Debugger
