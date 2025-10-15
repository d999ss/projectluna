import { Metadata } from "next";
import { Hero } from "@/components/site/Hero";
import { Section } from "@/components/site/Section";
import { Card, CardBody } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Tissue Engineering - Tiger BioSciences",
  description: "Advanced tissue engineering platforms leveraging regenerative biomaterials and cellular technologies for complex tissue reconstruction and regeneration.",
};

export default function TissueEngineering() {
  return (
    <main className="min-h-screen">
      <Hero
        title="Tissue Engineering"
        description="Next-generation tissue engineering solutions that combine advanced biomaterials, cellular technologies, and biological signaling to regenerate complex tissues and restore function."
        primaryCTA={{ text: "Contact Sales", href: "/contact" }}
        secondaryCTA={{ text: "View All Products", href: "/products" }}
      />

      <Section title="Engineering Platforms" description="Advanced technologies for tissue regeneration">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardBody>
              <h3 className="font-display text-xl font-medium mb-3">Cellular Matrices</h3>
              <p className="font-body text-muted-foreground">
                Three-dimensional scaffolds designed to support cell attachment, proliferation, and differentiation for engineering functional tissue constructs.
              </p>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <h3 className="font-display text-xl font-medium mb-3">Growth Factor Delivery</h3>
              <p className="font-body text-muted-foreground">
                Controlled-release systems that provide sustained delivery of bioactive factors to guide tissue development and enhance regenerative outcomes.
              </p>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <h3 className="font-display text-xl font-medium mb-3">Bioprinting Technologies</h3>
              <p className="font-body text-muted-foreground">
                Advanced 3D bioprinting capabilities for creating patient-specific tissue constructs with precise spatial control of cells and biomaterials.
              </p>
            </CardBody>
          </Card>
        </div>
      </Section>

      <Section title="Tissue Applications" description="Regenerative solutions across tissue types">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <Card>
            <CardBody>
              <h3 className="font-display text-xl font-medium mb-3">Skin and Soft Tissue</h3>
              <p className="font-body text-muted-foreground">
                Engineered skin substitutes and dermal matrices for burn treatment, chronic wounds, and reconstructive surgery that recapitulate native tissue architecture and promote functional regeneration.
              </p>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <h3 className="font-display text-xl font-medium mb-3">Bone and Cartilage</h3>
              <p className="font-body text-muted-foreground">
                Osteoconductive and osteoinductive scaffolds combined with biological factors to regenerate bone and cartilage in orthopedic and craniofacial applications.
              </p>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <h3 className="font-display text-xl font-medium mb-3">Vascular Tissue</h3>
              <p className="font-body text-muted-foreground">
                Engineered vascular grafts and matrices that promote endothelial cell attachment and vascular network formation for improved tissue perfusion and integration.
              </p>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <h3 className="font-display text-xl font-medium mb-3">Neural Tissue</h3>
              <p className="font-body text-muted-foreground">
                Specialized scaffolds and guidance conduits for peripheral nerve repair and regeneration, supporting axonal growth and functional recovery after injury.
              </p>
            </CardBody>
          </Card>
        </div>
      </Section>

      <Section title="Core Technologies" description="Scientific foundation for tissue engineering excellence">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardBody>
              <h3 className="font-display text-xl font-medium mb-3">Biomaterial Design</h3>
              <p className="font-body text-muted-foreground">
                Proprietary processing techniques that preserve native tissue architecture, mechanical properties, and biological activity for optimal scaffold performance.
              </p>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <h3 className="font-display text-xl font-medium mb-3">Cell-Matrix Interactions</h3>
              <p className="font-body text-muted-foreground">
                Deep understanding of cell-scaffold interactions guides material selection and modification to promote desired cell behavior and tissue formation.
              </p>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <h3 className="font-display text-xl font-medium mb-3">Vascularization Strategies</h3>
              <p className="font-body text-muted-foreground">
                Innovative approaches to promote rapid vascular ingrowth and network formation, critical for successful integration of engineered tissue constructs.
              </p>
            </CardBody>
          </Card>
        </div>
      </Section>

      <Section title="Research and Development" description="Advancing the future of regenerative medicine">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <Card>
            <CardBody>
              <h3 className="font-display text-xl font-medium mb-3">Collaborative Research</h3>
              <p className="font-body text-muted-foreground">
                Partnerships with leading academic institutions and research centers to advance tissue engineering science and translate discoveries into clinical applications.
              </p>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <h3 className="font-display text-xl font-medium mb-3">Clinical Translation</h3>
              <p className="font-body text-muted-foreground">
                Structured pathway from laboratory innovation to clinical application, with rigorous testing and validation to ensure safety and efficacy of new tissue engineering products.
              </p>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <h3 className="font-display text-xl font-medium mb-3">Custom Solutions</h3>
              <p className="font-body text-muted-foreground">
                Capability to develop customized tissue engineering solutions for specific clinical needs or applications, leveraging our platform technologies and expertise.
              </p>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <h3 className="font-display text-xl font-medium mb-3">Technology Licensing</h3>
              <p className="font-body text-muted-foreground">
                Opportunities for licensing our proprietary tissue engineering technologies and biomaterial platforms for commercial development and clinical application.
              </p>
            </CardBody>
          </Card>
        </div>
      </Section>
    </main>
  );
}
