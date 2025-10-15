import { Building2Icon, FlaskConicalIcon, GlobeIcon, HeartPulseIcon, ArrowRightIcon } from "lucide-react";
import Link from "next/link";

import { Hero } from "@/components/site/Hero";
import { Section } from "@/components/site/Section";
import { StatCard } from "@/components/site/StatCard";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero
        subtitle="Unified Flagship Line"
        title="Building the future of tissue and cellular innovation"
        description="Tiger BioSciences is a global leader in medical technology, dedicated to delivering cutting-edge solutions for clinicians worldwide. Specializing in cellular, acellular, and matrix-like products (CAMPS)."
        primaryCTA={{ text: "Request a Demo", href: "/contact" }}
        secondaryCTA={{ text: "Learn More", href: "/#about" }}
      />

      {/* Stats Section */}
      <Section>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          <StatCard
            value="Leader"
            title="Global Presence"
            description="Trusted by healthcare institutions worldwide"
          />
          <StatCard
            value="100%"
            title="Vertically Integrated"
            description="Complete control from tissue to distribution"
          />
          <StatCard
            value="4"
            title="Core Divisions"
            description="Serving diverse medical technology needs"
          />
          <StatCard
            value="24/7"
            title="Global Support"
            description="Supporting clinicians around the clock"
          />
        </div>
      </Section>

      {/* About Section */}
      <Section
        title="The Tiger Way: Vertical Integration"
        description="Our distinct advantage lies in our fully integrated approach—we oversee every stage of our products, from donor screening and tissue collection to research and development, manufacturing, and distribution."
      >
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {[
            {
              step: "1",
              title: "Tissue Recovery",
              description:
                "Partnering with trusted hospitals under rigorous ethical and regulatory standards",
            },
            {
              step: "2",
              title: "Tissue Processing",
              description:
                "Careful preparation and controlled preservation under one roof",
            },
            {
              step: "3",
              title: "Research & Development",
              description:
                "Innovative materials and techniques for next-generation solutions",
            },
            {
              step: "4",
              title: "Distribution",
              description:
                "Fast, precise delivery ensuring products reach clinicians safely",
            },
          ].map((item) => (
            <StatCard key={item.step} title={item.title} description={item.description}>
              <div className="mt-4 flex size-12 items-center justify-center rounded-lg bg-gradient-to-br from-brand/20 to-accent/20 text-2xl font-bold">
                {item.step}
              </div>
            </StatCard>
          ))}
        </div>
      </Section>

      {/* Link Tiles Section */}
      <Section title="Explore Tiger BioSciences">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <Link href="/solutions" className="group">
            <StatCard
              icon={<FlaskConicalIcon className="size-6 text-brand" />}
              title="Our Solutions"
              description="Explore our comprehensive portfolio of medical technology solutions across wound care, aesthetics, and tissue processing."
            >
              <div className="mt-4 flex items-center text-sm font-semibold text-brand transition-transform group-hover:translate-x-1">
                View Solutions
                <ArrowRightIcon className="ml-2 size-4" />
              </div>
            </StatCard>
          </Link>

          <Link href="/divisions" className="group">
            <StatCard
              icon={<Building2Icon className="size-6 text-brand" />}
              title="Our Divisions"
              description="Discover our four specialized divisions: RegenTX, Tiger Wound Care, Tiger Aesthetics, and Tiger International."
            >
              <div className="mt-4 flex items-center text-sm font-semibold text-brand transition-transform group-hover:translate-x-1">
                View Divisions
                <ArrowRightIcon className="ml-2 size-4" />
              </div>
            </StatCard>
          </Link>

          <Link href="/careers" className="group">
            <StatCard
              icon={<HeartPulseIcon className="size-6 text-green-600" />}
              title="Careers"
              description="Join our team and be at the forefront of medical technology innovation. Explore open positions."
            >
              <div className="mt-4 flex items-center text-sm font-semibold text-green-600 transition-transform group-hover:translate-x-1">
                View Careers
                <ArrowRightIcon className="ml-2 size-4" />
              </div>
            </StatCard>
          </Link>

          <Link href="/contact" className="group">
            <StatCard
              icon={<GlobeIcon className="size-6 text-brand" />}
              title="Contact Us"
              description="Get in touch with our team to learn more about our solutions or request a product demonstration."
            >
              <div className="mt-4 flex items-center text-sm font-semibold text-brand transition-transform group-hover:translate-x-1">
                Contact Us
                <ArrowRightIcon className="ml-2 size-4" />
              </div>
            </StatCard>
          </Link>
        </div>
      </Section>
    </main>
  );
}
