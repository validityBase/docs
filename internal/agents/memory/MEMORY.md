# Agent Memory

## Repository Purpose

`docs` is the central public documentation repository for validityBase product
documentation.

## Documentation Layout

- Public documentation lives in the repository's user-facing Markdown files and
  product folders.
- Internal agent memory, specs, and maintenance notes live under `internal/`.
- Root-level `CLAUDE.md` and `AGENTS.md` are pointers and must stay small.

## GitHub Actions Notes

- `publish-docs-action` is the legacy docs publication action kept in this repo.
- New and migrated repositories should prefer the shared implementation in
  `validityBase/vbase-github-actions`.
- When `publish-docs-action` dependencies or TypeScript source change, rebuild
  and commit the bundled `publish-docs-action/index.js`.
