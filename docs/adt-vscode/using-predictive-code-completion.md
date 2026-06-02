---
title: "Using Predictive Code Completion"
source: https://help.sap.com/docs/abap-cloud/abap-development-tools-for-visual-studio-code/using-predictive-code-completion-a17bf386464447e8bf095ea4db277352?locale=en-US
last_updated: 2026-06-02
---

# Using Predictive Code Completion

Get additional information on how to use the predictive code completion as well as
its accessibility option in ABAP Development Tools for VS
Code (ADT).
Context
The predictive code completion is enabled by default, but you can disable it manually
if you prefer. When enabled, ghost text appears continuously during your coding
process and is displayed in grey in the ABAP source code editor. If disabled, you
can manually trigger the generation of ghost text. As a developer, you decide how
these code predictions enhance your work.

Procedure
To enable the predictive code completion, open the Settings. To open them, use the File  Preferences  Settings menu or use 
Ctrl
 + ,
. Navigate to the Extensions  ABAP Development settings group. Here, the Adt  Joule  Editor: Predictive Code Completion setting is enabled by default through the Enable Joule predictive code completion as inline
suggestions checkbox.

To use the predictive code completion, begin typing in the source code editor.
After a short break and if predictive code completion is enabled, ghost text
appears in the ABAP source code editor at the point where you paused. You can
then incorporate it into your code in the following way:


To accept the entire ghost text: Use the Tab key or select
the generated ghost text with your cursor.
To accept the next word: Use 
Ctrl
 + Right
.
To discard the ghost text: Use Esc.

These shortcuts also appear in the key bindings toolbar,
located above the generated ghost text in the source code editor. This
toolbar is enabled by default.
You can deactivate this behavior in the settings. To do so, either select the three dots on
the right-hand side of the key bindings toolbar or go
to the File  Preferences  Settings menu. Open then the Text Editor  Suggestions setting. From the Inline Suggest:
Show Toolbar drop-down listbox, choose never.

Optional: 
To manually trigger the predictive code completion, create a shortcut using the
Trigger Inline Suggestion command in
the Command Palette.

 Related InformationPredictive Code Completion
