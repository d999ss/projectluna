import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Style Guide - Tiger BioSciences",
  description: "Design system showcasing Launch UI colors, typography, and components with Audi Red brand color.",
}

export default function StyleLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
