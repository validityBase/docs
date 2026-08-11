# CLAUDE.md

This file is the minimal shared entry point for agentic work in this repository.

## Core Standards

- This repository publishes public validityBase documentation. Keep public docs
  free of secrets, private tokens, private infrastructure details, and internal
  implementation notes.
- Public documentation content lives in this repository's user-facing Markdown
  files and product folders. Internal specs, agent memory, and maintenance notes
  belong under `internal/`.
- The legacy `publish-docs-action` is a Node action. When its TypeScript source
  or package dependencies change, rebuild and commit its bundled `index.js`.

## Internal Documentation

- Persistent agent memory: [internal/agents/memory/MEMORY.md](internal/agents/memory/MEMORY.md)
- GitHub Actions spec: [internal/specs/github-actions.md](internal/specs/github-actions.md)
