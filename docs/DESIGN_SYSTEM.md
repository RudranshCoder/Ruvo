# Ruvo Design System

Ruvo is a dark-first, warm and factual fintech interface. The dominant number on a screen is the financial answer the user needs. Explain changes without judging spending.

## Tokens

Use CSS variables only in components. Dark tokens: `--bg-base: #0B0B14`, `--bg-surface: #14141F`, `--bg-elevated: #1C1C2B`, `--border-subtle: #2A2A3D`, `--text-primary: #F4F4FA`, `--text-secondary: #A3A3BA`, `--brand: #8B5CF6`, `--brand-soft: #2A1F4D`, `--accent-lime: #C6F432`, `--accent-pink: #FF5DA2`, `--accent-cyan: #22D3EE`, `--status-good: #34D399`, `--status-watch: #FBBF24`, and `--status-bad: #FB7185`.

Use Unbounded for display numbers and headings, and Albert Sans for body and interface copy. Keep Unbounded to short display moments so the wide letterforms remain legible. The spacing scale is 4, 8, 12, 16, 24, 32, and 48 px. Cards use 20 px radius; controls use 14 px; chips use full-pill radius. Use 16 px mobile and 32 px desktop screen gutters.

## Layout and interaction

Mobile is a single-column layout with a bottom tab bar and a central 56 px Simulate action. At 640 px, use a two-column card grid where helpful. At 1024 px, show a 240 px sidebar and a 1200 px maximum content area. Never allow horizontal scrolling.

Primary controls are 48 px tall; every interactive target is at least 44 px. Provide hover, pressed, visible focus, disabled, and loading states. Respect reduced motion. Use status color together with a label and icon, never color alone.

## Components

Build reusable `Button`, `Card`, `Chip`, `Input`, `Badge`, `Toast`, `MetricCard`, `InsightCard`, and layout primitives before feature-specific UI. Format all currency through `formatMoney`; show signed deltas with a true minus sign.

Forecasts use solid brand for actuals, dashed brand for projections, and dashed pink/cyan/lime for scenarios. Every chart needs a text summary for assistive technology.
