import { Metadata } from "next";
import { Hero } from "@/components/site/Hero";
import { Section } from "@/components/site/Section";
import { Card, CardBody } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Aesthetic Technologies - Tiger BioSciences",
  description: "Advanced regenerative technologies for aesthetic and reconstructive procedures delivering natural, long-lasting results with minimal downtime.",
};

export default function AestheticTechnologies() {
  return (
    <main className="min-h-screen">
      <Hero
        title="Aesthetic Technologies"
        description="Cutting-edge regenerative solutions that combine biological science with aesthetic excellence to deliver natural-looking, sustainable results for facial and body rejuvenation."
        primaryCTA={{ text: "Contact Sales", href: "/contact" }}
        secondaryCTA={{ text: "View All Products", href: "/products" }}
      />

      <Section title="Aesthetic Applications" description="Regenerative solutions for natural aesthetic enhancement">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardBody>
              <h3 className="font-display text-xl font-medium mb-3">Facial Rejuvenation</h3>
              <p className="font-body text-muted-foreground">
                Advanced dermal fillers and regenerative matrices that restore volume, improve skin quality, and promote natural collagen production for lasting facial rejuvenation.
              </p>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <h3 className="font-display text-xl font-medium mb-3">Skin Regeneration</h3>
              <p className="font-body text-muted-foreground">
                Biological treatments that stimulate cellular renewal, improve texture and tone, and address photoaging with minimal invasiveness and natural results.
              </p>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <h3 className="font-display text-xl font-medium mb-3">Scar Revision</h3>
              <p className="font-body text-muted-foreground">
                Regenerative therapies for acne scars, surgical scars, and traumatic scarring that promote organized tissue remodeling and improved aesthetic appearance.
              </p>
            </CardBody>
          </Card>
        </div>
      </Section>

      <Section title="Technology Platform" description="Science-driven aesthetic innovation">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <Card>
            <CardBody>
              <h3 className="font-display text-xl font-medium mb-3">Growth Factor Technology</h3>
              <p className="font-body text-muted-foreground">
                Proprietary formulations containing concentrated growth factors and cytokines that stimulate fibroblast activity, collagen synthesis, and cellular regeneration for natural aesthetic enhancement.
              </p>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <h3 className="font-display text-xl font-medium mb-3">Extracellular Matrix Products</h3>
              <p className="font-body text-muted-foreground">
                Acellular matrices derived from placental and dermal tissue that provide biological scaffolding and signaling molecules to support tissue regeneration and remodeling.
              </p>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <h3 className="font-display text-xl font-medium mb-3">Hyaluronic Acid Formulations</h3>
              <p className="font-body text-muted-foreground">
                Advanced HA-based products engineered for optimal rheological properties, longevity, and integration with native tissue for natural, lasting aesthetic results.
              </p>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <h3 className="font-display text-xl font-medium mb-3">Regenerative Injectables</h3>
              <p className="font-body text-muted-foreground">
                Biologically active injectables that go beyond simple volumization to stimulate actual tissue regeneration and long-term improvement in skin quality and appearance.
              </p>
            </CardBody>
          </Card>
        </div>
      </Section>

      <Section title="Clinical Benefits" description="Superior aesthetic outcomes through biological innovation">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardBody>
              <h3 className="font-display text-xl font-medium mb-3">Natural-Looking Results</h3>
              <p className="font-body text-muted-foreground">
                Regenerative approach produces gradual, natural enhancement that preserves individual character and avoids the overdone appearance of traditional fillers.
              </p>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <h3 className="font-display text-xl font-medium mb-3">Long-Term Improvement</h3>
              <p className="font-body text-muted-foreground">
                Stimulation of native collagen production and tissue remodeling creates progressive improvement that extends beyond the lifespan of the injected material.
              </p>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <h3 className="font-display text-xl font-medium mb-3">Minimal Downtime</h3>
              <p className="font-body text-muted-foreground">
                Advanced formulations and injection techniques minimize bruising, swelling, and recovery time, allowing patients to resume normal activities quickly.
              </p>
            </CardBody>
          </Card>
        </div>
      </Section>

      <Section title="Professional Support" description="Comprehensive resources for aesthetic practitioners">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <Card>
            <CardBody>
              <h3 className="font-display text-xl font-medium mb-3">Advanced Training Programs</h3>
              <p className="font-body text-muted-foreground">
                Comprehensive injection training including anatomy review, technique refinement, and hands-on practice with live models to master product application and optimize outcomes.
              </p>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <h3 className="font-display text-xl font-medium mb-3">Marketing Resources</h3>
              <p className="font-body text-muted-foreground">
                Practice-building materials including patient education content, social media assets, and promotional support to help aesthetic practices grow their regenerative offerings.
              </p>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <h3 className="font-display text-xl font-medium mb-3">Clinical Consultation</h3>
              <p className="font-body text-muted-foreground">
                Access to aesthetic medicine experts for case consultation, treatment planning guidance, and support for challenging aesthetic cases or combination therapies.
              </p>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <h3 className="font-display text-xl font-medium mb-3">Continuing Education</h3>
              <p className="font-body text-muted-foreground">
                Ongoing educational opportunities including webinars, conferences, and advanced courses featuring leading aesthetic medicine practitioners and industry experts.
              </p>
            </CardBody>
          </Card>
        </div>
      </Section>
    </main>
  );
}
