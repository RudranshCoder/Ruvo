import {
  LayoutDashboard,
  Landmark,
  PiggyBank,
  SlidersHorizontal,
  Sparkles,
} from "lucide-react";
import { NavLink, Outlet, useLocation } from "react-router-dom";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/Badge";

const links = [
  { to: "/app", label: "Overview", icon: LayoutDashboard, end: true },
  { to: "/app/plan", label: "Plan", icon: Landmark },
  { to: "/app/goals", label: "Goals", icon: PiggyBank },
  {
    to: "/app/simulate",
    label: "Simulate",
    icon: SlidersHorizontal,
    special: true,
  },
];

export function AppShell() {
  const location = useLocation();
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="min-h-screen bg-bg-base font-[family-name:var(--font-body)] text-ink antialiased">
      {/* Mobile Sticky Header */}
      <header className="sticky top-0 z-20 flex items-center justify-between border-b border-border bg-bg-base/80 px-4 py-3 backdrop-blur-md md:hidden">
        <NavLink
          to="/"
          className="flex items-center gap-2 font-[family-name:var(--font-display)] text-base font-bold tracking-tight text-ink transition-opacity hover:opacity-90"
        >
          <span className="grid size-8 place-items-center rounded-xl bg-lime text-bg-base shadow-sm">
            <Sparkles size={16} />
          </span>
          Ruvo
        </NavLink>
        <div className="flex items-center gap-2">
          <Badge tone="good" className="text-[11px] py-0.5">
            Day 1 of 30
          </Badge>
          <div
            title="User Profile"
            className="grid size-8 place-items-center rounded-full border border-border bg-elevated font-[family-name:var(--font-display)] text-xs font-semibold text-lime shadow-inner"
          >
            R
          </div>
        </div>
      </header>

      {/* Main Layout Container */}
      <div className="mx-auto grid max-w-7xl md:grid-cols-[240px_minmax(0,1fr)]">
        {/* Desktop Sidebar */}
        <aside className="sticky top-0 hidden h-screen flex-col border-r border-border bg-gradient-to-b from-surface/90 via-surface/60 to-bg-base/90 px-4 py-6 backdrop-blur-md md:flex">
          {/* Logo & Brand */}
          <NavLink
            to="/"
            className="mb-8 flex items-center gap-2.5 font-[family-name:var(--font-display)] text-xl font-bold tracking-tight text-ink transition-transform hover:scale-[1.02]"
          >
            <span className="grid size-9 place-items-center rounded-xl bg-lime text-bg-base shadow-md shadow-lime/20">
              <Sparkles size={18} />
            </span>
            Ruvo
          </NavLink>

          {/* Period Badge Widget */}
          <div className="mb-6 rounded-control border border-border/80 bg-elevated/70 p-3">
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-medium uppercase tracking-wider text-muted">
                Cycle
              </span>
              <Badge tone="good" className="text-[10px] px-2 py-0.5 font-bold">
                Day 1 of 30
              </Badge>
            </div>
            <p className="mt-1 text-xs text-muted">October 2026 plan</p>
          </div>

          {/* Navigation Items */}
          <nav aria-label="Main navigation" className="grid gap-1.5">
            {links.map(({ to, label, icon: Icon, end, special }) => (
              <NavLink
                key={to}
                to={to}
                end={end}
                className={({ isActive }) =>
                  cn(
                    "group relative flex min-h-11 items-center gap-3 rounded-control px-3.5 text-sm font-medium transition-all duration-200",
                    isActive
                      ? "border-l-2 border-lime bg-brand-soft text-ink font-semibold shadow-sm"
                      : "text-muted hover:bg-elevated hover:text-ink",
                    special && !isActive && "text-lime hover:bg-lime/10",
                  )
                }
              >
                {({ isActive }) => (
                  <>
                    <Icon
                      size={18}
                      aria-hidden="true"
                      className={cn(
                        "transition-transform duration-200 group-hover:scale-110",
                        special && !isActive && "text-lime",
                      )}
                    />
                    <span className="flex-1">{label}</span>
                    {special && (
                      <span className="rounded-full bg-lime/20 px-1.5 py-0.5 text-[10px] font-semibold text-lime">
                        Tool
                      </span>
                    )}
                  </>
                )}
              </NavLink>
            ))}
          </nav>

          {/* Sidebar Footer with User Profile */}
          <div className="mt-auto border-t border-border/60 pt-4">
            <div className="flex items-center gap-3 rounded-control bg-elevated/40 p-2 transition-colors hover:bg-elevated">
              <div className="grid size-9 shrink-0 place-items-center rounded-full border border-lime/30 bg-brand-soft font-[family-name:var(--font-display)] text-sm font-bold text-lime shadow-inner">
                R
              </div>
              <div className="min-w-0 flex-1">
                <p className="truncate text-xs font-semibold text-ink">Rudra</p>
                <p className="truncate text-[11px] text-muted">October Budget</p>
              </div>
            </div>
            <p className="mt-3 px-2 text-[11px] leading-4 text-muted/80">
              A calmer way to see the month ahead.
            </p>
          </div>
        </aside>

        {/* Main Content Area with Animated Outlet */}
        <main className="min-w-0 px-4 pb-28 pt-6 sm:px-6 md:px-10 md:py-10">
          <AnimatePresence mode="wait">
            <motion.div
              key={location.pathname}
              initial={
                shouldReduceMotion
                  ? { opacity: 0 }
                  : { opacity: 0, y: 10 }
              }
              animate={{ opacity: 1, y: 0 }}
              exit={
                shouldReduceMotion
                  ? { opacity: 0 }
                  : { opacity: 0, y: -10 }
              }
              transition={{ duration: 0.22, ease: "easeOut" }}
            >
              <Outlet />
            </motion.div>
          </AnimatePresence>
        </main>
      </div>

      {/* Mobile Bottom Navigation */}
      <nav
        aria-label="Mobile navigation"
        className="fixed inset-x-0 bottom-0 z-30 grid grid-cols-4 items-center border-t border-border bg-surface/95 px-2 pb-[max(0.6rem,env(safe-area-inset-bottom))] pt-2 backdrop-blur-lg md:hidden"
      >
        {links.map(({ to, label, icon: Icon, end, special }) => (
          <NavLink
            key={to}
            to={to}
            end={end}
            className={({ isActive }) =>
              cn(
                "group relative flex min-h-12 flex-col items-center justify-center gap-1 rounded-control text-[11px] font-medium transition-colors",
                special
                  ? isActive
                    ? "font-bold text-bg-base"
                    : "text-ink"
                  : isActive
                    ? "font-semibold text-ink"
                    : "text-muted hover:text-ink",
              )
            }
          >
            {({ isActive }) => (
              <>
                {special ? (
                  <div
                    className={cn(
                      "-mt-3 flex size-10 items-center justify-center rounded-full shadow-lg transition-transform active:scale-95",
                      isActive
                        ? "bg-lime text-bg-base ring-4 ring-bg-base"
                        : "bg-lime/90 text-bg-base ring-2 ring-border",
                    )}
                  >
                    <Icon size={19} aria-hidden="true" />
                  </div>
                ) : (
                  <Icon
                    size={19}
                    aria-hidden="true"
                    className={cn(
                      "transition-transform group-hover:scale-105",
                      isActive ? "text-lime" : "text-muted",
                    )}
                  />
                )}
                <span className="relative">
                  {label}
                  {isActive && !special && (
                    <motion.span
                      layoutId="bottom-nav-dot"
                      className="absolute -bottom-1.5 left-1/2 size-1 -translate-x-1/2 rounded-full bg-lime"
                    />
                  )}
                </span>
              </>
            )}
          </NavLink>
        ))}
      </nav>
    </div>
  );
}
