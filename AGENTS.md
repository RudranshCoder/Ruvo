# Ruvo Agent Instructions

Read `docs/FINANCIAL_LOGIC.md`, `docs/DATA_MODEL.md`, `docs/ARCHITECTURE.md`, `docs/PRD.md`, `docs/DESIGN_SYSTEM.md`, `docs/TASKS.md`, and `docs/TESTING.md` before changing related work.

- Get all financial numbers from `computeSnapshot(state)` or `simulate(state, scenario)` in `src/domain`.
- Keep domain code pure TypeScript and persist only raw facts.
- Store money as integer paise and format it through `formatMoney`.
- Use design tokens and reusable UI primitives; do not hard-code colors or magic pixel values.
- Add or update tests for logic changes and do not mark a task done with failing checks.
- Update `docs/TASKS.md` and `PROJECT_CONTEXT.md` as work completes.
