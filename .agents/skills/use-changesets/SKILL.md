---
name: use-changesets
description: Create and manage changesets for versioning and releases in projects using @changesets/cli. Use when creating a changeset, bumping versions, or managing releases.
---

Do not run `bun run changeset` — it launches an interactive prompt that agents cannot complete.

Instead, create a changeset file directly in `.changeset/` with a descriptive filename (e.g., `add-feature.md`):

```md
---
"my-app": patch
---

Short description without punctuation
```

Bump types: `patch` for bug fixes, `minor` for new features, `major` for breaking changes.

Keep descriptions short and concise, without punctuation — same conventions as commit messages.
