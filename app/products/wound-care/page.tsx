import { Metadata } from "next";
import { Hero } from "@/components/site/Hero";
import { Section } from "@/components/site/Section";
import { Card, CardBody } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Wound Care Systems - Tiger BioSciences",
  description: "Advanced wound care systems combining regenerative biomaterials with clinical expertise to accelerate healing and improve outcomes.",
};

export default function WoundCareSystems() {
  return (
    <main className="min-h-screen">
      <Hero
        title="Wound Care Systems"
        description="Comprehensive wound care solutions that integrate advanced biomaterials, clinical protocols, and support systems to transform patient outcomes across acute and chronic wound management."
        primaryCTA={{ text: "Contact Sales", href: "/contact" }}
        secondaryCTA={{ text: "View All Products", href: "/products" }}
      />

      <Section title="System Components" description="Integrated solutions for comprehensive wound management">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardBody>
              <h3 className="font-display text-xl font-medium mb-3">Regenerative Matrices</h3>
              <p className="font-body text-muted-foreground">
                Advanced acellular dermal matrices and amniotic membrane products that provide a biological scaffold for tissue regeneration and accelerated wound closure.
              </p>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <h3 className="font-display text-xl font-medium mb-3">Wound Dressings</h3>
              <p className="font-body text-muted-foreground">
                Specialized dressing systems designed to maintain optimal moisture balance, protect healing tissue, and support the biological activity of regenerative matrices.
              </p>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <h3 className="font-display text-xl font-medium mb-3">Clinical Protocols</h3>
              <p className="font-body text-muted-foreground">
                Evidence-based protocols for wound bed preparation, product selection, and application techniques optimized for different wound types and clinical scenarios.
              </p>
            </CardBody>
          </Card>
        </div>
      </Section>

      <Section title="Clinical Applications" description="Proven solutions across diverse wound types">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <Card>
            <CardBody>
              <h3 className="font-display text-xl font-medium mb-3">Diabetic Foot Ulcers</h3>
              <p className="font-body text-muted-foreground">
                Specialized treatment protocols for diabetic wound healing, addressing the unique challenges of impaired healing, infection risk, and limb preservation in diabetic patients.
              </p>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <h3 className="font-display text-xl font-medium mb-3">Venous Leg Ulcers</h3>
              <p className="font-body text-muted-foreground">
                Comprehensive approach combining regenerative matrices with compression therapy to address venous insufficiency and promote sustainable wound closure.
              </p>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <h3 className="font-display text-xl font-medium mb-3">Pressure Injuries</h3>
              <p className="font-body text-muted-foreground">
                Advanced solutions for pressure ulcer management from stage II through stage IV, supporting healing while addressing underlying tissue damage and prevention strategies.
              </p>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <h3 className="font-display text-xl font-medium mb-3">Traumatic Wounds</h3>
              <p className="font-body text-muted-foreground">
                Rapid deployment systems for acute traumatic injuries requiring immediate intervention and accelerated healing to restore function and minimize complications.
              </p>
            </CardBody>
          </Card>
        </div>
      </Section>

      <Section title="Clinical Outcomes" description="Measurable improvements in patient care">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardBody>
              <h3 className="font-display text-xl font-medium mb-3">Faster Healing Times</h3>
              <p className="font-body text-muted-foreground">
                Clinical data demonstrates significant reduction in time to wound closure compared to standard care, reducing patient suffering and healthcare costs.
              </p>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <h3 className="font-display text-xl font-medium mb-3">Lower Infection Rates</h3>
              <p className="font-body text-muted-foreground">
                Advanced biomaterial properties and proper wound bed preparation contribute to reduced infection rates and improved patient safety profiles.
              </p>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <h3 className="font-display text-xl font-medium mb-3">Improved Quality of Life</h3>
              <p className="font-body text-muted-foreground">
                Faster healing, reduced pain, and better cosmetic outcomes translate to measurable improvements in patient quality of life and satisfaction.
              </p>
            </CardBody>
          </Card>
        </div>
      </Section>

      <Section title="Support Services" description="Comprehensive clinical and operational support">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <Card>
            <CardBody>
              <h3 className="font-display text-xl font-medium mb-3">Clinical Education</h3>
              <p className="font-body text-muted-foreground">
                Extensive training programs including hands-on workshops, online modules, and continuing education credits to ensure optimal product utilization and patient outcomes.
              </p>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <h3 className="font-display text-xl font-medium mb-3">Reimbursement Support</h3>
              <p className="font-body text-muted-foreground">
                Dedicated reimbursement specialists provide coding assistance, coverage verification, and documentation guidance to streamline payment processes.
              </p>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <h3 className="font-display text-xl font-medium mb-3">Field Clinical Support</h3>
              <p className="font-body text-muted-foreground">
                Expert clinical specialists available for in-service training, case consultation, and bedside support to optimize treatment protocols and outcomes.
              </p>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <h3 className="font-display text-xl font-medium mb-3">Evidence Development</h3>
              <p className="font-body text-muted-foreground">
                Collaborative research programs and registry participation to advance clinical evidence and support adoption of regenerative wound care technologies.
              </p>
            </CardBody>
          </Card>
        </div>
      </Section>
    </main>
  );
}
