import { Metadata } from "next";
import { Hero } from "@/components/site/Hero";
import { Section } from "@/components/site/Section";
import { Card, CardBody } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Leadership Team - Tiger BioSciences",
  description: "Meet the experienced leaders driving innovation and excellence in regenerative medicine at Tiger BioSciences.",
};

export default function Leadership() {
  return (
    <main className="min-h-screen">
      <Hero
        title="Leadership Team"
        description="Our executive team brings decades of combined experience in biotechnology, clinical medicine, and healthcare innovation to advance the field of regenerative medicine."
      />

      <Section title="Executive Leadership" description="Guiding Tiger BioSciences toward a future of innovation and impact">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardBody>
              <h3 className="font-display text-xl font-medium mb-3">Chief Executive Officer</h3>
              <p className="font-body text-muted-foreground mb-4">
                Leading the strategic vision and global expansion of Tiger BioSciences with over 25 years of biotechnology industry experience.
              </p>
              <p className="font-body text-sm text-muted-foreground">
                Former leadership roles at major pharmaceutical and medical device companies.
              </p>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <h3 className="font-display text-xl font-medium mb-3">Chief Scientific Officer</h3>
              <p className="font-body text-muted-foreground mb-4">
                Overseeing research and development initiatives with expertise in tissue engineering and regenerative medicine technologies.
              </p>
              <p className="font-body text-sm text-muted-foreground">
                Published author with 50+ peer-reviewed papers in regenerative medicine.
              </p>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <h3 className="font-display text-xl font-medium mb-3">Chief Medical Officer</h3>
              <p className="font-body text-muted-foreground mb-4">
                Directing clinical strategy and medical affairs with board certification in plastic surgery and extensive clinical trial experience.
              </p>
              <p className="font-body text-sm text-muted-foreground">
                Former faculty at leading academic medical centers.
              </p>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <h3 className="font-display text-xl font-medium mb-3">Chief Operating Officer</h3>
              <p className="font-body text-muted-foreground mb-4">
                Managing global operations, manufacturing, and supply chain with expertise in scaling biotechnology enterprises.
              </p>
              <p className="font-body text-sm text-muted-foreground">
                Proven track record in operational excellence and quality systems.
              </p>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <h3 className="font-display text-xl font-medium mb-3">Chief Financial Officer</h3>
              <p className="font-body text-muted-foreground mb-4">
                Leading financial strategy and investor relations with experience in public and private healthcare companies.
              </p>
              <p className="font-body text-sm text-muted-foreground">
                CPA with expertise in healthcare finance and M&A transactions.
              </p>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <h3 className="font-display text-xl font-medium mb-3">Chief Commercial Officer</h3>
              <p className="font-body text-muted-foreground mb-4">
                Driving global sales and marketing strategy with deep expertise in medical device and biologics commercialization.
              </p>
              <p className="font-body text-sm text-muted-foreground">
                Led successful product launches across multiple therapeutic areas.
              </p>
            </CardBody>
          </Card>
        </div>
      </Section>

      <Section title="Board of Directors" description="Providing strategic oversight and governance excellence">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <Card>
            <CardBody>
              <h3 className="font-display text-xl font-medium mb-3">Industry Expertise</h3>
              <p className="font-body text-muted-foreground">
                Our board members bring extensive experience from leading biotechnology, pharmaceutical, and medical device companies, providing strategic guidance and industry insights.
              </p>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <h3 className="font-display text-xl font-medium mb-3">Clinical Perspective</h3>
              <p className="font-body text-muted-foreground">
                Board-certified physicians and surgeons contribute clinical expertise and patient-centered perspectives to our strategic decision-making processes.
              </p>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <h3 className="font-display text-xl font-medium mb-3">Financial Acumen</h3>
              <p className="font-body text-muted-foreground">
                Financial experts with backgrounds in healthcare investment and corporate finance ensure fiscal responsibility and sustainable growth strategies.
              </p>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <h3 className="font-display text-xl font-medium mb-3">Regulatory Knowledge</h3>
              <p className="font-body text-muted-foreground">
                Former regulatory affairs executives provide guidance on compliance, quality systems, and navigating global healthcare regulations.
              </p>
            </CardBody>
          </Card>
        </div>
      </Section>
    </main>
  );
}
