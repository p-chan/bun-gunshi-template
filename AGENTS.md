# AGENTS.md

## Overview

A template for building command-line applications with bun + gunshi.

## Directory Structure

```
├── src/
│   ├── cli.ts       # Entry point (Bun.argv.slice(2))
│   ├── main.ts      # Main command
│   └── commands/    # Subcommands + co-located tests (*.test.ts)
```

## Development Commands

| Command                | Description               |
| :--------------------- | :------------------------ |
| `bun start`            | Start the CLI             |
| `bun run lint`         | Lint source files         |
| `bun run lint:fix`     | Lint and fix source files |
| `bun run format`       | Format source files       |
| `bun run format:check` | Check formatting          |
| `bun run typecheck`    | Run type checking         |
| `bun run test`         | Run tests                 |
| `bun run build`        | Build for all platforms   |

## Agent Skills

When creating command-line interfaces, use the `use-gunshi-cli` skill.

When creating or managing changesets, use the `use-changesets` skill.
