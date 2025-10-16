import { Metadata } from "next";
import { Hero } from "@/components/site/Hero";
import { Section } from "@/components/site/Section";
import { Card, CardBody } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Aesthetic Solutions - Tiger BioSciences",
  description: "Premium aesthetic and regenerative products for cosmetic surgery and dermatology applications",
};

export default function AestheticPage() {
  return (
    <main className="min-h-screen">
      <Hero
        title="Aesthetic Solutions"
        description="Elevating aesthetic medicine through scientifically-advanced products that deliver natural, lasting results while prioritizing patient safety and satisfaction."
        primaryCTA={{ text: "Contact Us", href: "/contact" }}
        secondaryCTA={{ text: "View Divisions", href: "/divisions" }}
      />

      <Section
        title="Product Portfolio"
        description="Premium solutions for aesthetic and cosmetic applications"
      >
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardBody>
              <h3 className="font-display text-xl font-medium mb-3 text-brand">Dermal Fillers</h3>
              <p className="font-body text-muted-foreground">
                Premium hyaluronic acid-based fillers designed for natural-looking volume restoration and facial contouring with exceptional safety profiles.
              </p>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <h3 className="font-display text-xl font-medium mb-3 text-brand">Regenerative Injectables</h3>
              <p className="font-body text-muted-foreground">
                Advanced biologic formulations that harness the body&apos;s natural healing mechanisms for skin rejuvenation and tissue regeneration.
              </p>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <h3 className="font-display text-xl font-medium mb-3 text-brand">Tissue Grafts</h3>
              <p className="font-body text-muted-foreground">
                Specialized tissue matrices for soft tissue augmentation and reconstructive procedures in aesthetic and plastic surgery.
              </p>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <h3 className="font-display text-xl font-medium mb-3 text-brand">Facial Aesthetics</h3>
              <p className="font-body text-muted-foreground">
                Comprehensive product line for facial rejuvenation, including solutions for volume loss, wrinkle reduction, and skin quality improvement.
              </p>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <h3 className="font-display text-xl font-medium mb-3 text-brand">Body Contouring</h3>
              <p className="font-body text-muted-foreground">
                Innovative products designed for body sculpting and contouring procedures, delivering natural-looking aesthetic enhancements.
              </p>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <h3 className="font-display text-xl font-medium mb-3 text-brand">Professional Support</h3>
              <p className="font-body text-muted-foreground">
                Comprehensive training programs and technical support ensuring optimal treatment outcomes and practitioner confidence.
              </p>
            </CardBody>
          </Card>
        </div>
      </Section>

      <Section
        title="Our Commitment to Excellence"
        description="Setting new standards in aesthetic medicine"
      >
        <Card>
          <CardBody>
            <p className="text-lead text-muted-foreground mb-6">
              Tiger BioSciences brings pharmaceutical-grade rigor to the aesthetic industry. Every product undergoes extensive testing and validation to ensure consistent quality, optimal performance, and superior safety. We partner with leading aesthetic practitioners to develop solutions that address real clinical needs while delivering exceptional patient satisfaction.
            </p>
            <p className="text-lead text-muted-foreground">
              Our aesthetic division combines cutting-edge biotechnology with deep understanding of facial anatomy and aging processes, resulting in products that enhance natural beauty while maintaining the highest safety standards demanded by both practitioners and patients.
            </p>
          </CardBody>
        </Card>
      </Section>
    </main>
  );
}
