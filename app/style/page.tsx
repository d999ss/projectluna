"use client"
import { useEffect, useState } from "react"

export default function StyleGuide() {
  const [mounted, setMounted] = useState(false)
  
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return <div>Loading...</div>
  }

  return (
    <main className="container mx-auto max-w-7xl px-4 md:px-6 py-10 md:py-14 mt-16 relative">
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 bg-vignette" />
      
      <header className="mb-8">
        <h1 className="text-h2">Style Guide — Technical Luna (Audi × J&J)</h1>
        <p className="text-lead text-muted-foreground mt-4">
          Design system showcasing Audi×J&J colors, typography, and components.
        </p>
      </header>

      {/* Colors */}
      <section className="mb-12">
        <h2 className="text-h3 mb-6">Colors</h2>
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4">
          <div className="rounded-lg border border-border/60 p-4">
            <div className="h-16 w-full rounded-md bg-brand mb-3" />
            <div className="text-sm font-medium">Brand (True Red)</div>
            <div className="text-xs text-muted-foreground">Primary CTA color</div>
          </div>
          <div className="rounded-lg border border-border/60 p-4">
            <div className="h-16 w-full rounded-md bg-accent mb-3" />
            <div className="text-sm font-medium">Accent (Steel)</div>
            <div className="text-xs text-muted-foreground">Secondary elements</div>
          </div>
          <div className="rounded-lg border border-border/60 p-4">
            <div className="h-16 w-full rounded-md bg-background border border-border mb-3" />
            <div className="text-sm font-medium">Background</div>
            <div className="text-xs text-muted-foreground">Page background</div>
          </div>
          <div className="rounded-lg border border-border/60 p-4">
            <div className="h-16 w-full rounded-md bg-muted mb-3" />
            <div className="text-sm font-medium">Muted</div>
            <div className="text-xs text-muted-foreground">Subtle backgrounds</div>
          </div>
        </div>
      </section>

      {/* Typography */}
      <section className="mb-12">
        <h2 className="text-h3 mb-6">Typography</h2>
        <div className="space-y-6">
          <div>
            <h1 className="text-display mb-2">Display Heading</h1>
            <p className="text-sm text-muted-foreground">text-display - Hero headlines</p>
          </div>
          <div>
            <h2 className="text-h2 mb-2">Section Heading</h2>
            <p className="text-sm text-muted-foreground">text-h2 - Section titles</p>
          </div>
          <div>
            <h3 className="text-h3 mb-2">Subsection Heading</h3>
            <p className="text-sm text-muted-foreground">text-h3 - Subsections</p>
          </div>
          <div>
            <p className="text-lead mb-2">Lead paragraph with serif font and tight line height for elegant reading experience.</p>
            <p className="text-sm text-muted-foreground">text-lead - Introduction text</p>
          </div>
          <div>
            <p className="text-body mb-2">Body text with proper spacing and readability for comfortable reading across all devices.</p>
            <p className="text-sm text-muted-foreground">text-body - Regular content</p>
          </div>
        </div>
      </section>

      {/* Buttons */}
      <section className="mb-12">
        <h2 className="text-h3 mb-6">Buttons</h2>
        <div className="flex flex-wrap gap-4">
          <button className="inline-flex items-center justify-center rounded-[var(--radius-button)] px-5 py-3 bg-brand text-brand-foreground font-semibold hover:opacity-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand/40">
            Primary
          </button>
          <button className="inline-flex items-center justify-center rounded-[var(--radius-button)] px-5 py-3 bg-muted text-foreground font-semibold hover:opacity-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/30">
            Secondary
          </button>
          <button className="inline-flex items-center justify-center rounded-[var(--radius-button)] px-5 py-3 bg-transparent text-foreground font-semibold hover:bg-muted/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-border/60">
            Ghost
          </button>
          <button className="inline-flex items-center justify-center rounded-[var(--radius-button)] px-5 py-3 border border-border/60 text-foreground font-semibold hover:bg-muted/60">
            Outline
          </button>
        </div>
      </section>

      {/* Cards */}
      <section className="mb-12">
        <h2 className="text-h3 mb-6">Cards</h2>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-[rgba(12,16,24,.12)] bg-[rgba(255,255,255,.55)] p-6 backdrop-blur-xl" style={{boxShadow: "inset 0 1px 0 0 rgba(255,255,255,.15)"}}>
            <h3 className="text-lg font-semibold mb-2">Glass Card</h3>
            <p className="text-muted-foreground">Luna glass effect with backdrop blur and inset highlight.</p>
          </div>
          <div className="rounded-2xl border border-border bg-card p-6">
            <h3 className="text-lg font-semibold mb-2">Standard Card</h3>
            <p className="text-muted-foreground">Clean card with theme-aware colors.</p>
          </div>
        </div>
      </section>

      {/* Gradients */}
      <section className="mb-12">
        <h2 className="text-h3 mb-6">Gradients</h2>
        <div className="grid gap-4 md:grid-cols-2">
          <div className="h-32 rounded-lg bg-vignette" />
          <div className="h-32 rounded-lg bg-vignette-red" />
        </div>
        <p className="text-sm text-muted-foreground mt-2">
          Graphite vignette (left) and red accent vignette (right)
        </p>
      </section>
    </main>
  )
}