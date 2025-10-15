"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

import { ThemeToggle } from "@/components/ui/ThemeToggle";
import MegaMenu from "./MegaMenu";

const navigation = [
  { name: "Solutions", href: "/solutions" },
  { name: "Divisions", href: "/divisions" },
  { name: "Products", href: "/products" },
  { name: "Companies", href: "/companies" },
  { name: "Careers", href: "/careers" },
  { name: "Contact", href: "/contact" },
];

export function Nav() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 z-50 w-full">
      <div className="absolute inset-0 bg-background/95 backdrop-blur-lg border-b border-border/40" />
      <nav className="max-w-container relative mx-auto flex items-center justify-between p-4 lg:px-8">
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5">
            <span className="text-xl font-bold">Tiger BioSciences</span>
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-foreground"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Menu className="size-6" aria-hidden="true" />
          </button>
        </div>
        
        {/* Desktop Mega Menu */}
        <div className="hidden lg:block">
          <MegaMenu />
        </div>

        <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:gap-3">
          <ThemeToggle />
          <Link
            href="/contact"
            className="rounded-lg bg-brand px-4 py-2 text-sm font-semibold text-brand-foreground transition-colors hover:brightness-110"
          >
            Request Demo
          </Link>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden">
          <div className="fixed inset-0 z-50" />
          <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-background px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-border">
            <div className="flex items-center justify-between">
              <Link href="/" className="-m-1.5 p-1.5">
                <span className="text-xl font-bold">Tiger BioSciences</span>
              </Link>
              <div className="flex items-center gap-3">
                <ThemeToggle />
                <button
                  type="button"
                  className="-m-2.5 rounded-md p-2.5 text-foreground"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span className="sr-only">Close menu</span>
                  <X className="size-6" aria-hidden="true" />
                </button>
              </div>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-border">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-foreground hover:bg-muted"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
                <div className="py-6">
                  <Link
                    href="/contact"
                    className="block rounded-lg bg-brand px-4 py-2.5 text-center text-base font-semibold text-brand-foreground hover:brightness-110"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Request Demo
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

