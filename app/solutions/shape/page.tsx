import { Metadata } from "next";
import { Hero } from "@/components/site/Hero";
import { Section } from "@/components/site/Section";
import { Card, CardBody } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Aesthetic Shape Solutions - Tiger BioSciences",
  description: "Advanced regenerative solutions for aesthetic contouring and body shaping procedures that deliver natural, long-lasting results.",
};

export default function AestheticShape() {
  return (
    <main className="min-h-screen">
      <Hero
        title="Aesthetic Shape Solutions"
        description="Innovative regenerative technologies for aesthetic contouring and body shaping that provide natural tissue integration and beautiful, long-lasting results."
        backgroundImage="/images/boredoptimism_human_skin_--ar_169_--raw_--profile_e1dtuj2_--v_350bc8db-8fea-4316-aa3b-ec44b72f8094_1.png"
        size="large"
      />

      <Section title="Clinical Applications" description="Comprehensive solutions for aesthetic enhancement">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardBody>
              <h3 className="font-display text-xl font-medium mb-3">Facial Contouring</h3>
              <p className="font-body text-muted-foreground">
                Advanced matrices for facial augmentation, cheek enhancement, and chin contouring that integrate naturally for refined facial aesthetics.
              </p>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <h3 className="font-display text-xl font-medium mb-3">Breast Aesthetics</h3>
              <p className="font-body text-muted-foreground">
                Tissue matrices that support breast augmentation, lift procedures, and revision surgery with natural feel and appearance.
              </p>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <h3 className="font-display text-xl font-medium mb-3">Body Contouring</h3>
              <p className="font-body text-muted-foreground">
                Sculpting solutions for buttock augmentation, calf enhancement, and other body contouring procedures requiring natural tissue integration.
              </p>
            </CardBody>
          </Card>
        </div>
      </Section>

      <Section title="Technology Advantages" description="Superior biomaterial properties for aesthetic procedures">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <Card>
            <CardBody>
              <h3 className="font-display text-xl font-medium mb-3">Natural Integration</h3>
              <p className="font-body text-muted-foreground">
                Native tissue architecture promotes cellular infiltration and neovascularization, resulting in soft, natural-feeling tissue that moves harmoniously with surrounding structures.
              </p>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <h3 className="font-display text-xl font-medium mb-3">Predictable Results</h3>
              <p className="font-body text-muted-foreground">
                Controlled remodeling kinetics provide consistent, reproducible outcomes with minimal volume loss and excellent shape retention over time.
              </p>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <h3 className="font-display text-xl font-medium mb-3">Minimal Inflammation</h3>
              <p className="font-body text-muted-foreground">
                Gentle processing reduces immunogenicity, minimizing post-operative inflammation and accelerating patient recovery with less discomfort.
              </p>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <h3 className="font-display text-xl font-medium mb-3">Surgical Versatility</h3>
              <p className="font-body text-muted-foreground">
                Excellent handling properties and suture retention enable precise placement and fixation for refined aesthetic outcomes.
              </p>
            </CardBody>
          </Card>
        </div>
      </Section>

      <Section title="Aesthetic Outcomes" description="Beautiful, natural results that last">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardBody>
              <h3 className="font-display text-xl font-medium mb-3">Natural Appearance</h3>
              <p className="font-body text-muted-foreground">
                Seamless integration with native tissue creates smooth contours and natural-looking enhancement without artificial appearance.
              </p>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <h3 className="font-display text-xl font-medium mb-3">Soft Texture</h3>
              <p className="font-body text-muted-foreground">
                Tissue remodeling produces soft, pliable results that feel natural to touch and move naturally with body motion.
              </p>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <h3 className="font-display text-xl font-medium mb-3">Long-term Stability</h3>
              <p className="font-body text-muted-foreground">
                Durable tissue integration maintains aesthetic results over years with minimal shape change or volume loss.
              </p>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <h3 className="font-display text-xl font-medium mb-3">Patient Satisfaction</h3>
              <p className="font-body text-muted-foreground">
                High patient satisfaction scores reflect the natural appearance, comfortable feel, and lasting quality of results.
              </p>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <h3 className="font-display text-xl font-medium mb-3">Minimal Scarring</h3>
              <p className="font-body text-muted-foreground">
                Biocompatible materials promote organized tissue remodeling with reduced capsule formation and minimal visible scarring.
              </p>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <h3 className="font-display text-xl font-medium mb-3">Revision Friendly</h3>
              <p className="font-body text-muted-foreground">
                Natural tissue integration facilitates future revisions or adjustments if desired without compromising surgical options.
              </p>
            </CardBody>
          </Card>
        </div>
      </Section>

      <Section title="Product Portfolio" description="Tailored solutions for diverse aesthetic applications">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <Card>
            <CardBody>
              <h3 className="font-display text-xl font-medium mb-3">Dermal Matrices</h3>
              <p className="font-body text-muted-foreground">
                Acellular dermal matrices in multiple thicknesses provide volume enhancement and structural support for facial and body contouring procedures.
              </p>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <h3 className="font-display text-xl font-medium mb-3">Injectable Matrices</h3>
              <p className="font-body text-muted-foreground">
                Micronized matrix particles for minimally invasive soft tissue augmentation with progressive volume replacement by native tissue.
              </p>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <h3 className="font-display text-xl font-medium mb-3">Composite Implants</h3>
              <p className="font-body text-muted-foreground">
                Pre-shaped constructs designed for specific anatomical sites combining structural support with regenerative properties.
              </p>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <h3 className="font-display text-xl font-medium mb-3">Custom Formats</h3>
              <p className="font-body text-muted-foreground">
                Flexible sizing and configuration options allow surgeons to customize solutions for individual patient anatomy and aesthetic goals.
              </p>
            </CardBody>
          </Card>
        </div>
      </Section>

      <Section title="Surgical Support" description="Expert guidance for optimal aesthetic results">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardBody>
              <h3 className="font-display text-xl font-medium mb-3">Technical Training</h3>
              <p className="font-body text-muted-foreground">
                Comprehensive surgical workshops and hands-on training sessions teach optimal techniques for aesthetic applications.
              </p>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <h3 className="font-display text-xl font-medium mb-3">Case Planning</h3>
              <p className="font-body text-muted-foreground">
                Pre-operative consultation services help surgeons select appropriate products and plan surgical approach for desired outcomes.
              </p>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <h3 className="font-display text-xl font-medium mb-3">Clinical Evidence</h3>
              <p className="font-body text-muted-foreground">
                Published case studies and clinical data demonstrate successful outcomes across diverse aesthetic applications.
              </p>
            </CardBody>
          </Card>
        </div>
      </Section>
    </main>
  );
}
