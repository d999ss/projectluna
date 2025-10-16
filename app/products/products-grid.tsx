"use client"
import Link from "next/link"
import { useRouter, useSearchParams } from "next/navigation"
import { useEffect, useMemo, useState } from "react"

import { Card, CardBody } from "@/components/ui/card"

type Product = {
  slug: string
  title: string
  subtitle: string
  division: "regentx" | "wound" | "aesthetics" | "international"
  company: string
  category: string
}

export default function ProductsGrid({
  initialProducts,
  initialQ,
  initialDivision,
}: {
  initialProducts: Product[]
  initialQ?: string
  initialDivision?: string
}) {
  const router = useRouter()
  const params = useSearchParams()
  const [q, setQ] = useState(initialQ || "")
  const [div, setDiv] = useState(initialDivision || "all")

  useEffect(() => {
    const next = new URLSearchParams(params.toString())
    if (q) {
      next.set("q", q)
    } else {
      next.delete("q")
    }
    if (div && div !== "all") {
      next.set("division", div)
    } else {
      next.delete("division")
    }
    router.replace(`/products?${next.toString()}`, { scroll: false })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [q, div])

  const filtered = useMemo(() => {
    return initialProducts.filter(p => {
      const text = `${p.title} ${p.company} ${p.category} ${p.division}`.toLowerCase()
      const okQ = q ? text.includes(q.toLowerCase()) : true
      const okD = div === "all" ? true : p.division === div
      return okQ && okD
    })
  }, [q, div, initialProducts])

  return (
    <>
      <div className="mt-4 flex flex-wrap gap-3">
        <input
          value={q}
          onChange={e=>setQ(e.target.value)}
          placeholder="Search products…"
          className="px-3 py-2 rounded-md border border-border/60 bg-card/70"
        />
        <select
          value={div}
          onChange={e=>setDiv(e.target.value)}
          className="px-3 py-2 rounded-md border border-border/60 bg-card/70"
        >
          <option value="all">All divisions</option>
          <option value="regentx">RegenTX</option>
          <option value="wound">Wound</option>
          <option value="aesthetics">Aesthetics</option>
          <option value="international">International</option>
        </select>
      </div>

      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map(p => (
          <Card key={p.slug}>
            <CardBody>
              <div className="text-xs uppercase tracking-[0.14em] text-foreground/60">{p.company}</div>
              <h2 className="mt-1 text-xl font-semibold">{p.title}</h2>
              {p.subtitle ? <p className="mt-1 text-foreground/70 text-sm">{p.subtitle}</p> : null}
              <div className="mt-4">
                <Link className="underline" href={`/products/${p.slug}`}>View product</Link>
              </div>
            </CardBody>
          </Card>
        ))}
      </div>
    </>
  )
}

