---
title: "ABAP Core Development"
source: https://help.sap.com/docs/abap-cloud/abap-development-tools-for-visual-studio-code/abap-core-development?locale=en-US
last_updated: 2026-06-02
---

# ABAP Core Development

The ABAP core development scenario focuses on general use cases when creating and
editing development objects.
Establishing the System Connection to the ABAP Repository


Realization in ABAP Development Tools for
Eclipse
Realization in ABAP Development Tools for Visual
Studio Code



To connect the client with the ABAP system in the back-end,
create an ABAP project or ABAP Cloud project.
To connect the client with the ABAP system in the back-end, create a destination. To do
this, use the ABAP: New Destination...
command in the Command
Palette.Next, you have to add the destination to the workspace using the command. To do this, use
the ABAP: Add Destination as Folder to
Workspace command in the Command Palette.



Creating a Development Object


Realization in ABAP Development Tools for
Eclipse
Realization in ABAP Development Tools for Visual
Studio Code



To create an object from the menu bar, choose New  [OBJECT_TYPE].To create an object from the context menu of the relevant node in
the Project Explorer,
choose New  XYZ.
To create an object, use the ABAP: Create New ABAP
Object command in the Command Palette or the shortcut 
Ctrl
 + Shift
 + Alt
 + N
.Alternatively, choose Create  New  ABAP Object... from the context menu of the destination.



Activating a Development Object


Realization in ABAP Development Tools for
Eclipse
Realization in ABAP Development Tools for Visual
Studio Code



You can choose 
Ctrl
 + F3
 to activate one development object or 
Ctrl
 + Shift
 + F3 to activate several development objects.In addition, you can choose the relevant icon from the toolbar to activate one or
several objects.You can also activate from the context menu in the editor or
Project Explorer.
You can choose 
Ctrl
 + F3
 to activate one development object or 
Ctrl
 + Shift
 + F3 to activate several development objects.In addition, you can choose the relevant icon from the toolbar or status bar to activate one or
several objects.



Opening ABAP Development Objects


Realization in ABAP Development Tools for
Eclipse
Realization in ABAP Development Tools for Visual
Studio Code



There are several possiblities to open a development object. You can choose, for example
... 

Ctrl
 + Shift
 + A
.
choose the relevant development object in the Project
Explorer.
Search  Search  ABAP Object
												Search from the menu.
And so on

To open a development object, choose 
Ctrl
 + Shift
 + A




Searching ABAP Source Code and Objects


Realization in ABAP Development Tools for
Eclipse
Realization in ABAP Development Tools for Visual
Studio Code



To open the search functionalities, choose Search  Search... from the menu bar.Here, you can search for ABAP objects and parts of ABAP source
code. Alternatively, you use 
Ctrl
 + Shift
 + A
 to open a development object.
To search and highlight occurrences in the open editors, use the Search from the Activity Bar. To search and open
a development object, use 
Ctrl
 + Shift
 + A
.



Navigating within ABAP Source Code


Realization in ABAP Development Tools for
Eclipse
Realization in ABAP Development Tools for Visual
Studio Code



To navigate and open a referenced development object from the source code, choose
F3 or 
Ctrl
 + click
 on the element. The referenced development object is
then opened in another editor.Alternatively, you have the following possibilities:
Use the Outline
view or the Outline popup (
Ctrl
 + O
).
Choose F2 on the element and open the Element
Information popup. Here, the information
of the referenced object is displayed

To navigate to a development object, choose 
Ctrl
 + click
, Go to Definition from
the context menue, or F12 on the occurrence.You can also use the Outline
view or the Outline popup (
Ctrl
 + Shift
 + O
).To display the source code of a referenced development object,
choose 
Peek
 + Peek Definition (Alt+F12)
 from the context menu of the relevant element.Here, the source code is directly rendered one line beneath the current cursor position.
To continue developing, you can close the popup.



Displaying Usages (Where-Used) and Relations (Relation Explorer)


Realization in ABAP Development Tools for
Eclipse
Realization in ABAP Development Tools for Visual
Studio Code



To determine and display the development objects that use a
specific object, choose Get Where-Used
List (Ctrl+Shift+G) from the context menu in the
editor or Project
Explorer.To display how objects relate to each other, choose Show In (Alt+Shift+W)  Relation Explorer from the context menu in the editor or Project Explorer.
To determine and display the development objects that use a
specific object, choose Find All
References (Alt+Shift+F12) from the context menu
in the editor or Explorer.To display the usages inline, choose 
Shift
 + F12
> from the context menu in the editor or Explorer.



Displaying Errors and Problems


Realization in ABAP Development Tools for
Eclipse
Realization in ABAP Development Tools for Visual
Studio Code



Problems, errors, and warnings are highlighted in the editor and listed in the Problems view.
Problems, errors, and warnings are highlighted in the editor and
listed in the Problems
panel.



Displaying the Properties of a Development Object


Realization in ABAP Development Tools for
Eclipse
Realization in ABAP Development Tools for Visual
Studio Code



To display the Properties
view, choose Windows  Show views  Properties. Set the view active.Open the development object in the editor. The properties are
then displayed in the Properties view.
To display the properties, open the .json file part
of the relevant development object in the Explorer.The properties are displayed in text mode in the editor.



Displaying the Element Information


Realization in ABAP Development Tools for
Eclipse
Realization in ABAP Development Tools for Visual
Studio Code



To display detailed information of an element, choose
F2.The Element Information
popup lists and groups the relevant details in a structured
way.
To display details of a referenced object, for example an
interface, choose Peek  Peek Definition (Alt+F12) from the context menu of its occurrence in the
source code.The interface is then rendered one line beneath the current cursor position. To close
the display, choose X on
the right top.In addition, you can use the Hover widget to display element information.
When you hover the cursor on the element name, the Hover widget is opened
automatically.



Displaying the ABAP Communication Log


Realization in ABAP Development Tools for
Eclipse
Realization in ABAP Development Tools for Visual
Studio Code



To open the ABAP Communication
Log, choose Windows  Show View  Other...  ABAP Communication Log from the menu.The content is then displayed in the ABAP Communication
Log view.
To open the ABAP Communication log, use the >Developer: Open
Log... command from the Command Palette. From the subsequent palette,
choose Terminal. Switch to
the Output panel on the
bottom and choose then ADT
Communication Log from the drop-down listbox in
the integrated toolbar.


