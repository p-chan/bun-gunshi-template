# bun-gunshi-template

A template for building CLI applications with [Bun](https://bun.sh) and [gunshi](https://github.com/kazupon/gunshi).

## Getting Started

1. Clone this repository and reset git history:
   ```bash
   git clone https://github.com/p-chan/bun-gunshi-template my-cli
   cd my-cli
   rm -rf .git && git init
   ```
2. Install dependencies:
   ```bash
   bun install
   ```
3. Update `name` and `bin`, and remove `private` in `package.json`, update `repo` and `access` in `.changeset/config.json`, and update `README.md` and `AGENTS.md`
4. Run `bun install` to update `bun.lock`
5. Create your first commit:
   ```bash
   git add .
   git commit -m "feat: initial commit"
   ```

## Stack

| Tool                                                   | Purpose                   |
| :----------------------------------------------------- | :------------------------ |
| [Bun](https://bun.sh)                                  | Runtime / Package manager |
| [gunshi](https://github.com/kazupon/gunshi)            | CLI framework             |
| [TypeScript](https://www.typescriptlang.org)           | Type checking             |
| [oxlint](https://oxc.rs/docs/guide/usage/linter)       | Linter                    |
| [oxfmt](https://github.com/nicolo-ribaudo/oxfmt)       | Formatter                 |
| [Vitest](https://vitest.dev)                           | Test framework            |
| [Changesets](https://github.com/changesets/changesets) | Versioning / Release      |
