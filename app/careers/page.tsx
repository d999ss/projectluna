export const metadata = { title: "Careers | Tiger BioSciences" }

export default function Careers() {
  const roles = [
    { title: "Senior Research Scientist - Regenerative Medicine", location: "San Diego, CA", type: "Full-time" },
    { title: "Tissue Engineering Manager", location: "San Diego, CA", type: "Full-time" },
    { title: "Clinical Research Associate", location: "San Diego, CA", type: "Full-time" },
  ]
  return (
    <main className="container mx-auto max-w-5xl px-4 md:px-6 py-12 md:py-16 mt-16">
      <h1 className="text-3xl md:text-4xl font-semibold">Careers</h1>
      <p className="mt-3 text-black/70 dark:text-white/70 max-w-2xl">
        Join our team of innovators advancing biotechnology through science, integrity, and excellence.
      </p>
      <div className="mt-8 grid gap-4">
        {roles.map((r) => (
          <div key={r.title} className="rounded-xl border border-black/10 dark:border-white/10 bg-white/50 dark:bg-white/5 p-5 backdrop-blur">
            <div className="text-lg font-medium">{r.title}</div>
            <div className="mt-1 text-sm text-black/60 dark:text-white/60">{r.location} · {r.type}</div>
          </div>
        ))}
      </div>
    </main>
  )
}

