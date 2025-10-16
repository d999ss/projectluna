import { Metadata } from "next";
import { Hero } from "@/components/site/Hero";
import { Section } from "@/components/site/Section";
import { Card, CardBody } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Wound Care Solutions - Tiger BioSciences",
  description: "Advanced regenerative wound care solutions that accelerate healing and improve outcomes for acute and chronic wounds.",
};

export default function WoundCareSolutions() {
  return (
    <main className="min-h-screen">
      <Hero
        title="Wound Care Solutions"
        description="Advanced regenerative biomaterials that promote healing, reduce complications, and improve patient outcomes for complex acute and chronic wounds."
        backgroundImage="/images/01.png"
        size="large"
      />

      <Section title="Clinical Applications" description="Comprehensive solutions for challenging wound types">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardBody>
              <h3 className="font-display text-xl font-medium mb-3">Chronic Wounds</h3>
              <p className="font-body text-muted-foreground">
                Advanced matrices for venous leg ulcers, diabetic foot ulcers, and pressure injuries that promote granulation tissue formation and accelerate wound closure.
              </p>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <h3 className="font-display text-xl font-medium mb-3">Surgical Wounds</h3>
              <p className="font-body text-muted-foreground">
                Bioactive scaffolds support healing of complex surgical sites, dehiscence, and traumatic injuries requiring advanced wound management.
              </p>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <h3 className="font-display text-xl font-medium mb-3">Burn Treatment</h3>
              <p className="font-body text-muted-foreground">
                Specialized biomaterial dressings for partial and full-thickness burns that reduce pain, minimize scarring, and support dermal regeneration.
              </p>
            </CardBody>
          </Card>
        </div>
      </Section>

      <Section title="Technology Platform" description="Innovative biomaterial technology for optimal healing">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <Card>
            <CardBody>
              <h3 className="font-display text-xl font-medium mb-3">Native Tissue Architecture</h3>
              <p className="font-body text-muted-foreground">
                Proprietary processing preserves the native three-dimensional structure and biological signals of extracellular matrix components, creating an optimal scaffold for cell infiltration and tissue regeneration.
              </p>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <h3 className="font-display text-xl font-medium mb-3">Biological Activity</h3>
              <p className="font-body text-muted-foreground">
                Retained growth factors and matrix proteins provide biological cues that recruit host cells, modulate inflammation, and promote organized tissue remodeling.
              </p>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <h3 className="font-display text-xl font-medium mb-3">Controlled Remodeling</h3>
              <p className="font-body text-muted-foreground">
                Balanced degradation and tissue integration allows progressive replacement with native tissue while maintaining wound stability throughout healing.
              </p>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <h3 className="font-display text-xl font-medium mb-3">Safety Profile</h3>
              <p className="font-body text-muted-foreground">
                Rigorous donor screening, validated viral inactivation, and comprehensive testing ensure product safety while maintaining biological functionality.
              </p>
            </CardBody>
          </Card>
        </div>
      </Section>

      <Section title="Clinical Outcomes" description="Evidence-based results across wound types">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardBody>
              <h3 className="font-display text-xl font-medium mb-3">Accelerated Closure</h3>
              <p className="font-body text-muted-foreground">
                Clinical studies demonstrate significantly faster wound closure rates compared to standard care, reducing treatment duration and healthcare costs.
              </p>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <h3 className="font-display text-xl font-medium mb-3">Reduced Complications</h3>
              <p className="font-body text-muted-foreground">
                Lower infection rates and fewer adverse events compared to alternative treatments, improving patient safety and satisfaction.
              </p>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <h3 className="font-display text-xl font-medium mb-3">Quality Tissue Formation</h3>
              <p className="font-body text-muted-foreground">
                Promotes organized dermal regeneration with improved tissue quality, strength, and aesthetic appearance compared to scar tissue.
              </p>
            </CardBody>
          </Card>
        </div>
      </Section>

      <Section title="Product Portfolio" description="Tailored solutions for diverse wound care needs">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <Card>
            <CardBody>
              <h3 className="font-display text-xl font-medium mb-3">Acellular Dermal Matrices</h3>
              <p className="font-body text-muted-foreground">
                Sterile, ready-to-use dermal regeneration matrices in multiple sizes and thicknesses to match specific wound characteristics and clinical requirements.
              </p>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <h3 className="font-display text-xl font-medium mb-3">Particulate Matrices</h3>
              <p className="font-body text-muted-foreground">
                Flowable formulations ideal for irregular wound beds, tunneling, and undermining that require conformable placement and complete coverage.
              </p>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <h3 className="font-display text-xl font-medium mb-3">Amniotic Membranes</h3>
              <p className="font-body text-muted-foreground">
                Birth tissue-derived products with anti-inflammatory and regenerative properties for acute and chronic wound applications.
              </p>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <h3 className="font-display text-xl font-medium mb-3">Composite Scaffolds</h3>
              <p className="font-body text-muted-foreground">
                Multi-layer constructs combining dermal matrices with barrier membranes for full-thickness defects requiring both dermal and epidermal regeneration.
              </p>
            </CardBody>
          </Card>
        </div>
      </Section>

      <Section title="Clinical Support" description="Comprehensive resources for optimal outcomes">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardBody>
              <h3 className="font-display text-xl font-medium mb-3">Clinical Education</h3>
              <p className="font-body text-muted-foreground">
                Training programs, case studies, and technique videos support proper product selection and application for optimal results.
              </p>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <h3 className="font-display text-xl font-medium mb-3">Reimbursement Assistance</h3>
              <p className="font-body text-muted-foreground">
                Dedicated team provides coding guidance, payer coverage information, and documentation support for reimbursement.
              </p>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <h3 className="font-display text-xl font-medium mb-3">Clinical Specialists</h3>
              <p className="font-body text-muted-foreground">
                Field-based clinical team offers in-service training, case consultation, and ongoing support for healthcare providers.
              </p>
            </CardBody>
          </Card>
        </div>
      </Section>
    </main>
  );
}
