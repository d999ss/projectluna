import { Metadata } from "next";
import { Hero } from "@/components/site/Hero";
import { Section } from "@/components/site/Section";
import { Card, CardBody } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Clinical Evidence - Tiger BioSciences",
  description: "Access comprehensive clinical studies, research data, and evidence supporting our advanced tissue engineering solutions",
};

export default function ClinicalPage() {
  return (
    <main className="min-h-screen">
      <Hero
        title="Clinical Evidence"
        description="Comprehensive clinical studies and research data demonstrating the safety and efficacy of our tissue engineering solutions."
        primaryCTA={{ text: "Contact Our Team", href: "/contact" }}
      />

      <Section
        title="Research Areas"
        description="Explore our clinical evidence across key therapeutic areas"
      >
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardBody>
              <h3 className="font-display text-xl font-medium mb-3 text-brand">Wound Healing</h3>
              <p className="font-body text-muted-foreground mb-4">
                Extensive clinical data on advanced wound healing outcomes, including chronic wounds, diabetic ulcers, and surgical applications.
              </p>
              <p className="text-sm text-muted-foreground">
                25+ peer-reviewed publications
              </p>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <h3 className="font-display text-xl font-medium mb-3 text-brand">Tissue Regeneration</h3>
              <p className="font-body text-muted-foreground mb-4">
                Clinical evidence supporting regenerative outcomes in various tissue types and complex reconstruction procedures.
              </p>
              <p className="text-sm text-muted-foreground">
                18+ clinical trials completed
              </p>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <h3 className="font-display text-xl font-medium mb-3 text-brand">Burns & Trauma</h3>
              <p className="font-body text-muted-foreground mb-4">
                Research demonstrating improved outcomes in burn treatment and traumatic injury management.
              </p>
              <p className="text-sm text-muted-foreground">
                10+ years of clinical data
              </p>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <h3 className="font-display text-xl font-medium mb-3 text-brand">Orthopedic Applications</h3>
              <p className="font-body text-muted-foreground mb-4">
                Evidence-based outcomes in orthopedic procedures, including soft tissue repair and bone healing.
              </p>
              <p className="text-sm text-muted-foreground">
                12+ specialized studies
              </p>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <h3 className="font-display text-xl font-medium mb-3 text-brand">Cardiovascular</h3>
              <p className="font-body text-muted-foreground mb-4">
                Clinical research in cardiovascular tissue engineering and vascular reconstruction applications.
              </p>
              <p className="text-sm text-muted-foreground">
                8+ ongoing studies
              </p>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <h3 className="font-display text-xl font-medium mb-3 text-brand">Long-Term Safety</h3>
              <p className="font-body text-muted-foreground mb-4">
                Comprehensive safety profiles and long-term follow-up data across all product lines.
              </p>
              <p className="text-sm text-muted-foreground">
                15+ year safety record
              </p>
            </CardBody>
          </Card>
        </div>
      </Section>

      <Section
        title="Clinical Study Types"
        description="Our commitment to rigorous scientific validation"
      >
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <Card>
            <CardBody>
              <h3 className="font-display text-xl mb-4">Randomized Controlled Trials</h3>
              <p className="text-lead text-muted-foreground mb-4">
                Gold-standard RCTs comparing our products to conventional treatments and demonstrating superior outcomes in patient care.
              </p>
              <ul className="font-body text-muted-foreground space-y-2">
                <li>• Multi-center trial designs</li>
                <li>• Independent data monitoring</li>
                <li>• Long-term follow-up protocols</li>
                <li>• Published in leading journals</li>
              </ul>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <h3 className="font-display text-xl mb-4">Real-World Evidence</h3>
              <p className="text-lead text-muted-foreground mb-4">
                Comprehensive data from clinical practice demonstrating consistent outcomes across diverse patient populations and care settings.
              </p>
              <ul className="font-body text-muted-foreground space-y-2">
                <li>• Registry data analysis</li>
                <li>• Post-market surveillance</li>
                <li>• Patient-reported outcomes</li>
                <li>• Cost-effectiveness studies</li>
              </ul>
            </CardBody>
          </Card>
        </div>
      </Section>

      <Section
        title="Access Clinical Data"
        description="Resources for healthcare professionals"
      >
        <Card>
          <CardBody>
            <p className="text-lead text-muted-foreground mb-6">
              Healthcare professionals can access our complete library of clinical studies, white papers, and research summaries. Our medical affairs team is available to discuss specific clinical questions and provide detailed study information.
            </p>
            <p className="font-body text-muted-foreground">
              For access to our clinical evidence database or to speak with our medical affairs team, please contact us. All clinical data is provided in accordance with regulatory guidelines and privacy standards.
            </p>
          </CardBody>
        </Card>
      </Section>
    </main>
  );
}
