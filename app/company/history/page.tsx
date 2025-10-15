import { Metadata } from "next";
import { Hero } from "@/components/site/Hero";
import { Section } from "@/components/site/Section";
import { Card, CardBody } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Company History - Tiger BioSciences",
  description: "Discover the evolution of Tiger BioSciences from pioneering startup to global leader in regenerative medicine and advanced biomaterials.",
};

export default function History() {
  return (
    <main className="min-h-screen">
      <Hero
        title="Our Journey"
        description="From groundbreaking innovation to global leadership, Tiger BioSciences has been at the forefront of regenerative medicine for over two decades."
      />

      <Section title="Foundation & Early Innovation" description="Building the foundation for regenerative medicine excellence">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <Card>
            <CardBody>
              <h3 className="font-display text-xl font-medium mb-3">The Beginning (2000-2005)</h3>
              <p className="font-body text-muted-foreground">
                Founded by pioneering researchers in tissue engineering, Tiger BioSciences began with a vision to harness the body's natural healing capabilities through advanced biomaterials. Our first laboratory focused on developing innovative wound care solutions.
              </p>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <h3 className="font-display text-xl font-medium mb-3">First Breakthrough (2006-2008)</h3>
              <p className="font-body text-muted-foreground">
                Our first FDA-cleared product for chronic wound management marked a significant milestone, demonstrating the clinical potential of our proprietary collagen matrix technology and establishing our reputation for innovation.
              </p>
            </CardBody>
          </Card>
        </div>
      </Section>

      <Section title="Growth & Expansion" description="Scaling innovation to serve patients worldwide">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardBody>
              <h3 className="font-display text-xl font-medium mb-3">Portfolio Expansion (2009-2012)</h3>
              <p className="font-body text-muted-foreground">
                Launched multiple product lines across wound care, reconstruction, and soft tissue regeneration, establishing Tiger BioSciences as a comprehensive solutions provider.
              </p>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <h3 className="font-display text-xl font-medium mb-3">Global Reach (2013-2015)</h3>
              <p className="font-body text-muted-foreground">
                Expanded international presence with regulatory approvals in Europe, Asia-Pacific, and Latin America, bringing our innovations to healthcare systems worldwide.
              </p>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <h3 className="font-display text-xl font-medium mb-3">Strategic Acquisitions (2016-2018)</h3>
              <p className="font-body text-muted-foreground">
                Acquired leading companies in birth tissue sciences and aesthetic medicine, broadening our technology platform and therapeutic reach significantly.
              </p>
            </CardBody>
          </Card>
        </div>
      </Section>

      <Section title="Innovation Leadership" description="Advancing the science of regenerative medicine">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <Card>
            <CardBody>
              <h3 className="font-display text-xl font-medium mb-3">Research Excellence (2019-2021)</h3>
              <p className="font-body text-muted-foreground">
                Established RegenTX Labs, our advanced research division, focusing on next-generation regenerative therapies including cellular and acellular matrices for tissue reconstruction.
              </p>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <h3 className="font-display text-xl font-medium mb-3">Technology Platform (2022-2024)</h3>
              <p className="font-body text-muted-foreground">
                Developed proprietary processing technologies that preserve the native structure and biological activity of tissue-based biomaterials, setting new industry standards for quality.
              </p>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <h3 className="font-display text-xl font-medium mb-3">Clinical Validation (2024-Present)</h3>
              <p className="font-body text-muted-foreground">
                Published extensive clinical evidence demonstrating superior outcomes across multiple therapeutic areas, with ongoing clinical trials exploring new indications.
              </p>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <h3 className="font-display text-xl font-medium mb-3">Future Vision</h3>
              <p className="font-body text-muted-foreground">
                Continuing to push the boundaries of regenerative medicine with investments in advanced manufacturing, digital health integration, and personalized biomaterial solutions.
              </p>
            </CardBody>
          </Card>
        </div>
      </Section>

      <Section title="Milestones" description="Key achievements that shaped our journey">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardBody>
              <h3 className="font-display text-xl font-medium mb-3">500,000+ Patients Treated</h3>
              <p className="font-body text-muted-foreground">
                Our products have improved outcomes for over half a million patients worldwide across multiple therapeutic applications.
              </p>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <h3 className="font-display text-xl font-medium mb-3">40+ Countries Served</h3>
              <p className="font-body text-muted-foreground">
                Global distribution network delivering innovative solutions to healthcare providers on six continents.
              </p>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <h3 className="font-display text-xl font-medium mb-3">100+ Clinical Publications</h3>
              <p className="font-body text-muted-foreground">
                Extensive peer-reviewed evidence base supporting the safety and efficacy of our regenerative medicine portfolio.
              </p>
            </CardBody>
          </Card>
        </div>
      </Section>
    </main>
  );
}
