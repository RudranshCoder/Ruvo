import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowRight,
  CalendarClock,
  CalendarDays,
  CircleAlert,
  Coins,
  PiggyBank,
  PlusCircle,
  ShieldCheck,
  SlidersHorizontal,
  Sparkles,
  Target,
  WalletCards,
} from "lucide-react";
import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { MetricCard } from "@/components/ui/MetricCard";
import { buttonVariants } from "@/components/ui/buttonVariants";
import { formatMoneyWhole } from "@/domain/money";
import { cn } from "@/lib/utils";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.05,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 14 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.35, ease: "easeOut" },
  },
};

export function DashboardPage() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      variants={shouldReduceMotion ? undefined : containerVariants}
      initial={shouldReduceMotion ? undefined : "hidden"}
      animate={shouldReduceMotion ? undefined : "visible"}
      className="mx-auto grid max-w-5xl gap-8 font-[family-name:var(--font-body)]"
    >
      {/* Page Header */}
      <motion.section
        variants={shouldReduceMotion ? undefined : itemVariants}
        className="grid gap-3"
      >
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <div className="flex items-center gap-2">
              <span className="size-2 rounded-full bg-lime animate-pulse" />
              <p className="text-sm font-medium tracking-wide text-muted">
                October budget &bull; Active plan
              </p>
            </div>
            <h1 className="mt-1 font-[family-name:var(--font-display)] text-3xl font-bold tracking-tight text-ink sm:text-4xl">
              Make room for what matters.
            </h1>
          </div>
          <Badge tone="good" className="px-3 py-1 font-semibold">
            Day 1 of 30
          </Badge>
        </div>
        <p className="max-w-xl text-sm leading-6 text-muted sm:text-base">
          Your Ruvo workspace is ready. The finance engine will turn this plan into live guidance in the next build phase.
        </p>
      </motion.section>

      {/* Hero Budget Card */}
      <motion.div variants={shouldReduceMotion ? undefined : itemVariants}>
        <Card className="relative overflow-hidden border-border/40 bg-[linear-gradient(135deg,#7c3aed_0%,#4c1d95_60%,#2e1065_100%)] p-6 text-white shadow-[0_24px_60px_rgba(0,0,0,0.35)] sm:p-8">
          {/* Decorative CSS Shimmer & Ambient Blobs */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-20 -top-20 size-72 rounded-full bg-lime/10 blur-3xl"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-24 -left-20 size-80 rounded-full bg-brand/30 blur-3xl"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:24px_24px] opacity-5"
          />

          <div className="relative z-10">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-white/90 backdrop-blur-sm">
                <Sparkles size={14} className="text-lime" />
                Starting budget
              </div>
              <span className="text-xs font-medium text-white/70">
                Cycle: 30 days remaining
              </span>
            </div>

            <div className="mt-6 flex flex-wrap items-end justify-between gap-6">
              <div>
                <motion.p
                  initial={shouldReduceMotion ? undefined : { opacity: 0, scale: 0.96 }}
                  animate={shouldReduceMotion ? undefined : { opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className="font-[family-name:var(--font-display)] text-5xl font-extrabold tracking-[-0.07em] text-white tabular-nums sm:text-6xl"
                >
                  {formatMoneyWhole(1000000)}
                </motion.p>
                <p className="mt-2 text-sm text-white/80">
                  A 30-day budget, ready to shape.
                </p>
              </div>

              <Link
                to="/app/plan"
                className={buttonVariants({
                  variant: "secondary",
                  className:
                    "border-white/20 bg-white/10 text-white shadow-sm backdrop-blur-md transition-all hover:bg-white/20 hover:text-white",
                })}
              >
                Review plan <ArrowRight size={17} aria-hidden="true" />
              </Link>
            </div>

            {/* Quick Hero Metrics Bar */}
            <div className="mt-8 grid grid-cols-2 gap-4 border-t border-white/15 pt-5 sm:grid-cols-3">
              <div>
                <p className="text-xs font-medium text-white/70">Balance</p>
                <p className="mt-1 font-[family-name:var(--font-display)] text-lg font-semibold tracking-tight tabular-nums sm:text-xl">
                  {formatMoneyWhole(1000000)}
                </p>
              </div>
              <div>
                <p className="text-xs font-medium text-white/70">Daily allowance</p>
                <p className="mt-1 font-[family-name:var(--font-display)] text-lg font-semibold tracking-tight text-lime tabular-nums sm:text-xl">
                  {formatMoneyWhole(24673)}
                </p>
              </div>
              <div className="col-span-2 sm:col-span-1">
                <p className="text-xs font-medium text-white/70">Days remaining</p>
                <p className="mt-1 font-[family-name:var(--font-display)] text-lg font-semibold tracking-tight tabular-nums sm:text-xl">
                  30 days
                </p>
              </div>
            </div>
          </div>
        </Card>
      </motion.div>

      {/* Quick Actions Row */}
      <motion.section
        variants={shouldReduceMotion ? undefined : itemVariants}
        aria-label="Quick actions"
        className="flex flex-wrap items-center gap-3"
      >
        <span className="text-xs font-semibold uppercase tracking-wider text-muted">
          Quick Actions:
        </span>
        <Link
          to="/app/plan"
          className={cn(
            buttonVariants({ variant: "secondary", size: "compact" }),
            "group text-xs",
          )}
        >
          <PlusCircle size={15} className="text-lime transition-transform group-hover:rotate-90" />
          Add Expense
        </Link>
        <Link
          to="/app/simulate"
          className={cn(
            buttonVariants({ variant: "secondary", size: "compact" }),
            "group text-xs",
          )}
        >
          <SlidersHorizontal size={15} className="text-lime transition-transform group-hover:scale-110" />
          Simulate Purchase
        </Link>
        <Link
          to="/app/goals"
          className={cn(
            buttonVariants({ variant: "ghost", size: "compact" }),
            "group border border-border text-xs hover:border-lime/40",
          )}
        >
          <Target size={15} className="text-lime transition-transform group-hover:scale-110" />
          Set Goal
        </Link>
      </motion.section>

      {/* Quick Stats Grid */}
      <motion.section
        variants={shouldReduceMotion ? undefined : itemVariants}
        aria-label="Quick statistics preview"
        className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
      >
        <MetricCard
          icon={ShieldCheck}
          label="Safe to Spend (Preview)"
          value={formatMoneyWhole(740200)}
          trend="up"
          trendLabel="74% buffer"
        />
        <MetricCard
          icon={Coins}
          label="Daily Allowance (Preview)"
          value={formatMoneyWhole(24673)}
          trend="neutral"
          trendLabel="Base pace"
        />
        <MetricCard
          icon={CalendarClock}
          label="Commitments Due"
          value={formatMoneyWhole(109800)}
          trend="neutral"
          trendLabel="Fixed"
        />
        <MetricCard
          icon={PiggyBank}
          label="Savings Goal"
          value={formatMoneyWhole(150000)}
          trend="up"
          trendLabel="15% target"
        />
      </motion.section>

      {/* Information Cards Row */}
      <motion.section
        variants={shouldReduceMotion ? undefined : itemVariants}
        className="grid gap-4 lg:grid-cols-[1.25fr_0.75fr]"
      >
        <Card className="group relative overflow-hidden p-5 transition-all duration-200 hover:border-lime/30 sm:p-6">
          <div className="flex items-start gap-4">
            <span className="grid size-11 shrink-0 place-items-center rounded-2xl bg-brand-soft text-lime shadow-sm transition-transform duration-200 group-hover:scale-105">
              <WalletCards size={21} />
            </span>
            <div>
              <h2 className="font-[family-name:var(--font-display)] text-lg font-semibold tracking-tight text-ink">
                Your first calculation is next
              </h2>
              <p className="mt-1.5 text-sm leading-6 text-muted">
                Ruvo has your budget and planning structure. Add the domain engine to unlock allowance, forecast, savings, and risk.
              </p>
            </div>
          </div>
          <div className="mt-6 flex items-center justify-between border-t border-border/50 pt-4">
            <Link
              to="/app/simulate"
              className="inline-flex items-center gap-2 text-sm font-semibold text-lime transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime"
            >
              See simulation flow <ArrowRight size={16} aria-hidden="true" />
            </Link>
            <span className="text-xs text-muted">Next milestone</span>
          </div>
        </Card>

        <Card className="p-5 sm:p-6">
          <div className="flex items-center gap-2.5">
            <CalendarDays size={19} className="text-lime" />
            <h2 className="font-[family-name:var(--font-display)] text-lg font-semibold tracking-tight text-ink">
              Period setup
            </h2>
          </div>
          <dl className="mt-5 grid gap-3.5">
            <div className="flex justify-between gap-4 rounded-control bg-elevated/40 p-2.5 text-sm">
              <dt className="text-muted">Budget</dt>
              <dd className="font-semibold tabular-nums text-ink">{formatMoneyWhole(1000000)}</dd>
            </div>
            <div className="flex justify-between gap-4 rounded-control bg-elevated/40 p-2.5 text-sm">
              <dt className="text-muted">Duration</dt>
              <dd className="font-semibold text-ink">30 days</dd>
            </div>
            <div className="flex justify-between gap-4 rounded-control bg-elevated/40 p-2.5 text-sm">
              <dt className="text-muted">Current status</dt>
              <dd className="font-semibold text-good">On track</dd>
            </div>
          </dl>
        </Card>
      </motion.section>

      {/* Transparency Warning Card */}
      <motion.div variants={shouldReduceMotion ? undefined : itemVariants}>
        <Card className="border-watch/40 bg-elevated/80 p-4 transition-colors hover:border-watch/60">
          <div className="flex items-start gap-3.5">
            <CircleAlert className="mt-0.5 shrink-0 text-watch" size={20} />
            <p className="text-sm leading-6 text-muted">
              <span className="font-semibold text-ink">Transparent by design.</span>{" "}
              Forecasts and health indicators stay hidden until their shared calculation engine exists, so Ruvo never presents placeholder numbers as financial guidance.
            </p>
          </div>
        </Card>
      </motion.div>
    </motion.div>
  );
}
