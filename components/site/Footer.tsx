import Link from "next/link";
import { Linkedin, Twitter } from "lucide-react";

const footerNavigation = {
  expertise: [
    { name: "Cell & Tissue Technology", href: "/expertise/cell-tissue" },
    { name: "Aesthetic Solutions", href: "/expertise/aesthetic" },
    { name: "Regenerative Sciences", href: "/expertise/regenerative" },
    { name: "International Markets", href: "/expertise/international" },
    { name: "Research & Development", href: "/expertise/research" },
  ],
  products: [
    { name: "Wound Care Systems", href: "/products/wound-care" },
    { name: "Surgical Solutions", href: "/products/surgical" },
    { name: "Aesthetic Technologies", href: "/products/aesthetic" },
    { name: "Tissue Engineering", href: "/products/tissue" },
    { name: "Medical Devices", href: "/products/devices" },
  ],
  company: [
    { name: "About Tiger", href: "/company/about" },
    { name: "Leadership Team", href: "/company/leadership" },
    { name: "Our Heritage", href: "/company/heritage" },
    { name: "Global Impact", href: "/company/impact" },
    { name: "Newsroom", href: "/company/news" },
    { name: "Investor Relations", href: "/company/investors" },
  ],
  resources: [
    { name: "Clinical Evidence", href: "/resources/clinical" },
    { name: "Product Documentation", href: "/resources/documentation" },
    { name: "Training & Education", href: "/resources/training" },
    { name: "Support Center", href: "/resources/support" },
    { name: "Partner Portal", href: "/resources/partners" },
  ],
  careers: [
    { name: "Open Positions", href: "/careers/positions" },
    { name: "Life at Tiger", href: "/careers/culture" },
    { name: "Benefits & Growth", href: "/careers/benefits" },
    { name: "University Programs", href: "/careers/university" },
  ],
};

export function Footer() {
  return (
    <footer className="relative border-t border-border/40 bg-background">
      {/* Main Footer Content */}
      <div className="container mx-auto max-w-7xl px-6 md:px-10 py-16 md:py-20">
        {/* Top Section: Brand + CTA */}
        <div className="mb-16 pb-16 border-b border-border/40">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-display text-h2 mb-4">
                Advancing Medical Science
              </h2>
              <p className="text-lead text-muted-foreground max-w-xl">
                Trusted by healthcare professionals worldwide, Tiger BioSciences delivers breakthrough innovations that transform patient outcomes and redefine standards of care.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 lg:justify-end">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center h-11 px-8 rounded-full bg-brand text-brand-foreground hover:brightness-110 transition-all duration-200 font-body text-sm"
              >
                Contact Sales
              </Link>
              <Link
                href="/careers"
                className="inline-flex items-center justify-center h-11 px-8 rounded-full border border-border text-foreground hover:bg-muted transition-all duration-200 font-body text-sm"
              >
                Join Our Team
              </Link>
            </div>
          </div>
        </div>

        {/* Navigation Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 lg:gap-12 mb-16">
          {/* Expertise */}
          <div>
            <h3 className="font-display text-sm font-medium tracking-wide mb-4">
              Expertise
            </h3>
            <ul className="space-y-3">
              {footerNavigation.expertise.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="font-body text-muted-foreground text-sm hover:text-foreground transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="font-display text-sm font-medium tracking-wide mb-4">
              Products
            </h3>
            <ul className="space-y-3">
              {footerNavigation.products.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="font-body text-muted-foreground text-sm hover:text-foreground transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-display text-sm font-medium tracking-wide mb-4">
              Company
            </h3>
            <ul className="space-y-3">
              {footerNavigation.company.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="font-body text-muted-foreground text-sm hover:text-foreground transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-display text-sm font-medium tracking-wide mb-4">
              Resources
            </h3>
            <ul className="space-y-3">
              {footerNavigation.resources.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="font-body text-muted-foreground text-sm hover:text-foreground transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Careers */}
          <div>
            <h3 className="font-display text-sm font-medium tracking-wide mb-4">
              Careers
            </h3>
            <ul className="space-y-3">
              {footerNavigation.careers.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="font-body text-muted-foreground text-sm hover:text-foreground transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-display text-sm font-medium tracking-wide mb-4">
              Contact
            </h3>
            <address className="font-body text-muted-foreground text-sm not-italic space-y-3">
              <p>555 E North Ln, Ste 5000<br />Bldg D<br />Conshohocken, PA 19428</p>
              <p>
                <a
                  href="tel:+18886655005"
                  className="hover:text-foreground transition-colors duration-200"
                >
                  1-888-665-5005
                </a>
              </p>
              <p>
                <a
                  href="mailto:info@tigerbiosciences.com"
                  className="hover:text-foreground transition-colors duration-200"
                >
                  info@tigerbiosciences.com
                </a>
              </p>
            </address>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-8 border-t border-border/40">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            {/* Logo + Copyright */}
            <div className="flex flex-col items-center md:items-start gap-3">
              <Link href="/" className="font-[Neuropa,Archivo] font-normal tracking-tight uppercase text-sm">
                Tiger BioSciences™
              </Link>
              <p className="font-body text-muted-foreground text-xs">
                © {new Date().getFullYear()} Tiger BioSciences. All rights reserved.
              </p>
            </div>

            {/* Legal Links */}
            <div className="flex flex-wrap justify-center gap-6 text-xs text-muted-foreground">
              <Link href="/privacy" className="hover:text-foreground transition-colors duration-200">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-foreground transition-colors duration-200">
                Terms of Service
              </Link>
              <Link href="/compliance" className="hover:text-foreground transition-colors duration-200">
                Compliance
              </Link>
              <Link href="/accessibility" className="hover:text-foreground transition-colors duration-200">
                Accessibility
              </Link>
              <Link href="/style" className="hover:text-foreground transition-colors duration-200">
                Style Guide
              </Link>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors duration-200"
                aria-label="LinkedIn"
              >
                <Linkedin className="size-5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors duration-200"
                aria-label="Twitter"
              >
                <Twitter className="size-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

