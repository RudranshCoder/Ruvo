# Ruvo Architecture

Ruvo is a client-only React 18 application built with Vite and strict TypeScript. It uses Tailwind for token-driven styling, a shadcn/ui-compatible component layer, Zustand with localStorage persistence, React Router, React Hook Form with Zod, Recharts, Vitest, React Testing Library, and Playwright.

## Boundaries

`src/domain` is pure TypeScript: no React, browser APIs, clocks, randomness, Zustand, or DOM. It exposes `computeSnapshot(state)` and `simulate(state, scenario)`. `src/store` contains raw facts, validation, persistence, migrations, and actions but no financial formulas. Features read selectors and render components. Reusable UI primitives know nothing about finance.

## Planned structure

```text
src/
  domain/       money, types, seed, timeline, commitments, goals, allowance, categories, forecast, health, explain, simulate, snapshot
  store/        useAppStore, selectors, migrations
  components/   ui, charts, layout, shared
  features/     dashboard, expenses, commitments, goals, simulator, forecast, health, settings, onboarding
  styles/       tokens.css, globals.css
  routes.tsx    main.tsx
tests/          domain, integration, e2e
```

Persist state as `ruvo:v1`. Persist only settings, categories, transactions, commitments, goals, and scenario drafts. Corrupted storage falls back safely to the seed. Every schema change requires a migration and a fixture test.
