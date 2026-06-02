---
title: "ABAP Debugger"
source: https://help.sap.com/docs/abap-cloud/abap-development-tools-for-visual-studio-code/abap-debugger?locale=en-US
last_updated: 2026-06-02
---

# ABAP Debugger

Learn about the ABAP Debugger in ABAP development tools for VS
Code.
The ABAP Debugger helps you troubleshoot and improve your code. You can set breakpoints at
specific lines, step through execution, and run multiple debugging sessions in parallel.
See Debugging ABAP Code for a detailed guide to using
the ABAP Debugger.
You'll find the following sections in the Run & Debug view during
your debug session:
Variables Section: The variables view shows the variables that are
available at the current position in the call stack on different levels, e.g.
locally (Locals), on class level (ME) or global level (Globals). You can hover
over a variable name to see the semantical type (if any) and the technical type
and length of the variable.
Watch Section: This section allows you to enter
expressions which will be evaluated and updated as you step through the code or
switch to a different level on the call stack. This includes complex expressions
such as instance->table[5]-component. 
Breakpoints Section: Select an entry from this list to
navigate to the breakpoint in the code editor. You can also use the breakpoints
list to deactivate or remove existing breakpoints.
Call Stack: Call stack entries show the name of the
method, form, function etc., the file (in lower case) or the main program and
include (in upper case), and the line number. System programs are marked with
[system]; they are shown in the call stack, but stepping is not possible here.
Select an entry in the call stack to navigate to the corresponding source code
and see the variables at this position. 

 Related InformationDebugging ABAP Code
