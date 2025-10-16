import { Metadata } from "next";
import { Hero } from "@/components/site/Hero";
import { Section } from "@/components/site/Section";
import { Card, CardBody } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Volume Solutions - Tiger BioSciences",
  description: "Advanced regenerative volume restoration solutions for soft tissue defects and volume loss across reconstructive and aesthetic applications.",
};

export default function VolumeSolutions() {
  return (
    <main className="min-h-screen">
      <Hero
        title="Volume Solutions"
        description="Innovative regenerative technologies for soft tissue volume restoration that provide natural tissue integration and long-lasting volumetric outcomes."
        backgroundImage="/images/boredoptimism_science_aesthetics_--ar_169_--raw_--profile_e1d_be617358-9084-4f84-b1dc-378a67fd1009_0.png"
        size="large"
      />

      <Section title="Clinical Applications" description="Comprehensive volume restoration across medical and aesthetic specialties">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardBody>
              <h3 className="font-display text-xl font-medium mb-3">Facial Volume Restoration</h3>
              <p className="font-body text-muted-foreground">
                Address age-related volume loss in cheeks, temples, and periorbital regions with natural-feeling, long-lasting results.
              </p>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <h3 className="font-display text-xl font-medium mb-3">Soft Tissue Defects</h3>
              <p className="font-body text-muted-foreground">
                Restore volume to soft tissue defects following trauma, tumor resection, or congenital abnormalities.
              </p>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <h3 className="font-display text-xl font-medium mb-3">Breast Volume Enhancement</h3>
              <p className="font-body text-muted-foreground">
                Augment breast volume for aesthetic or reconstructive purposes with biocompatible matrices that integrate naturally.
              </p>
            </CardBody>
          </Card>
        </div>
      </Section>

      <Section title="Technology Platform" description="Advanced biomaterials engineered for volume restoration">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <Card>
            <CardBody>
              <h3 className="font-display text-xl font-medium mb-3">Volumetric Stability</h3>
              <p className="font-body text-muted-foreground">
                Engineered matrix architecture maintains volume during tissue integration, providing predictable and consistent volumetric outcomes with minimal resorption.
              </p>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <h3 className="font-display text-xl font-medium mb-3">Progressive Integration</h3>
              <p className="font-body text-muted-foreground">
                Controlled remodeling allows gradual replacement with native tissue while maintaining volume throughout the integration process.
              </p>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <h3 className="font-display text-xl font-medium mb-3">Tissue Ingrowth</h3>
              <p className="font-body text-muted-foreground">
                Porous architecture facilitates cellular infiltration, neovascularization, and collagen deposition for stable, vascularized tissue.
              </p>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <h3 className="font-display text-xl font-medium mb-3">Natural Feel</h3>
              <p className="font-body text-muted-foreground">
                Biomechanical properties match native tissue, creating soft, pliable volume that moves naturally and feels authentic to touch.
              </p>
            </CardBody>
          </Card>
        </div>
      </Section>

      <Section title="Product Formats" description="Versatile options for diverse volumetric needs">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardBody>
              <h3 className="font-display text-xl font-medium mb-3">Sheet Matrices</h3>
              <p className="font-body text-muted-foreground">
                Multi-layered acellular dermal matrices in various thicknesses provide substantial volume augmentation for large defects.
              </p>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <h3 className="font-display text-xl font-medium mb-3">Injectable Products</h3>
              <p className="font-body text-muted-foreground">
                Micronized matrix particles suspended in carrier solution enable minimally invasive volume restoration via injection.
              </p>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <h3 className="font-display text-xl font-medium mb-3">Particulate Matrices</h3>
              <p className="font-body text-muted-foreground">
                Flowable particulate forms conform to irregular spaces and can be packed for precise volume control.
              </p>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <h3 className="font-display text-xl font-medium mb-3">Pre-shaped Implants</h3>
              <p className="font-body text-muted-foreground">
                Anatomically designed constructs for specific sites combine immediate volume with regenerative properties.
              </p>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <h3 className="font-display text-xl font-medium mb-3">Custom Configurations</h3>
              <p className="font-body text-muted-foreground">
                Matrices can be stacked, layered, or shaped to achieve desired volumetric goals for individual patients.
              </p>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <h3 className="font-display text-xl font-medium mb-3">Combination Systems</h3>
              <p className="font-body text-muted-foreground">
                Multiple product formats can be combined in layered approach for optimal volume restoration and contouring.
              </p>
            </CardBody>
          </Card>
        </div>
      </Section>

      <Section title="Clinical Outcomes" description="Delivering predictable, long-lasting volume restoration">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <Card>
            <CardBody>
              <h3 className="font-display text-xl font-medium mb-3">Volume Retention</h3>
              <p className="font-body text-muted-foreground">
                Clinical studies demonstrate excellent volume retention over time with minimal resorption compared to alternative volume restoration methods.
              </p>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <h3 className="font-display text-xl font-medium mb-3">Natural Appearance</h3>
              <p className="font-body text-muted-foreground">
                Tissue integration creates smooth, natural contours without visible irregularities or palpable edges.
              </p>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <h3 className="font-display text-xl font-medium mb-3">Patient Satisfaction</h3>
              <p className="font-body text-muted-foreground">
                High satisfaction scores reflect the natural feel, stable results, and lasting quality of volume restoration outcomes.
              </p>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <h3 className="font-display text-xl font-medium mb-3">Low Complication Rates</h3>
              <p className="font-body text-muted-foreground">
                Biocompatible materials minimize inflammatory response and reduce complications compared to synthetic alternatives.
              </p>
            </CardBody>
          </Card>
        </div>
      </Section>

      <Section title="Surgical Techniques" description="Expert guidance for optimal volume restoration">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardBody>
              <h3 className="font-display text-xl font-medium mb-3">Technical Training</h3>
              <p className="font-body text-muted-foreground">
                Comprehensive workshops teach proper technique for matrix placement, layering, and fixation to achieve desired volume.
              </p>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <h3 className="font-display text-xl font-medium mb-3">Volume Planning</h3>
              <p className="font-body text-muted-foreground">
                Pre-operative assessment tools and guidelines help surgeons determine appropriate product selection and volume requirements.
              </p>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <h3 className="font-display text-xl font-medium mb-3">Case Consultation</h3>
              <p className="font-body text-muted-foreground">
                Expert clinical team provides case-specific guidance on technique selection and surgical planning for complex cases.
              </p>
            </CardBody>
          </Card>
        </div>
      </Section>
    </main>
  );
}
