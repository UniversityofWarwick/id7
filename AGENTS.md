# AGENTS.md

_Last updated: 2025-11-27_

## Purpose
This document provides instructions and context for LLM agents working on this project. Follow these guidelines to ensure consistent, safe, and effective contributions.

## Project Structure
- Root directory contains documentation, configuration, and build scripts.
- Source code is organized in subdirectories:
  - `bootstrap/`, `js/`, `less/`, `templates/`, `tools/`, `build-tooling/`
  - Documentation in `docs/`
  - Distribution artifacts in `dist/`, `_build/`, `_gh_pages/`
- Key files: `README.md`, `LICENSE`, `Gemfile`, `package.json`, `webpack.config.babel.js`, `deploy.sh`

## Rules for Agents
- Make minimal, targeted changes; do not refactor or optimize unless requested.
- Do not introduce breaking changes or modify unrelated code.
- Update documentation only if directly related to your changes.
- Never commit secrets, credentials, or sensitive data.
- Respect existing conventions and file organization.
- If uncertain, ask for clarification before proceeding.

## Contribution Workflow
- Validate changes with existing build and test scripts.
- Use ecosystem tools for dependency management and code generation.
- Prefer automation and scripts over manual steps when possible.

## Additional Notes
- This project does not currently use agent-based code modules.
- Update this file as new agent patterns or rules are introduced.

---
For questions or clarifications, consult the project maintainers or open an issue in the repository.
