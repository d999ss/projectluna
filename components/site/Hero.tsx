import Link from "next/link";
import { ReactNode } from "react";

interface HeroProps {
  title: string;
  subtitle?: string;
  description?: string;
  primaryCTA?: { text: string; href: string };
  secondaryCTA?: { text: string; href: string };
  children?: ReactNode;
}

export function Hero({
  title,
  subtitle,
  description,
  primaryCTA,
  secondaryCTA,
  children,
}: HeroProps) {
  return (
    <div className="relative overflow-hidden pt-32 pb-16 md:pt-40 md:pb-24">
      {/* Graphite vignette with whisper of brand red */}
      <div className="absolute inset-0 -z-10 bg-vignette" />
      <div className="absolute inset-0 -z-10 bg-vignette-red" />

      <div className="max-w-container mx-auto px-4 text-center">
        {subtitle && (
          <div className="mb-6 inline-block rounded-full border border-brand/20 bg-brand/10 px-4 py-1.5 text-[11px] font-medium uppercase tracking-[0.18em] text-brand">
            {subtitle}
          </div>
        )}
        <h1 className="text-display mb-6 text-foreground">
          {title}
        </h1>
        {description && (
          <p className="text-lead text-muted-foreground/90 mx-auto mb-10 max-w-[72ch]">
            {description}
          </p>
        )}
        {(primaryCTA || secondaryCTA) && (
          <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
            {primaryCTA && (
              <Link
                href={primaryCTA.href}
                className="inline-flex items-center justify-center rounded-full px-8 py-3 bg-brand text-brand-foreground font-semibold hover:brightness-110 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand/60"
              >
                {primaryCTA.text}
              </Link>
            )}
            {secondaryCTA && (
              <Link
                href={secondaryCTA.href}
                className="inline-flex items-center justify-center rounded-full px-8 py-3 border border-border/60 text-foreground hover:bg-muted/60 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand/60"
              >
                {secondaryCTA.text}
              </Link>
            )}
          </div>
        )}
        {children && <div className="mt-12">{children}</div>}
      </div>
    </div>
  );
}

