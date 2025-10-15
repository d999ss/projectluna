export type NavItem = { label: string; href: string }
export type NavGroup = { title: string; items: NavItem[] }
export type FeatureCard = { badge: string; title: string; body: string; cta: { label: string; href: string } }
export type MegaSection = { id: "company"|"expertise"|"products"; groups: NavGroup[]; feature: FeatureCard }

export const MEGA_SECTIONS: MegaSection[] = [
  {
    id: "company",
    groups: [
      { title: "Leadership & Vision", items: [
        { label: "Our Credo & Our Purpose", href: "/company/credo" },
        { label: "Company Overview", href: "/company/overview" },
        { label: "Leadership", href: "/company/leadership" },
      ]},
      { title: "Heritage & Impact", items: [
        { label: "Our History", href: "/company/history" },
        { label: "Global Impact", href: "/company/impact" },
        { label: "Sustainability", href: "/company/sustainability" },
      ]},
      { title: "News & Resources", items: [
        { label: "Newsroom", href: "/news" },
        { label: "Press Releases", href: "/news/press" },
        { label: "Media Inquiries", href: "/news/media" },
      ]},
      { title: "Career", items: [
        { label: "Join Our Team", href: "/careers" },
        { label: "Life at Tiger", href: "/careers/life" },
        { label: "Open Positions", href: "/careers/jobs" },
      ]},
    ],
    feature: {
      badge: "ABOUT",
      title: "Transforming Lives Through Science",
      body: "Tiger BioSciences advances biotechnology with innovation, integrity, and excellence.",
      cta: { label: "Learn More", href: "/company/overview" }
    }
  },
  {
    id: "expertise",
    groups: [
      { title: "Wound Care Solutions", items: [
        { label: "Wound Care", href: "/solutions/wound" },
        { label: "Reconstruction", href: "/solutions/reconstruction" },
        { label: "Dressings & Recovery", href: "/solutions/dressings" },
      ]},
      { title: "Aesthetic Solutions", items: [
        { label: "Shape", href: "/solutions/shape" },
        { label: "Renewal", href: "/solutions/renewal" },
        { label: "Volume", href: "/solutions/volume" },
      ]},
      { title: "Regenerative Sciences", items: [
        { label: "Regenerative Medicine", href: "/solutions/regenerative" },
        { label: "RegenTX Labs", href: "/solutions/regentx-labs" },
        { label: "Birth Tissue Sciences", href: "/solutions/birth-tissue" },
        { label: "Biocare Division", href: "/solutions/biocare" },
      ]},
      { title: "International", items: [
        { label: "Health Technology Systems", href: "/solutions/international/health-tech" },
        { label: "Airway Systems", href: "/solutions/international/airway" },
      ]},
    ],
    feature: {
      badge: "EXPERTISE",
      title: "Innovation Across Disciplines",
      body: "From cell & tissue engineering to regenerative sciences, Tiger BioSciences delivers clinical impact.",
      cta: { label: "Explore More", href: "/solutions" }
    }
  },
  {
    id: "products",
    groups: [
      { title: "Wound Care Solutions", items: [
        { label: "CAMPs Technology Platform", href: "/products/camps" },
        { label: "alloPLY™", href: "/products/alloply" },
        { label: "caregraFT™", href: "/products/caregraft" },
        { label: "ACAPatch™", href: "/products/acapatch" },
      ]},
      { title: "Aesthetic Solutions", items: [
        { label: "Avéli™", href: "/products/aveli" },
        { label: "Bellafill™", href: "/products/bellafill" },
        { label: "AlloClae™", href: "/products/alloclae" },
        { label: "Viality™", href: "/products/viality" },
        { label: "Silhouette™", href: "/products/silhouette" },
        { label: "Amplifine™", href: "/products/amplifine" },
        { label: "Sientra™", href: "/products/sientra" },
      ]},
      { title: "Regenerative Sciences", items: [
        { label: "RegenTX", href: "/products/regentx" },
        { label: "Biocare", href: "/products/biocare" },
      ]},
      { title: "Technologies", items: [
        { label: "Lizard Health", href: "/products/lizard-health" },
        { label: "Airway Medix", href: "/products/airway-medix" },
        { label: "Breast Tissue Expanders", href: "/products/expanders" },
        { label: "Implant Delivery Device", href: "/products/implant-delivery" },
        { label: "Surgical Retractor", href: "/products/retractor" },
        { label: "SimpliDerm ADM", href: "/products/simpliderm" },
      ]},
    ],
    feature: {
      badge: "FEATURED",
      title: "CAMPs Technology",
      body: "Cell & tissue products with proven clinical outcomes and standardized quality.",
      cta: { label: "Discover CAMPs", href: "/products/camps" }
    }
  },
]

function labelFor(id: "company"|"expertise"|"products"){
  if(id === "company") return "Company"
  if(id === "expertise") return "Expertise"
  return "Products"
}

