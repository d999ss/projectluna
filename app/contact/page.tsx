import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contact - Tiger BioSciences",
  description: "Get in touch with Tiger BioSciences. We'll get back to you within one business day.",
}

export default function Contact() {
  return (
    <main className="container mx-auto max-w-3xl px-4 md:px-6 py-12 md:py-16 mt-16">
      <h1 className="text-3xl md:text-4xl font-semibold">Contact Us</h1>
      <p className="mt-3 text-foreground/70">We&apos;ll get back to you within one business day (Monday-Friday, 9 AM - 5 PM ET).</p>
      <form className="mt-8 grid gap-4">
        <input className="rounded-md border border-border/60 bg-card/70 px-3 py-2" placeholder="Full name" />
        <input className="rounded-md border border-border/60 bg-card/70 px-3 py-2" placeholder="Email" type="email" />
        <input className="rounded-md border border-border/60 bg-card/70 px-3 py-2" placeholder="Company" />
        <textarea className="rounded-md border border-border/60 bg-card/70 px-3 py-2 min-h-[120px]" placeholder="How can we help?" />
        <button className="rounded-md px-4 py-2 border border-border/60 bg-brand text-brand-foreground hover:brightness-110 transition-colors">Send</button>
      </form>
      <div className="mt-10 text-sm text-foreground/70">
        555 E North Ln, Ste 5000, Bldg D, Conshohocken, PA 19428 · 1-888-665-5005
      </div>
    </main>
  )
}

