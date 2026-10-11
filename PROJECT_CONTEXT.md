# Ruvo Project Context

## Current status

Ruvo is a client-only simulation-first finance app. The UI redesign and premium landing page are complete. The visual system features editorial typography, dark fintech palette, Motion for React animations, an interactive purchase simulation demo, responsive layouts, and an enhanced application shell with polished dashboard overview cards.

## Key decisions

- Product name: Ruvo.
- Visual style: Dark-first fintech aesthetic inspired by AVVA Bank (deep dark backgrounds, brand purple, electric lime accents, subtle borders, Unbounded & Albert Sans typography).
- Default experience: ₹10,000 over 30 days, simulated clock beginning on day 1.
- All money uses integer paise and all derived metrics come from the shared domain engine or formatted via `formatMoney`.
- Browser-local persistence will use `ruvo:v1`.

## Next task

Begin Phase 2: implement the pure domain engine and its fixture-driven tests.
