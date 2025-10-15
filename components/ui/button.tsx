import * as React from "react";
import { cn } from "@/lib/utils";

type Variant = "default" | "primary" | "secondary" | "ghost" | "outline" | "danger";
type Size = "sm" | "md";
type Radius = "full" | "12" | "16" | "10";

export function Button({
  variant = "default",
  size = "md",
  radius = "full",
  className,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: Variant;
  size?: Size;
  radius?: Radius;
}) {
  const base =
    "inline-flex items-center justify-center transition-all select-none focus:outline-none focus:ring-2 focus:ring-brand/60";

  const sizes = {
    sm: "h-9 px-3 text-sm",
    md: "h-11 px-5 text-sm",
  }[size];

  const radiuses = {
    full: "rounded-full",
    "12": "rounded-[12px]",
    "16": "rounded-[16px]",
    "10": "rounded-[10px]",
  }[radius];

  const variants = {
    default:  "bg-brand text-brand-foreground hover:brightness-110",
    primary:  "bg-brand text-brand-foreground hover:brightness-110",
    secondary:"bg-accent text-foreground hover:brightness-110",
    ghost:    "bg-transparent text-foreground hover:bg-foreground/5",
    outline:  "border border-border text-foreground hover:bg-foreground/5",
    danger:   "bg-danger text-white hover:brightness-110",
  }[variant];

  return <button className={cn(base, sizes, radiuses, variants, className)} {...props} />;
}
