# Ruvo Financial Logic

This is the authoritative specification for the shared domain engine. Amounts are integer paise. UI, stores, and routes may display engine values but must never recalculate them.

## Inputs and core equations

For budget `B`, period days `N`, current day `d`, and remaining days `R = max(0, N - d + 1)`:

- `balance = B + income - discretionaryExpenses - commitmentPayments - goalContributions`
- `U` is every unpaid active commitment occurrence due in the period, including overdue occurrences.
- `G` is `sum(max(0, plannedContribution - contributedThisPeriod))`.
- `safeToSpend S = balance - U - G`.
- `dailyAllowance A = floorToPaise(max(0, S) / R)`; it is zero once `R` is zero.
- `todayRemaining = A0 - spentToday`, where `A0 = floorToPaise(max(0, S + spentToday) / R)`.

Commitment payments and goal contributions reduce balance but simultaneously reduce U or G, so S and A remain unchanged. Discretionary expenses decrease S by their amount. Income increases S by its amount.

## Pace and forecast

`plannedDailyPace = categoryPlans / N`. Excluding one-off expenses, `actualAverage = eligibleSpend / daysElapsed`; blend it with plan using `w = min(daysElapsed / 7, 1)`. `pace = (w * actualAverage + (1 - w) * plannedDailyPace) * paceMultiplier`.

For today, `todayFutureSpend = max(0, pace - eligibleToday)`. Forecast spend is today’s future spend plus pace for later remaining days. `endingBalance E = balance - U - forecastSpend + pendingIncome`; `projectedFreeMoney Φ = E - G`.

## Health and risk

Use the four weighted scores from the reference specification: sustainability 35%, forecast buffer 25%, commitment coverage 20%, shock resilience 20%. The rounded weighted total maps to Low (80–100), Moderate (60–79), High (40–59), and Severe (0–39). `Φ < 0` forces at least Moderate; `E < 0` or `S <= 0` forces at least High.

## Invariants

- `computeSnapshot(state)` is the only calculation entry point used by UI.
- `simulate(state, scenario)` operates on a clone and never mutates its argument.
- Confirmed scenario metrics equal the simulated after snapshot within one paise.
- Allowance is never negative; a negative S is an over-committed warning.
- The final projection point equals E and category actual totals equal discretionary spend.
- Round only output values: allowance floors to paise; other money rounds half-up.
