import { Metadata } from "next";
import { Hero } from "@/components/site/Hero";
import { Section } from "@/components/site/Section";
import { Card, CardBody } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Regenerative Sciences - Tiger BioSciences",
  description: "Breakthrough regenerative medicine technologies that harness the body's natural healing capacity",
};

export default function RegenerativePage() {
  return (
    <main className="min-h-screen">
      <Hero
        title="Regenerative Sciences"
        description="Harnessing the body's innate healing capacity through advanced biologics and regenerative technologies that restore tissue function and transform patient outcomes."
        primaryCTA={{ text: "Contact Us", href: "/contact" }}
        secondaryCTA={{ text: "View Divisions", href: "/divisions" }}
      />

      <Section
        title="Core Technologies"
        description="Advanced platforms for regenerative medicine applications"
      >
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardBody>
              <h3 className="font-display text-xl font-medium mb-3 text-brand">Growth Factor Therapy</h3>
              <p className="font-body text-muted-foreground">
                Proprietary formulations of growth factors and cytokines that stimulate natural tissue repair and accelerate healing across multiple applications.
              </p>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <h3 className="font-display text-xl font-medium mb-3 text-brand">Stem Cell Technologies</h3>
              <p className="font-body text-muted-foreground">
                Advanced cellular therapies leveraging stem cell biology to promote tissue regeneration and functional restoration in damaged tissues.
              </p>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <h3 className="font-display text-xl font-medium mb-3 text-brand">Biologic Scaffolds</h3>
              <p className="font-body text-muted-foreground">
                Engineered extracellular matrix materials that provide structural support while delivering bioactive signals for tissue remodeling.
              </p>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <h3 className="font-display text-xl font-medium mb-3 text-brand">Platelet-Rich Plasma</h3>
              <p className="font-body text-muted-foreground">
                Optimized PRP processing systems that concentrate autologous healing factors for enhanced tissue repair and regeneration.
              </p>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <h3 className="font-display text-xl font-medium mb-3 text-brand">Exosome Therapy</h3>
              <p className="font-body text-muted-foreground">
                Next-generation cell-free therapeutics utilizing exosomes to modulate cellular behavior and promote tissue regeneration.
              </p>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <h3 className="font-display text-xl font-medium mb-3 text-brand">Gene Therapy Vectors</h3>
              <p className="font-body text-muted-foreground">
                Cutting-edge gene delivery systems designed to enhance tissue regeneration through targeted genetic modulation.
              </p>
            </CardBody>
          </Card>
        </div>
      </Section>

      <Section
        title="Therapeutic Impact"
        description="Revolutionizing treatment across medical specialties"
      >
        <Card>
          <CardBody>
            <p className="text-lead text-muted-foreground mb-6">
              Our regenerative science platform represents the convergence of molecular biology, tissue engineering, and clinical medicine. By understanding and modulating the body's natural repair mechanisms, we develop therapies that don't just treat symptoms but fundamentally restore tissue structure and function.
            </p>
            <p className="text-lead text-muted-foreground">
              From orthopedic injuries to chronic wounds, cardiovascular disease to neurological conditions, our regenerative technologies are opening new frontiers in medicine. We collaborate with leading research institutions and clinicians to translate cutting-edge science into practical, effective therapies that improve lives.
            </p>
          </CardBody>
        </Card>
      </Section>
    </main>
  );
}
