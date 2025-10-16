import { Metadata } from "next";
import { Hero } from "@/components/site/Hero";
import { Section } from "@/components/site/Section";
import { Card, CardBody } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Research & Development - Tiger BioSciences",
  description: "Pioneering research and development driving the next generation of regenerative medicine solutions",
};

export default function ResearchPage() {
  return (
    <main className="min-h-screen">
      <Hero
        title="Research & Development"
        description="Pushing the boundaries of medical science through rigorous research and innovative development that transforms scientific discovery into clinical reality."
        primaryCTA={{ text: "Contact Us", href: "/contact" }}
        secondaryCTA={{ text: "View Divisions", href: "/divisions" }}
      />

      <Section
        title="Research Focus Areas"
        description="Advancing science across multiple therapeutic domains"
      >
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardBody>
              <h3 className="font-display text-xl font-medium mb-3 text-brand">Biomaterial Science</h3>
              <p className="font-body text-muted-foreground">
                Developing next-generation biomaterials with enhanced bioactivity, controlled degradation profiles, and superior tissue integration properties.
              </p>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <h3 className="font-display text-xl font-medium mb-3 text-brand">Cell Biology</h3>
              <p className="font-body text-muted-foreground">
                Investigating cellular mechanisms of tissue repair and regeneration to inform the design of more effective therapeutic interventions.
              </p>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <h3 className="font-display text-xl font-medium mb-3 text-brand">Tissue Engineering</h3>
              <p className="font-body text-muted-foreground">
                Creating complex tissue constructs that recapitulate native tissue architecture and function for improved clinical outcomes.
              </p>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <h3 className="font-display text-xl font-medium mb-3 text-brand">Product Development</h3>
              <p className="font-body text-muted-foreground">
                Translating laboratory discoveries into manufacturable, regulatory-compliant products through rigorous development processes.
              </p>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <h3 className="font-display text-xl font-medium mb-3 text-brand">Clinical Translation</h3>
              <p className="font-body text-muted-foreground">
                Bridging the gap between bench and bedside through carefully designed preclinical and clinical studies that demonstrate safety and efficacy.
              </p>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <h3 className="font-display text-xl font-medium mb-3 text-brand">Process Innovation</h3>
              <p className="font-body text-muted-foreground">
                Developing scalable manufacturing processes that maintain product quality while enabling cost-effective production and broader patient access.
              </p>
            </CardBody>
          </Card>
        </div>
      </Section>

      <Section
        title="Innovation Pipeline"
        description="From discovery to clinical application"
      >
        <Card>
          <CardBody>
            <p className="text-lead text-muted-foreground mb-6">
              Our research and development efforts are guided by unmet clinical needs and driven by scientific rigor. We maintain state-of-the-art facilities staffed by accomplished scientists and engineers who collaborate closely with clinical advisors to ensure our research addresses real-world challenges in patient care.
            </p>
            <p className="text-lead text-muted-foreground">
              Through strategic partnerships with academic institutions, research hospitals, and industry leaders, we accelerate innovation while maintaining the highest standards of scientific integrity. Our robust intellectual property portfolio and proven track record of successful product launches demonstrate our commitment to transforming breakthrough science into therapies that make a meaningful difference in patients&apos; lives.
            </p>
          </CardBody>
        </Card>
      </Section>
    </main>
  );
}
