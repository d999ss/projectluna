import * as React from "react"

export function Button({
  variant = "primary",
  className,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement> & { variant?: "primary"|"secondary"|"ghost"|"danger" }) {
  const base = "inline-flex items-center justify-center rounded-[var(--radius-button)] px-[16px] py-[10px] text-[15px] font-[600] transition-colors"
  const map: Record<string,string> = {
    primary:  "bg-brand text-brand-foreground hover:opacity-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand/40",
    secondary:"bg-muted text-foreground hover:opacity-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/30",
    ghost:    "bg-transparent text-foreground hover:bg-muted/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-border/60",
    danger:   "bg-danger text-white hover:opacity-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-danger/40",
  }
  return <button className={[base, map[variant], className || ""].join(" ")} {...props} />
}
