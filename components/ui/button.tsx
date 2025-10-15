import * as React from "react";
import { cn } from "@/lib/utils";

type Variant = "default" | "primary" | "secondary" | "ghost" | "outline" | "danger";
type Size = "sm" | "md";

export function Button({
  variant = "default",
  size = "md",
  className,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement> & { variant?: Variant; size?: Size }) {
  const base =
    "inline-flex items-center justify-center rounded-[var(--radius-button)] transition-all select-none focus:outline-none focus:ring-2 focus:ring-brand/60";

  const sizes = {
    sm: "h-9 px-3 text-sm",
    md: "h-11 px-5 text-sm",
  }[size];

  const variants = {
    default:  "bg-brand text-brand-foreground hover:brightness-110",
    primary:  "bg-brand text-brand-foreground hover:brightness-110",
    secondary:"bg-accent text-foreground hover:brightness-110",
    ghost:    "bg-transparent text-foreground hover:bg-foreground/5",
    outline:  "border border-border text-foreground hover:bg-foreground/5",
    danger:   "bg-danger text-white hover:brightness-110",
  }[variant];

  return <button className={cn(base, sizes, variants, className)} {...props} />;
}
