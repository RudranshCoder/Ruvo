# Ruvo Testing Plan

Domain formulas are the highest-priority tests. Run unit and integration tests on each change, end-to-end smoke tests before a phase closes, and manual responsive/accessibility checks for UI work.

## Tooling

Vitest covers domain and store integration. React Testing Library covers key UI states. Playwright covers core flows at 360, 768, and 1280 px. `npm run lint`, `npm run typecheck`, and `npm run build` are required quality gates.

## Baseline assertions

On the default seed: balance ₹10,000; spent ₹0; 30 days remaining; unpaid commitments ₹1,098; goal reserve ₹1,500; safe-to-spend ₹7,402; allowance ₹246.73; pace ₹233.33; ending balance ₹1,902; free money ₹402; health 93 / Low. A ₹300 Food expense on day 1 yields ₹9,700 balance, ₹7,102 safe-to-spend, ₹246.73 start-of-day allowance, −₹53.27 remaining today, and ₹1,835.33 ending balance.

Test weekly occurrences, category threshold states, zero plans, one-off pace exclusion, health boundaries and risk escalation, Indian money formatting, scenario purity, scenario confirmation equality, malformed scenarios, persistence recovery, and responsive behavior. Keep assertions within one paise for money.
