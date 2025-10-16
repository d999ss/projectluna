import { Metadata } from "next";
import { Hero } from "@/components/site/Hero";
import { Section } from "@/components/site/Section";
import { Card, CardBody } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Cell & Tissue Technology - Tiger BioSciences",
  description: "Advanced cellular and tissue engineering solutions for regenerative medicine and therapeutic applications",
};

export default function CellTissuePage() {
  return (
    <main className="min-h-screen">
      <Hero
        title="Cell & Tissue Technology"
        description="Pioneering the future of regenerative medicine through advanced cellular and tissue engineering innovations that restore function and improve patient outcomes."
        primaryCTA={{ text: "Contact Us", href: "/contact" }}
        secondaryCTA={{ text: "View Divisions", href: "/divisions" }}
      />

      <Section
        title="Our Capabilities"
        description="Comprehensive solutions across the cellular and tissue technology spectrum"
      >
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardBody>
              <h3 className="font-display text-xl font-medium mb-3 text-brand">Tissue Engineering</h3>
              <p className="font-body text-muted-foreground">
                Advanced scaffold technologies and biocompatible matrices designed to support cellular growth and tissue regeneration for optimal therapeutic outcomes.
              </p>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <h3 className="font-display text-xl font-medium mb-3 text-brand">Cell Culture Systems</h3>
              <p className="font-body text-muted-foreground">
                State-of-the-art cell culture platforms and media formulations that enable consistent, scalable production of high-quality cellular therapeutics.
              </p>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <h3 className="font-display text-xl font-medium mb-3 text-brand">Biomaterial Development</h3>
              <p className="font-body text-muted-foreground">
                Innovative biomaterials engineered for optimal tissue integration, biodegradability, and mechanical properties tailored to specific applications.
              </p>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <h3 className="font-display text-xl font-medium mb-3 text-brand">Quality Assurance</h3>
              <p className="font-body text-muted-foreground">
                Rigorous testing protocols and quality control systems ensuring every product meets the highest standards for safety and efficacy.
              </p>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <h3 className="font-display text-xl font-medium mb-3 text-brand">Processing Technologies</h3>
              <p className="font-body text-muted-foreground">
                Advanced processing methodologies that preserve tissue integrity while optimizing biological performance and clinical outcomes.
              </p>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <h3 className="font-display text-xl font-medium mb-3 text-brand">Storage & Preservation</h3>
              <p className="font-body text-muted-foreground">
                Cutting-edge preservation techniques and storage solutions that maintain cellular viability and tissue functionality throughout the supply chain.
              </p>
            </CardBody>
          </Card>
        </div>
      </Section>

      <Section
        title="Clinical Applications"
        description="Transforming patient care across multiple therapeutic areas"
      >
        <Card>
          <CardBody>
            <p className="text-lead text-muted-foreground mb-6">
              Our cell and tissue technology platform enables breakthrough treatments across orthopedics, wound care, reconstructive surgery, and sports medicine. From advanced bone grafts to soft tissue matrices, we provide healthcare professionals with reliable, innovative solutions that accelerate healing and restore function.
            </p>
            <p className="text-lead text-muted-foreground">
              By combining cutting-edge science with clinical expertise, we deliver products that not only meet regulatory standards but exceed clinical expectations, helping patients return to active, healthy lives.
            </p>
          </CardBody>
        </Card>
      </Section>
    </main>
  );
}
