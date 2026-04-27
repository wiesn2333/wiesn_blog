# AGENTS.md

## Stack
- Astro + Tailwind CSS v3 + TypeScript
- **Runtime**: Bun (use `bun` commands, not npm/yarn/pnpm)

## Commands
```bash
bun run dev    # dev server on port 4000
bun run build  # builds static output to dist/
bun run preview
```

## Routes
- `/` → Home (article list)
- `/about` → About
- `/project` → Project
- `/articles/:slug` → Markdown article (from content collections)

## Articles
Articles live in `src/content/articles/*.md`. Use content collections (`src/content/config.ts`). Frontmatter fields: `title`, `description`, `date`, `cover`.

## Notes
- No lint/typecheck/test scripts configured
- Prettier with tailwindcss plugin is set up (run manually if needed)
- `tailwind.config.mjs` - dark mode uses `prefers-color-scheme` media query