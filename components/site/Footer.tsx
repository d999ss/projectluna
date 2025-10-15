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
    <footer className="border-t border-border/60 bg-background/50 backdrop-blur">
      <div className="container mx-auto max-w-7xl px-6 md:px-10 py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="md:col-span-1">
            <h3 className="font-display mb-4 text-xl font-light tracking-tight">Tiger BioSciences</h3>
            <p className="font-body text-muted-foreground mb-4 text-sm">
              Global leader in medical technology, delivering cutting-edge solutions for clinicians worldwide.
            </p>
            <address className="font-body text-muted-foreground text-sm not-italic">
              <p>555 E North Ln, Ste 5000</p>
              <p>Bldg D</p>
              <p>Conshohocken, PA 19428</p>
              <p className="mt-2">
                <a
                  href="tel:+18886655005"
                  className="transition-all duration-200 ease-in-out hover:text-foreground focus:outline-hidden focus:ring-2 focus:ring-brand/70 rounded-md"
                >
                  1-888-665-5005
                </a>
              </p>
            </address>
          </div>

          {/* Solutions */}
          <div>
            <h4 className="font-display mb-4 text-sm font-light uppercase tracking-wide">
              Solutions
            </h4>
            <ul className="space-y-3">
              {footerLinks.solutions.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="font-body text-muted-foreground text-sm transition-all duration-200 ease-in-out hover:text-foreground focus:outline-hidden focus:ring-2 focus:ring-brand/70 rounded-md"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-display mb-4 text-sm font-light uppercase tracking-wide">
              Company
            </h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="font-body text-muted-foreground text-sm transition-all duration-200 ease-in-out hover:text-foreground focus:outline-hidden focus:ring-2 focus:ring-brand/70 rounded-md"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-display mb-4 text-sm font-light uppercase tracking-wide">
              Legal
            </h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="font-body text-muted-foreground text-sm transition-all duration-200 ease-in-out hover:text-foreground focus:outline-hidden focus:ring-2 focus:ring-brand/70 rounded-md"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/style"
                  className="font-body text-muted-foreground text-sm transition-all duration-200 ease-in-out hover:text-foreground focus:outline-hidden focus:ring-2 focus:ring-brand/70 rounded-md"
                >
                  Style Guide
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-border/60 mt-12 border-t pt-8">
          <p className="font-body text-muted-foreground text-center text-xs">
            © {new Date().getFullYear()} Tiger BioSciences. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

