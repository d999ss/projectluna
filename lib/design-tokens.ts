/**
 * LUNA DESIGN TOKENS
 * Single source of truth for all design decisions.
 * Update here to change globally across the site.
 */

export const designTokens = {
  // Typography Scale
  typography: {
    hero: "text-4xl md:text-6xl lg:text-7xl font-bold",
    h1: "text-3xl md:text-4xl font-semibold",
    h2: "text-3xl md:text-5xl font-semibold",
    h3: "text-2xl md:text-3xl font-semibold",
    h4: "text-xl font-semibold",
    bodyLarge: "text-lg leading-relaxed",
    body: "text-base leading-normal",
    bodySmall: "text-sm",
    overline: "text-xs uppercase tracking-[0.14em] text-muted-foreground",
  },

  // Colors
  colors: {
    primary: "bg-brand",
    primaryHover: "hover:opacity-95",
    secondary: "bg-muted",
    secondaryHover: "hover:opacity-95",
    gradientFrom: "from-brand",
    gradientVia: "via-brand",
    gradientTo: "to-accent",
  },

  // Spacing
  spacing: {
    sectionPadding: "py-16 md:py-24",
    cardPadding: "p-6 md:p-8",
    containerMaxWidth: "max-w-7xl",
    contentMaxWidth: "max-w-2xl",
  },

  // Glass Card
  glass: {
    card: "rounded-2xl border border-black/10 bg-white/55 dark:border-white/10 dark:bg-white/5 backdrop-blur-xl",
    cardHover: "hover:border-black/15 hover:bg-white/65 dark:hover:border-white/15 dark:hover:bg-white/10",
    shadow: "shadow-[inset_0_1px_0_rgba(255,255,255,0.35)]",
  },

  // Buttons
  buttons: {
    primary: "rounded-lg bg-brand px-8 py-3 text-base font-semibold text-brand-foreground transition-all hover:opacity-95 hover:shadow-lg",
    secondary: "rounded-lg border border-border bg-background/50 px-8 py-3 text-base font-semibold transition-all hover:bg-background/80",
    gradient: "rounded-lg bg-gradient-to-r from-brand to-accent px-8 py-3 text-base font-semibold text-brand-foreground transition-all hover:shadow-lg",
  },

  // Forms
  forms: {
    input: "rounded-md border border-black/10 bg-white/50 px-3 py-2 dark:border-white/10 dark:bg-black/50",
    textarea: "rounded-md border border-black/10 bg-white/50 px-3 py-2 min-h-[120px] dark:border-white/10 dark:bg-black/50",
    select: "rounded-md border border-black/10 bg-white/50 px-3 py-2 dark:border-white/10 dark:bg-black/50",
  },

  // Grids
  grids: {
    cols2: "grid gap-6 md:grid-cols-2",
    cols3: "grid gap-6 md:grid-cols-3",
    cols4: "grid gap-4 sm:grid-cols-2 lg:grid-cols-4",
    autoFit: "grid gap-4 grid-cols-[repeat(auto-fit,minmax(280px,1fr))]",
  },

  // Border Radius
  radius: {
    sm: "rounded-lg",
    md: "rounded-xl",
    lg: "rounded-2xl",
    full: "rounded-full",
  },

  // Gradients
  gradients: {
    text: "bg-gradient-to-r from-foreground via-brand to-foreground bg-clip-text text-transparent",
    background: "bg-gradient-to-r from-brand to-accent",
    backgroundBr: "bg-gradient-to-br from-brand to-accent",
    subtle: "bg-gradient-to-r from-brand/20 to-accent/20",
  },
} as const

// Helper function to get token
export function token(category: keyof typeof designTokens, key: string): string {
  const cat = designTokens[category] as Record<string, string>
  return cat[key] || ""
}

