#!/usr/bin/env python3
"""
Haul.AI Setup Verification Script
Run: python3 verify_setup.py
Checks all tools are installed and project structure is correct.
"""
import subprocess
import sys
from pathlib import Path

GREEN = "\033[92m"
RED   = "\033[91m"
RESET = "\033[0m"
BOLD  = "\033[1m"

passed = 0
failed = 0

def check(name, cmd_or_fn, expected=None):
    global passed, failed
    try:
        if callable(cmd_or_fn):
            result = cmd_or_fn()
        else:
            result = subprocess.run(
                cmd_or_fn, shell=True, capture_output=True, text=True
            ).stdout.strip()
        if expected and expected not in result:
            raise ValueError(f"Expected {expected!r}, got {result!r}")
        print(f"{GREEN}✓ PASS{RESET} {name}: {result[:60] if result else 'ok'}")
        passed += 1
    except Exception as e:
        print(f"{RED}✗ FAIL{RESET} {name}: {e}")
        failed += 1

root = Path.home() / "DEV" / "haul-ai"

print(f"\n{BOLD}Haul.AI Setup Verification{RESET}\n{'='*50}")

# Tools
check("Python version",     "python3 --version", "3.")
check("Node.js version",    "node --version",    "v2")
check("npm version",        "npm --version",     "1")
check("Git version",        "git --version",     "git version")
check("Docker version",     "docker --version",  "Docker version")

# Project structure
check("Project root",       lambda: str(root) if root.exists() else (_ for _ in ()).throw(Exception("missing")))
check("CLAUDE.md",          lambda: "ok" if (root/"CLAUDE.md").exists() else (_ for _ in ()).throw(Exception("missing")))
check("SESSION_PLANS.md",   lambda: "ok" if (root/"SESSION_PLANS.md").exists() else (_ for _ in ()).throw(Exception("missing")))
check(".env.example",       lambda: "ok" if (root/".env.example").exists() else (_ for _ in ()).throw(Exception("missing")))
check("docs/ folder",       lambda: "ok" if (root/"docs").is_dir() else (_ for _ in ()).throw(Exception("missing")))
check("marketing/ folder",  lambda: "ok" if (root/"marketing").is_dir() else (_ for _ in ()).throw(Exception("missing")))

# Git
check("Git initialized",    lambda: "ok" if (root/".git").exists() else (_ for _ in ()).throw(Exception("not initialized")))

print(f"\n{'='*50}")
print(f"{GREEN}PASSED: {passed}{RESET}  {RED if failed else ''}FAILED: {failed}{RESET}")
if failed == 0:
    print(f"\n{GREEN}{BOLD}All checks passed! Ready for Session 0.{RESET}\n")
else:
    print(f"\n{RED}Fix the failures above before starting Session 0.{RESET}\n")
    sys.exit(1)
