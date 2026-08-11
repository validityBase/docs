# AGENTS.md

Primary instructions are in [CLAUDE.md](CLAUDE.md) - read that first.

## Key Pointers

- Persistent agent memory: [internal/agents/memory/MEMORY.md](internal/agents/memory/MEMORY.md)
- GitHub Actions spec: [internal/specs/github-actions.md](internal/specs/github-actions.md)
- Public documentation is published from the user-facing Markdown files in this
  repository. Keep agent-only context under `internal/`.

## Codex Notes

- Do not commit `node_modules`.
- For `publish-docs-action`, run the package build after dependency or source
  changes so the checked-in `index.js` matches the source.
