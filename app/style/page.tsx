"use client"
import { Card, CardBody } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Nav } from "@/components/site/Nav"
import { Footer } from "@/components/site/Footer"
import { Hero } from "@/components/site/Hero"
import { CodeBlock } from "@/components/ui/CodeBlock"
import Image from "next/image"
import Screenshot from "@/components/ui/screenshot"
import Logo from "@/components/ui/logo"
import Figma from "@/components/logos/figma"
import React from "@/components/logos/react"

export default function StyleGuide() {
  return (
    <>
      <Nav />
      <main className="container mx-auto max-w-7xl px-6 md:px-10 py-10 md:py-14 mt-16 relative">

      <header className="mb-12">
        <h1 className="text-display">Tiger BioSciences™ Styleguide</h1>
        <p className="text-lead text-muted-foreground mt-4">
          Design system showcasing Launch UI colors, typography, and components with Audi Red brand color.
        </p>
      </header>

      {/* Colors */}
      <section className="mb-12">
        <h2 className="text-h3 mb-6">Colors</h2>
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4">
          <Card>
            <CardBody>
              <div className="h-16 w-full rounded-md bg-brand mb-3" />
              <div className="text-sm font-medium">Brand (Audi Red)</div>
              <div className="text-xs text-muted-foreground">Primary CTA color</div>
            </CardBody>
          </Card>
          <Card>
            <CardBody>
              <div style={{ backgroundColor: "hsl(var(--accent))" }} className="h-16 w-full rounded-md border border-border mb-3" />
              <div className="text-sm font-medium">Accent</div>
              <div className="text-xs text-muted-foreground">Secondary elements</div>
            </CardBody>
          </Card>
          <Card>
            <CardBody>
              <div style={{ backgroundColor: "hsl(var(--background))" }} className="h-16 w-full rounded-md border border-border mb-3" />
              <div className="text-sm font-medium">Background</div>
              <div className="text-xs text-muted-foreground">Page background</div>
            </CardBody>
          </Card>
          <Card>
            <CardBody>
              <div style={{ backgroundColor: "hsl(var(--muted))" }} className="h-16 w-full rounded-md border border-border mb-3" />
              <div className="text-sm font-medium">Muted</div>
              <div className="text-xs text-muted-foreground">Subtle backgrounds</div>
            </CardBody>
          </Card>
        </div>
      </section>

      {/* Typography */}
      <section className="mb-12">
        <h2 className="text-h3 mb-6">Typography</h2>

        {/* Font Families */}
        <div className="mb-8">
          <h3 className="text-lg font-semibold mb-4">Font Families</h3>
          <div className="grid gap-4 md:grid-cols-3">
            <Card>
              <CardBody>
                <div className="mb-3">
                  <p className="font-sans text-2xl">Aa Bb Cc 123</p>
                </div>
                <div className="text-sm font-medium">Sans Serif</div>
                <div className="text-xs text-muted-foreground">Inter Regular 400 (--font-sans / --font-body)</div>
              </CardBody>
            </Card>
            <Card>
              <CardBody>
                <div className="mb-3">
                  <p className="font-serif text-2xl">Aa Bb Cc 123</p>
                </div>
                <div className="text-sm font-medium">Serif</div>
                <div className="text-xs text-muted-foreground">Playfair Display (--font-serif)</div>
              </CardBody>
            </Card>
            <Card>
              <CardBody>
                <div className="mb-3">
                  <p className="font-mono text-2xl">Aa Bb Cc 123</p>
                </div>
                <div className="text-sm font-medium">Monospace</div>
                <div className="text-xs text-muted-foreground">System Mono (--font-mono)</div>
              </CardBody>
            </Card>
          </div>
        </div>

        {/* Heading Styles */}
        <div className="mb-8">
          <h3 className="text-lg font-semibold mb-4">Heading Styles</h3>
          <div className="space-y-6">
            <div>
              <h1 className="text-display mb-2">Display Heading</h1>
              <p className="text-sm text-muted-foreground">text-display / text-h1 - Archivo Light 300, 48-96px (clamp), tracking: -0.02em, line-height: 1.05</p>
            </div>
            <div>
              <h2 className="text-h2 mb-2">Section Heading</h2>
              <p className="text-sm text-muted-foreground">text-h2 - Archivo Light 300, 32-48px (clamp), tracking: -0.015em, line-height: 1.15</p>
            </div>
            <div>
              <h3 className="text-h3 mb-2">Subsection Heading</h3>
              <p className="text-sm text-muted-foreground">text-h3 - Archivo Light 300, 24px, tracking: -0.01em, line-height: 1.25</p>
            </div>
          </div>
        </div>

        {/* Body Text Styles */}
        <div className="mb-8">
          <h3 className="text-lg font-semibold mb-4">Body Text Styles</h3>
          <div className="space-y-6">
            <div>
              <p className="text-lead mb-2">Lead paragraph with elegant reading experience and comfortable line height for introductory content.</p>
              <p className="text-sm text-muted-foreground">text-lead - Inter Regular 400, 18px, line-height: 1.45</p>
            </div>
            <div>
              <p className="text-body mb-2">Body text with proper spacing and readability for comfortable reading across all devices. Perfect for longer form content.</p>
              <p className="text-sm text-muted-foreground">text-body - Inter Regular 400, 16px, line-height: 1.55</p>
            </div>
            <div>
              <p className="text-sm mb-2">Small text for captions, labels, and secondary information that requires less prominence.</p>
              <p className="text-xs text-muted-foreground">text-sm - Inter Regular 400, 14px (Tailwind default)</p>
            </div>
            <div>
              <p className="text-xs mb-2">Extra small text for fine print, metadata, and tertiary information.</p>
              <p className="text-xs text-muted-foreground">text-xs - Inter Regular 400, 12px (Tailwind default)</p>
            </div>
          </div>
        </div>

        {/* Titles & Labels */}
        <div className="mb-8">
          <h3 className="text-lg font-semibold mb-4">Titles & Labels</h3>
          <div className="space-y-6">
            <Card>
              <CardBody>
                <div className="space-y-4">
                  <div>
                    <div className="text-xl font-bold mb-1">Card Title</div>
                    <p className="text-xs text-muted-foreground">text-xl font-bold - Inter Regular 400, 20px - Large card/section titles</p>
                  </div>
                  <div>
                    <div className="text-lg font-semibold mb-1">Component Title</div>
                    <p className="text-xs text-muted-foreground">text-lg font-semibold - Inter Regular 400, 18px - Medium component titles</p>
                  </div>
                  <div>
                    <div className="text-base font-semibold mb-1">Subsection Title</div>
                    <p className="text-xs text-muted-foreground">text-base font-semibold - Inter Regular 400, 16px - Small subsection titles</p>
                  </div>
                  <div>
                    <div className="text-sm font-medium mb-1">Form Label</div>
                    <p className="text-xs text-muted-foreground">text-sm font-medium - Inter Regular 400, 14px - Input labels, field names</p>
                  </div>
                  <div>
                    <div className="text-xs font-medium uppercase tracking-wider text-foreground/90 mb-1">Section Label</div>
                    <p className="text-xs text-muted-foreground">text-xs font-medium uppercase tracking-wider - Inter Regular 400, 12px - Group headers, categories</p>
                  </div>
                  <div>
                    <div className="text-xs text-muted-foreground mb-1">Caption / Helper Text</div>
                    <p className="text-xs text-muted-foreground">text-xs text-muted-foreground - Inter Regular 400, 12px - Descriptions, metadata</p>
                  </div>
                </div>
              </CardBody>
            </Card>
          </div>
        </div>

        {/* Typography Specs */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Typography Specifications</h3>
          <div className="grid gap-4 md:grid-cols-2">
            <Card>
              <CardBody>
                <h4 className="text-sm font-semibold mb-3">Size Variables</h4>
                <div className="space-y-1 text-xs font-mono">
                  <div>--h1-size: clamp(48px, 5vw, 96px)</div>
                  <div>--h2-size: clamp(32px, 3.5vw, 48px)</div>
                  <div>--h3-size: 24px</div>
                  <div>--lead-size: 18px</div>
                  <div>--body-size: 16px</div>
                </div>
              </CardBody>
            </Card>
            <Card>
              <CardBody>
                <h4 className="text-sm font-semibold mb-3">Weight Variables</h4>
                <div className="space-y-1 text-xs font-mono">
                  <div>--h1-weight: 300 (Archivo Light)</div>
                  <div>--h2-weight: 300 (Archivo Light)</div>
                  <div>--h3-weight: 300 (Archivo Light)</div>
                  <div>--body-weight: 400 (Inter Regular)</div>
                </div>
              </CardBody>
            </Card>
            <Card>
              <CardBody>
                <h4 className="text-sm font-semibold mb-3">Letter Spacing (Tracking)</h4>
                <div className="space-y-1 text-xs font-mono">
                  <div>--h1-tracking: -0.02em</div>
                  <div>--h2-tracking: -0.015em</div>
                  <div>--h3-tracking: -0.01em</div>
                </div>
              </CardBody>
            </Card>
            <Card>
              <CardBody>
                <h4 className="text-sm font-semibold mb-3">Line Heights</h4>
                <div className="space-y-1 text-xs font-mono">
                  <div>--h1-line: 1.05</div>
                  <div>--h2-line: 1.15</div>
                  <div>--h3-line: 1.25</div>
                  <div>--lead-line: 1.45</div>
                  <div>--body-line: 1.55</div>
                </div>
              </CardBody>
            </Card>
          </div>
        </div>
      </section>

      {/* Buttons */}
      <section className="mb-12">
        <h2 className="text-h3 mb-6">Buttons</h2>

        <div className="mb-8">
          <h3 className="text-lg font-semibold mb-4">Button Variants</h3>
          <div className="space-y-4">
            <div className="flex flex-wrap gap-4">
              <Button variant="primary">Primary Button</Button>
              <Button variant="secondary">Secondary Button</Button>
              <Button variant="ghost">Ghost Button</Button>
              <Button variant="outline">Outline Button</Button>
              <Button variant="danger">Danger Button</Button>
            </div>
            <CodeBlock
              filename="Button.tsx"
              code={`<Button variant="primary">Primary Button</Button>
<Button variant="secondary">Secondary Button</Button>
<Button variant="ghost">Ghost Button</Button>
<Button variant="outline">Outline Button</Button>
<Button variant="danger">Danger Button</Button>`}
            />
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4">Button Radius Options</h3>
          <div className="space-y-4">
            <div className="flex flex-wrap gap-4">
              <Button variant="primary" radius="full">Full Rounded</Button>
              <Button variant="primary" radius="16">Radius 16px</Button>
              <Button variant="primary" radius="12">Radius 12px</Button>
              <Button variant="primary" radius="10">Radius 10px</Button>
            </div>
            <CodeBlock
              filename="Button.tsx"
              code={`<Button variant="primary" radius="full">Full Rounded</Button>
<Button variant="primary" radius="16">Radius 16px</Button>
<Button variant="primary" radius="12">Radius 12px</Button>
<Button variant="primary" radius="10">Radius 10px</Button>`}
            />
          </div>
        </div>
      </section>

      {/* Cards */}
      <section className="mb-12">
        <h2 className="text-h3 mb-6">Cards</h2>
        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <CardBody>
              <h3 className="text-lg font-semibold mb-2">Launch UI Card</h3>
              <p className="text-muted-foreground">Clean card with glass morphism effect, backdrop blur, and theme-aware colors.</p>
            </CardBody>
          </Card>
          <Card>
            <CardBody>
              <h3 className="text-lg font-semibold mb-2">Standard Card</h3>
              <p className="text-muted-foreground">Professional card design with proper spacing and borders from the Launch UI system.</p>
            </CardBody>
          </Card>
        </div>
      </section>

      {/* Images & Media */}
      <section className="mb-12">
        <h2 className="text-h3 mb-6">Images & Media</h2>

        {/* Next.js Image Component */}
        <div className="mb-8">
          <h3 className="text-lg font-semibold mb-4">Next.js Image Component</h3>
          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardBody>
                <div className="mb-3">
                  <Image
                    src="/images/01.png"
                    alt="Tiger BioSciences Product"
                    width={400}
                    height={200}
                    className="rounded-lg w-full object-cover"
                  />
                </div>
                <div className="text-sm font-medium">Standard Image</div>
                <div className="text-xs text-muted-foreground mt-1">Optimized Next.js Image component with lazy loading</div>
              </CardBody>
            </Card>
            <Card>
              <CardBody>
                <CodeBlock
                  filename="Image.tsx"
                  code={`import Image from "next/image"

<Image
  src="/images/01.png"
  alt="Description"
  width={400}
  height={200}
  className="rounded-lg"
/>`}
                />
              </CardBody>
            </Card>
          </div>
        </div>

        {/* Screenshot Component (Theme-Aware) */}
        <div className="mb-8">
          <h3 className="text-lg font-semibold mb-4">Screenshot Component (Theme-Aware)</h3>
          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardBody>
                <div className="mb-3">
                  <Screenshot
                    srcLight="/images/02.png"
                    srcDark="/images/06.png"
                    alt="Tiger BioSciences Technology"
                    width={600}
                    height={400}
                    className="rounded-lg w-full border border-border"
                  />
                </div>
                <div className="text-sm font-medium">Theme-Aware Screenshot</div>
                <div className="text-xs text-muted-foreground mt-1">Automatically switches between light/dark images based on theme</div>
              </CardBody>
            </Card>
            <Card>
              <CardBody>
                <CodeBlock
                  filename="Screenshot.tsx"
                  code={`import Screenshot from "@/components/ui/screenshot"

<Screenshot
  srcLight="/images/02.png"
  srcDark="/images/06.png"
  alt="Technology Preview"
  width={600}
  height={400}
  className="rounded-lg"
/>`}
                />
              </CardBody>
            </Card>
          </div>
        </div>

        {/* Logo Component */}
        <div className="mb-8">
          <h3 className="text-lg font-semibold mb-4">Logo Component</h3>
          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardBody>
                <div className="space-y-4 mb-3">
                  <Logo image={Figma} name="Figma" width={24} height={24} />
                  <Logo image={React} name="React" version="19.1.1" width={24} height={24} />
                  <Logo image={Figma} name="Figma" badge="New" width={24} height={24} />
                </div>
                <div className="text-sm font-medium">SVG Logo with Badge</div>
                <div className="text-xs text-muted-foreground mt-1">Component for displaying logos with optional version and badge</div>
              </CardBody>
            </Card>
            <Card>
              <CardBody>
                <CodeBlock
                  filename="Logo.tsx"
                  code={`import Logo from "@/components/ui/logo"
import Figma from "@/components/logos/figma"

<Logo
  image={Figma}
  name="Figma"
  badge="New"
  width={24}
  height={24}
/>`}
                />
              </CardBody>
            </Card>
          </div>
        </div>

        {/* Images in Cards */}
        <div className="mb-8">
          <h3 className="text-lg font-semibold mb-4">Images in Glass Morphism Cards</h3>
          <div className="grid gap-6 md:grid-cols-3">
            <Card>
              <CardBody className="p-0">
                <Image
                  src="/images/03.png"
                  alt="Tiger Product"
                  width={400}
                  height={250}
                  className="rounded-t-2xl w-full object-cover"
                />
                <div className="p-6">
                  <h4 className="font-semibold mb-2">Product Card</h4>
                  <p className="text-sm text-muted-foreground">Image with content below in glass card</p>
                </div>
              </CardBody>
            </Card>
            <Card>
              <CardBody>
                <div className="flex items-center gap-4">
                  <Image
                    src="/images/boredoptimism_close_up_of_Tiger_eye_--ar_169_--raw_--profile__d0b094ae-d672-42f0-b38e-82826641a7d4_2.png"
                    alt="Tiger Eye Detail"
                    width={64}
                    height={64}
                    className="rounded-lg object-cover"
                  />
                  <div>
                    <h4 className="font-semibold text-sm">Icon Card</h4>
                    <p className="text-xs text-muted-foreground">Side-by-side layout</p>
                  </div>
                </div>
              </CardBody>
            </Card>
            <Card>
              <CardBody className="relative h-[200px] flex items-center justify-center overflow-hidden">
                <Image
                  src="/images/04.png"
                  alt="Tiger Background"
                  fill
                  className="object-cover opacity-20 absolute inset-0"
                />
                <div className="relative z-10 text-center">
                  <h4 className="font-semibold mb-2">Overlay Card</h4>
                  <p className="text-sm text-muted-foreground">Image as background</p>
                </div>
              </CardBody>
            </Card>
          </div>
        </div>

        {/* Responsive Image Patterns */}
        <div className="mb-8">
          <h3 className="text-lg font-semibold mb-4">Responsive Image Patterns</h3>
          <Card>
            <CardBody>
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <div className="mb-3">
                    <Image
                      src="/images/05.png"
                      alt="Tiger Responsive"
                      width={800}
                      height={400}
                      className="rounded-lg w-full h-auto"
                    />
                  </div>
                  <div className="text-sm font-medium">Full Width Responsive</div>
                  <div className="text-xs text-muted-foreground mt-1">Uses w-full and h-auto for fluid sizing</div>
                </div>
                <div>
                  <CodeBlock
                    filename="Responsive.tsx"
                    code={`<Image
  src="/images/05.png"
  alt="Responsive"
  width={800}
  height={400}
  className="w-full h-auto"
/>`}
                  />
                </div>
              </div>
            </CardBody>
          </Card>
        </div>

        {/* Image Sizes Reference */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Common Image Sizes</h3>
          <Card>
            <CardBody>
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-3 text-sm font-mono">
                  <div><span className="text-brand">Hero Image:</span> 1920x1080 (16:9)</div>
                  <div><span className="text-brand">Product Card:</span> 800x600 (4:3)</div>
                  <div><span className="text-brand">Thumbnail:</span> 400x300 (4:3)</div>
                  <div><span className="text-brand">Avatar:</span> 200x200 (1:1)</div>
                </div>
                <div className="space-y-3 text-sm font-mono">
                  <div><span className="text-brand">OG Image:</span> 1200x630</div>
                  <div><span className="text-brand">Icon:</span> 512x512 (1:1)</div>
                  <div><span className="text-brand">Banner:</span> 1200x300 (4:1)</div>
                  <div><span className="text-brand">Portrait:</span> 600x800 (3:4)</div>
                </div>
              </div>
            </CardBody>
          </Card>
        </div>
      </section>

      {/* Spacing & Radii */}
      <section className="mb-12">
        <h2 className="text-h3 mb-6">Spacing & Border Radius</h2>
        <div className="grid gap-4 md:grid-cols-2">
          <Card>
            <CardBody>
              <h3 className="text-sm font-semibold mb-3">Spacing Scale</h3>
              <div className="space-y-2 text-xs font-mono">
                <div className="flex items-center gap-2">
                  <div className="w-1 h-1 bg-brand"></div>
                  <span>--space-1: 4px</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-brand"></div>
                  <span>--space-2: 8px</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-brand"></div>
                  <span>--space-3: 12px</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-brand"></div>
                  <span>--space-4: 16px</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 bg-brand"></div>
                  <span>--space-5: 20px</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 bg-brand"></div>
                  <span>--space-6: 24px</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-brand"></div>
                  <span>--space-7: 32px</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 bg-brand"></div>
                  <span>--space-8: 40px</span>
                </div>
              </div>
            </CardBody>
          </Card>
          <Card>
            <CardBody>
              <h3 className="text-sm font-semibold mb-3">Border Radius</h3>
              <div className="space-y-3">
                <div>
                  <div className="w-16 h-16 bg-brand mb-2" style={{ borderRadius: '0.75rem' }}></div>
                  <div className="text-xs font-mono">--radius: 12px</div>
                </div>
                <div>
                  <div className="w-16 h-16 bg-brand mb-2" style={{ borderRadius: '1rem' }}></div>
                  <div className="text-xs font-mono">--radius-card: 16px</div>
                </div>
                <div>
                  <div className="w-16 h-16 bg-brand mb-2" style={{ borderRadius: '0.625rem' }}></div>
                  <div className="text-xs font-mono">--radius-button: 10px</div>
                </div>
              </div>
            </CardBody>
          </Card>
        </div>
      </section>

      {/* Shadows */}
      <section className="mb-12">
        <h2 className="text-h3 mb-6">Shadows</h2>
        <div className="grid gap-4 md:grid-cols-2">
          <Card>
            <CardBody>
              <div className="bg-background p-6 rounded-lg mb-3" style={{ boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.12)' }}>
                <p className="text-sm">Inset Highlight</p>
              </div>
              <div className="text-xs font-mono">--shadow-inset</div>
              <div className="text-xs text-muted-foreground">inset 0 1px 0 rgba(255,255,255,0.12)</div>
            </CardBody>
          </Card>
          <Card>
            <CardBody>
              <div className="bg-background p-6 rounded-lg mb-3" style={{ boxShadow: '0 8px 24px rgba(0,0,0,0.08)' }}>
                <p className="text-sm">Card Shadow</p>
              </div>
              <div className="text-xs font-mono">--shadow-card</div>
              <div className="text-xs text-muted-foreground">0 8px 24px rgba(0,0,0,0.08)</div>
            </CardBody>
          </Card>
        </div>
      </section>

      {/* Color Variables */}
      <section className="mb-12">
        <h2 className="text-h3 mb-6">Color Variables (HSL)</h2>
        <div className="grid gap-4 md:grid-cols-2">
          <Card>
            <CardBody>
              <h3 className="text-sm font-semibold mb-3">Light Mode</h3>
              <div className="space-y-1 text-xs font-mono">
                <div>--background: 0 0% 100%</div>
                <div>--foreground: 0 0% 10%</div>
                <div>--card: 0 0% 98%</div>
                <div>--muted: 0 0% 90%</div>
                <div>--border: 0 0% 85%</div>
                <div className="text-brand font-semibold">--brand: 355 86% 45% (#D5101F)</div>
                <div>--accent: 0 0% 62%</div>
              </div>
            </CardBody>
          </Card>
          <Card>
            <CardBody>
              <h3 className="text-sm font-semibold mb-3">Dark Mode</h3>
              <div className="space-y-1 text-xs font-mono">
                <div>--background: 0 0% 4%</div>
                <div>--foreground: 0 0% 98%</div>
                <div>--card: 0 0% 9%</div>
                <div>--muted: 0 0% 15%</div>
                <div>--border: 0 0% 16%</div>
                <div className="text-brand font-semibold">--brand: 355 86% 45% (#D5101F)</div>
                <div>--accent: 0 0% 55%</div>
              </div>
            </CardBody>
          </Card>
        </div>
      </section>

      {/* Gradients */}
      <section className="mb-12">
        <h2 className="text-h3 mb-6">Background Effects</h2>
        <div className="grid gap-4 md:grid-cols-2">
          <Card>
            <CardBody className="h-32 bg-vignette">
              <p className="text-sm font-medium">Vignette Effect</p>
              <p className="text-xs text-muted-foreground mt-1">.bg-vignette</p>
            </CardBody>
          </Card>
          <Card>
            <CardBody className="h-32 bg-vignette-red">
              <p className="text-sm font-medium">Red Accent Vignette</p>
              <p className="text-xs text-muted-foreground mt-1">.bg-vignette-red</p>
            </CardBody>
          </Card>
        </div>
      </section>

      {/* Form Elements */}
      <section className="mb-12">
        <h2 className="text-h3 mb-6">Form Elements</h2>
        <Card>
          <CardBody className="space-y-4">
            <div>
              <label className="mb-2 block text-sm font-medium">Text Input</label>
              <input
                type="text"
                placeholder="Enter text..."
                className="w-full rounded-md border border-border/60 bg-card/70 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-brand/50"
              />
              <code className="text-muted-foreground mt-1 block text-xs">
                border-border/60 bg-card/70
              </code>
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium">Select Dropdown</label>
              <select className="w-full rounded-md border border-border/60 bg-card/70 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-brand/50">
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
                className="w-full rounded-md border border-border/60 bg-card/70 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-brand/50"
              />
            </div>
          </CardBody>
        </Card>
      </section>

      {/* Responsive Breakpoints */}
      <section className="mb-12">
        <h2 className="text-h3 mb-6">Responsive Breakpoints</h2>
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

      {/* Badges */}
      <section className="mb-12">
        <h2 className="text-h3 mb-6">Badges</h2>
        <Card>
          <CardBody>
            <div className="flex flex-wrap gap-3 items-center">
              <Badge variant="default">Default</Badge>
              <Badge variant="brand">Brand</Badge>
              <Badge variant="secondary">Secondary</Badge>
              <Badge variant="destructive">Destructive</Badge>
              <Badge variant="outline">Outline</Badge>
              <Badge variant="glass">Glass</Badge>
              <Badge size="sm">Small</Badge>
            </div>
            <div className="mt-4 text-xs text-muted-foreground">
              <code>variant: default | brand | secondary | destructive | outline | glass</code>
              <br />
              <code>size: default | sm</code>
            </div>
          </CardBody>
        </Card>
      </section>

      {/* Accordion */}
      <section className="mb-12">
        <h2 className="text-h3 mb-6">Accordion</h2>
        <Card>
          <CardBody>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>What is Launch UI?</AccordionTrigger>
                <AccordionContent>
                  Launch UI is a comprehensive design system built on Shadcn/ui and Tailwind CSS, featuring glass morphism effects,
                  theme-aware colors, and professional components.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>How do I customize colors?</AccordionTrigger>
                <AccordionContent>
                  All colors are defined as CSS variables in globals.css. Update the HSL values for light and dark mode separately.
                  In this project, only Audi Red (#D5101F) is customized.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>What typography system is used?</AccordionTrigger>
                <AccordionContent>
                  The system uses Archivo Light (300) for all headings, Inter Regular (400) for body text, Playfair Display for serif, and system mono fonts.
                  Typography utilities include text-display, text-h2, text-h3, text-lead, and text-body.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </CardBody>
        </Card>
      </section>

      {/* Container Sizes */}
      <section className="mb-12">
        <h2 className="text-h3 mb-6">Container Sizes</h2>
        <Card>
          <CardBody className="space-y-4">
            <div>
              <div className="text-sm font-medium mb-2">Standard Container</div>
              <div className="bg-brand/10 p-4 rounded-lg border border-brand/20">
                <code className="text-xs">max-w-7xl (1280px) - Default page container</code>
              </div>
            </div>
            <div>
              <div className="text-sm font-medium mb-2">Content Container</div>
              <div className="bg-brand/10 p-4 rounded-lg border border-brand/20 max-w-4xl">
                <code className="text-xs">max-w-4xl (896px) - Prose content</code>
              </div>
            </div>
            <div>
              <div className="text-sm font-medium mb-2">Narrow Container</div>
              <div className="bg-brand/10 p-4 rounded-lg border border-brand/20 max-w-2xl">
                <code className="text-xs">max-w-2xl (672px) - Forms, centered content</code>
              </div>
            </div>
          </CardBody>
        </Card>
      </section>

      {/* Grid Layouts */}
      <section className="mb-12">
        <h2 className="text-h3 mb-6">Grid Layouts</h2>

        <div className="mb-6">
          <h3 className="text-base font-semibold mb-3">2-Column Grid</h3>
          <div className="grid gap-4 md:grid-cols-2">
            <Card><CardBody><p className="text-sm">Column 1</p><code className="text-xs text-muted-foreground">md:grid-cols-2</code></CardBody></Card>
            <Card><CardBody><p className="text-sm">Column 2</p><code className="text-xs text-muted-foreground">Responsive: 1 col mobile → 2 col tablet</code></CardBody></Card>
          </div>
        </div>

        <div className="mb-6">
          <h3 className="text-base font-semibold mb-3">3-Column Grid</h3>
          <div className="grid gap-4 md:grid-cols-3">
            <Card><CardBody className="text-center"><p className="text-sm">Col 1</p></CardBody></Card>
            <Card><CardBody className="text-center"><p className="text-sm">Col 2</p></CardBody></Card>
            <Card><CardBody className="text-center"><p className="text-sm">Col 3</p></CardBody></Card>
          </div>
          <code className="text-xs text-muted-foreground mt-2 block">md:grid-cols-3</code>
        </div>

        <div>
          <h3 className="text-base font-semibold mb-3">4-Column Grid</h3>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <Card><CardBody className="text-center"><p className="text-xs">1</p></CardBody></Card>
            <Card><CardBody className="text-center"><p className="text-xs">2</p></CardBody></Card>
            <Card><CardBody className="text-center"><p className="text-xs">3</p></CardBody></Card>
            <Card><CardBody className="text-center"><p className="text-xs">4</p></CardBody></Card>
          </div>
          <code className="text-xs text-muted-foreground mt-2 block">sm:grid-cols-2 lg:grid-cols-4 - Mobile: 1 col → Tablet: 2 cols → Desktop: 4 cols</code>
        </div>
      </section>

      {/* Animations */}
      <section className="mb-12">
        <h2 className="text-h3 mb-6">Animations</h2>
        <Card>
          <CardBody className="space-y-4">
            <div>
              <h3 className="text-sm font-semibold mb-2">Available Animations</h3>
              <div className="space-y-2 text-xs font-mono">
                <div className="flex items-center justify-between p-2 bg-muted/50 rounded">
                  <span>animate-appear</span>
                  <span className="text-muted-foreground">Fade in with slide up</span>
                </div>
                <div className="flex items-center justify-between p-2 bg-muted/50 rounded">
                  <span>animate-appear-zoom</span>
                  <span className="text-muted-foreground">Fade in with scale</span>
                </div>
                <div className="flex items-center justify-between p-2 bg-muted/50 rounded">
                  <span>animate-accordion-down</span>
                  <span className="text-muted-foreground">Accordion expand</span>
                </div>
                <div className="flex items-center justify-between p-2 bg-muted/50 rounded">
                  <span>animate-accordion-up</span>
                  <span className="text-muted-foreground">Accordion collapse</span>
                </div>
              </div>
            </div>
            <div className="pt-4 border-t border-border">
              <p className="text-xs text-muted-foreground">
                Animations are defined in globals.css using @keyframes and CSS variables.
                Use Tailwind&apos;s animate utilities to apply them to elements.
              </p>
            </div>
          </CardBody>
        </Card>
      </section>

      {/* Hero Component Examples */}
      <section className="mb-16">
        <h2 className="text-h3 mb-6">Hero Component Variants</h2>
        <div className="space-y-8">
          {/* Video Hero */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Video Background Hero</h3>
            <Card>
              <CardBody className="p-0 overflow-hidden">
                <Hero
                  title="Video Background Hero"
                  description="Looping MP4 video background with auto-play and overlay for text readability"
                  backgroundVideo="/images/social_boredoptimism_reflection_in_the_cats_eyes_--ar_9151_--bs_1_--_fd91aae9-9fc0-4a4c-98d7-2d0bf3ced741_0.mp4"
                  size="large"
                />
              </CardBody>
            </Card>
            <div className="mt-3">
              <CodeBlock
                code={`<Hero
  title="Video Background Hero"
  description="Looping MP4 video background"
  backgroundVideo="/images/video.mp4"
  size="large"
/>`}
                language="tsx"
              />
            </div>
          </div>

          {/* Extra Large Hero */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Extra Large Hero (600-800px)</h3>
            <Card>
              <CardBody className="p-0 overflow-hidden">
                <Hero
                  title="Extra Large Hero"
                  subtitle="Homepage Feature"
                  description="Maximum impact hero section for homepage with 600-800px minimum height"
                  backgroundImage="/images/boredoptimism_Tiger_--ar_169_--raw_--profile_el37if6_--v_7_f42cc65d-2974-4137-9511-e38d2d45d406_2.png"
                  size="extra-large"
                />
              </CardBody>
            </Card>
            <div className="mt-3">
              <CodeBlock
                code={`<Hero
  title="Extra Large Hero"
  subtitle="Homepage Feature"
  description="Maximum impact hero section"
  backgroundImage="/images/hero.png"
  size="extra-large"
/>`}
                language="tsx"
              />
            </div>
          </div>

          {/* Large Hero */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Large Hero (400-600px)</h3>
            <Card>
              <CardBody className="p-0 overflow-hidden">
                <Hero
                  title="Large Hero Section"
                  description="Standard page hero with 400-600px minimum height for solutions and product pages"
                  backgroundImage="/images/02.png"
                  size="large"
                />
              </CardBody>
            </Card>
            <div className="mt-3">
              <CodeBlock
                code={`<Hero
  title="Large Hero Section"
  description="Standard page hero"
  backgroundImage="/images/hero.png"
  size="large"
/>`}
                language="tsx"
              />
            </div>
          </div>

          {/* Default Hero */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Default Hero</h3>
            <Card>
              <CardBody className="p-0 overflow-hidden">
                <Hero
                  title="Default Hero"
                  description="Gradient background with content-based height"
                />
              </CardBody>
            </Card>
            <div className="mt-3">
              <CodeBlock
                code={`<Hero
  title="Default Hero"
  description="Gradient background"
/>`}
                language="tsx"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Usage Guidelines */}
      <section className="mb-16">
        <h2 className="text-h3 mb-6">Usage Guidelines</h2>
        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <CardBody>
              <h3 className="mb-4 text-lg font-semibold text-brand">✅ Best Practices</h3>
              <ul className="text-muted-foreground space-y-2 text-sm">
                <li>• Use Launch UI Card components for all content containers</li>
                <li>• Use CSS variables (--background, --brand, etc.)</li>
                <li>• Use Tailwind utility classes</li>
                <li>• Use grid layouts for responsive design</li>
                <li>• Use consistent spacing (gap-4, gap-6, gap-8)</li>
                <li>• Use text-display, text-h2, text-h3 utility classes</li>
                <li>• Maintain Audi Red (#D5101F) as the only custom color</li>
              </ul>
            </CardBody>
          </Card>
          <Card>
            <CardBody>
              <h3 className="mb-4 text-lg font-semibold text-red-600">❌ Avoid</h3>
              <ul className="space-y-2 text-sm text-red-600">
                <li>• Never use tables for layout</li>
                <li>• Never use inline styles (except for inline style workarounds)</li>
                <li>• Never bypass theme tokens with hardcoded colors</li>
                <li>• Don&apos;t use arbitrary Tailwind sizes - stick to spacing scale</li>
                <li>• Don&apos;t mix heading styles - use semantic classes</li>
                <li>• Don&apos;t add custom colors - only Audi Red is allowed</li>
              </ul>
            </CardBody>
          </Card>
        </div>
      </section>
    </main>
    <Footer />
    </>
  )
}