import fs from "node:fs"
import path from "node:path"

import matter from "gray-matter"

import { CompanyFM, ProductFM } from "./schemas"

const productsDir = path.join(process.cwd(), "content", "products")
const companiesDir = path.join(process.cwd(), "content", "companies")

export type ProductMeta = ReturnType<typeof parseProduct>["data"]
export type CompanyMeta = ReturnType<typeof parseCompany>["data"]

function safeList(dir: string) {
  if (!fs.existsSync(dir)) return []
  return fs.readdirSync(dir).filter(f => f.endsWith(".mdx"))
}

export function allProducts() {
  return safeList(productsDir).map(f => parseProduct(path.join(productsDir, f)).data).sort((a,b)=>a.title.localeCompare(b.title))
}

export function allCompanies() {
  return safeList(companiesDir).map(f => parseCompany(path.join(companiesDir, f)).data).sort((a,b)=>a.name.localeCompare(b.name))
}

export function getProduct(slug: string) {
  const file = path.join(productsDir, `${slug}.mdx`)
  if (!fs.existsSync(file)) return null
  return parseProduct(file)
}

export function getCompany(slug: string) {
  const file = path.join(companiesDir, `${slug}.mdx`)
  if (!fs.existsSync(file)) return null
  return parseCompany(file)
}

function parseProduct(full: string) {
  const raw = fs.readFileSync(full, "utf8")
  const { data, content } = matter(raw)
  const parsed = ProductFM.parse(data)
  return { data: parsed, content }
}

function parseCompany(full: string) {
  const raw = fs.readFileSync(full, "utf8")
  const { data, content } = matter(raw)
  const parsed = CompanyFM.parse(data)
  return { data: parsed, content }
}

