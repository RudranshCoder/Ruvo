# Ruvo Data Model

All money values are positive integer paise. IDs are UUID strings. Day values are integers from 1 to period length. Derived values are never persisted.

## State

`AppState` contains `schemaVersion`, `settings`, `categories`, `transactions`, `commitments`, `goals`, and scenario drafts. Settings include a ₹10,000 budget (1,000,000 paise), 30 days, simulated day 1, pace multiplier 1, one-off and shock thresholds at 10% of budget, and theme.

Transactions have an id, type (`expense`, `commitment_payment`, `goal_contribution`, or `income`), amount, nullable category/commitment/goal links, day, optional note, one-off flag, occurrence day, and timestamp. Commitments include name, amount, due day, frequency (`one_time`, `weekly`, `monthly`), kind, auto-pay, status, and optional category. Goals include target, saved amount, planned period contribution, and unique consecutive priority.

Categories are stable ids for food, transport, entertainment, shopping, personal, and other, with planned amounts. System commitment and savings categories have no plan. Scenarios contain hypothetical purchase, income, new commitment, cancellation, or pace-change items only.

## Integrity

An expense requires a category; a commitment payment requires an occurrence; a goal contribution requires a goal. Categories with transactions cannot be deleted. Scenario items never create real transactions. Category plans plus commitment occurrences and planned goals may exceed the budget only with an over-allocation warning.

## Default seed

Plans total ₹7,000: Food ₹3,200, Transport ₹700, Entertainment ₹900, Shopping ₹1,200, Personal ₹600, Other ₹400. Commitments are Transport pass ₹600 day 3, OTT ₹199 day 8, and Phone recharge ₹299 day 12. Goals are Emergency fund ₹5,000 target / ₹1,000 planned and Weekend trip ₹3,000 target / ₹500 planned.
