import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Color System Dashboard - Tiger BioSciences",
  description: "Centralized color management dashboard for Tiger BioSciences design system.",
}

export default function ColorsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
