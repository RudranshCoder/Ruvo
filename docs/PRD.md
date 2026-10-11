# Ruvo Product Requirements

Ruvo is a simulation-first personal finance app for a 30-day, ₹10,000 budget. It helps students and early-career users understand whether a decision is affordable before committing to it. Every displayed financial metric must come from one shared calculation engine.

## Product goals

- Make a decision simulation reachable in one tap from every screen.
- Show safe-to-spend money, today’s allowance, forecast, goals, and risk consistently.
- Work offline with browser-local persistence and no account in v1.
- Deliver a responsive phone-first experience at 360 px, 768 px, and 1280 px.

## Non-goals for v1

No bank linking, UPI, cloud sync, investments, credit products, multi-currency, or multi-user accounts.

## MVP features

1. Dashboard: budget, balance, spending, days remaining, allowance, forecast, health, and a persistent simulation action.
2. Expenses: add, edit, delete, filter, and compare category plans with actual spend.
3. Commitments: recurring bills, subscriptions, due timeline, payment, pause, and cancellation.
4. Goals: priorities, progress, projected funding, shortfalls, and contributions.
5. Simulator: purchases, income, new or cancelled commitments, pace changes, comparison, discard, and confirm.
6. Forecast and health: a 30-day projection, zero day, health score, risk level, and plain-language explanation.
7. Settings and onboarding: defaults, plans, demo data, simulated day control, export, and reset.

## Core user flows

- First launch: accept the ₹10,000/30-day defaults or adjust them, then land on a live dashboard.
- Daily check-in: log an expense in three taps or fewer and immediately see the changed outlook.
- Decision: simulate a purchase, inspect before/after metrics, then confirm or discard without accidental state changes.

## Success criteria

- First simulation in under 20 seconds from app open.
- Expense logged in under 10 seconds.
- All displayed metrics match `computeSnapshot(state)`.
- A confirmed scenario matches its simulated result within one paise.
- No horizontal scroll at 360 px and tap targets are at least 44 px.

## Acceptance baseline

With the default seed on day 1, the dashboard must show ₹10,000 balance, ₹246.73 daily allowance, ₹1,902 projected ending balance, ₹1,500 achievable planned goal savings, and health 93 / Low. A ₹1,500 purchase today must yield ₹8,500, ₹196.73, ₹402, ₹402 of goals, and 70 / Moderate respectively.
