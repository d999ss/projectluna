import { Metadata } from "next";
import { Hero } from "@/components/site/Hero";
import { Section } from "@/components/site/Section";
import { Card, CardBody } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Reconstruction Solutions - Tiger BioSciences",
  description: "Advanced tissue matrices for complex reconstructive surgery including breast reconstruction, abdominal wall repair, and soft tissue reconstruction.",
};

export default function ReconstructionSolutions() {
  return (
    <main className="min-h-screen">
      <Hero
        title="Reconstruction Solutions"
        description="Innovative acellular matrices for complex reconstructive procedures, providing structural support and promoting natural tissue integration for optimal functional and aesthetic outcomes."
        backgroundImage="/images/01.png"
        size="large"
      />

      <Section title="Surgical Applications" description="Comprehensive solutions for reconstructive surgery">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardBody>
              <h3 className="font-display text-xl font-medium mb-3">Breast Reconstruction</h3>
              <p className="font-body text-muted-foreground">
                Acellular dermal matrices provide critical support for implant-based reconstruction, direct-to-implant procedures, and revision surgery with excellent aesthetic outcomes.
              </p>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <h3 className="font-display text-xl font-medium mb-3">Abdominal Wall Repair</h3>
              <p className="font-body text-muted-foreground">
                Durable biologic scaffolds for hernia repair and abdominal wall reconstruction that provide strength while allowing tissue integration and flexibility.
              </p>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <h3 className="font-display text-xl font-medium mb-3">Soft Tissue Defects</h3>
              <p className="font-body text-muted-foreground">
                Versatile matrices for coverage of soft tissue defects following tumor resection, trauma, or infection requiring tissue reinforcement.
              </p>
            </CardBody>
          </Card>
        </div>
      </Section>

      <Section title="Technology Advantages" description="Superior biomaterial properties for reconstructive applications">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <Card>
            <CardBody>
              <h3 className="font-display text-xl font-medium mb-3">Structural Integrity</h3>
              <p className="font-body text-muted-foreground">
                Preserved native collagen architecture provides immediate tensile strength while maintaining suture retention and handling characteristics critical for surgical precision.
              </p>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <h3 className="font-display text-xl font-medium mb-3">Controlled Integration</h3>
              <p className="font-body text-muted-foreground">
                Balanced remodeling kinetics allow host tissue infiltration and neovascularization while maintaining mechanical support throughout the healing process.
              </p>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <h3 className="font-display text-xl font-medium mb-3">Low Inflammatory Response</h3>
              <p className="font-body text-muted-foreground">
                Gentle processing preserves matrix structure while reducing immunogenicity, minimizing inflammatory complications and promoting constructive remodeling.
              </p>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <h3 className="font-display text-xl font-medium mb-3">Versatile Configurations</h3>
              <p className="font-body text-muted-foreground">
                Available in various thicknesses, sizes, and forms to accommodate diverse anatomical sites and surgical techniques with optimal outcomes.
              </p>
            </CardBody>
          </Card>
        </div>
      </Section>

      <Section title="Clinical Evidence" description="Proven outcomes across reconstructive procedures">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardBody>
              <h3 className="font-display text-xl font-medium mb-3">Lower Complication Rates</h3>
              <p className="font-body text-muted-foreground">
                Published studies demonstrate reduced infection, seroma, and capsular contracture compared to synthetic meshes and alternative biologics.
              </p>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <h3 className="font-display text-xl font-medium mb-3">Superior Aesthetic Results</h3>
              <p className="font-body text-muted-foreground">
                Patients report high satisfaction with natural appearance, contour, and texture in breast reconstruction and aesthetic procedures.
              </p>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <h3 className="font-display text-xl font-medium mb-3">Long-term Durability</h3>
              <p className="font-body text-muted-foreground">
                Multi-year follow-up data shows excellent long-term stability with low recurrence rates in hernia repair and abdominal wall reconstruction.
              </p>
            </CardBody>
          </Card>
        </div>
      </Section>

      <Section title="Product Portfolio" description="Specialized matrices for reconstructive surgery">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <Card>
            <CardBody>
              <h3 className="font-display text-xl font-medium mb-3">Standard Thickness Matrices</h3>
              <p className="font-body text-muted-foreground">
                Optimal for breast reconstruction, providing support for implant positioning while allowing natural tissue draping and aesthetic contouring.
              </p>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <h3 className="font-display text-xl font-medium mb-3">Reinforced Matrices</h3>
              <p className="font-body text-muted-foreground">
                Thicker constructs with enhanced strength for abdominal wall repair and complex hernia reconstruction requiring maximum structural support.
              </p>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <h3 className="font-display text-xl font-medium mb-3">Fenestrated Formats</h3>
              <p className="font-body text-muted-foreground">
                Perforated designs facilitate fluid management and tissue integration while maintaining mechanical properties for surgical applications.
              </p>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <h3 className="font-display text-xl font-medium mb-3">Custom Configurations</h3>
              <p className="font-body text-muted-foreground">
                Flexible sizing and trimming options allow surgeons to customize matrices for individual patient anatomy and specific procedural requirements.
              </p>
            </CardBody>
          </Card>
        </div>
      </Section>

      <Section title="Surgical Techniques" description="Supporting optimal surgical outcomes">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardBody>
              <h3 className="font-display text-xl font-medium mb-3">Technical Training</h3>
              <p className="font-body text-muted-foreground">
                Comprehensive surgical training programs, technique videos, and hands-on workshops for optimal matrix placement and fixation.
              </p>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <h3 className="font-display text-xl font-medium mb-3">Case Consultation</h3>
              <p className="font-body text-muted-foreground">
                Expert surgical consultants provide pre-operative planning support and intra-operative assistance for complex cases.
              </p>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <h3 className="font-display text-xl font-medium mb-3">Best Practices</h3>
              <p className="font-body text-muted-foreground">
                Evidence-based guidelines and expert recommendations for product selection, surgical technique, and post-operative management.
              </p>
            </CardBody>
          </Card>
        </div>
      </Section>
    </main>
  );
}
