import type { HTMLAttributes, PropsWithChildren } from "react";
import { cn } from "@/lib/utils";
type BadgeProps = PropsWithChildren<HTMLAttributes<HTMLSpanElement> & { tone?: "good" | "watch" | "neutral" }>;
const tones = { good: "bg-lime text-bg-base", watch: "bg-watch text-bg-base", neutral: "border border-border bg-elevated text-muted" };
export function Badge({ children, tone = "neutral", className, ...props }: BadgeProps) { return <span className={cn("inline-flex items-center rounded-full px-2.5 py-1 text-xs font-semibold", tones[tone], className)} {...props}>{children}</span>; }
