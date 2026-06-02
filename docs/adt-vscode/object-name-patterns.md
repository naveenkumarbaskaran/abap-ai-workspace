---
title: "Object Name Patterns"
source: https://help.sap.com/docs/abap-cloud/abap-development-tools-for-visual-studio-code/object-name-patterns?locale=en-US
last_updated: 2026-06-02
---

# Object Name Patterns

Use object name patterns to efficiently search for specific development objects in ADT.

Concrete Use Cases

Object name patterns are used when:

Opening ABAP development objects with the Ctrl + Shift + A search: Opening ABAP Development Objects

Note

The object name pattern and the property filter are used together in the same search field when using the Ctrl + Shift + A search.

How to Use Object Name Patterns

You can use the

Complete name of a development object

Prefix of its name

Search patterns using the following wildcards:

"*" for any string

"?" for any character

Ending with "<" to suppress automatic prefix matching

Example

Example for possible name patterns: *test?<

Note

Object name patterns are often combined with using a property filter to filter your search results even more. See Property Filter for further information and examples about the specific properties.
