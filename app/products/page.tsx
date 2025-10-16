// SERVER — do not add "use client"
import type { Metadata } from "next"
import { allProducts } from "@/lib/content"

import ProductsGrid from "./products-grid"

export const metadata: Metadata = {
  title: "Products - Tiger BioSciences",
  description: "Explore our comprehensive portfolio of medical technology products for wound care, soft tissue reconstruction, and aesthetics.",
}

export default async function ProductsIndex({
  searchParams,
}: { searchParams?: Promise<{ q?: string; division?: string }> }) {
  const params = await searchParams;
  const products = allProducts().map(p => ({
    slug: p.slug,
    title: p.title,
    subtitle: p.subtitle ?? "",
    division: p.division as "regentx" | "wound" | "aesthetics" | "international",
    company: p.company,
    category: p.category ?? "",
  }))
  return (
    <main className="container mx-auto max-w-7xl px-4 md:px-6 py-12 md:py-16 mt-16">
      <h1 className="text-3xl md:text-4xl font-semibold">Products</h1>
      <ProductsGrid
        initialProducts={products}
        initialQ={params?.q ?? ""}
        initialDivision={params?.division ?? "all"}
      />
    </main>
  )
}
