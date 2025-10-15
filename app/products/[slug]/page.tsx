import Link from "next/link";
import { notFound } from "next/navigation"

import { Card, CardBody } from "@/components/ui/Card"
import { MetaGrid } from "@/components/product/MetaGrid"
import { getProduct, allProducts } from "@/lib/content"

export async function generateStaticParams() {
  return allProducts().map(p => ({ slug: p.slug }))
}

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const entry = getProduct(slug)
  if (!entry) return notFound()
  const p = entry.data

  const metaItems = [
    { label: "Division", value: p.division },
    { label: "Company", value: p.company },
    ...(p.category ? [{ label: "Category", value: p.category }] : []),
    ...(p.regulatory?.fda ? [{ label: "FDA", value: p.regulatory.fda }] : []),
    ...(p.regulatory?.["510k"] ? [{ label: "510(k)", value: p.regulatory["510k"] }] : []),
    ...(p.regions?.length ? [{ label: "Regions", value: p.regions.join(", ") }] : []),
  ]

  return (
    <main className="container mx-auto max-w-7xl px-4 md:px-6 py-12 md:py-16 mt-16">
      <nav className="text-sm mb-6 text-foreground/70">
        <Link href="/products">Products</Link> <span className="mx-2">/</span> <span className="text-foreground">{p.title}</span>
      </nav>

      <header>
        <div className="text-xs uppercase tracking-[0.14em] text-foreground/60">{p.company}</div>
        <h1 className="mt-2 text-3xl md:text-4xl font-semibold">{p.title}</h1>
        {p.subtitle ? <p className="mt-2 text-foreground/70 max-w-2xl">{p.subtitle}</p> : null}
      </header>

      <section className="mt-8 space-y-6">
        <MetaGrid items={metaItems} />

        {p.benefits?.length ? (
          <Card>
            <CardBody>
              <div className="text-sm text-foreground/65">Benefits</div>
              <ul className="mt-2 grid grid-cols-1 sm:grid-cols-2 gap-2">
                {p.benefits.map(b => <li key={b} className="text-[15px]">{b}</li>)}
              </ul>
            </CardBody>
          </Card>
        ) : null}

        {p.evidence?.length ? (
          <Card>
            <CardBody>
              <div className="text-sm text-foreground/65">Evidence</div>
              <ul className="mt-2 list-none space-y-2">
                {p.evidence.map(e => (
                  <li key={e.label}>
                    {e.link ? <a className="underline" href={e.link}>{e.label}</a> : e.label}
                  </li>
                ))}
              </ul>
            </CardBody>
          </Card>
        ) : null}
      </section>
    </main>
  )
}

