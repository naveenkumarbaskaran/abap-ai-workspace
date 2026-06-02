---
title: "Predictive Code Completion"
source: https://help.sap.com/docs/abap-cloud/abap-development-tools-for-visual-studio-code/predictive-code-completion?locale=en-US
last_updated: 2026-06-02
---

# Predictive Code Completion

The predictive code completion feature uses Artificial intelligence (AI) to suggest code as you start typing in the ABAP source code editor. Suggested code—so called ghost text—is displayed ahead of the cursor position. You can accept the suggestion by using the Tab key or keep typing to ignore it.

About

The predictive code completion helps you write ABAP source code by predicting what you are likely to type next, based on the context of your current ABAP source code.

When performing code completion, ABAP keywords and identifiers are displayed in the proposal list. The predictive code completion and the code completion ( Ctrl + Space ) can be displayed at the same time. This means, there's no prioritization for displaying the proposals resulting from the code completion or predictive code completion.

Ghost Text

Ghost text is text that appears inline in the editor as you type. It represents the AI's prediction of the ABAP source code you might write next. Ghost text is not part of your actual code until you accept it.

You have the following possibilities to process ghost text:

Use the Tab key to accept the suggestion and insert the proposal into your source code.

Continue typing to dismiss the suggestion. Note that a new suggestion could appear—based on what you type.

Use the ESC (Escape) key to explicitly dismiss the current suggestion.

Supported Development Objects and Source Code Parts

The predictive code completion currently supports the following ABAP object types:

ABAP classes (for example, in the definition part and implementation part)

ABAP interfaces (for example, definitions)

Here, the predictive code completion supports you while writing ...

ABAP source code

Comments

ABAP Doc comments

Use

To learn how to use the predictive code completion, see Using Predictive Code Completion.

In short, to start using predictive code completion ...

open, for example, an ABAP class.

enable the predictive code completion feature in your settings if it is not enabled by default.

start typing ABAP source code. Ghost text suggestions will then appear automatically as you type.

use the Tab key to accept a suggestion or keep typing to ignore it.

Disclaimer
AI-generated Ghost Text

When the predictive code completion feature is enabled, all suggestions are shown as ghost texts. These suggestions are AI-generated without any human influence. Review the suggested ABAP source code before accepting it to make sure it's correct and fits your needs.

About the AI Model

The following information describes how the underlying AI model has been trained:

Intellectual Property and Personal Data

SAP retains intellectual property rights over the fine-tuning data.

Personal information has been filtered out to ensure compliance with privacy standards. No third-party data has been used during the fine-tuning process.

Security

Robust security measures protect both the model and the data. Data is stored in a secure, access-controlled environment, with strong access controls only accessible by authorized individuals.
