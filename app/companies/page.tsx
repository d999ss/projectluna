// SERVER — do not add "use client"
import { allCompanies } from "@/lib/content"

import CompaniesGrid from "./companies-grid"

export default async function CompaniesIndex({
  searchParams,
}: { searchParams?: { q?: string; relationship?: string } }) {
  const companies = allCompanies().map(c => ({
    slug: c.slug,
    name: c.name,
    relationship: c.relationship as "Partner" | "Subsidiary" | "Brand" | "Distributor",
    summary: c.summary ?? "",
  }))
  return (
    <main className="container mx-auto max-w-7xl px-4 md:px-6 py-12 md:py-16 mt-16">
      <h1 className="text-3xl md:text-4xl font-semibold">Companies</h1>
      <CompaniesGrid
        initialCompanies={companies}
        initialQ={searchParams?.q ?? ""}
        initialRelationship={searchParams?.relationship ?? "all"}
      />
    </main>
  )
}
