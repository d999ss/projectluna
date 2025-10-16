export const metadata = { title: "Careers | Tiger BioSciences" }

export default function Careers() {
  const roles = [
    { title: "Senior Research Scientist - Regenerative Medicine", location: "Conshohocken, PA", type: "Full-time" },
    { title: "Tissue Engineering Manager", location: "Conshohocken, PA", type: "Full-time" },
    { title: "Clinical Research Associate", location: "Conshohocken, PA", type: "Full-time" },
  ]
  return (
    <main className="container mx-auto max-w-5xl px-4 md:px-6 py-12 md:py-16 mt-16">
      <h1 className="text-3xl md:text-4xl font-semibold">Careers at Tiger BioSciences</h1>
      <p className="mt-3 text-foreground/70 max-w-2xl">
        Join our team of innovators advancing medical technology through science, integrity, and excellence. At Tiger BioSciences, you'll work on cutting-edge solutions that directly impact patient care and clinician success worldwide.
      </p>
      <div className="mt-8 grid gap-4">
        {roles.map((r) => (
          <div key={r.title} className="rounded-xl border border-border/60 bg-card/70 p-5 backdrop-blur">
            <div className="text-lg font-medium">{r.title}</div>
            <div className="mt-1 text-sm text-foreground/60">{r.location} · {r.type}</div>
          </div>
        ))}
      </div>
    </main>
  )
}

