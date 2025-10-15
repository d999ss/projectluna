import { ArrowRightIcon, Building2Icon, FlaskConicalIcon, GlobeIcon, HeartPulseIcon } from "lucide-react";
import Link from "next/link";
import { Metadata } from "next";

import { Hero } from "@/components/site/Hero";
import { Section } from "@/components/site/Section";
import { StatCard } from "@/components/site/StatCard";

export const metadata: Metadata = {
  title: "Our Divisions - Tiger BioSciences",
  description: "Four specialized divisions serving diverse medical technology needs",
};

export default function DivisionsPage() {
  return (
    <main className="min-h-screen">
      <Hero
        title="Our Divisions"
        description="Four specialized divisions working together to advance medical technology and patient care worldwide."
        primaryCTA={{ text: "Contact Us", href: "/contact" }}
      />

      <Section>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <Link href="/divisions/regentx" className="group">
            <StatCard
              icon={<FlaskConicalIcon className="size-8 text-brand" />}
              title="RegenTX Division"
              description="Tissue Science Redefined. Leading in tissue processing and CAMP-based innovation with rigorous protocols and advanced biotech."
            >
              <div className="mt-4 flex items-center text-sm font-semibold text-brand transition-transform group-hover:translate-x-1">
                Learn More
                <ArrowRightIcon className="ml-2 size-4" />
              </div>
            </StatCard>
          </Link>

          <Link href="/divisions/wound" className="group">
            <StatCard
              icon={<HeartPulseIcon className="size-8 text-brand" />}
              title="Tiger Wound Care"
              description="Advanced CAMP Solutions for Complex Wounds. Providing innovative products tailored for chronic and hard-to-treat wounds."
            >
              <div className="mt-4 flex items-center text-sm font-semibold text-brand transition-transform group-hover:translate-x-1">
                Learn More
                <ArrowRightIcon className="ml-2 size-4" />
              </div>
            </StatCard>
          </Link>

          <Link href="/divisions/aesthetics" className="group">
            <StatCard
              icon={<Building2Icon className="size-8 text-green-600" />}
              title="Tiger Aesthetics"
              description="Shaping the Future of Aesthetics. Delivering cutting-edge solutions across reconstructive, cosmetic, and regenerative domains."
            >
              <div className="mt-4 flex items-center text-sm font-semibold text-green-600 transition-transform group-hover:translate-x-1">
                Learn More
                <ArrowRightIcon className="ml-2 size-4" />
              </div>
            </StatCard>
          </Link>

          <Link href="/divisions/international" className="group">
            <StatCard
              icon={<GlobeIcon className="size-8 text-brand" />}
              title="Tiger International"
              description="Global Access to Advanced Cell & Tissue Technologies. Enabling worldwide distribution of cutting-edge products from Germany."
            >
              <div className="mt-4 flex items-center text-sm font-semibold text-brand transition-transform group-hover:translate-x-1">
                Learn More
                <ArrowRightIcon className="ml-2 size-4" />
              </div>
            </StatCard>
          </Link>
        </div>
      </Section>
    </main>
  );
}

