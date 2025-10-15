import { z } from "zod"

export const ProductFM = z.object({
  slug: z.string(),
  title: z.string(),
  subtitle: z.string().optional().default(""),
  division: z.enum(["regentx","wound","aesthetics","international"]),
  company: z.string(),
  category: z.string().optional().default(""),
  tech: z.array(z.string()).optional().default([]),
  indications: z.array(z.string()).optional().default([]),
  benefits: z.array(z.string()).optional().default([]),
  evidence: z.array(z.object({ label: z.string(), link: z.string().url().optional().default("")})).optional().default([]),
  skus: z.array(z.object({ sku: z.string(), size: z.string().optional().default("")})).optional().default([]),
  regulatory: z.object({
    fda: z.string().optional().default(""),
    ce: z.string().optional().default(""),
    "510k": z.string().optional().default("")
  }).optional().default({}),
  regions: z.array(z.string()).optional().default([]),
  status: z.string().optional().default("Active"),
  downloads: z.array(z.object({ label: z.string(), link: z.string() })).optional().default([]),
  contacts: z.object({
    sales: z.string().optional().default(""),
    support: z.string().optional().default("")
  }).optional().default({}),
  heroImage: z.string().optional().default(""),
  gallery: z.array(z.string()).optional().default([]),
  seo: z.object({
    title: z.string().optional().default(""),
    description: z.string().optional().default("")
  }).optional().default({}),
})

export const CompanyFM = z.object({
  slug: z.string(),
  name: z.string(),
  relationship: z.enum(["Partner","Subsidiary","Brand","Distributor"]),
  summary: z.string().optional().default(""),
  hq: z.string().optional().default(""),
  founded: z.number().optional().default(0),
  site: z.string().optional().default(""),
  divisions: z.array(z.enum(["regentx","wound","aesthetics","international"])).optional().default([]),
  brands: z.array(z.string()).optional().default([]),
  products: z.array(z.string()).optional().default([]), // product slugs
  regions: z.array(z.string()).optional().default([]),
  contacts: z.object({ partner: z.string().optional().default("") }).optional().default({}),
  heroImage: z.string().optional().default(""),
  seo: z.object({
    title: z.string().optional().default(""),
    description: z.string().optional().default("")
  }).optional().default({}),
})

