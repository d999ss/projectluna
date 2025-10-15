import { FlaskConicalIcon, HeartPulseIcon, MicroscopeIcon, GlobeIcon } from "lucide-react";
import { Metadata } from "next";

import { Hero } from "@/components/site/Hero";
import { Section } from "@/components/site/Section";
import { StatCard } from "@/components/site/StatCard";

export const metadata: Metadata = {
  title: "Solutions - Tiger BioSciences",
  description: "Comprehensive medical technology solutions across wound care, aesthetics, and tissue processing",
};

export default function SolutionsPage() {
  return (
    <main className="min-h-screen">
      <Hero
        title="Our Solutions"
        description="Comprehensive medical technology solutions designed to advance patient care across multiple therapeutic areas."
        primaryCTA={{ text: "Request Demo", href: "/contact" }}
        secondaryCTA={{ text: "View Divisions", href: "/divisions" }}
      />

      {/* Wound Care & Pain Management */}
      <Section
        id="wound-care"
        title="Wound Care & Pain Management"
        description="Advanced CAMP solutions tailored for chronic and hard-to-treat wounds"
      >
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          <StatCard
            icon={<HeartPulseIcon className="size-6 text-brand" />}
            title="Tiger Wound Care"
            description="Innovative research and development driving technologies suitable for all care settings"
          />
          <StatCard
            icon={<HeartPulseIcon className="size-6 text-brand" />}
            title="Extremity Care"
            description="Specialized solutions for extremity wounds with clinically validated products"
          />
          <StatCard
            icon={<HeartPulseIcon className="size-6 text-brand" />}
            title="Encore Surgical Dressings"
            description="Professional-grade surgical dressings supporting improved patient outcomes"
          />
        </div>
      </Section>

      {/* Soft Tissue Recon & Aesthetics */}
      <Section
        id="aesthetics"
        title="Soft Tissue Recon & Aesthetics"
        description="Cutting-edge solutions across reconstructive, cosmetic, and regenerative domains"
      >
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          <StatCard
            icon={<MicroscopeIcon className="size-6 text-brand" />}
            title="Tiger Aesthetics"
            description="Personalized solutions maximizing clinical results across aesthetic practice"
          />
          <StatCard
            icon={<MicroscopeIcon className="size-6 text-brand" />}
            title="Sientra"
            description="Advanced breast aesthetics and body contouring solutions"
          />
          <StatCard
            icon={<MicroscopeIcon className="size-6 text-brand" />}
            title="BioCreations"
            description="Innovative regenerative solutions for aesthetic applications"
          />
          <StatCard
            icon={<MicroscopeIcon className="size-6 text-brand" />}
            title="Revelle Aesthetics"
            description="Premium aesthetic products for discerning practitioners"
          />
        </div>
        <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-1">
          <StatCard
            icon={<MicroscopeIcon className="size-6 text-brand" />}
            title="Suneva"
            description="Advanced dermal fillers and aesthetic injectables"
          />
        </div>
      </Section>

      {/* Tissue R&D, Processing and Recovery */}
      <Section
        id="tissue-rd"
        title="Tissue R&D, Processing and Recovery"
        description="Rigorous protocols and advanced biotech ensuring exceptional tissue quality"
      >
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          <StatCard
            icon={<FlaskConicalIcon className="size-6 text-green-600" />}
            title="RegenTX"
            description="Leading in tissue processing and CAMP-based innovation with scientific precision"
          />
          <StatCard
            icon={<FlaskConicalIcon className="size-6 text-green-600" />}
            title="RegenTX Labs"
            description="Advanced research facilities driving next-generation tissue solutions"
          />
          <StatCard
            icon={<FlaskConicalIcon className="size-6 text-green-600" />}
            title="Birth Tissue Recovery"
            description="Ethical tissue recovery programs with rigorous safety standards"
          />
          <StatCard
            icon={<FlaskConicalIcon className="size-6 text-green-600" />}
            title="bioCARE"
            description="Comprehensive tissue banking and processing services"
          />
        </div>
      </Section>

      {/* Tiger International */}
      <Section
        id="international"
        title="Tiger International"
        description="Global access to advanced cell and tissue technologies"
      >
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <StatCard
            icon={<GlobeIcon className="size-6 text-orange-600" />}
            title="Lizard Health Technology"
            description="Based in Germany, delivering CAMP innovations across borders and care systems"
          />
          <StatCard
            icon={<GlobeIcon className="size-6 text-orange-600" />}
            title="Airway Medix"
            description="Specialized airway management and respiratory solutions"
          />
        </div>
      </Section>
    </main>
  );
}

