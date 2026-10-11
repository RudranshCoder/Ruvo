import type { HTMLAttributes, PropsWithChildren } from "react";
import { cn } from "@/lib/utils";

type CardProps = PropsWithChildren<HTMLAttributes<HTMLElement>>;

export function Card({ children, className, ...props }: CardProps) {
  return <section className={cn("rounded-card border border-border bg-surface", className)} {...props}>{children}</section>;
}
