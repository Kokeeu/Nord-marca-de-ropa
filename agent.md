# Agent Instructions

## Stack — React Only

**Everything in this project MUST be implemented in React.** This is a non-negotiable rule.

- All UI is built with **React 19** (functional components, hooks).
- Project uses **Vite** as the build tool (`npm run dev`, `npm run build`).
- Entry point: `src/main.jsx` → `src/App.jsx`.
- All new components live under `src/` and follow the existing `.jsx` convention.
- Styling lives in `src/index.css` and/or `src/App.css` — do not introduce a different framework (no Vue, Svelte, plain HTML, jQuery, etc.).
- Do not convert JSX to HTML templates, do not add non-React render layers.

## Design Reference

Before writing any UI, read **`design.md`** in the project root. It is the single source of truth for the Atoms design system:

- Color tokens (`--color-champagne-gold`, `--color-candlelight-cream`, `--color-obsidian-black`, `--color-ember-ash`)
- Typography (Switzer, type scale, weights, tracking)
- Spacing scale and border radii
- Component specs (Hero Logo Mosaic, Company Card, Category Tag Pill, etc.)
- Do's and Don'ts
- Surfaces and elevation rules
- Layout and imagery rules

Any component built must conform to the tokens and rules in `design.md`. When in doubt, the design file wins.

## Conventions

- **Components:** functional components, default or named exports — match the existing style in `src/App.jsx`.
- **Styling:** prefer the CSS custom properties already declared in `src/index.css`. Use the token names from `design.md` (e.g. `var(--color-champagne-gold)`).
- **No new dependencies** unless the task explicitly requires it. If you think a new package is needed, ask first.
- **No comments in code** unless asked.
- **Lint:** run `npm run lint` after changes when possible.
- **Language:** code identifiers in English; user-facing copy as required by the task.

## Workflow

1. Read `design.md` first.
2. Inspect `src/App.jsx`, `src/index.css`, and any existing components before adding new ones.
3. Build new components as React `.jsx` files under `src/` and import them where needed.
4. Reuse tokens — never hardcode hex values that already exist as CSS variables.
5. Verify with `npm run dev` (or at minimum `npm run lint`) when feasible.

If a request can only be solved outside React (e.g. build config, tooling), handle it in the smallest, most isolated way possible and keep the React surface untouched.
