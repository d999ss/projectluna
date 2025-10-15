"use client";

import { Menu } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { Navbar, NavbarLeft, NavbarRight } from "@/components/ui/navbar";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { MEGA_SECTIONS } from "@/data/megaNav";

const mobileNavigation = [
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
      <div className="container relative mx-auto max-w-7xl px-6 md:px-10">
        <Navbar className="py-4">
          <NavbarLeft>
            <Link href="/" className="-m-1.5 p-1.5 transition-all duration-200 ease-in-out focus:outline-hidden focus:ring-2 focus:ring-brand/70 rounded-md">
              <span className="text-xl font-display font-light tracking-tight">Tiger BioSciences</span>
            </Link>
          </NavbarLeft>

          {/* Desktop Navigation with Shadcn NavigationMenu */}
          <div className="hidden lg:flex">
            <NavigationMenu>
              <NavigationMenuList>
                {MEGA_SECTIONS.map((section) => (
                  <NavigationMenuItem key={section.id}>
                    <NavigationMenuTrigger className="font-display text-sm font-light uppercase tracking-wide">
                      {section.id === "company" ? "Company" : section.id === "expertise" ? "Expertise" : "Products"}
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <div className="grid w-[800px] grid-cols-2 gap-8 p-6">
                        {/* Left side: Navigation groups */}
                        <div className="grid grid-cols-2 gap-6">
                          {section.groups.map((group) => (
                            <div key={group.title} className="space-y-3">
                              <div className="font-display text-xs font-light uppercase tracking-wide text-foreground/90">
                                {group.title}
                              </div>
                              <ul className="space-y-2">
                                {group.items.map((item) => (
                                  <li key={item.label}>
                                    <NavigationMenuLink asChild>
                                      <Link
                                        href={item.href}
                                        className="font-body block text-sm text-muted-foreground hover:text-brand transition-all duration-200 ease-in-out focus:outline-hidden focus:ring-2 focus:ring-brand/70 rounded-md"
                                      >
                                        {item.label}
                                      </Link>
                                    </NavigationMenuLink>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>

                        {/* Right side: Featured section */}
                        <div className="rounded-lg bg-muted/40 border border-border/60 p-6 space-y-4">
                          <span className="font-display inline-block text-xs tracking-wide font-light uppercase rounded-full px-3 py-1 bg-brand/15 text-brand border border-brand/25">
                            {section.feature.badge}
                          </span>
                          <h3 className="font-display text-xl font-light tracking-tight">{section.feature.title}</h3>
                          <p className="font-body text-sm text-muted-foreground">{section.feature.body}</p>
                          <Link
                            href={section.feature.cta.href}
                            className="font-body inline-flex items-center gap-2 text-sm text-brand hover:opacity-85 transition-all duration-200 ease-in-out focus:outline-hidden focus:ring-2 focus:ring-brand/70 rounded-md"
                          >
                            {section.feature.cta.label} <span aria-hidden>→</span>
                          </Link>
                        </div>
                      </div>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                ))}
                <NavigationMenuItem>
                  <NavigationMenuLink asChild>
                    <Link href="/careers" className="font-display group inline-flex h-9 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-light uppercase tracking-wide transition-all duration-200 ease-in-out hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-hidden focus:ring-2 focus:ring-brand/70">
                      Career
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          <NavbarRight>
            <div className="flex items-center gap-3">
              <ThemeToggle />
              <Link
                href="/contact"
                className="font-body hidden lg:inline-flex rounded-lg bg-brand px-4 py-2 text-sm text-brand-foreground transition-all duration-200 ease-in-out hover:brightness-110 focus:outline-hidden focus:ring-2 focus:ring-brand/70"
              >
                Request Demo
              </Link>

              {/* Mobile menu */}
              <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
                <SheetTrigger asChild className="lg:hidden">
                  <button
                    type="button"
                    className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-foreground transition-all duration-200 ease-in-out hover:bg-muted focus:outline-hidden focus:ring-2 focus:ring-brand/70"
                  >
                    <span className="sr-only">Open main menu</span>
                    <Menu className="size-6" aria-hidden="true" />
                  </button>
                </SheetTrigger>
                <SheetContent side="right" className="w-full sm:max-w-sm">
                  <SheetHeader>
                    <SheetTitle className="font-display font-light">
                      <Link href="/" onClick={() => setMobileMenuOpen(false)}>
                        Tiger BioSciences
                      </Link>
                    </SheetTitle>
                  </SheetHeader>
                  <div className="mt-6 flow-root">
                    <div className="-my-6 divide-y divide-border/60">
                      <div className="space-y-2 py-6">
                        {mobileNavigation.map((item) => (
                          <Link
                            key={item.name}
                            href={item.href}
                            className="font-body -mx-3 block rounded-lg px-3 py-2 text-base text-foreground hover:bg-muted transition-all duration-200 ease-in-out focus:outline-hidden focus:ring-2 focus:ring-brand/70"
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            {item.name}
                          </Link>
                        ))}
                      </div>
                      <div className="py-6">
                        <Link
                          href="/contact"
                          className="font-body block rounded-lg bg-brand px-4 py-2.5 text-center text-base text-brand-foreground transition-all duration-200 ease-in-out hover:brightness-110 focus:outline-hidden focus:ring-2 focus:ring-brand/70"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          Request Demo
                        </Link>
                      </div>
                    </div>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </NavbarRight>
        </Navbar>
      </div>
    </header>
  );
}

