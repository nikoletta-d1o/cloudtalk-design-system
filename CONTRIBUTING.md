# Contributing to CloudTalk Design System

## Getting started

```bash
# Clone the repo
git clone git@github.com:nikoletta-d1o/cloudtalk-design-system.git
cd cloudtalk-design-system

# Install dependencies
pnpm install

# Start Storybook
pnpm storybook
```

## Development workflow

1. Create a branch from `main`
2. Make your changes
3. Add a Storybook story for any new/changed components
4. Add a changeset describing your change:
   ```bash
   pnpm changeset
   ```
5. Verify everything builds:
   ```bash
   pnpm typecheck
   pnpm build
   pnpm build-storybook
   ```
6. Open a pull request

## Adding a new component

1. Create `src/components/my-component.tsx`
2. Export it from `src/index.ts`
3. Add a story at `src/stories/my-component.stories.tsx`
4. Add a changeset

## Design tokens

Tokens live in two places:

- `src/theme.css` — Tailwind CSS theme (used by components via class names)
- `src/tokens.ts` — TypeScript constants (for charts, inline styles, etc.)

Keep both in sync when updating tokens.

## Changesets

We use [Changesets](https://github.com/changesets/changesets) for versioning. When you make a change:

```bash
pnpm changeset
```

Select the package, choose a bump type (patch/minor/major), and write a summary. This creates a markdown file in `.changeset/` that gets included in your PR. When merged, a bot will open a "Version Packages" PR that bumps the version and updates the changelog.

## Scripts

| Command | Description |
|---------|-------------|
| `pnpm storybook` | Start Storybook dev server |
| `pnpm build` | Build the library |
| `pnpm build-storybook` | Build Storybook for deployment |
| `pnpm typecheck` | Run TypeScript type checking |
| `pnpm changeset` | Create a new changeset |
