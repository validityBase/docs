# GitHub Actions

## `publish-docs-action`

`publish-docs-action` is a legacy Node 24 action for publishing Markdown
documentation into the central docs repository.

Maintenance rules:

- Keep `node_modules` out of git.
- Keep package dependencies in `package.json` and `package-lock.json`.
- Direct package dependencies are pinned to exact versions without `^` or `~`.
- Dependency installs use `npm ci --ignore-scripts`.
- Rebuild the bundled `index.js` after changing TypeScript source or package
  dependencies.
- Do not add dependencies that are unused by `src/`.
- Prefer the shared action or reusable workflow from
  `validityBase/vbase-github-actions` for new consumers.

Validation:

```bash
cd publish-docs-action
npm run build
npm audit
npm audit --omit=dev
npm ls @actions/core @actions/http-client undici --all
```

## `repo-backup.yml`

`.github/workflows/repo-backup.yml` runs daily and can also be triggered
manually. It delegates to
`validityBase/vbase-github-actions/.github/workflows/repo-backup.yml@v2`,
stores a monthly full Git bundle and daily differential backups under the
shared `github-backups` object storage prefix. Restore details are in the
[shared backup spec](https://github.com/validityBase/vbase-github-actions/blob/main/internal/specs/repo-backup.md).

Required GitHub Actions secrets:
- `VBASE_COMMON_REPO_READ_TOKEN`
- `VBASE_REPO_BACKUP_SECRETS_TOKEN`

`VBASE_REPO_BACKUP_SECRETS_TOKEN` is the Bitwarden machine access token for the
`vbase-repo-backups` project. Object storage credentials stay in Bitwarden under
generic `OBJECT_STORAGE_*` secret names; do not add provider credentials
directly to this repository's GitHub Secrets.
