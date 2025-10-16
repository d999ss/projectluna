import { Metadata } from "next";
import { Hero } from "@/components/site/Hero";
import { Section } from "@/components/site/Section";
import { Card, CardBody } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Surgical Solutions - Tiger BioSciences",
  description: "Advanced surgical biomaterials and regenerative solutions for soft tissue reconstruction, hernia repair, and complex surgical procedures.",
};

export default function SurgicalSolutions() {
  return (
    <main className="min-h-screen">
      <Hero
        title="Surgical Solutions"
        description="Innovative biomaterial solutions engineered for surgical reconstruction, tissue reinforcement, and regenerative repair across multiple surgical specialties."
        primaryCTA={{ text: "Contact Sales", href: "/contact" }}
        secondaryCTA={{ text: "View All Products", href: "/products" }}
      />

      <Section title="Surgical Applications" description="Biomaterial solutions across surgical specialties">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardBody>
              <h3 className="font-display text-xl font-medium mb-3">Hernia Repair</h3>
              <p className="font-body text-muted-foreground">
                Advanced biological meshes for ventral, inguinal, and complex hernia repair that promote tissue integration while minimizing recurrence and complications.
              </p>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <h3 className="font-display text-xl font-medium mb-3">Soft Tissue Reconstruction</h3>
              <p className="font-body text-muted-foreground">
                Acellular dermal matrices for breast reconstruction, abdominal wall repair, and complex defect coverage with natural tissue integration and remodeling.
              </p>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <h3 className="font-display text-xl font-medium mb-3">Plastic Surgery</h3>
              <p className="font-body text-muted-foreground">
                Specialized matrices for breast reconstruction, facial reconstruction, and aesthetic procedures requiring precise tissue support and optimal cosmetic outcomes.
              </p>
            </CardBody>
          </Card>
        </div>
      </Section>

      <Section title="Product Technologies" description="Advanced biomaterial platforms for surgical applications">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <Card>
            <CardBody>
              <h3 className="font-display text-xl font-medium mb-3">Acellular Dermal Matrices</h3>
              <p className="font-body text-muted-foreground">
                Human and porcine-derived dermal matrices processed to preserve native architecture while removing cellular components, providing a natural scaffold for tissue incorporation and remodeling.
              </p>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <h3 className="font-display text-xl font-medium mb-3">Biological Mesh Systems</h3>
              <p className="font-body text-muted-foreground">
                Cross-linked and non-cross-linked biological meshes engineered for hernia repair with optimized strength, flexibility, and integration characteristics for different surgical requirements.
              </p>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <h3 className="font-display text-xl font-medium mb-3">Composite Scaffolds</h3>
              <p className="font-body text-muted-foreground">
                Multi-layer constructs combining dermal matrices with reinforcement layers for complex reconstructive procedures requiring both biological activity and mechanical support.
              </p>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <h3 className="font-display text-xl font-medium mb-3">Fenestrated Designs</h3>
              <p className="font-body text-muted-foreground">
                Specialized fenestration patterns that enhance fluid drainage, promote vascular ingrowth, and allow for secure fixation while maintaining structural integrity.
              </p>
            </CardBody>
          </Card>
        </div>
      </Section>

      <Section title="Clinical Advantages" description="Superior outcomes through advanced biomaterial design">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardBody>
              <h3 className="font-display text-xl font-medium mb-3">Native Tissue Integration</h3>
              <p className="font-body text-muted-foreground">
                Preserved biological signals promote host cell infiltration and progressive remodeling, resulting in living tissue rather than permanent foreign material.
              </p>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <h3 className="font-display text-xl font-medium mb-3">Reduced Complications</h3>
              <p className="font-body text-muted-foreground">
                Lower rates of infection, seroma formation, and chronic inflammation compared to synthetic alternatives, improving patient outcomes and reducing revision surgery.
              </p>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <h3 className="font-display text-xl font-medium mb-3">Long-Term Durability</h3>
              <p className="font-body text-muted-foreground">
                Progressive tissue remodeling creates durable repair with natural strength characteristics that adapt to physiological stress over time.
              </p>
            </CardBody>
          </Card>
        </div>
      </Section>

      <Section title="Surgical Support" description="Comprehensive resources for surgical excellence">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <Card>
            <CardBody>
              <h3 className="font-display text-xl font-medium mb-3">Surgical Training</h3>
              <p className="font-body text-muted-foreground">
                Hands-on workshops, surgical technique videos, and cadaveric training programs led by expert surgeons to ensure optimal product handling and surgical outcomes.
              </p>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <h3 className="font-display text-xl font-medium mb-3">Case Planning Support</h3>
              <p className="font-body text-muted-foreground">
                Pre-operative consultation services to assist with product selection, sizing, and surgical planning for complex reconstructive cases.
              </p>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <h3 className="font-display text-xl font-medium mb-3">Clinical Evidence</h3>
              <p className="font-body text-muted-foreground">
                Comprehensive library of peer-reviewed publications, clinical studies, and real-world evidence supporting product safety and efficacy across surgical applications.
              </p>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <h3 className="font-display text-xl font-medium mb-3">OR Support</h3>
              <p className="font-body text-muted-foreground">
                Field-based surgical specialists available for intraoperative consultation, product guidance, and support during complex reconstructive procedures.
              </p>
            </CardBody>
          </Card>
        </div>
      </Section>
    </main>
  );
}
