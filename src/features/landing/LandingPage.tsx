import { useState } from "react";
import { Link } from "react-router-dom";
import {
  motion,
  useReducedMotion,
  AnimatePresence,
} from "framer-motion";
import {
  Sparkles,
  ArrowRight,
  ArrowUpRight,
  TrendingDown,
  ShieldCheck,
  Calendar,
  Layers,
  SlidersHorizontal,
  PiggyBank,
  CheckCircle2,
  AlertCircle,
  Menu,
  X,
  CreditCard,
  Target,
  Activity,
  Flame,
  ChevronRight,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/buttonVariants";
import { formatMoneyWhole } from "@/domain/money";


export function LandingPage() {
  const shouldReduceMotion = useReducedMotion();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Interactive Demo state
  const [purchaseAmount, setPurchaseAmount] = useState<string>("1500");
  const [simulatedState, setSimulatedState] = useState<{
    purchase: number;
    newBalance: number;
    newDailyAllowance: number;
    deltaDaily: number;
  }>({
    purchase: 1500,
    newBalance: 8500,
    newDailyAllowance: Math.floor(7402 / 30),
    deltaDaily: Math.floor(7402 / 30) - Math.floor((7402 - 1500) / 30),
  });

  const handleSimulate = (amountVal?: number) => {
    const num = amountVal !== undefined ? amountVal : parseFloat(purchaseAmount) || 0;
    const clamped = Math.max(0, Math.min(10000, num));
    const safeToSpend = 7402;
    const spentFromSafe = Math.min(safeToSpend, clamped);
    const remainingSafe = Math.max(0, safeToSpend - spentFromSafe);
    const newDaily = Math.floor(remainingSafe / 30);
    const baselineDaily = Math.floor(safeToSpend / 30);

    setSimulatedState({
      purchase: clamped,
      newBalance: 10000 - clamped,
      newDailyAllowance: newDaily,
      deltaDaily: baselineDaily - newDaily,
    });
  };

  const navLinks = [
    { name: "Features", href: "#features" },
    { name: "How It Works", href: "#how-it-works" },
    { name: "Interactive Demo", href: "#demo" },
    { name: "About", href: "#about" },
  ];

  return (
    <div className="min-h-screen bg-bg-base text-ink selection:bg-brand selection:text-white">
      {/* 1. NAVIGATION BAR */}
      <header
        className={cn(
          "sticky top-0 z-50 transition-all duration-300 border-b border-transparent bg-bg-base/85 backdrop-blur-md shadow-lg shadow-black/20"
        )}
      >
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          {/* Brand Logo */}
          <Link
            to="/"
            className="group flex items-center gap-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime rounded-xl p-1"
          >
            <span className="grid size-10 place-items-center rounded-xl bg-gradient-to-tr from-brand to-lime text-bg-base shadow-[0_0_20px_rgba(198,244,50,0.3)] transition-transform duration-200 group-hover:scale-105">
              <Sparkles size={20} className="text-bg-base stroke-[2.5]" />
            </span>
            <h1 className="font-[family-name:var(--font-display)] text-2xl font-bold tracking-tight text-ink">
              Ruvo
            </h1>
            <span className="hidden rounded-full border border-border bg-elevated px-2 py-0.5 text-[11px] font-semibold text-lime sm:inline-block">
              30-Day
            </span>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-muted transition-colors hover:text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime rounded-md px-1"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right Action */}
          <div className="hidden items-center gap-4 md:flex">
            <Link
              to="/app"
              className={cn(
                buttonVariants({ variant: "primary", size: "compact" }),
                "group shadow-[0_0_25px_rgba(139,92,246,0.3)] hover:shadow-[0_0_30px_rgba(198,244,50,0.25)]"
              )}
            >
              <span>Explore Ruvo</span>
              <ArrowUpRight
                size={16}
                className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="grid size-10 place-items-center rounded-control border border-border bg-elevated text-ink md:hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime"
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile Slide-down Panel */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0 }}
              animate={shouldReduceMotion ? { opacity: 1 } : { opacity: 1 }}
              exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0 }}
              transition={{ duration: 0.25, ease: "easeInOut" }}
              className="overflow-hidden border-b border-border bg-surface px-4 py-6 md:hidden sm:px-6"
            >
              <nav className="flex flex-col gap-4">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="min-h-[44px] rounded-lg px-3 py-2.5 text-base font-medium text-muted transition-colors hover:bg-elevated hover:text-ink"
                  >
                    {link.name}
                  </a>
                ))}
                <div className="pt-2">
                  <Link
                    to="/app"
                    onClick={() => setMobileMenuOpen(false)}
                    className={cn(buttonVariants({ variant: "primary" }), "w-full justify-center")}
                  >
                    <span>Explore Ruvo</span>
                    <ArrowUpRight size={18} />
                  </Link>
                </div>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <main>
        {/* 2. HERO SECTION */}
        <section className="relative overflow-hidden pt-12 pb-24 md:pt-20 md:pb-32">
          {/* Subtle Ambient Radial Gradients */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -top-40 left-1/2 -z-10 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-brand/15 blur-[120px]"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute top-1/3 right-10 -z-10 h-72 w-72 rounded-full bg-lime/10 blur-[100px]"
          />

          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid items-center gap-14 lg:grid-cols-12 lg:gap-8">
              {/* Left Column: Headlines & CTAs */}
              <motion.div
                initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="lg:col-span-7"
              >
                {/* Micro Badge */}
                <div className="inline-flex items-center gap-2 rounded-full border border-lime/30 bg-lime/10 px-3.5 py-1 text-xs font-semibold text-lime">
                  <Sparkles size={13} />
                  <span>Personal Finance Engine</span>
                </div>

                {/* Main Headline */}
                <h1 className="mt-6 font-[family-name:var(--font-display)] text-3xl font-extrabold tracking-tight text-ink sm:text-5xl sm:leading-[1.12] lg:text-[3.75rem] leading-tight text-balance">
                  Make your money <br className="hidden sm:inline" />
                  <span className="bg-gradient-to-r from-ink via-lime to-brand bg-clip-text text-transparent">
                    move smarter.
                  </span>
                </h1>

                {/* Supporting Copy */}
                <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted sm:text-xl">
                  Budget your <span className="font-semibold text-ink">₹10,000</span> allowance across{" "}
                  <span className="font-semibold text-ink">30 days</span> with absolute clarity. Simulate
                  expenses, secure emergency reserves, and never guess your safe-to-spend limit again.
                </p>

                {/* Action Buttons */}
                <div className="mt-10 flex flex-wrap items-center gap-4">
                  <Link
                    to="/app"
                    className={cn(
                      buttonVariants({ variant: "primary", size: "default" }),
                      "group px-7 text-base shadow-[0_0_35px_rgba(139,92,246,0.4)] hover:brightness-110"
                    )}
                  >
                    <span>Start your plan</span>
                    <ArrowRight
                      size={18}
                      className="transition-transform group-hover:translate-x-1"
                    />
                  </Link>

                  <a
                    href="#how-it-works"
                    className={cn(
                      buttonVariants({ variant: "secondary", size: "default" }),
                      "px-6 text-base hover:border-lime/40"
                    )}
                  >
                    See how it works
                  </a>
                </div>

                {/* Social Proof / Key Metric Badges */}
                <div className="mt-12 flex flex-wrap items-center gap-6 border-t border-border/60 pt-6 text-sm text-muted">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 size={16} className="text-lime" />
                    <span>Calculated daily allowance</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 size={16} className="text-lime" />
                    <span>Real-time impact preview</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 size={16} className="text-lime" />
                    <span>Zero guesswork</span>
                  </div>
                </div>
              </motion.div>

              {/* Right Column: Layered Dashboard Visual */}
              <div className="relative lg:col-span-5">
                {/* Floating Card Top-Right: Savings Badge */}
                <motion.div
                  initial={shouldReduceMotion ? false : { opacity: 0, x: 20 }}
                  animate={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, x: 0 }}
                  transition={{ opacity: { duration: 0.5, delay: 0.2 } }}
                  className="absolute -top-6 -right-2 z-20 hidden sm:flex items-center gap-3 rounded-2xl border border-border/80 bg-surface/90 px-4 py-3 shadow-[0_16px_32px_rgba(0,0,0,0.4)] backdrop-blur-md float-lime"
                >
                  <div className="grid size-9 place-items-center rounded-xl bg-lime/15 text-lime">
                    <PiggyBank size={18} />
                  </div>
                  <div>
                    <div className="text-[11px] font-medium text-muted">Savings target</div>
                    <div className="text-sm font-bold text-ink">₹1,500 protected</div>
                  </div>
                </motion.div>

                {/* Floating Card Bottom-Left: Mini Spending Insight */}
                <motion.div
                  initial={shouldReduceMotion ? false : { opacity: 0, x: -20 }}
                  animate={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, x: 0 }}
                  transition={{ opacity: { duration: 0.5, delay: 0.35 } }}
                  className="absolute -bottom-7 -left-4 z-20 hidden sm:flex items-center gap-3 rounded-2xl border border-border/80 bg-surface/90 px-4 py-3 shadow-[0_16px_32px_rgba(0,0,0,0.4)] backdrop-blur-md float-brand"
                >
                  <div className="grid size-9 place-items-center rounded-xl bg-brand-soft text-brand">
                    <Flame size={18} />
                  </div>
                  <div>
                    <div className="text-[11px] font-medium text-muted">Today's pace</div>
                    <div className="text-sm font-semibold text-good">On track (+₹84 buffer)</div>
                  </div>
                </motion.div>

                {/* Central Main Dashboard Card */}
                <motion.div
                  initial={shouldReduceMotion ? false : { opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
                  className="relative rounded-card border border-border/70 bg-gradient-to-b from-surface via-surface/95 to-bg-elevated p-6 shadow-[0_30px_70px_rgba(0,0,0,0.5)] backdrop-blur-xl sm:p-7"
                >
                  {/* Decorative glowing gradient border glow */}
                  <div className="absolute inset-0 -z-10 rounded-card bg-gradient-to-b from-brand/20 via-transparent to-lime/10 blur-xl opacity-60" />

                  {/* Header of Preview Card */}
                  <div className="flex items-center justify-between border-b border-border/60 pb-4">
                    <div className="flex items-center gap-2.5">
                      <div className="size-3 rounded-full bg-lime/80 shadow-[0_0_8px_rgba(198,244,50,0.6)]" />
                      <span className="text-xs font-semibold tracking-wider text-muted uppercase">
                        Active 30-Day Cycle
                      </span>
                    </div>
                    <span className="rounded-full border border-lime/30 bg-lime/10 px-2.5 py-0.5 text-xs font-semibold text-lime">
                      Day 1 of 30
                    </span>
                  </div>

                  {/* Starting Budget Display */}
                  <div className="mt-6 rounded-2xl bg-gradient-to-br from-brand via-brand/90 to-[#5b21b6] p-5 text-white shadow-lg">
                    <div className="flex items-center justify-between text-xs font-medium text-white/80">
                      <span>Starting Month Budget</span>
                      <span className="rounded bg-white/20 px-2 py-0.5 text-[11px]">OCT 2026</span>
                    </div>
                    <div className="mt-3 font-[family-name:var(--font-display)] text-4xl font-extrabold tracking-tight tabular-nums sm:text-5xl">
                      {formatMoneyWhole(1000000)}
                    </div>
                    <div className="mt-3 flex items-center justify-between text-xs text-white/80">
                      <span>Total pool allocated</span>
                      <span className="font-semibold text-lime">100% capacity</span>
                    </div>
                  </div>

                  {/* Key Metrics Grid */}
                  <div className="mt-5 grid grid-cols-2 gap-3">
                    <div className="rounded-xl border border-border/70 bg-elevated/70 p-3.5">
                      <div className="text-xs text-muted">Daily Allowance</div>
                      <div className="mt-1 font-[family-name:var(--font-display)] text-2xl font-bold text-lime tabular-nums">
                        ₹246
                      </div>
                      <div className="mt-0.5 text-[11px] text-muted">Safe daily spend</div>
                    </div>

                    <div className="rounded-xl border border-border/70 bg-elevated/70 p-3.5">
                      <div className="text-xs text-muted">Remaining Days</div>
                      <div className="mt-1 font-[family-name:var(--font-display)] text-2xl font-bold text-ink tabular-nums">
                        30
                      </div>
                      <div className="mt-0.5 text-[11px] text-muted">Full runway</div>
                    </div>
                  </div>

                  {/* Savings Progress Bar */}
                  <div className="mt-5 rounded-xl border border-border/60 bg-elevated/40 p-4">
                    <div className="flex items-center justify-between text-xs font-medium">
                      <span className="text-muted">Target Reserve (15%)</span>
                      <span className="font-semibold text-ink">₹1,500</span>
                    </div>
                    <div className="mt-2.5 h-2 w-full overflow-hidden rounded-full bg-border">
                      <div className="h-full w-[15%] rounded-full bg-gradient-to-r from-lime to-emerald-400" />
                    </div>
                  </div>

                  {/* Small Spending Breakdown Bars */}
                  <div className="mt-4 space-y-2 pt-2">
                    <div className="text-[11px] font-medium text-muted uppercase tracking-wider">
                      Planned Allocation Breakdown
                    </div>
                    <div className="grid grid-cols-3 gap-2 text-xs">
                      <div className="rounded-lg bg-elevated/80 p-2 border border-border/40">
                        <div className="text-[10px] text-muted">Fixed (35%)</div>
                        <div className="font-semibold text-ink tabular-nums">₹3,500</div>
                        <div className="mt-1.5 h-1 w-full rounded-full bg-border">
                          <div className="h-full w-[35%] rounded-full bg-brand" />
                        </div>
                      </div>
                      <div className="rounded-lg bg-elevated/80 p-2 border border-border/40">
                        <div className="text-[10px] text-muted">Daily Pool (50%)</div>
                        <div className="font-semibold text-ink tabular-nums">₹5,000</div>
                        <div className="mt-1.5 h-1 w-full rounded-full bg-border">
                          <div className="h-full w-[50%] rounded-full bg-lime" />
                        </div>
                      </div>
                      <div className="rounded-lg bg-elevated/80 p-2 border border-border/40">
                        <div className="text-[10px] text-muted">Reserve (15%)</div>
                        <div className="font-semibold text-ink tabular-nums">₹1,500</div>
                        <div className="mt-1.5 h-1 w-full rounded-full bg-border">
                          <div className="h-full w-[15%] rounded-full bg-pink" />
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* 3. FEATURES SECTION (VARIED LAYOUT) */}
        <section id="features" className="py-24 border-t border-border/50 bg-surface/30">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            {/* Section Header */}
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-brand/30 bg-brand/10 px-3 py-1 text-xs font-semibold text-brand">
                <Layers size={13} />
                <span>Feature Architecture</span>
              </div>
              <h2 className="mt-4 font-[family-name:var(--font-display)] text-2xl font-bold tracking-tight text-ink sm:text-3xl leading-tight">
                Engineered for 30-day certainty.
              </h2>
              <p className="mt-3 text-base text-muted sm:text-lg">
                Six tailored modules designed to prevent the mid-month cash crunch and replace anxiety
                with mathematical precision.
              </p>
            </div>

            {/* Varied Layout Grid */}                    <div className="mt-12 space-y-6">
              {/* Row 1: Full-width Featured Card (Smart Budget Tracking) */}
              <motion.div
                whileHover={shouldReduceMotion ? {} : { y: -4, borderColor: "rgba(198,244,50,0.4)" }}
                transition={{ duration: 0.2 }}
                className="group relative rounded-card border border-border bg-surface p-6 sm:p-8 lg:p-10 transition-colors shadow-lg"
              >
                <div className="grid gap-8 lg:grid-cols-12 lg:items-center">
                  <div className="lg:col-span-7">
                    <div className="inline-flex size-12 items-center justify-center rounded-2xl bg-lime/10 text-lime mb-5 group-hover:scale-110 transition-transform">
                      <Target size={24} />
                    </div>
                    <span className="block text-xs font-semibold uppercase tracking-wider text-lime">
                      Core Engine
                    </span>
                    <h3 className="mt-1 text-2xl font-bold text-ink sm:text-3xl">
                      Smart Budget Tracking & Safe-to-Spend
                    </h3>
                    <p className="mt-3 max-w-xl text-base leading-relaxed text-muted">
                      Never wonder if you can afford that dinner. Ruvo recalculates your daily safe-to-spend
                      allowance after every transaction, factoring in committed bills, days remaining, and
                      your baseline safety buffer.
                    </p>
                    <div className="mt-6 flex flex-wrap gap-4 text-xs font-medium text-ink">
                      <span className="rounded-lg bg-elevated px-3 py-1.5 border border-border/60">
                        Dynamic daily burn rate
                      </span>
                      <span className="rounded-lg bg-elevated px-3 py-1.5 border border-border/60">
                        Automated weekend adjustments
                      </span>
                      <span className="rounded-lg bg-elevated px-3 py-1.5 border border-border/60">
                        Zero mental math
                      </span>
                    </div>
                  </div>

                  {/* Interactive Visual Element */}
                  <div className="lg:col-span-5 rounded-2xl border border-border/80 bg-elevated p-5">
                    <div className="flex items-center justify-between text-xs font-semibold text-muted">
                      <span>Daily Burn Envelope</span>
                      <span className="text-lime">Safe Pace</span>
                    </div>
                    <div className="mt-4 flex items-baseline justify-between">
                      <div>
                        <div className="font-[family-name:var(--font-display)] text-3xl font-extrabold text-ink tabular-nums">
                          ₹246 <span className="text-xs font-normal text-muted">/ day</span>
                        </div>
                        <div className="text-xs text-muted mt-0.5">₹7,380 remaining over 30 days</div>
                      </div>
                      <span className="rounded-full bg-good/15 text-good border border-good/30 px-2.5 py-1 text-xs font-medium">
                        Normal
                      </span>
                    </div>

                    {/* Progress bars visualizing envelope health */}
                    <div className="mt-5 space-y-2.5">
                      <div className="flex justify-between text-xs text-muted">
                        <span>Pace vs Target</span>
                        <span className="text-ink font-semibold">102% efficiency</span>
                      </div>
                      <div className="h-2 w-full overflow-hidden rounded-full bg-border">
                        <div className="h-full w-[72%] rounded-full bg-gradient-to-r from-brand to-lime" />
                      </div>
                      <div className="flex justify-between text-[11px] text-muted">
                        <span>Min: ₹200/day</span>
                        <span>Ideal: ₹246/day</span>
                        <span>Ceiling: ₹320/day</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Row 2: Two Equal Cards (What-If Simulator + Savings Goals) */}
              <div className="grid gap-6 md:grid-cols-2">
                {/* Feature 2: What-If Simulator */}
                <motion.div
                  whileHover={shouldReduceMotion ? {} : { y: -4, borderColor: "rgba(139,92,246,0.5)" }}
                  transition={{ duration: 0.2 }}
                  className="group rounded-card border border-border bg-surface p-6 sm:p-7 shadow-lg flex flex-col justify-between"
                >
                  <div>
                    <div className="inline-flex size-11 items-center justify-center rounded-xl bg-brand-soft text-brand mb-4 group-hover:scale-105 transition-transform">
                      <SlidersHorizontal size={22} />
                    </div>
                    <h3 className="text-xl font-bold text-ink">What-If Simulator</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted">
                      Test significant financial choices before committing real funds. See exactly how a
                      ₹2,000 gadget or unplanned outing impacts your daily cash through day 30.
                    </p>
                  </div>

                  {/* Visual Preview */}
                  <div className="mt-6 rounded-xl border border-border/80 bg-elevated p-4">
                    <div className="text-xs font-semibold text-muted">Scenario Preview</div>
                    <div className="mt-2 flex items-center justify-between text-xs">
                      <span className="text-muted">Expense planned:</span>
                      <span className="font-semibold text-pink">₹2,000 shopping</span>
                    </div>
                    <div className="mt-3 grid grid-cols-2 gap-2 pt-2 border-t border-border/50 text-xs">
                      <div className="rounded-lg bg-surface p-2">
                        <span className="text-[10px] text-muted">Original Daily</span>
                        <div className="font-bold text-ink">₹246/d</div>
                      </div>
                      <div className="rounded-lg bg-surface p-2 border border-pink/30">
                        <span className="text-[10px] text-pink">Projected Daily</span>
                        <div className="font-bold text-pink">₹179/d (-₹67)</div>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Feature 3: Savings Goals */}
                <motion.div
                  whileHover={shouldReduceMotion ? {} : { y: -4, borderColor: "rgba(198,244,50,0.5)" }}
                  transition={{ duration: 0.2 }}
                  className="group rounded-card border border-border bg-surface p-6 sm:p-7 shadow-lg flex flex-col justify-between"
                >
                  <div>
                    <div className="inline-flex size-11 items-center justify-center rounded-xl bg-lime/10 text-lime mb-4 group-hover:scale-105 transition-transform">
                      <PiggyBank size={22} />
                    </div>
                    <h3 className="text-xl font-bold text-ink">Autonomous Savings Goals</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted">
                      Protect money before it gets spent. Lock away targets like emergency reserves or course
                      fees directly out of your ₹10,000 allowance.
                    </p>
                  </div>

                  {/* Visual Preview: Circular Ring */}
                  <div className="mt-6 rounded-xl border border-border/80 bg-elevated p-4 flex items-center justify-between">
                    <div>
                      <div className="text-xs font-semibold text-muted">Emergency Reserve Pot</div>
                      <div className="mt-1 font-[family-name:var(--font-display)] text-xl font-bold text-ink">
                        ₹1,500 <span className="text-xs font-normal text-muted">/ ₹2,000</span>
                      </div>
                      <div className="text-[11px] text-lime mt-1 font-medium">75% of target locked</div>
                    </div>
                    <div className="relative size-16">
                      <svg className="size-full -rotate-90" viewBox="0 0 36 36">
                        <circle
                          cx="18"
                          cy="18"
                          r="14"
                          className="stroke-border"
                          strokeWidth="3.5"
                          fill="none"
                        />
                        <circle
                          cx="18"
                          cy="18"
                          r="14"
                          className="stroke-lime"
                          strokeWidth="3.5"
                          strokeDasharray="87.96"
                          strokeDashoffset="22"
                          strokeLinecap="round"
                          fill="none"
                        />
                      </svg>
                      <div className="absolute inset-0 flex items-center justify-center text-xs font-bold text-ink">
                        75%
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Row 3: Three Equal Cards (Subscriptions + Forecasts + Health) */}
              <div className="grid gap-6 md:grid-cols-3">
                {/* Feature 4: Subscriptions */}
                <motion.div
                  whileHover={shouldReduceMotion ? {} : { y: -4, borderColor: "rgba(139,92,246,0.5)" }}
                  transition={{ duration: 0.2 }}
                  className="group rounded-card border border-border bg-surface p-5 sm:p-6 shadow-lg flex flex-col justify-between"
                >
                  <div>
                    <div className="inline-flex size-10 items-center justify-center rounded-xl bg-brand-soft text-brand mb-4 group-hover:scale-105 transition-transform">
                      <Calendar size={20} />
                    </div>
                    <h3 className="text-lg font-bold text-ink">Subscriptions & Dues</h3>
                    <p className="mt-1.5 text-xs leading-relaxed text-muted">
                      Fixed commitments are quarantined so they never sneak up on day 25.
                    </p>
                  </div>

                  <div className="mt-5 space-y-2 rounded-xl border border-border/80 bg-elevated p-3 text-xs">
                    <div className="flex items-center justify-between text-muted">
                      <span className="flex items-center gap-1.5 text-ink font-medium">
                        <CreditCard size={13} className="text-brand" /> WiFi bill
                      </span>
                      <span className="font-semibold text-ink">₹799 (Day 12)</span>
                    </div>
                    <div className="flex items-center justify-between text-muted">
                      <span className="flex items-center gap-1.5 text-ink font-medium">
                        <CreditCard size={13} className="text-lime" /> OTT Bundle
                      </span>
                      <span className="font-semibold text-ink">₹499 (Day 18)</span>
                    </div>
                  </div>
                </motion.div>

                {/* Feature 5: 30-Day Forecasts */}
                <motion.div
                  whileHover={shouldReduceMotion ? {} : { y: -4, borderColor: "rgba(198,244,50,0.5)" }}
                  transition={{ duration: 0.2 }}
                  className="group rounded-card border border-border bg-surface p-5 sm:p-6 shadow-lg flex flex-col justify-between"
                >
                  <div>
                    <div className="inline-flex size-10 items-center justify-center rounded-xl bg-lime/10 text-lime mb-4 group-hover:scale-105 transition-transform">
                      <TrendingDown size={20} />
                    </div>
                    <h3 className="text-lg font-bold text-ink">30-Day Projections</h3>
                    <p className="mt-1.5 text-xs leading-relaxed text-muted">
                      Trajectory modeling shows your expected month-end balance if pace continues.
                    </p>
                  </div>

                  <div className="mt-5 rounded-xl border border-border/80 bg-elevated p-3">
                    <div className="flex justify-between text-[11px] text-muted mb-2">
                      <span>Month-end runway</span>
                      <span className="text-good font-semibold">+₹620 surplus</span>
                    </div>
                    {/* Visual simulated bar sparkline */}
                    <div className="flex items-end gap-1 h-8 pt-1">
                      {[100, 92, 85, 81, 74, 69, 62, 57, 52, 45, 41, 35, 30, 26, 21].map(
                        (val, i) => (
                          <div
                            key={i}
                            className="flex-1 rounded-sm bg-gradient-to-t from-brand to-lime/80"
                            style={{ height: `${val}%` }}
                          />
                        )
                      )}
                    </div>
                  </div>
                </motion.div>

                {/* Feature 6: Financial Health & Risk */}
                <motion.div
                  whileHover={shouldReduceMotion ? {} : { y: -4, borderColor: "rgba(52,211,153,0.5)" }}
                  transition={{ duration: 0.2 }}
                  className="group rounded-card border border-border bg-surface p-5 sm:p-6 shadow-lg flex flex-col justify-between"
                >
                  <div>
                    <div className="inline-flex size-10 items-center justify-center rounded-xl bg-good/15 text-good mb-4 group-hover:scale-105 transition-transform">
                      <Activity size={20} />
                    </div>
                    <h3 className="text-lg font-bold text-ink">Health & Risk Index</h3>
                    <p className="mt-1.5 text-xs leading-relaxed text-muted">
                      Instant risk score updates proactively warn you before overspending starts.
                    </p>
                  </div>

                  <div className="mt-5 rounded-xl border border-border/80 bg-elevated p-3 flex items-center justify-between">
                    <div>
                      <div className="text-[10px] text-muted uppercase font-semibold">Health Score</div>
                      <div className="font-[family-name:var(--font-display)] text-2xl font-bold text-good">
                        88<span className="text-xs text-muted font-normal">/100</span>
                      </div>
                      <div className="text-[10px] text-good font-medium">Low risk level</div>
                    </div>
                    <div className="rounded-lg bg-good/10 border border-good/20 p-2 text-center">
                      <ShieldCheck size={20} className="text-good mx-auto" />
                      <span className="text-[10px] font-semibold text-good">Stable</span>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* 4. HOW IT WORKS SECTION */}
        <section id="how-it-works" className="py-24 relative overflow-hidden">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto">
              <div className="inline-flex items-center gap-2 rounded-full border border-lime/30 bg-lime/10 px-3.5 py-1 text-xs font-semibold text-lime">
                <Sparkles size={13} />
                <span>Simple 3-Step Framework</span>
              </div>
              <h2 className="mt-4 font-[family-name:var(--font-display)] text-2xl font-bold tracking-tight text-ink sm:text-3xl leading-tight">
                Master your month in three moves.
              </h2>
              <p className="mt-3 text-base text-muted sm:text-lg">
                No tedious spreadsheet formulas or 50 complicated categories. Ruvo focuses solely on
                making every day easy to manage.
              </p>
            </div>

            {/* Steps Container */}
            <div className="mt-16 grid gap-8 lg:grid-cols-3 relative">
              {/* Connector line for desktop */}
              <div
                aria-hidden="true"
                className="hidden lg:block absolute top-1/2 left-[15%] right-[15%] h-0.5 -translate-y-12 bg-gradient-to-r from-brand/20 via-lime/30 to-brand/20 -z-10"
              />

              {/* Step 1 */}
              <motion.div
                initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="relative rounded-card border border-border bg-surface p-6 sm:p-8 flex flex-col items-center text-center shadow-lg"
              >
                <div className="size-16 rounded-full bg-gradient-to-tr from-brand to-lime text-bg-base font-[family-name:var(--font-display)] text-2xl font-black grid place-items-center shadow-[0_0_20px_rgba(198,244,50,0.3)]">
                  1
                </div>
                <h3 className="mt-6 text-xl font-bold text-ink">Set your budget</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  Start fresh with your <span className="text-ink font-semibold">₹10,000</span> allowance
                  for 30 days. Lock mandatory subscriptions and establish your reserve upfront.
                </p>
                <div className="mt-6 rounded-xl bg-elevated px-4 py-2 border border-border/70 text-xs font-semibold text-lime">
                  Starting baseline calibrated
                </div>
              </motion.div>

              {/* Step 2 */}
              <motion.div
                initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="relative rounded-card border border-border bg-surface p-6 sm:p-8 flex flex-col items-center text-center shadow-lg"
              >
                <div className="size-16 rounded-full bg-gradient-to-tr from-lime to-brand text-bg-base font-[family-name:var(--font-display)] text-2xl font-black grid place-items-center shadow-[0_0_20px_rgba(139,92,246,0.3)]">
                  2
                </div>
                <h3 className="mt-6 text-xl font-bold text-ink">Track & simulate</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  Log transactions instantly or simulate larger purchases beforehand. See the butterfly
                  effect on remaining days before opening your wallet.
                </p>
                <div className="mt-6 rounded-xl bg-elevated px-4 py-2 border border-border/70 text-xs font-semibold text-brand">
                  Live ripple-effect analysis
                </div>
              </motion.div>

              {/* Step 3 */}
              <motion.div
                initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="relative rounded-card border border-border bg-surface p-6 sm:p-8 flex flex-col items-center text-center shadow-lg"
              >
                <div className="size-16 rounded-full bg-gradient-to-tr from-brand to-lime text-bg-base font-[family-name:var(--font-display)] text-2xl font-black grid place-items-center shadow-[0_0_20px_rgba(198,244,50,0.3)]">
                  3
                </div>
                <h3 className="mt-6 text-xl font-bold text-ink">Stay on course</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  Follow your dynamic daily allowance. If you spend less today, tomorrow's safe limit
                  rises automatically. Finish day 30 with reserves intact.
                </p>
                <div className="mt-6 rounded-xl bg-elevated px-4 py-2 border border-border/70 text-xs font-semibold text-good">
                  Autonomous self-correcting pace
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* 5. INTERACTIVE DEMO SECTION */}
        <section id="demo" className="py-24 border-t border-border/50 bg-surface/20">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto">
              <div className="inline-flex items-center gap-2 rounded-full border border-lime/30 bg-lime/10 px-3.5 py-1 text-xs font-semibold text-lime">
                <SlidersHorizontal size={13} />
                <span>Try It Live</span>
              </div>
              <h2 className="mt-4 font-[family-name:var(--font-display)] text-2xl font-bold tracking-tight text-ink sm:text-3xl leading-tight">
                Experience the ripple effect.
              </h2>
              <p className="mt-3 text-base text-muted sm:text-lg">
                Enter any purchase below to immediately see how it adjusts your 30-day balance and daily
                allowance.
              </p>
            </div>

            {/* Simulator Card */}
            <div className="mt-12 rounded-card border border-border/80 bg-surface p-6 sm:p-10 shadow-2xl">
              <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
                {/* Simulator Controls */}
                <div className="lg:col-span-5 space-y-6">
                  <div>
                    <label
                      htmlFor="purchase-input"
                      className="block text-sm font-semibold text-ink"
                    >
                      Proposed purchase amount
                    </label>
                    <div className="relative mt-2">
                      <span className="absolute left-4 top-1/2 -translate-y-1/2 font-bold text-muted text-lg">
                        ₹
                      </span>
                      <input
                        id="purchase-input"
                        type="number"
                        min="0"
                        max="10000"
                        step="100"
                        value={purchaseAmount}
                        onChange={(e) => setPurchaseAmount(e.target.value)}
                        placeholder="1500"
                        className="min-h-[44px] w-full rounded-control border border-border bg-elevated py-3.5 pl-9 pr-4 text-lg font-bold text-ink placeholder:text-muted/50 focus:border-lime focus:outline-none focus:ring-2 focus:ring-lime/40"
                      />
                    </div>
                  </div>

                  {/* Preset Pills */}
                  <div>
                    <span className="text-xs font-medium text-muted">Quick presets:</span>
                    <div className="mt-2 flex flex-wrap gap-2">
                      {[500, 1200, 2500, 4500].map((preset) => (
                        <button
                          key={preset}
                          type="button"
                          onClick={() => {
                            setPurchaseAmount(preset.toString());
                            handleSimulate(preset);
                          }}
                          className="rounded-lg border border-border/80 bg-elevated px-3 py-1.5 text-xs font-medium text-ink transition hover:border-lime hover:text-lime"
                        >
                          ₹{preset.toLocaleString("en-IN")}
                        </button>
                      ))}
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={() => handleSimulate()}
                    className={cn(
                      buttonVariants({ variant: "primary" }),
                      "w-full justify-center text-base font-bold shadow-[0_0_20px_rgba(139,92,246,0.35)]"
                    )}
                  >
                    Simulate Impact
                  </button>

                  <div className="rounded-xl bg-elevated/70 p-3.5 text-xs text-muted flex items-start gap-2.5 border border-border/50">
                    <AlertCircle size={16} className="text-lime shrink-0 mt-0.5" />
                    <span>
                      Based on a 30-day plan with ₹7,402 safe-to-spend, equal to a starting daily allowance of about ₹246/day.
                    </span>
                  </div>
                </div>

                {/* Animated Simulation Results */}
                <div className="lg:col-span-7 rounded-2xl border border-border bg-elevated/80 p-6 sm:p-7">
                  <div className="flex items-center justify-between border-b border-border/60 pb-4">
                    <span className="text-xs font-bold uppercase tracking-wider text-muted">
                      Simulation Outcome
                    </span>
                    <span
                      className={cn(
                        "rounded-full px-2.5 py-0.5 text-xs font-bold border",
                        simulatedState.purchase > 4000
                          ? "bg-pink/15 text-pink border-pink/30"
                          : simulatedState.purchase > 2000
                          ? "bg-watch/15 text-watch border-watch/30"
                          : "bg-good/15 text-good border-good/30"
                      )}
                    >
                      {simulatedState.purchase > 4000
                        ? "High impact"
                        : simulatedState.purchase > 2000
                        ? "Moderate impact"
                        : "Safe impact"}
                    </span>
                  </div>

                  <AnimatePresence mode="wait">
                    <motion.div
                      key={simulatedState.purchase}
                      initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: -10 }}
                      transition={{ duration: 0.25 }}
                      className="mt-6 space-y-6"
                    >
                      {/* Before / After Comparison Grid */}
                      <div className="grid grid-cols-2 gap-4">
                        {/* Remaining Balance */}
                        <div className="rounded-xl border border-border bg-surface p-4">
                          <span className="text-xs text-muted">New Month Balance</span>
                          <div className="mt-1 font-[family-name:var(--font-display)] text-2xl font-extrabold text-ink tabular-nums">
                            {formatMoneyWhole(Math.round(simulatedState.newBalance * 100))}
                          </div>
                          <div className="mt-1 text-xs text-pink flex items-center gap-1 font-semibold">
                            <span>-₹{simulatedState.purchase.toLocaleString("en-IN")}</span>
                            <span className="text-[11px] text-muted font-normal">(Spent)</span>
                          </div>
                        </div>

                        {/* Daily Allowance */}
                        <div className="rounded-xl border border-border bg-surface p-4">
                          <span className="text-xs text-muted">New Daily Allowance</span>
                          <div className="mt-1 font-[family-name:var(--font-display)] text-2xl font-extrabold text-lime tabular-nums">
                            ₹{simulatedState.newDailyAllowance}
                            <span className="text-xs font-normal text-muted"> / day</span>
                          </div>
                          <div className="mt-1 text-xs text-pink flex items-center gap-1 font-semibold">
                            {simulatedState.deltaDaily > 0 ? (
                              <span>-₹{simulatedState.deltaDaily}/day drop</span>
                            ) : (
                              <span className="text-good">+₹{Math.abs(simulatedState.deltaDaily)}/day</span>
                            )}
                          </div>
                        </div>
                      </div>

                      {/* Visual Indicator of Runway Drop */}
                      <div className="space-y-2">
                        <div className="flex justify-between text-xs">
                          <span className="text-muted">Budget utilization</span>
                          <span className="font-semibold text-ink">
                            {Math.round((simulatedState.purchase / 10000) * 100)}% consumed by this purchase
                          </span>
                        </div>
                        <div className="h-3 w-full overflow-hidden rounded-full bg-border">
                          <div
                            className={cn(
                              "h-full transition-all duration-500 rounded-full",
                              simulatedState.purchase > 4000
                                ? "bg-pink"
                                : simulatedState.purchase > 2000
                                ? "bg-watch"
                                : "bg-lime"
                            )}
                            style={{
                              width: `${Math.min(
                                100,
                                Math.max(5, (simulatedState.purchase / 10000) * 100)
                              )}%`,
                            }}
                          />
                        </div>
                      </div>

                      <div className="rounded-lg bg-surface/90 border border-border/70 p-3.5 text-xs text-muted leading-relaxed">
                        <strong className="text-ink">The Verdict:</strong> Spending{" "}
                        <span className="text-ink font-semibold">
                          ₹{simulatedState.purchase.toLocaleString("en-IN")}
                        </span>{" "}
                        now means you must sustain your remaining month on{" "}
                        <span className="text-lime font-bold">
                          ₹{simulatedState.newDailyAllowance}/day
                        </span>{" "}
                        instead of about ₹246/day.
                      </div>
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 6. FINAL CTA SECTION */}
        <section className="relative overflow-hidden py-24 sm:py-32">
          {/* Background Ambient Glow */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 -z-10 flex items-center justify-center"
          >
            <div className="h-96 w-[700px] rounded-full bg-gradient-to-r from-brand/20 via-lime/10 to-brand/20 blur-[130px]" />
          </div>

          <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
            <div className="inline-flex items-center gap-2 rounded-full border border-lime/30 bg-lime/10 px-3.5 py-1 text-xs font-semibold text-lime">
              <Sparkles size={13} />
              <span>Take Control Today</span>
            </div>              <h2 className="mt-6 font-[family-name:var(--font-display)] text-3xl font-extrabold tracking-tight text-ink sm:text-4xl lg:text-5xl leading-tight text-balance">
              Ready to master your next 30 days?
            </h2>

            <p className="mt-6 text-lg text-muted sm:text-xl leading-relaxed max-w-2xl mx-auto">
              Join Ruvo and eliminate end-of-month financial anxiety. Plan with precision, simulate with
              confidence, and protect your savings.
            </p>

            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <Link
                to="/app"
                className={cn(
                  buttonVariants({ variant: "primary", size: "default" }),
                  "group px-8 text-lg font-bold shadow-[0_0_35px_rgba(139,92,246,0.4)] hover:brightness-110"
                )}
              >
                <span>Launch Ruvo Workspace</span>
                <ChevronRight
                  size={20}
                  className="transition-transform group-hover:translate-x-1"
                />
              </Link>
            </div>
          </div>
        </section>
      </main>

      {/* 7. FOOTER */}
      <footer id="about" className="border-t border-border bg-surface/60 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 md:grid-cols-12 md:items-start">
            {/* Brand column */}
            <div className="md:col-span-5 space-y-4">
              <Link to="/" className="flex items-center gap-2.5">
                <span className="grid size-9 place-items-center rounded-xl bg-lime text-bg-base">
                  <Sparkles size={18} />
                </span>
                <span className="font-[family-name:var(--font-display)] text-xl font-bold text-ink">
                  Ruvo
                </span>
              </Link>
              <p className="max-w-sm text-sm leading-relaxed text-muted">
                The 30-day money map that replaces guesswork with actionable daily clarity. Engineered
                for individuals who want calm, disciplined control over their personal finances.
              </p>
              <div className="text-xs font-medium text-lime/90">
                Built for learning & mathematical financial planning.
              </div>
            </div>

            {/* Navigation links */}
            <div className="md:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8">
              <div>
                <h4 className="text-xs font-semibold tracking-wider uppercase text-ink">Product</h4>
                <ul className="mt-4 space-y-2.5 text-sm text-muted">
                  <li>
                    <a href="#features" className="hover:text-ink transition">
                      Features
                    </a>
                  </li>
                  <li>
                    <a href="#how-it-works" className="hover:text-ink transition">
                      How It Works
                    </a>
                  </li>
                  <li>
                    <a href="#demo" className="hover:text-ink transition">
                      Interactive Demo
                    </a>
                  </li>
                  <li>
                    <Link to="/app" className="hover:text-ink transition">
                      App Workspace
                    </Link>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="text-xs font-semibold tracking-wider uppercase text-ink">Navigation</h4>
                <ul className="mt-4 space-y-2.5 text-sm text-muted">
                  <li>
                    <Link to="/app" className="hover:text-ink transition">
                      Dashboard
                    </Link>
                  </li>
                  <li>
                    <Link to="/app/plan" className="hover:text-ink transition">
                      Plan Builder
                    </Link>
                  </li>
                  <li>
                    <Link to="/app/goals" className="hover:text-ink transition">
                      Savings Goals
                    </Link>
                  </li>
                  <li>
                    <Link to="/app/simulate" className="hover:text-ink transition">
                      Simulation Engine
                    </Link>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="text-xs font-semibold tracking-wider uppercase text-ink">Philosophy</h4>
                <p className="mt-4 text-xs leading-relaxed text-muted">
                  Ruvo never presents placeholder calculations as real guidance. Every forecast and
                  allowance is derived from pure financial domain logic.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border/60 pt-8 sm:flex-row text-xs text-muted">
            <p>© {new Date().getFullYear()} Ruvo. All rights reserved.</p>
            <p className="flex items-center gap-1">
              Engineered with React, TypeScript & Tailwind CSS.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
