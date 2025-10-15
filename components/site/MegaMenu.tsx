"use client"
import * as React from "react"
import Link from "next/link"

import { Card, CardBody } from "@/components/ui/Card"
import { MEGA_SECTIONS, MegaSection } from "@/data/megaNav"

type TriggerId = MegaSection["id"]

function labelFor(id: TriggerId){
  if(id === "company") return "Company"
  if(id === "expertise") return "Expertise"
  return "Products"
}

export default function MegaMenu() {
  const [open, setOpen] = React.useState<TriggerId | null>(null)
  const menuRef = React.useRef<HTMLDivElement>(null)

  // close on ESC / click-out
  React.useEffect(() => {
    function onKey(e: KeyboardEvent){ if(e.key === "Escape") setOpen(null) }
    function onClick(e: MouseEvent){
      if(!menuRef.current) return
      if(open && !menuRef.current.contains(e.target as Node)) setOpen(null)
    }
    window.addEventListener("keydown", onKey)
    window.addEventListener("mousedown", onClick)
    return () => { window.removeEventListener("keydown", onKey); window.removeEventListener("mousedown", onClick) }
  }, [open])

  const sections = MEGA_SECTIONS

  return (
    <div ref={menuRef} className="relative">
      <nav className="hidden md:flex items-center gap-8 text-sm tracking-[0.14em] uppercase">
        {sections.map(sec => (
          <button
            key={sec.id}
            aria-expanded={open === sec.id}
            aria-controls={`panel-${sec.id}`}
            onMouseEnter={() => setOpen(sec.id)}
            onFocus={() => setOpen(sec.id)}
            onClick={() => setOpen(v => v === sec.id ? null : sec.id)}
            className={[
              "text-foreground/85 hover:text-foreground",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand/40 rounded-md px-1 py-1"
            ].join(" ")}
          >
            {labelFor(sec.id)}
            <span className="ml-1 align-middle text-foreground/60">▾</span>
          </button>
        ))}
        <Link href="/careers" className="text-foreground/85 hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand/40 rounded-md px-1 py-1">
          CAREER
        </Link>
      </nav>

      {/* Panels */}
      {sections.map(sec => (
        <Panel key={sec.id} open={open === sec.id} id={sec.id} section={sec}
               onMouseEnter={() => setOpen(sec.id)} onMouseLeave={() => setOpen(null)} />
      ))}
    </div>
  )
}

function Panel({ open, id, section, onMouseEnter, onMouseLeave }:{
  open: boolean; id: TriggerId; section: MegaSection; onMouseEnter: () => void; onMouseLeave: () => void
}) {
  return (
    <div
      id={`panel-${id}`}
      role="region"
      aria-hidden={!open}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className={[
        "absolute left-1/2 -translate-x-1/2 mt-3 w-[min(1100px,92vw)]",
        "transition-opacity duration-150",
        open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
      ].join(" ")}
    >
      <Card className="bg-card/95 dark:bg-card/95 shadow-card mm-enter">
        <CardBody className="grid grid-cols-1 lg:grid-cols-[1.6fr_1fr] gap-8">
          {/* Left: grouped links */}
          <div className="grid grid-cols-2 gap-8">
            {section.groups.map(g => (
              <div key={g.title} className="space-y-3">
                <div className="text-[12px] font-semibold tracking-[0.16em] uppercase text-foreground/90">{g.title}</div>
                <ul className="space-y-3">
                  {g.items.map(it => (
                    <li key={it.label}>
                      <Link
                        href={it.href}
                        className="block text-[15px] text-foreground/80 hover:text-brand transition-colors"
                      >
                        {it.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Right: feature card */}
          <div className="hidden lg:block">
            <Card className="bg-muted/40 border border-border/60">
              <CardBody className="space-y-4">
                <span className="inline-block text-[11px] tracking-[0.18em] font-semibold uppercase rounded-[624px] px-3 py-1 bg-brand/15 text-brand border border-brand/25">
                  {section.feature.badge}
                </span>
                <div className="text-h3">{section.feature.title}</div>
                <p className="text-body text-foreground/70">{section.feature.body}</p>
                <Link href={section.feature.cta.href} className="inline-flex items-center gap-2 text-[15px] font-semibold text-brand hover:opacity-90">
                  {section.feature.cta.label} <span aria-hidden>→</span>
                </Link>
              </CardBody>
            </Card>
          </div>
        </CardBody>
      </Card>
    </div>
  )
}

