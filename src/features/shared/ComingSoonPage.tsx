import { motion, useReducedMotion } from "framer-motion";
import { ArrowLeft, Construction, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { Card } from "@/components/ui/Card";
import { buttonVariants } from "@/components/ui/buttonVariants";

type ComingSoonPageProps = {
  title: string;
  description: string;
  progress: number;
};

export function ComingSoonPage({
  title,
  description,
  progress,
}: ComingSoonPageProps) {
  const shouldReduceMotion = useReducedMotion();
  const boundedProgress = Math.max(0, Math.min(100, progress));

  return (
    <motion.div
      initial={shouldReduceMotion ? undefined : { opacity: 0, y: 12 }}
      animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
      className="mx-auto grid max-w-2xl gap-8 font-[family-name:var(--font-body)]"
    >
      <Link
        to="/app"
        className="inline-flex w-fit items-center gap-2 text-sm font-semibold text-muted transition-colors hover:text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime"
      >
        <ArrowLeft size={16} aria-hidden="true" />
        Back to overview
      </Link>

      <section>
        <div className="flex items-center gap-2">
          <span className="size-2 rounded-full bg-lime" />
          <p className="text-sm font-medium tracking-wide text-lime">In progress</p>
        </div>
        <h1 className="mt-2 font-[family-name:var(--font-display)] text-3xl font-bold tracking-tight text-ink sm:text-4xl">
          {title}
        </h1>
        <p className="mt-3 max-w-xl text-sm leading-7 text-muted sm:text-base">
          {description}
        </p>
      </section>

      <Card className="relative overflow-hidden border-border/80 bg-gradient-to-br from-surface via-surface to-elevated/70 p-6 shadow-xl sm:p-8">
        {/* Subtle decorative background circles */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-16 -top-16 size-48 rounded-full bg-brand-soft/50 blur-2xl"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-16 -left-16 size-48 rounded-full bg-lime/10 blur-2xl"
        />

        <div className="relative z-10">
          <div className="flex items-center justify-between">
            <div className="grid size-14 place-items-center rounded-2xl border border-lime/30 bg-brand-soft text-lime shadow-inner">
              <Construction size={28} aria-hidden="true" />
            </div>
            <div className="flex items-center gap-1.5 rounded-full border border-border bg-elevated/60 px-3 py-1 text-xs font-semibold text-muted">
              <Sparkles size={13} className="text-lime" />
              Engineering phase
            </div>
          </div>

          <h2 className="mt-6 font-[family-name:var(--font-display)] text-xl font-bold tracking-tight text-ink">
            Built on a shared engine
          </h2>
          <p className="mt-2 max-w-lg text-sm leading-relaxed text-muted">
            This destination is real, but the feature waits for the finance domain layer so it cannot show inconsistent or fictional results.
          </p>

          {/* Animated Progress Section */}
          <div className="mt-8 grid gap-2.5">
            <div className="flex justify-between gap-3 text-sm font-medium">
              <span className="text-muted">Foundation progress</span>
              <span className="font-bold tabular-nums text-lime">
                {boundedProgress}%
              </span>
            </div>
            <div className="h-2.5 w-full overflow-hidden rounded-full bg-elevated">
              <motion.div
                initial={shouldReduceMotion ? { width: `${boundedProgress}%` } : { width: 0 }}
                animate={{ width: `${boundedProgress}%` }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.15 }}
                className="h-full rounded-full bg-lime shadow-sm"
              />
            </div>
          </div>
        </div>
      </Card>

      <Link
        to="/app"
        className={buttonVariants({
          variant: "secondary",
          className: "w-fit transition-all hover:border-lime/40",
        })}
      >
        Return to overview
      </Link>
    </motion.div>
  );
}
