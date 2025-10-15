import { Metadata } from "next";
import { Hero } from "@/components/site/Hero";
import { Section } from "@/components/site/Section";
import { Card, CardBody } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Regenerative Medicine - Tiger BioSciences",
  description: "Comprehensive regenerative medicine platform harnessing the body's natural healing mechanisms to repair, restore, and regenerate damaged tissues.",
};

export default function RegenerativeMedicine() {
  return (
    <main className="min-h-screen">
      <Hero
        title="Regenerative Medicine"
        description="Advanced regenerative medicine solutions that harness biological signals and native tissue architecture to promote organized tissue repair and functional restoration."
      />

      <Section title="Core Technologies" description="Foundational platforms driving regenerative innovation">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardBody>
              <h3 className="font-display text-xl font-medium mb-3">Extracellular Matrix Scaffolds</h3>
              <p className="font-body text-muted-foreground">
                Native tissue-derived matrices preserve three-dimensional architecture and biological cues that guide cellular behavior and tissue remodeling.
              </p>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <h3 className="font-display text-xl font-medium mb-3">Growth Factor Systems</h3>
              <p className="font-body text-muted-foreground">
                Preserved endogenous growth factors and cytokines provide sustained biological signaling to recruit cells and stimulate regeneration.
              </p>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <h3 className="font-display text-xl font-medium mb-3">Biomaterial Engineering</h3>
              <p className="font-body text-muted-foreground">
                Advanced processing techniques optimize material properties while maintaining biological activity for superior clinical performance.
              </p>
            </CardBody>
          </Card>
        </div>
      </Section>

      <Section title="Therapeutic Applications" description="Comprehensive solutions across clinical specialties">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <Card>
            <CardBody>
              <h3 className="font-display text-xl font-medium mb-3">Wound Healing & Tissue Repair</h3>
              <p className="font-body text-muted-foreground">
                Regenerative matrices accelerate healing of acute and chronic wounds, promoting organized dermal regeneration with improved tissue quality compared to scar formation.
              </p>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <h3 className="font-display text-xl font-medium mb-3">Reconstructive Surgery</h3>
              <p className="font-body text-muted-foreground">
                Acellular matrices provide structural support and biological scaffolding for complex reconstruction following trauma, cancer surgery, or congenital defects.
              </p>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <h3 className="font-display text-xl font-medium mb-3">Orthopedic Applications</h3>
              <p className="font-body text-muted-foreground">
                Regenerative solutions support healing of tendon, ligament, and cartilage injuries by providing appropriate mechanical environment and biological signals.
              </p>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <h3 className="font-display text-xl font-medium mb-3">Aesthetic Medicine</h3>
              <p className="font-body text-muted-foreground">
                Tissue engineering approaches deliver natural-appearing volume restoration and facial rejuvenation with long-lasting, biocompatible results.
              </p>
            </CardBody>
          </Card>
        </div>
      </Section>

      <Section title="Biological Mechanisms" description="How regenerative solutions promote tissue healing">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardBody>
              <h3 className="font-display text-xl font-medium mb-3">Cell Recruitment</h3>
              <p className="font-body text-muted-foreground">
                Chemotactic factors attract host progenitor cells and stem cells to the injury site, initiating the regenerative cascade.
              </p>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <h3 className="font-display text-xl font-medium mb-3">Cellular Proliferation</h3>
              <p className="font-body text-muted-foreground">
                Growth factors stimulate cell division and expansion, populating the scaffold with functional cells for tissue formation.
              </p>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <h3 className="font-display text-xl font-medium mb-3">Angiogenesis</h3>
              <p className="font-body text-muted-foreground">
                Pro-angiogenic signals promote blood vessel formation, ensuring oxygen and nutrient supply for developing tissue.
              </p>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <h3 className="font-display text-xl font-medium mb-3">Matrix Remodeling</h3>
              <p className="font-body text-muted-foreground">
                Controlled scaffold degradation is balanced with new matrix deposition, progressively replacing graft with native tissue.
              </p>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <h3 className="font-display text-xl font-medium mb-3">Immunomodulation</h3>
              <p className="font-body text-muted-foreground">
                Anti-inflammatory properties shift immune response from pro-inflammatory to pro-regenerative phenotype.
              </p>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <h3 className="font-display text-xl font-medium mb-3">Functional Integration</h3>
              <p className="font-body text-muted-foreground">
                Newly formed tissue integrates seamlessly with surrounding structures, restoring mechanical function and normal physiology.
              </p>
            </CardBody>
          </Card>
        </div>
      </Section>

      <Section title="Clinical Evidence" description="Robust data supporting regenerative approaches">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <Card>
            <CardBody>
              <h3 className="font-display text-xl font-medium mb-3">Peer-Reviewed Publications</h3>
              <p className="font-body text-muted-foreground">
                Over 100 published studies in leading medical journals validate safety, efficacy, and clinical outcomes across diverse applications and patient populations.
              </p>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <h3 className="font-display text-xl font-medium mb-3">Multi-Center Trials</h3>
              <p className="font-body text-muted-foreground">
                Large-scale randomized controlled trials demonstrate superior outcomes compared to standard care and alternative treatment modalities.
              </p>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <h3 className="font-display text-xl font-medium mb-3">Long-Term Follow-Up</h3>
              <p className="font-body text-muted-foreground">
                Extended outcome studies show durability of regenerative results with maintained improvement over years following treatment.
              </p>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <h3 className="font-display text-xl font-medium mb-3">Real-World Evidence</h3>
              <p className="font-body text-muted-foreground">
                Registry data and post-market surveillance confirm clinical trial findings translate to diverse real-world patient populations and practice settings.
              </p>
            </CardBody>
          </Card>
        </div>
      </Section>

      <Section title="Research & Development" description="Advancing the future of regenerative medicine">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardBody>
              <h3 className="font-display text-xl font-medium mb-3">Novel Biomaterials</h3>
              <p className="font-body text-muted-foreground">
                Developing next-generation scaffolds with enhanced properties and expanded therapeutic applications through materials innovation.
              </p>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <h3 className="font-display text-xl font-medium mb-3">Cellular Therapies</h3>
              <p className="font-body text-muted-foreground">
                Investigating combination of acellular scaffolds with cellular components to augment regenerative potential for challenging conditions.
              </p>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <h3 className="font-display text-xl font-medium mb-3">Bioactive Modification</h3>
              <p className="font-body text-muted-foreground">
                Engineering scaffolds with specific growth factors or peptides to direct cellular behavior and optimize tissue formation.
              </p>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <h3 className="font-display text-xl font-medium mb-3">3D Bioprinting</h3>
              <p className="font-body text-muted-foreground">
                Exploring additive manufacturing technologies to create patient-specific constructs with precise architecture and composition.
              </p>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <h3 className="font-display text-xl font-medium mb-3">Mechanobiology</h3>
              <p className="font-body text-muted-foreground">
                Understanding how mechanical forces influence regeneration to optimize scaffold properties for specific tissue types.
              </p>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <h3 className="font-display text-xl font-medium mb-3">Digital Health Integration</h3>
              <p className="font-body text-muted-foreground">
                Developing smart scaffolds and monitoring technologies to track healing progress and optimize treatment protocols.
              </p>
            </CardBody>
          </Card>
        </div>
      </Section>

      <Section title="Quality & Safety" description="Maintaining highest standards in regenerative medicine">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <Card>
            <CardBody>
              <h3 className="font-display text-xl font-medium mb-3">Donor Screening</h3>
              <p className="font-body text-muted-foreground">
                Rigorous medical and social history screening combined with comprehensive serological testing ensures tissue safety from recovery through processing.
              </p>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <h3 className="font-display text-xl font-medium mb-3">Processing Validation</h3>
              <p className="font-body text-muted-foreground">
                Validated viral inactivation and bacterial reduction processes combined with sterility testing provide multiple layers of product safety assurance.
              </p>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <h3 className="font-display text-xl font-medium mb-3">Quality Systems</h3>
              <p className="font-body text-muted-foreground">
                ISO-certified facilities and cGMP compliance ensure consistent quality and traceability throughout manufacturing and distribution.
              </p>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <h3 className="font-display text-xl font-medium mb-3">Regulatory Compliance</h3>
              <p className="font-body text-muted-foreground">
                Full compliance with FDA regulations and international standards governing human tissue-based products and regenerative medicine therapies.
              </p>
            </CardBody>
          </Card>
        </div>
      </Section>
    </main>
  );
}
