# GitHub Actions

## `publish-docs-action`

`publish-docs-action` is a legacy Node 24 action for publishing Markdown
documentation into the central docs repository.

Maintenance rules:

- Keep `node_modules` out of git.
- Keep package dependencies in `package.json` and `package-lock.json`.
- Rebuild the bundled `index.js` after changing TypeScript source or package
  dependencies.
- Do not add dependencies that are unused by `src/`.
- Prefer the shared action or reusable workflow from
  `validityBase/vbase-github-actions` for new consumers.

Validation:

```bash
cd publish-docs-action
npm run build
npm ls axios form-data undici --all
```
