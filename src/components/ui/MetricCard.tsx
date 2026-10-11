import type { ElementType } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { TrendingDown, TrendingUp, Minus } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { cn } from "@/lib/utils";

export type MetricCardProps = {
  icon: ElementType;
  label: string;
  value: string;
  trend?: "up" | "down" | "neutral";
  trendLabel?: string;
  className?: string;
};

export function MetricCard({
  icon: Icon,
  label,
  value,
  trend,
  trendLabel,
  className,
}: MetricCardProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      whileHover={shouldReduceMotion ? undefined : { y: -3, scale: 1.01 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
      className="h-full"
    >
      <Card
        className={cn(
          "group relative flex h-full flex-col justify-between overflow-hidden p-5 transition-colors duration-200 hover:border-lime/40 hover:bg-elevated/70",
          className,
        )}
      >
        <div className="flex items-start justify-between gap-3">
          <div className="flex size-10 shrink-0 items-center justify-center rounded-control bg-elevated text-ink transition-colors group-hover:bg-brand-soft group-hover:text-lime">
            <Icon size={19} aria-hidden="true" />
          </div>

          {trend && (
            <span
              className={cn(
                "inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-xs font-medium tabular-nums",
                trend === "up" && "bg-good/15 text-good",
                trend === "down" && "bg-bad/15 text-bad",
                trend === "neutral" && "bg-elevated text-muted",
              )}
            >
              {trend === "up" && <TrendingUp size={13} aria-hidden="true" />}
              {trend === "down" && <TrendingDown size={13} aria-hidden="true" />}
              {trend === "neutral" && <Minus size={13} aria-hidden="true" />}
              {trendLabel}
            </span>
          )}
        </div>

        <div className="mt-4">
          <p className="font-[family-name:var(--font-display)] text-2xl font-bold tracking-tight text-ink tabular-nums sm:text-3xl">
            {value}
          </p>
          <p className="mt-1 text-xs font-medium text-muted transition-colors group-hover:text-ink/80">
            {label}
          </p>
        </div>
      </Card>
    </motion.div>
  );
}
