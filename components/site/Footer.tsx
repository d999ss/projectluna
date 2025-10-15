import Link from "next/link";

const footerLinks = {
  solutions: [
    { name: "Wound Care & Pain Management", href: "/solutions#wound-care" },
    { name: "Soft Tissue Recon & Aesthetics", href: "/solutions#aesthetics" },
    { name: "Tissue R&D Processing", href: "/solutions#tissue-rd" },
    { name: "Tiger International", href: "/solutions#international" },
  ],
  company: [
    { name: "About", href: "/#about" },
    { name: "Divisions", href: "/divisions" },
    { name: "Careers", href: "/careers" },
    { name: "Contact", href: "/contact" },
  ],
  legal: [
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
  ],
};

export function Footer() {
  return (
    <footer className="border-t border-border bg-background/50 backdrop-blur">
      <div className="max-w-container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          {/* Brand */}
          <div className="md:col-span-1">
            <h3 className="mb-4 text-xl font-bold">Tiger BioSciences</h3>
            <p className="text-muted-foreground mb-4 text-sm">
              Global leader in medical technology, delivering cutting-edge solutions for clinicians worldwide.
            </p>
            <div className="text-muted-foreground text-sm">
              <p>555 E North Ln, Ste 5000</p>
              <p>Bldg D</p>
              <p>Conshohocken, PA 19428</p>
              <p className="mt-2">
                <a href="tel:+18886655005" className="hover:text-foreground">
                  1-888-665-5005
                </a>
              </p>
            </div>
          </div>

          {/* Solutions */}
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider">
              Solutions
            </h4>
            <ul className="space-y-3">
              {footerLinks.solutions.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground text-sm hover:text-foreground"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider">
              Company
            </h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground text-sm hover:text-foreground"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider">
              Legal
            </h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground text-sm hover:text-foreground"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/design-system"
                  className="text-muted-foreground text-sm hover:text-foreground"
                >
                  Design System
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-border mt-12 border-t pt-8">
          <p className="text-muted-foreground text-center text-sm">
            © {new Date().getFullYear()} Tiger BioSciences. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

