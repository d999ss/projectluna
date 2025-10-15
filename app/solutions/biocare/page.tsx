import { Metadata } from "next";
import { Hero } from "@/components/site/Hero";
import { Section } from "@/components/site/Section";
import { Card, CardBody } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Biocare Division - Tiger BioSciences",
  description: "Comprehensive wound care and tissue management solutions addressing the full spectrum of acute and chronic wound healing needs.",
};

export default function BiocareDivision() {
  return (
    <main className="min-h-screen">
      <Hero
        title="Biocare Division"
        description="Complete portfolio of advanced wound care products and clinical support services designed to optimize healing outcomes and improve quality of life for patients with complex wounds."
      />

      <Section title="Product Categories" description="Comprehensive solutions for every phase of wound healing">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardBody>
              <h3 className="font-display text-xl font-medium mb-3">Advanced Dressings</h3>
              <p className="font-body text-muted-foreground">
                Foam, hydrocolloid, alginate, and composite dressings providing optimal moisture management and protection for diverse wound types.
              </p>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <h3 className="font-display text-xl font-medium mb-3">Antimicrobial Solutions</h3>
              <p className="font-body text-muted-foreground">
                Silver-based and iodine-based products that reduce bioburden while maintaining wound moisture balance and promoting healing.
              </p>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <h3 className="font-display text-xl font-medium mb-3">Negative Pressure Therapy</h3>
              <p className="font-body text-muted-foreground">
                Advanced wound VAC systems and accessories for managing complex wounds requiring controlled suction and exudate removal.
              </p>
            </CardBody>
          </Card>
        </div>
      </Section>

      <Section title="Clinical Applications" description="Addressing diverse wound care challenges">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <Card>
            <CardBody>
              <h3 className="font-display text-xl font-medium mb-3">Diabetic Foot Ulcers</h3>
              <p className="font-body text-muted-foreground">
                Specialized products and protocols for managing diabetic foot wounds, addressing offloading, infection control, and promoting granulation tissue formation for successful closure.
              </p>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <h3 className="font-display text-xl font-medium mb-3">Pressure Injuries</h3>
              <p className="font-body text-muted-foreground">
                Comprehensive pressure ulcer management including foam dressings, barrier products, and advanced therapies for stages 2-4 injuries requiring specialized care.
              </p>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <h3 className="font-display text-xl font-medium mb-3">Venous Leg Ulcers</h3>
              <p className="font-body text-muted-foreground">
                Compression therapy systems and moisture management products specifically designed for venous insufficiency wounds with exudate control needs.
              </p>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <h3 className="font-display text-xl font-medium mb-3">Surgical Wounds</h3>
              <p className="font-body text-muted-foreground">
                Post-operative dressings and incision management products supporting optimal surgical site healing and reducing complications.
              </p>
            </CardBody>
          </Card>
        </div>
      </Section>

      <Section title="Wound Assessment & Documentation" description="Technology-enabled wound management">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardBody>
              <h3 className="font-display text-xl font-medium mb-3">Digital Wound Imaging</h3>
              <p className="font-body text-muted-foreground">
                Advanced photography systems with standardized lighting and measurement tools for accurate wound assessment and progress tracking.
              </p>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <h3 className="font-display text-xl font-medium mb-3">Measurement Tools</h3>
              <p className="font-body text-muted-foreground">
                Precise wound measurement devices and software calculating wound area, volume, and healing rates with objective data.
              </p>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <h3 className="font-display text-xl font-medium mb-3">Documentation Software</h3>
              <p className="font-body text-muted-foreground">
                Electronic health record integration enabling efficient documentation and longitudinal tracking of wound healing progress.
              </p>
            </CardBody>
          </Card>
        </div>
      </Section>

      <Section title="Clinical Education" description="Building wound care expertise across care settings">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <Card>
            <CardBody>
              <h3 className="font-display text-xl font-medium mb-3">Certification Programs</h3>
              <p className="font-body text-muted-foreground">
                Comprehensive training programs for nurses and clinicians seeking wound care certification, combining online learning with hands-on skills development.
              </p>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <h3 className="font-display text-xl font-medium mb-3">Continuing Education</h3>
              <p className="font-body text-muted-foreground">
                CME and CNE-approved educational programs keeping healthcare providers current with evolving wound care best practices and new technologies.
              </p>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <h3 className="font-display text-xl font-medium mb-3">Clinical Workshops</h3>
              <p className="font-body text-muted-foreground">
                Interactive workshops providing hands-on experience with advanced wound care products and evidence-based treatment protocols.
              </p>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <h3 className="font-display text-xl font-medium mb-3">Online Resources</h3>
              <p className="font-body text-muted-foreground">
                Digital library of educational videos, clinical guidelines, case studies, and product information supporting clinical decision-making.
              </p>
            </CardBody>
          </Card>
        </div>
      </Section>

      <Section title="Clinical Support Services" description="Comprehensive support optimizing wound care outcomes">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardBody>
              <h3 className="font-display text-xl font-medium mb-3">Clinical Specialists</h3>
              <p className="font-body text-muted-foreground">
                Certified wound care specialists provide on-site consultation, case review, and treatment recommendations for complex cases.
              </p>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <h3 className="font-display text-xl font-medium mb-3">Reimbursement Support</h3>
              <p className="font-body text-muted-foreground">
                Dedicated team assists with coding, coverage verification, and documentation requirements for product reimbursement.
              </p>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <h3 className="font-display text-xl font-medium mb-3">Product Selection Guidance</h3>
              <p className="font-body text-muted-foreground">
                Evidence-based algorithms and decision tools help clinicians select optimal products for specific wound characteristics.
              </p>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <h3 className="font-display text-xl font-medium mb-3">Clinical Protocols</h3>
              <p className="font-body text-muted-foreground">
                Standardized treatment protocols and care pathways optimizing outcomes while improving efficiency and consistency.
              </p>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <h3 className="font-display text-xl font-medium mb-3">Quality Improvement</h3>
              <p className="font-body text-muted-foreground">
                Outcome measurement tools and benchmarking data supporting quality improvement initiatives and program optimization.
              </p>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <h3 className="font-display text-xl font-medium mb-3">24/7 Clinical Hotline</h3>
              <p className="font-body text-muted-foreground">
                Round-the-clock access to wound care experts for urgent clinical questions and product-related inquiries.
              </p>
            </CardBody>
          </Card>
        </div>
      </Section>

      <Section title="Program Development" description="Building comprehensive wound care programs">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <Card>
            <CardBody>
              <h3 className="font-display text-xl font-medium mb-3">Hospital Programs</h3>
              <p className="font-body text-muted-foreground">
                Turnkey solutions for establishing or enhancing hospital-based wound care programs including protocols, training, and product formulary development.
              </p>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <h3 className="font-display text-xl font-medium mb-3">Outpatient Clinics</h3>
              <p className="font-body text-muted-foreground">
                Comprehensive support for outpatient wound centers including workflow optimization, documentation systems, and clinical staff training.
              </p>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <h3 className="font-display text-xl font-medium mb-3">Long-Term Care</h3>
              <p className="font-body text-muted-foreground">
                Specialized programs for skilled nursing facilities addressing pressure injury prevention and management with staff education and protocols.
              </p>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <h3 className="font-display text-xl font-medium mb-3">Home Health</h3>
              <p className="font-body text-muted-foreground">
                Home health-specific solutions including simplified product systems, caregiver training materials, and remote consultation support.
              </p>
            </CardBody>
          </Card>
        </div>
      </Section>

      <Section title="Outcomes & Evidence" description="Data-driven approach to wound care excellence">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardBody>
              <h3 className="font-display text-xl font-medium mb-3">Clinical Evidence</h3>
              <p className="font-body text-muted-foreground">
                Extensive published literature supporting product efficacy and clinical protocols across diverse wound types and settings.
              </p>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <h3 className="font-display text-xl font-medium mb-3">Real-World Data</h3>
              <p className="font-body text-muted-foreground">
                Registry data and post-market surveillance confirming clinical performance translates to routine practice across care settings.
              </p>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <h3 className="font-display text-xl font-medium mb-3">Cost-Effectiveness</h3>
              <p className="font-body text-muted-foreground">
                Health economic studies demonstrating value of advanced wound care through reduced healing time and lower complication rates.
              </p>
            </CardBody>
          </Card>
        </div>
      </Section>
    </main>
  );
}
