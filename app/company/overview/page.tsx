import { Metadata } from "next";
import { Hero } from "@/components/site/Hero";
import { Section } from "@/components/site/Section";
import { Card, CardBody } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Company Overview - Tiger BioSciences",
  description: "Leading the future of regenerative medicine and advanced biomaterials with innovative solutions that transform patient outcomes worldwide.",
};

export default function CompanyOverview() {
  return (
    <main className="min-h-screen">
      <Hero
        title="Advancing Regenerative Medicine"
        description="Tiger BioSciences is a global leader in developing and commercializing innovative regenerative medicine solutions that improve patient outcomes and advance the standard of care across multiple therapeutic areas."
      />

      <Section title="Our Mission" description="Transforming healthcare through innovation, quality, and dedication to patient outcomes">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardBody>
              <h3 className="font-display text-xl font-medium mb-3">Innovation Leadership</h3>
              <p className="font-body text-muted-foreground">
                We pioneer breakthrough technologies in regenerative medicine, advancing the science of tissue engineering and biomaterials to address unmet clinical needs.
              </p>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <h3 className="font-display text-xl font-medium mb-3">Clinical Excellence</h3>
              <p className="font-body text-muted-foreground">
                Our commitment to rigorous clinical validation ensures that every solution we deliver meets the highest standards of safety, efficacy, and quality.
              </p>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <h3 className="font-display text-xl font-medium mb-3">Patient-Centered Focus</h3>
              <p className="font-body text-muted-foreground">
                Every innovation is driven by our dedication to improving patient lives through advanced therapies that accelerate healing and restore function.
              </p>
            </CardBody>
          </Card>
        </div>
      </Section>

      <Section title="Global Reach" description="Serving healthcare providers and patients across six continents">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <Card>
            <CardBody>
              <h3 className="font-display text-xl font-medium mb-3">Market Presence</h3>
              <p className="font-body text-muted-foreground">
                With operations in over 40 countries, we deliver cutting-edge regenerative solutions to healthcare systems worldwide, partnering with leading medical institutions and practitioners.
              </p>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <h3 className="font-display text-xl font-medium mb-3">Research & Development</h3>
              <p className="font-body text-muted-foreground">
                Our state-of-the-art R&D facilities combine advanced biotechnology with clinical insights to develop next-generation therapies in wound care, reconstruction, and aesthetic medicine.
              </p>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <h3 className="font-display text-xl font-medium mb-3">Manufacturing Excellence</h3>
              <p className="font-body text-muted-foreground">
                ISO-certified manufacturing facilities equipped with cutting-edge processing technologies ensure consistent quality and supply of our innovative biomaterial solutions.
              </p>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <h3 className="font-display text-xl font-medium mb-3">Strategic Partnerships</h3>
              <p className="font-body text-muted-foreground">
                We collaborate with academic medical centers, research institutions, and healthcare organizations to advance the science and practice of regenerative medicine.
              </p>
            </CardBody>
          </Card>
        </div>
      </Section>

      <Section title="Our Values" description="Principles that guide everything we do">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardBody>
              <h3 className="font-display text-xl font-medium mb-3">Scientific Rigor</h3>
              <p className="font-body text-muted-foreground">
                We apply the highest standards of scientific validation to every product and process, ensuring evidence-based solutions.
              </p>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <h3 className="font-display text-xl font-medium mb-3">Quality Commitment</h3>
              <p className="font-body text-muted-foreground">
                Quality is embedded in our culture, from raw material sourcing through manufacturing to final product delivery.
              </p>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <h3 className="font-display text-xl font-medium mb-3">Ethical Leadership</h3>
              <p className="font-body text-muted-foreground">
                We maintain the highest ethical standards in all aspects of our business, from clinical research to commercial operations.
              </p>
            </CardBody>
          </Card>
        </div>
      </Section>
    </main>
  );
}
