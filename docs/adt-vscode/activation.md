---
title: "Activation"
source: https://help.sap.com/docs/abap-cloud/abap-development-tools-for-visual-studio-code/activation?locale=en-US
last_updated: 2026-06-02
---

# Activation

A development object in the ABAP repository always exists in either an inactive or active version. When you create a new development object, the system stores it as an inactive version in the repository.

During activation, the system generates the active version from the existing inactive version and creates the corresponding runtime object. The runtime object is also stored in the ABAP Repository. Activation can only succeed if the development object contains no syntax errors. For this reason, the system always performs a full syntax check before generating the runtime object. An active version of a development object is always used to generate a runtime object.

Advantages of the Activation Concept
Inactive versions provide developers with a local view of the ABAP repository. They're used to store a new version without affecting the active runtime. However, to test changes, you need to activate the development objects.
Remember

The inactive status is indicated by an "I" in the tab of the development object in Visual Studio Code.

This separation enables a seamless development workflow. For example, you can change the interface of a function module without immediately impacting programs that use it. These changes become visible system‑wide only after the development object is activated.

Activation Process

You can activate:

A single development object

Multiple development objects

The activation status of development objects affects the following operations and activities:

Operation

	

Description




Create

	

Creates an inactive version and stores it in the ABAP repository.




Save

	

Saves the development object as an inactive version without performing a syntax check.




Activate

	

Generates an active version from the existing inactive version. The active version is then used to generate the runtime version of the development object.




Delete

	

Deletes both active and inactive versions.




Syntax check

	

Checks the current editor content for syntax errors.




Run / Execute

	

Runs the runtime object. Only the active, syntactically correct version can be used to generate the runtime object.

Related Information
Activating ABAP Development Objects
