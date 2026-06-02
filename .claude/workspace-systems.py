#!/usr/bin/env python3
"""
Reads ABAP.code-workspace, classifies each SAP destination by system role,
and outputs a system-reminder JSON block for Claude's context.
"""
import json, sys, os

# Classification rules by SID prefix
DEV = ('ER1','ER2','ER3','ED1','ED2','ED3','D01','D02','D03','DEV','E01','E02')
REF = ('CC','CCF','C01','C02','PRD','P01','P02','PROD','GLD','G01')
QA  = ('QA','Q01','Q02','Q03','QC','QEF','QAS','TST','T01','T02')

def classify(name):
    sid = name.split('_')[0].upper()
    if any(sid.startswith(p) for p in DEV): return 'DEV'
    if any(sid.startswith(p) for p in REF): return 'REF'
    if any(sid.startswith(p) for p in QA):  return 'QA'
    return 'UNKNOWN'

workspace_file = os.path.join(os.path.dirname(__file__), '..', 'ABAP.code-workspace')
template_file  = os.path.join(os.path.dirname(__file__), '..', 'ABAP.code-workspace.template')

if not os.path.exists(workspace_file):
    hint = " Run: cp ABAP.code-workspace.template ABAP.code-workspace — then add your destination via Ctrl+Shift+P → ABAP: New Destination." if os.path.exists(template_file) else ""
    print(json.dumps({"systemMessage": f"[ABAP] No workspace file found.{hint}"}))
    sys.exit(0)

try:
    with open(workspace_file) as f:
        ws = json.load(f)
except Exception as e:
    print(json.dumps({"systemMessage": f"[ABAP] Could not read workspace: {e}"}))
    sys.exit(0)

folders = ws.get('folders', [])
destinations = [
    f['name'] for f in folders
    if f.get('uri', '').startswith('abap:/')
]

if not destinations:
    print(json.dumps({
        "systemMessage": "[ABAP] No SAP destinations found in workspace. Use `ABAP: Add Destination as Folder to Workspace` in VS Code."
    }))
    sys.exit(0)

dev_systems  = [d for d in destinations if classify(d) == 'DEV']
ref_systems  = [d for d in destinations if classify(d) == 'REF']
qa_systems   = [d for d in destinations if classify(d) == 'QA']
unknown      = [d for d in destinations if classify(d) == 'UNKNOWN']

lines = ["[ABAP Workspace] Available SAP destinations:"]
for d in dev_systems:
    lines.append(f"  ✅ {d}  → DEVELOPMENT (create/edit/activate/test here)")
for d in qa_systems:
    lines.append(f"  🔍 {d}  → QA/TEST (read-only)")
for d in ref_systems:
    lines.append(f"  ❌ {d}  → REFERENCE (read-only, no writes ever)")
for d in unknown:
    lines.append(f"  ❓ {d}  → UNKNOWN role — ask user before writing")

if not dev_systems:
    lines.append("")
    lines.append("⚠️  No development system detected. Ask user which system to use for development.")
elif len(dev_systems) == 1:
    lines.append("")
    lines.append(f"Default dev system: {dev_systems[0]}")
else:
    lines.append("")
    lines.append(f"Multiple dev systems found — ask user which to use: {', '.join(dev_systems)}")

print(json.dumps({"systemMessage": "\n".join(lines)}))
