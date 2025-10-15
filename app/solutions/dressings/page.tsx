import { Metadata } from "next";
import { Hero } from "@/components/site/Hero";
import { Section } from "@/components/site/Section";
import { Card, CardBody } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Dressings & Recovery - Tiger BioSciences",
  description: "Advanced wound dressings and recovery solutions that protect healing tissue, manage exudate, and optimize the wound healing environment.",
};

export default function DressingsRecovery() {
  return (
    <main className="min-h-screen">
      <Hero
        title="Dressings & Recovery"
        description="Advanced wound dressings and recovery solutions designed to protect healing tissue, maintain optimal moisture balance, and support the natural healing process."
      />

      <Section title="Product Categories" description="Comprehensive dressing solutions for every healing phase">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardBody>
              <h3 className="font-display text-xl font-medium mb-3">Biological Dressings</h3>
              <p className="font-body text-muted-foreground">
                Birth tissue-derived membranes provide biological protection while delivering anti-inflammatory and regenerative properties to support wound healing.
              </p>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <h3 className="font-display text-xl font-medium mb-3">Antimicrobial Solutions</h3>
              <p className="font-body text-muted-foreground">
                Advanced dressings incorporating silver or other antimicrobial agents that protect against infection while maintaining moisture balance.
              </p>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <h3 className="font-display text-xl font-medium mb-3">Foam Dressings</h3>
              <p className="font-body text-muted-foreground">
                Highly absorbent polyurethane foams manage exudate while providing cushioning protection for healing wounds and surgical sites.
              </p>
            </CardBody>
          </Card>
        </div>
      </Section>

      <Section title="Clinical Applications" description="Tailored solutions for diverse wound types and healing stages">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <Card>
            <CardBody>
              <h3 className="font-display text-xl font-medium mb-3">Acute Wound Care</h3>
              <p className="font-body text-muted-foreground">
                Protective dressings for surgical incisions, traumatic wounds, and burns that reduce pain, prevent contamination, and support natural healing progression.
              </p>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <h3 className="font-display text-xl font-medium mb-3">Chronic Wound Management</h3>
              <p className="font-body text-muted-foreground">
                Specialized dressings for diabetic ulcers, venous insufficiency wounds, and pressure injuries that address underlying healing challenges.
              </p>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <h3 className="font-display text-xl font-medium mb-3">Post-Surgical Recovery</h3>
              <p className="font-body text-muted-foreground">
                Comfortable, conformable dressings that protect surgical sites while allowing mobility and facilitating optimal healing conditions.
              </p>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <h3 className="font-display text-xl font-medium mb-3">Skin Protection</h3>
              <p className="font-body text-muted-foreground">
                Barrier films and protective dressings prevent skin breakdown in high-risk patients and maintain skin integrity during healing.
              </p>
            </CardBody>
          </Card>
        </div>
      </Section>

      <Section title="Technology Features" description="Advanced design for optimal healing outcomes">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardBody>
              <h3 className="font-display text-xl font-medium mb-3">Moisture Management</h3>
              <p className="font-body text-muted-foreground">
                Balanced moisture vapor transmission maintains optimal hydration levels that support cellular activity and autolytic debridement.
              </p>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <h3 className="font-display text-xl font-medium mb-3">Exudate Control</h3>
              <p className="font-body text-muted-foreground">
                High absorbency materials lock away excess fluid while preventing maceration of periwound skin and maintaining dressing integrity.
              </p>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <h3 className="font-display text-xl font-medium mb-3">Non-Adherent Design</h3>
              <p className="font-body text-muted-foreground">
                Atraumatic removal protects fragile healing tissue and minimizes patient discomfort during dressing changes.
              </p>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <h3 className="font-display text-xl font-medium mb-3">Bacterial Barrier</h3>
              <p className="font-body text-muted-foreground">
                Protective barrier properties prevent external contamination while allowing appropriate gas exchange for cellular respiration.
              </p>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <h3 className="font-display text-xl font-medium mb-3">Conformability</h3>
              <p className="font-body text-muted-foreground">
                Flexible materials adapt to body contours and movement, ensuring continuous wound protection and patient comfort.
              </p>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <h3 className="font-display text-xl font-medium mb-3">Extended Wear Time</h3>
              <p className="font-body text-muted-foreground">
                Durable construction allows longer wear intervals, reducing dressing changes and associated healthcare costs.
              </p>
            </CardBody>
          </Card>
        </div>
      </Section>

      <Section title="Recovery Support" description="Comprehensive solutions for optimal healing outcomes">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <Card>
            <CardBody>
              <h3 className="font-display text-xl font-medium mb-3">Post-Operative Care Kits</h3>
              <p className="font-body text-muted-foreground">
                Complete dressing systems with all necessary components for surgical site management, simplifying post-operative wound care protocols.
              </p>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <h3 className="font-display text-xl font-medium mb-3">Patient Education Materials</h3>
              <p className="font-body text-muted-foreground">
                Clear instructions and visual guides help patients understand proper wound care techniques and recognize signs requiring medical attention.
              </p>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <h3 className="font-display text-xl font-medium mb-3">Home Care Solutions</h3>
              <p className="font-body text-muted-foreground">
                User-friendly dressing systems designed for self-application enable safe, effective wound management in outpatient settings.
              </p>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <h3 className="font-display text-xl font-medium mb-3">Clinical Support</h3>
              <p className="font-body text-muted-foreground">
                Wound care specialists provide product selection guidance, application training, and troubleshooting assistance for healthcare providers.
              </p>
            </CardBody>
          </Card>
        </div>
      </Section>
    </main>
  );
}
