import { Metadata } from "next";
import { Hero } from "@/components/site/Hero";
import { Section } from "@/components/site/Section";
import { Card, CardBody } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "International Markets - Tiger BioSciences",
  description: "Global distribution and regulatory expertise bringing advanced medical technologies to markets worldwide",
};

export default function InternationalPage() {
  return (
    <main className="min-h-screen">
      <Hero
        title="International Markets"
        description="Bridging continents and cultures to deliver life-changing medical technologies to healthcare professionals and patients around the world."
        primaryCTA={{ text: "Contact Us", href: "/contact" }}
        secondaryCTA={{ text: "View Divisions", href: "/divisions" }}
      />

      <Section
        title="Global Capabilities"
        description="Comprehensive solutions for international medical device distribution"
      >
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardBody>
              <h3 className="font-display text-xl font-medium mb-3 text-brand">Regulatory Expertise</h3>
              <p className="font-body text-muted-foreground">
                Deep knowledge of international regulatory frameworks including CE Mark, PMDA, TGA, and other global standards ensuring compliant market entry.
              </p>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <h3 className="font-display text-xl font-medium mb-3 text-brand">Distribution Networks</h3>
              <p className="font-body text-muted-foreground">
                Established distribution partnerships across six continents, ensuring reliable product availability and efficient supply chain management.
              </p>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <h3 className="font-display text-xl font-medium mb-3 text-brand">Market Access Strategy</h3>
              <p className="font-body text-muted-foreground">
                Strategic planning and execution for successful market entry, from reimbursement navigation to key opinion leader engagement.
              </p>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <h3 className="font-display text-xl font-medium mb-3 text-brand">Clinical Support</h3>
              <p className="font-body text-muted-foreground">
                Localized clinical training programs and technical support delivered by experienced professionals who understand regional practices.
              </p>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <h3 className="font-display text-xl font-medium mb-3 text-brand">Quality Systems</h3>
              <p className="font-body text-muted-foreground">
                ISO 13485 certified quality management systems ensuring product integrity from manufacturing through final delivery worldwide.
              </p>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <h3 className="font-display text-xl font-medium mb-3 text-brand">Cultural Competence</h3>
              <p className="font-body text-muted-foreground">
                Multilingual teams with deep understanding of local healthcare systems, cultural nuances, and market dynamics in each region.
              </p>
            </CardBody>
          </Card>
        </div>
      </Section>

      <Section
        title="Global Reach, Local Expertise"
        description="Connecting innovation with clinical need across borders"
      >
        <Card>
          <CardBody>
            <p className="text-lead text-muted-foreground mb-6">
              Tiger BioSciences serves healthcare providers in over 40 countries, bringing advanced medical technologies to diverse markets while respecting local regulations, practices, and cultural considerations. Our international team combines global perspective with regional expertise, ensuring that products not only meet regulatory requirements but truly serve the needs of local healthcare communities.
            </p>
            <p className="text-lead text-muted-foreground">
              From initial regulatory strategy to post-market surveillance, we provide comprehensive support that enables manufacturers to expand their global footprint confidently. Our established relationships with regulatory authorities, distributors, and healthcare institutions accelerate market access while maintaining the highest standards of compliance and quality.
            </p>
          </CardBody>
        </Card>
      </Section>
    </main>
  );
}
