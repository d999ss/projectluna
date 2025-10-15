import { Card, CardBody } from "@/components/ui/Card";
import { StatCard } from "@/components/site/StatCard";

export const metadata = { title: "Design System | Tiger BioSciences" }

export default function DesignSystemPage() {
  return (
    <main className="container mx-auto max-w-7xl px-4 md:px-6 py-12 md:py-16 mt-16">
      <h1 className="text-4xl font-bold md:text-5xl">Luna Design System</h1>
      <p className="text-muted-foreground mt-4 max-w-2xl text-lg">
        Complete visual reference for Tiger BioSciences. All tokens, components, and patterns in one place.
        Update here to change globally across the site.
      </p>

      {/* Color Tokens */}
      <section className="mt-16">
        <h2 className="mb-8 text-3xl font-semibold">Color Tokens</h2>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardBody>
              <div className="mb-4 h-20 rounded-lg bg-background border border-border" />
              <div className="text-sm font-mono">--background</div>
              <div className="text-xs text-muted-foreground">Primary background</div>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <div className="mb-4 h-20 rounded-lg bg-foreground" />
              <div className="text-sm font-mono">--foreground</div>
              <div className="text-xs text-muted-foreground">Primary text</div>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <div className="mb-4 h-20 rounded-lg bg-muted" />
              <div className="text-sm font-mono">--muted</div>
              <div className="text-xs text-muted-foreground">Muted backgrounds</div>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <div className="mb-4 h-20 rounded-lg bg-border border border-foreground" />
              <div className="text-sm font-mono">--border</div>
              <div className="text-xs text-muted-foreground">Border color</div>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <div className="mb-4 h-20 rounded-lg bg-card border border-border" />
              <div className="text-sm font-mono">--card</div>
              <div className="text-xs text-muted-foreground">Card backgrounds</div>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <div className="mb-4 h-20 rounded-lg bg-gradient-to-r  " />
              <div className="text-sm font-mono">-500 → blue-500</div>
              <div className="text-xs text-muted-foreground">Luna accent gradient</div>
            </CardBody>
          </Card>
        </div>
      </section>

      {/* Typography */}
      <section className="mt-16">
        <h2 className="mb-8 text-3xl font-semibold">Typography</h2>
        <Card>
          <CardBody className="space-y-8">
            <div>
              <h1 className="text-4xl font-bold md:text-6xl lg:text-7xl">
                Heading 1 - Hero Headlines
              </h1>
              <code className="text-muted-foreground mt-2 block text-xs">
                text-4xl md:text-6xl lg:text-7xl font-bold
              </code>
            </div>
            
            <div>
              <h2 className="text-3xl font-semibold md:text-5xl">
                Heading 2 - Section Titles
              </h2>
              <code className="text-muted-foreground mt-2 block text-xs">
                text-3xl md:text-5xl font-semibold
              </code>
            </div>
            
            <div>
              <h3 className="text-2xl font-semibold md:text-3xl">
                Heading 3 - Card Titles
              </h3>
              <code className="text-muted-foreground mt-2 block text-xs">
                text-2xl md:text-3xl font-semibold
              </code>
            </div>
            
            <div>
              <h4 className="text-xl font-semibold">
                Heading 4 - Subsections
              </h4>
              <code className="text-muted-foreground mt-2 block text-xs">
                text-xl font-semibold
              </code>
            </div>
            
            <div>
              <p className="text-lg leading-relaxed">
                Body Large - Hero descriptions and important paragraphs. Leading-relaxed for readability.
              </p>
              <code className="text-muted-foreground mt-2 block text-xs">
                text-lg leading-relaxed
              </code>
            </div>
            
            <div>
              <p className="text-base leading-normal">
                Body Regular - Standard paragraph text. Most common throughout the site.
              </p>
              <code className="text-muted-foreground mt-2 block text-xs">
                text-base leading-normal
              </code>
            </div>
            
            <div>
              <p className="text-sm text-muted-foreground">
                Body Small - Metadata, captions, and supporting text.
              </p>
              <code className="text-muted-foreground mt-2 block text-xs">
                text-sm text-muted-foreground
              </code>
            </div>

            <div>
              <p className="text-xs uppercase tracking-[0.14em] text-muted-foreground">
                Overline - Category labels and tags
              </p>
              <code className="text-muted-foreground mt-2 block text-xs">
                text-xs uppercase tracking-[0.14em] text-muted-foreground
              </code>
            </div>
          </CardBody>
        </Card>
      </section>

      {/* Buttons */}
      <section className="mt-16">
        <h2 className="mb-8 text-3xl font-semibold">Buttons</h2>
        <Card>
          <CardBody className="space-y-6">
            <div>
              <button className="rounded-lg bg-brand px-8 py-3 text-base font-semibold text-white transition-all hover:bg-brand hover:shadow-lg">
                Primary Button
              </button>
              <code className="text-muted-foreground mt-2 block text-xs">
                bg-brand hover:bg-brand
              </code>
            </div>

            <div>
              <button className="rounded-lg border border-border bg-background/50 px-8 py-3 text-base font-semibold transition-all hover:bg-background/80">
                Secondary Button
              </button>
              <code className="text-muted-foreground mt-2 block text-xs">
                border-border bg-background/50
              </code>
            </div>

            <div>
              <button className="rounded-lg bg-gradient-to-r   px-8 py-3 text-base font-semibold text-white transition-all hover:shadow-lg">
                Gradient Button
              </button>
              <code className="text-muted-foreground mt-2 block text-xs">
                bg-gradient-to-r  
              </code>
            </div>

            <div>
              <a href="#" className="text-base font-semibold underline hover:text-brand">
                Text Link
              </a>
              <code className="text-muted-foreground mt-2 block text-xs">
                underline hover:text-brand
              </code>
            </div>
          </CardBody>
        </Card>
      </section>

      {/* Glass Cards */}
      <section className="mt-16">
        <h2 className="mb-8 text-3xl font-semibold">Glass Cards</h2>
        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <CardBody>
              <h3 className="text-xl font-semibold">Standard Glass Card</h3>
              <p className="text-muted-foreground mt-2">
                Rounded-2xl with backdrop-blur and subtle border. Core primitive for all content containers.
              </p>
              <code className="text-muted-foreground mt-4 block text-xs">
                border-[rgba(12,16,24,.12)] bg-[rgba(255,255,255,.55)] backdrop-blur-xl
              </code>
            </CardBody>
          </Card>

          <StatCard
            title="StatCard Component"
            value="42"
            description="Specialized glass card with value display, icon support, and hover effects"
          />
        </div>
      </section>

      {/* Spacing */}
      <section className="mt-16">
        <h2 className="mb-8 text-3xl font-semibold">Spacing Scale</h2>
        <Card>
          <CardBody className="space-y-4">
            <div className="flex items-center gap-4">
              <div className="w-20 text-sm font-mono">gap-2</div>
              <div className="flex gap-2">
                <div className="size-8 bg-brand" />
                <div className="size-8 bg-brand" />
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-20 text-sm font-mono">gap-4</div>
              <div className="flex gap-4">
                <div className="size-8 bg-brand" />
                <div className="size-8 bg-brand" />
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-20 text-sm font-mono">gap-6</div>
              <div className="flex gap-6">
                <div className="size-8 bg-brand" />
                <div className="size-8 bg-brand" />
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-20 text-sm font-mono">gap-8</div>
              <div className="flex gap-8">
                <div className="size-8 bg-brand" />
                <div className="size-8 bg-brand" />
              </div>
            </div>
          </CardBody>
        </Card>
      </section>

      {/* Border Radius */}
      <section className="mt-16">
        <h2 className="mb-8 text-3xl font-semibold">Border Radius</h2>
        <Card>
          <CardBody>
            <div className="grid gap-6 md:grid-cols-4">
              <div>
                <div className="mb-2 h-20 w-full rounded-lg bg-brand" />
                <div className="text-sm font-mono">rounded-lg</div>
              </div>
              <div>
                <div className="mb-2 h-20 w-full rounded-xl bg-brand" />
                <div className="text-sm font-mono">rounded-xl</div>
              </div>
              <div>
                <div className="mb-2 h-20 w-full rounded-2xl bg-brand" />
                <div className="text-sm font-mono">rounded-2xl</div>
              </div>
              <div>
                <div className="mb-2 h-20 w-full rounded-full bg-brand" />
                <div className="text-sm font-mono">rounded-full</div>
              </div>
            </div>
          </CardBody>
        </Card>
      </section>

      {/* Gradients */}
      <section className="mt-16">
        <h2 className="mb-8 text-3xl font-semibold">Luna Gradients</h2>
        <div className="grid gap-4 md:grid-cols-2">
          <Card>
            <CardBody>
              <div className="mb-4 h-32 rounded-lg bg-gradient-to-r  " />
              <div className="text-sm font-semibold">Primary Gradient</div>
              <code className="text-muted-foreground mt-1 block text-xs">
                bg-gradient-to-r  
              </code>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <div className="mb-4 h-32 rounded-lg bg-gradient-to-br  " />
              <div className="text-sm font-semibold">Diagonal Gradient</div>
              <code className="text-muted-foreground mt-1 block text-xs">
                bg-gradient-to-br  
              </code>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <div className="mb-4 h-32 rounded-lg bg-gradient-to-r /20 /20" />
              <div className="text-sm font-semibold">Subtle Gradient (20% opacity)</div>
              <code className="text-muted-foreground mt-1 block text-xs">
                /20 /20
              </code>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <h3 className="from-foreground  to-foreground mb-4 bg-gradient-to-r bg-clip-text text-2xl font-bold text-transparent">
                Text Gradient Example
              </h3>
              <div className="text-sm font-semibold">Gradient Text</div>
              <code className="text-muted-foreground mt-1 block text-xs">
                bg-gradient-to-r from-foreground  to-foreground bg-clip-text text-transparent
              </code>
            </CardBody>
          </Card>
        </div>
      </section>

      {/* Grid Layouts */}
      <section className="mt-16">
        <h2 className="mb-8 text-3xl font-semibold">Grid Layouts</h2>
        
        <h3 className="mb-4 text-xl font-semibold">2-Column Grid (md:grid-cols-2)</h3>
        <div className="mb-8 grid gap-4 md:grid-cols-2">
          <StatCard title="Column 1" description="Responsive 2-column grid" />
          <StatCard title="Column 2" description="Collapses to 1 column on mobile" />
        </div>

        <h3 className="mb-4 text-xl font-semibold">3-Column Grid (md:grid-cols-3)</h3>
        <div className="mb-8 grid gap-4 md:grid-cols-3">
          <StatCard title="Column 1" />
          <StatCard title="Column 2" />
          <StatCard title="Column 3" />
        </div>

        <h3 className="mb-4 text-xl font-semibold">4-Column Grid (sm:grid-cols-2 lg:grid-cols-4)</h3>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <StatCard title="Col 1" />
          <StatCard title="Col 2" />
          <StatCard title="Col 3" />
          <StatCard title="Col 4" />
        </div>
      </section>

      {/* Icons & Values */}
      <section className="mt-16">
        <h2 className="mb-8 text-3xl font-semibold">StatCard Variants</h2>
        <div className="grid gap-6 md:grid-cols-3">
          <StatCard
            value="100%"
            title="With Value"
            description="Display key metrics and statistics"
          />
          
          <StatCard
            title="Title Only"
            description="Simple card with title and description"
          />
          
          <StatCard
            value="42K+"
            title="With Gradient Value"
            description="Values automatically get -blue gradient"
          />
        </div>
      </section>

      {/* Forms */}
      <section className="mt-16">
        <h2 className="mb-8 text-3xl font-semibold">Form Elements</h2>
        <Card>
          <CardBody className="space-y-4">
            <div>
              <label className="mb-2 block text-sm font-medium">Text Input</label>
              <input
                type="text"
                placeholder="Enter text..."
                className="w-full rounded-md border border-black/10 bg-white/50 px-3 py-2 dark:border-white/10 dark:bg-black/50"
              />
              <code className="text-muted-foreground mt-1 block text-xs">
                rounded-md border border-black/10 bg-white/50 dark:border-white/10 dark:bg-black/50
              </code>
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium">Select Dropdown</label>
              <select className="w-full rounded-md border border-black/10 bg-white/50 px-3 py-2 dark:border-white/10 dark:bg-black/50">
                <option>Option 1</option>
                <option>Option 2</option>
                <option>Option 3</option>
              </select>
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium">Textarea</label>
              <textarea
                placeholder="Enter message..."
                rows={4}
                className="w-full rounded-md border border-black/10 bg-white/50 px-3 py-2 dark:border-white/10 dark:bg-black/50"
              />
            </div>
          </CardBody>
        </Card>
      </section>

      {/* Component Patterns */}
      <section className="mt-16">
        <h2 className="mb-8 text-3xl font-semibold">Component Patterns</h2>
        
        <h3 className="mb-4 text-xl font-semibold">Page Header Pattern</h3>
        <Card>
          <CardBody>
            <div className="text-xs uppercase tracking-[0.14em] text-muted-foreground">CATEGORY</div>
            <h1 className="mt-2 text-3xl font-semibold md:text-4xl">Page Title</h1>
            <p className="text-muted-foreground mt-2 max-w-2xl">
              Supporting description text that provides context and helps users understand the page content.
            </p>
          </CardBody>
        </Card>

        <h3 className="mb-4 mt-8 text-xl font-semibold">Section Pattern</h3>
        <Card>
          <CardBody>
            <h2 className="mb-4 text-center text-3xl font-semibold md:text-5xl">
              Section Title
            </h2>
            <p className="text-muted-foreground mx-auto max-w-2xl text-center text-lg">
              Section description that explains what this section contains. Usually 1-2 sentences.
            </p>
          </CardBody>
        </Card>
      </section>

      {/* Breakpoints */}
      <section className="mt-16">
        <h2 className="mb-8 text-3xl font-semibold">Responsive Breakpoints</h2>
        <Card>
          <CardBody>
            <div className="space-y-3">
              <div className="flex items-center justify-between border-b border-border pb-3">
                <span className="font-mono text-sm">Default (mobile)</span>
                <span className="text-muted-foreground text-sm">&lt; 640px</span>
              </div>
              <div className="flex items-center justify-between border-b border-border pb-3">
                <span className="font-mono text-sm">sm:</span>
                <span className="text-muted-foreground text-sm">≥ 640px</span>
              </div>
              <div className="flex items-center justify-between border-b border-border pb-3">
                <span className="font-mono text-sm">md:</span>
                <span className="text-muted-foreground text-sm">≥ 768px</span>
              </div>
              <div className="flex items-center justify-between border-b border-border pb-3">
                <span className="font-mono text-sm">lg:</span>
                <span className="text-muted-foreground text-sm">≥ 1024px</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="font-mono text-sm">xl:</span>
                <span className="text-muted-foreground text-sm">≥ 1280px</span>
              </div>
            </div>
          </CardBody>
        </Card>
      </section>

      {/* Usage Guidelines */}
      <section className="mt-16 mb-16">
        <h2 className="mb-8 text-3xl font-semibold">Usage Guidelines</h2>
        <Card>
          <CardBody className="space-y-6">
            <div>
              <h3 className="mb-2 text-lg font-semibold">✅ Do This</h3>
              <ul className="text-muted-foreground space-y-2 text-sm">
                <li>• Use glass cards (Card/StatCard) for all content containers</li>
                <li>• Use theme tokens (--background, --foreground, etc.)</li>
                <li>• Use Tailwind utility classes</li>
                <li>• Use grid layouts for responsive design</li>
                <li>• Use -blue gradients for accents</li>
                <li>• Use consistent spacing (gap-4, gap-6, gap-8)</li>
              </ul>
            </div>

            <div>
              <h3 className="mb-2 text-lg font-semibold text-red-600">❌ Don&apos;t Do This</h3>
              <ul className="space-y-2 text-sm text-red-600">
                <li>• Never use tables for layout</li>
                <li>• Never use &lt;hr&gt; tags</li>
                <li>• Never use inline styles (except in primitives)</li>
                <li>• Never import node:fs/path in client components</li>
                <li>• Never bypass theme tokens with hardcoded colors</li>
              </ul>
            </div>

            <div>
              <h3 className="mb-2 text-lg font-semibold">🔧 Quality Commands</h3>
              <div className="space-y-2 font-mono text-sm">
                <div className="rounded bg-muted p-2">npm run check:theme</div>
                <div className="rounded bg-muted p-2">npm run check:layout</div>
                <div className="rounded bg-muted p-2">npm run check:content</div>
                <div className="rounded bg-muted p-2">npm run prepush</div>
              </div>
            </div>
          </CardBody>
        </Card>
      </section>
    </main>
  );
}

