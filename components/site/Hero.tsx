import Link from "next/link";
import Image from "next/image";
import { ReactNode } from "react";

interface HeroProps {
  title: string;
  subtitle?: string;
  description?: string;
  primaryCTA?: { text: string; href: string };
  secondaryCTA?: { text: string; href: string };
  children?: ReactNode;
  backgroundImage?: string;
  backgroundVideo?: string;
  size?: "default" | "large" | "extra-large";
  align?: "center" | "left";
}

export function Hero({
  title,
  subtitle,
  description,
  primaryCTA,
  secondaryCTA,
  children,
  backgroundImage,
  backgroundVideo,
  size = "default",
  align = "center",
}: HeroProps) {
  const sizeClasses = {
    "default": "",
    "large": "min-h-[400px] md:min-h-[600px]",
    "extra-large": "min-h-[600px] md:min-h-[800px]"
  };

  const hasMediaBackground = backgroundVideo || backgroundImage;

  return (
    <div className={`relative overflow-hidden ${hasMediaBackground ? 'h-[100vh] flex items-end' : 'pt-32 pb-16 md:pt-40 md:pb-24'} ${!hasMediaBackground ? sizeClasses[size] : ''}`}>
      {backgroundVideo ? (
        <>
          {/* Background video with overlay */}
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 -z-10 h-full w-full object-cover"
          >
            <source src={backgroundVideo} type="video/mp4" />
          </video>
          <div className="absolute inset-0 -z-10 bg-gradient-to-t from-black/95 via-black/75 to-black/40" />
        </>
      ) : backgroundImage ? (
        <>
          {/* Background image with overlay */}
          <Image
            src={backgroundImage}
            alt=""
            fill
            className="absolute inset-0 -z-10 object-cover"
            priority
          />
          <div className="absolute inset-0 -z-10 bg-background/80" />
        </>
      ) : (
        <>
          {/* Graphite vignette with whisper of brand red */}
          <div className="absolute inset-0 -z-10 bg-vignette" />
          <div className="absolute inset-0 -z-10 bg-vignette-red" />
        </>
      )}

      <div className={`max-w-container mx-auto px-4 ${hasMediaBackground ? 'pb-6 md:pb-10' : ''} ${align === 'left' ? 'text-left' : 'text-center'} w-full`}>
        {subtitle && (
          <div className="mb-6 inline-block rounded-full border border-white/30 bg-white/10 backdrop-blur-md px-4 py-1.5 text-[11px] font-medium uppercase tracking-[0.18em] text-white">
            {subtitle}
          </div>
        )}
        <h1 className={`text-display mb-6 ${hasMediaBackground ? 'text-white' : 'text-foreground'}`}>
          {title}
        </h1>
        {description && (
          <p className={`text-lead mb-10 max-w-[72ch] ${align === 'center' ? 'mx-auto' : ''} ${hasMediaBackground ? 'text-white/90' : 'text-muted-foreground/90'}`}>
            {description}
          </p>
        )}
        {(primaryCTA || secondaryCTA) && (
          <div className={`flex flex-col gap-3 sm:flex-row ${align === 'center' ? 'items-center justify-center' : 'items-start'}`}>
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
                className={`inline-flex items-center justify-center rounded-full px-8 py-3 border ${hasMediaBackground ? 'border-white/60 text-white hover:bg-white/10' : 'border-border/60 text-foreground hover:bg-muted/60'} transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand/60`}
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

