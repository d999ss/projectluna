import { Metadata } from "next";
import { Hero } from "@/components/site/Hero";
import { Section } from "@/components/site/Section";
import { Card, CardBody } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Our Heritage - Tiger BioSciences",
  description: "Discover the history and legacy of Tiger BioSciences, from our founding in 2023 to rapid growth as a leader in regenerative medicine and tissue engineering.",
};

export default function HeritagePage() {
  return (
    <main className="min-h-screen">
      <Hero
        title="Our Heritage"
        description="A story of rapid innovation and strategic growth, building a comprehensive portfolio in regenerative medicine and tissue engineering."
      />

      <Section
        title="Our Story"
        description="Building a comprehensive regenerative medicine platform"
      >
        <Card>
          <CardBody>
            <p className="text-lead text-muted-foreground mb-6">
              Tiger BioSciences was founded in July 2023 by Oliver Burckhardt and Scott Madden in Conshohocken, Pennsylvania, with a clear vision: to build a comprehensive platform of regenerative medicine and tissue engineering solutions. Drawing on decades of combined expertise in medical device innovation, the founders assembled a portfolio of leading biotechnology companies focused on cellular, acellular, and matrix-like products (CAMPs) for wound care, soft tissue reconstruction, and aesthetics.
            </p>
            <p className="text-lead text-muted-foreground">
              From day one, Tiger BioSciences has pursued an aggressive growth strategy through strategic acquisitions of established brands and technologies. Our journey has been marked by rapid expansion, bringing together best-in-class products and exceptional talent to serve healthcare professionals worldwide. Today, we stand as a dynamic force in regenerative medicine, with a growing portfolio spanning multiple therapeutic areas.
            </p>
          </CardBody>
        </Card>
      </Section>

      <Section
        title="Key Milestones"
        description="Our rapid growth journey"
      >
        <div className="space-y-6">
          <Card>
            <CardBody>
              <div className="flex flex-col md:flex-row md:items-start gap-6">
                <div className="flex-shrink-0">
                  <span className="text-display font-bold text-brand">Jul 2023</span>
                </div>
                <div className="flex-1">
                  <h3 className="font-display text-xl mb-3">Tiger BioSciences Founded</h3>
                  <p className="font-body text-muted-foreground">
                    Oliver Burckhardt and Scott Madden establish Tiger BioSciences in Conshohocken, Pennsylvania. The company is formed as a holding company to consolidate and grow a portfolio of regenerative medicine and tissue engineering businesses, including existing operations from Extremity Care and RegenTX Partners.
                  </p>
                </div>
              </div>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <div className="flex flex-col md:flex-row md:items-start gap-6">
                <div className="flex-shrink-0">
                  <span className="text-display font-bold text-brand">Apr 2024</span>
                </div>
                <div className="flex-1">
                  <h3 className="font-display text-xl mb-3">Sientra Acquisition</h3>
                  <p className="font-body text-muted-foreground">
                    Tiger Aesthetics acquires substantially all assets of Sientra Inc.'s breast implant business for $42.5 million plus assumption of liabilities. This strategic acquisition brings premium silicone gel breast implants and a Wisconsin-based manufacturing facility into the portfolio, establishing Tiger as a major player in aesthetic breast surgery.
                  </p>
                </div>
              </div>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <div className="flex flex-col md:flex-row md:items-start gap-6">
                <div className="flex-shrink-0">
                  <span className="text-display font-bold text-brand">Oct 2024</span>
                </div>
                <div className="flex-1">
                  <h3 className="font-display text-xl mb-3">Suneva Medical Acquisition</h3>
                  <p className="font-body text-muted-foreground">
                    Tiger Aesthetics expands regenerative aesthetics portfolio with acquisition of select Suneva Medical assets, including BellaFill® biostimulatory dermal filler, Silhouette Instalift® absorbable suspension sutures, and Amplifine™ PRP system. The acquisition adds manufacturing capabilities and three established product lines to complement upcoming adipose tissue products.
                  </p>
                </div>
              </div>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <div className="flex flex-col md:flex-row md:items-start gap-6">
                <div className="flex-shrink-0">
                  <span className="text-display font-bold text-brand">Nov 2024</span>
                </div>
                <div className="flex-1">
                  <h3 className="font-display text-xl mb-3">Revelle Aesthetics Acquisition</h3>
                  <p className="font-body text-muted-foreground">
                    Tiger Aesthetics acquires Revelle Aesthetics, makers of the FDA-cleared Avéli® cellulite reduction device. This acquisition broadens Tiger's commercial reach into regenerative body aesthetics, providing a comprehensive suite for lower body rejuvenation when combined with Viality™ fat transfer and the upcoming alloClae™ structural adipose fillers.
                  </p>
                </div>
              </div>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <div className="flex flex-col md:flex-row md:items-start gap-6">
                <div className="flex-shrink-0">
                  <span className="text-display font-bold text-brand">Feb 2025</span>
                </div>
                <div className="flex-1">
                  <h3 className="font-display text-xl mb-3">Encore Surgical Acquisition</h3>
                  <p className="font-body text-muted-foreground">
                    Tiger Wound Care acquires Novo Health Care Service's Encore Surgical HealPACK Solutions, expanding into comprehensive surgical dressing systems. This strategic move strengthens Tiger's wound care portfolio with proven surgical site management products and further positions the company across the full continuum of tissue care.
                  </p>
                </div>
              </div>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <div className="flex flex-col md:flex-row md:items-start gap-6">
                <div className="flex-shrink-0">
                  <span className="text-display font-bold text-brand">2025</span>
                </div>
                <div className="flex-1">
                  <h3 className="font-display text-xl mb-3">Continued Growth</h3>
                  <p className="font-body text-muted-foreground">
                    Tiger BioSciences continues expanding its regenerative medicine platform with ongoing product launches including alloClae™ and dermaClae™ adipose fillers, international market expansion through Lizard Health Technologies, and development of next-generation CAMP products through RegenTX Labs. The company maintains its aggressive growth trajectory while building infrastructure to support global operations.
                  </p>
                </div>
              </div>
            </CardBody>
          </Card>
        </div>
      </Section>

      <Section
        title="Leadership Legacy"
        description="Visionaries who built our company"
      >
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <Card>
            <CardBody>
              <h3 className="font-display text-xl mb-3 text-brand">Oliver Burckhardt</h3>
              <p className="font-display text-lg font-medium mb-3">Co-Founder, Co-CEO & Co-Owner</p>
              <p className="font-body text-muted-foreground">
                A proven entrepreneur in medical devices with deep expertise in orthopedics, spine, and regenerative medicine. Oliver previously founded Extremity Care (2020) and Flower Orthopedics, and co-owned RegenTX Partners (2022). His strategic vision and M&A expertise have been instrumental in rapidly building Tiger BioSciences' comprehensive portfolio through targeted acquisitions and organic growth.
              </p>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <h3 className="font-display text-xl mb-3 text-brand">Scott Madden</h3>
              <p className="font-display text-lg font-medium mb-3">Co-Founder, Co-CEO & Co-Owner</p>
              <p className="font-body text-muted-foreground">
                A biotech innovator and sales strategist with extensive experience in building and scaling regenerative medicine businesses. Scott's leadership in commercial operations and market development has been critical to Tiger BioSciences' rapid market penetration. His focus on customer relationships and clinical education has positioned Tiger as a trusted partner for healthcare professionals worldwide.
              </p>
            </CardBody>
          </Card>
        </div>
      </Section>

      <Section
        title="Our Continuing Journey"
        description="Accelerating growth and innovation"
      >
        <Card>
          <CardBody>
            <p className="text-lead text-muted-foreground mb-6">
              Our story is just beginning. Since our founding in 2023, we have demonstrated that strategic vision combined with operational excellence can rapidly build a comprehensive regenerative medicine platform. Through targeted acquisitions and organic growth, we've assembled a portfolio of leading brands and technologies that serve healthcare professionals across multiple therapeutic areas.
            </p>
            <p className="text-lead text-muted-foreground mb-6">
              Looking ahead, we remain committed to aggressive growth while maintaining the quality and innovation that define our brands. With upcoming product launches, international expansion, and continued M&A activity, Tiger BioSciences is poised to become a global leader in regenerative medicine. Every acquisition, every product launch, and every patient we serve adds to our growing legacy of excellence.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <a
                href="/company/about"
                className="inline-flex items-center justify-center rounded-full px-8 py-3 bg-brand text-brand-foreground font-semibold hover:brightness-110 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand/60"
              >
                About Us
              </a>
              <a
                href="/company/credo"
                className="inline-flex items-center justify-center rounded-full px-8 py-3 border border-input bg-background hover:bg-accent hover:text-accent-foreground font-semibold transition-all duration-200"
              >
                Our Credo
              </a>
            </div>
          </CardBody>
        </Card>
      </Section>
    </main>
  );
}
