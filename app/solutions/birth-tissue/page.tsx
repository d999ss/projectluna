import { Metadata } from "next";
import { Hero } from "@/components/site/Hero";
import { Section } from "@/components/site/Section";
import { Card, CardBody } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Birth Tissue Sciences - Tiger BioSciences",
  description: "Advanced birth tissue products leveraging the unique regenerative properties of placental and amniotic tissues for therapeutic applications.",
};

export default function BirthTissueSciences() {
  return (
    <main className="min-h-screen">
      <Hero
        title="Birth Tissue Sciences"
        description="Harnessing the unique regenerative and immunomodulatory properties of birth tissues to advance healing and tissue repair across diverse clinical applications."
        backgroundImage="/images/boredoptimism_human_skin_--ar_169_--raw_--profile_e1dtuj2_--v_350bc8db-8fea-4316-aa3b-ec44b72f8094_1.png"
        size="large"
      />

      <Section title="Birth Tissue Products" description="Comprehensive portfolio leveraging placental tissue biology">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardBody>
              <h3 className="font-display text-xl font-medium mb-3">Amniotic Membrane</h3>
              <p className="font-body text-muted-foreground">
                Preserved amniotic membrane products rich in growth factors, cytokines, and extracellular matrix components for wound healing applications.
              </p>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <h3 className="font-display text-xl font-medium mb-3">Umbilical Cord</h3>
              <p className="font-body text-muted-foreground">
                Wharton's jelly-derived products providing structural matrix and biological signaling for soft tissue reinforcement and regeneration.
              </p>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <h3 className="font-display text-xl font-medium mb-3">Placental Tissue</h3>
              <p className="font-body text-muted-foreground">
                Placental-derived matrices offering unique immunomodulatory properties for applications requiring reduced inflammation.
              </p>
            </CardBody>
          </Card>
        </div>
      </Section>

      <Section title="Biological Properties" description="Unique characteristics of birth tissues supporting regeneration">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <Card>
            <CardBody>
              <h3 className="font-display text-xl font-medium mb-3">Growth Factor Content</h3>
              <p className="font-body text-muted-foreground">
                Birth tissues naturally contain high concentrations of growth factors including EGF, bFGF, PDGF, and TGF-β that stimulate cellular proliferation, migration, and differentiation critical for tissue repair.
              </p>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <h3 className="font-display text-xl font-medium mb-3">Anti-Inflammatory Activity</h3>
              <p className="font-body text-muted-foreground">
                Immunomodulatory cytokines and protease inhibitors reduce excessive inflammation, creating a pro-regenerative environment that favors organized tissue remodeling over scar formation.
              </p>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <h3 className="font-display text-xl font-medium mb-3">Antimicrobial Properties</h3>
              <p className="font-body text-muted-foreground">
                Endogenous antimicrobial peptides and proteins provide natural protection against bacterial contamination while promoting healthy wound healing.
              </p>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <h3 className="font-display text-xl font-medium mb-3">Extracellular Matrix</h3>
              <p className="font-body text-muted-foreground">
                Native ECM architecture provides structural scaffold and biological cues that guide cellular behavior and support tissue regeneration processes.
              </p>
            </CardBody>
          </Card>
        </div>
      </Section>

      <Section title="Clinical Applications" description="Diverse therapeutic applications across medical specialties">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardBody>
              <h3 className="font-display text-xl font-medium mb-3">Wound Care</h3>
              <p className="font-body text-muted-foreground">
                Chronic and acute wound treatment leveraging anti-inflammatory and regenerative properties to accelerate closure and improve healing quality.
              </p>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <h3 className="font-display text-xl font-medium mb-3">Ophthalmology</h3>
              <p className="font-body text-muted-foreground">
                Ocular surface reconstruction for corneal defects, chemical burns, and refractory dry eye leveraging membrane's anti-scarring properties.
              </p>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <h3 className="font-display text-xl font-medium mb-3">Orthopedics</h3>
              <p className="font-body text-muted-foreground">
                Soft tissue repair for tendon, ligament, and cartilage injuries benefiting from growth factor content and anti-inflammatory effects.
              </p>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <h3 className="font-display text-xl font-medium mb-3">Dental Applications</h3>
              <p className="font-body text-muted-foreground">
                Periodontal regeneration and oral surgery applications utilizing barrier membrane properties and regenerative signaling.
              </p>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <h3 className="font-display text-xl font-medium mb-3">Pain Management</h3>
              <p className="font-body text-muted-foreground">
                Injectable formulations for joint pain and soft tissue injuries providing anti-inflammatory relief and tissue healing support.
              </p>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <h3 className="font-display text-xl font-medium mb-3">Plastic Surgery</h3>
              <p className="font-body text-muted-foreground">
                Reconstructive procedures benefiting from reduced scarring and improved aesthetic outcomes with birth tissue products.
              </p>
            </CardBody>
          </Card>
        </div>
      </Section>

      <Section title="Processing Technology" description="Preserving biological activity while ensuring safety">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <Card>
            <CardBody>
              <h3 className="font-display text-xl font-medium mb-3">Gentle Processing</h3>
              <p className="font-body text-muted-foreground">
                Proprietary minimal processing techniques preserve native tissue architecture, growth factors, and biological activity while ensuring product safety and sterility.
              </p>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <h3 className="font-display text-xl font-medium mb-3">Cryopreservation</h3>
              <p className="font-body text-muted-foreground">
                Controlled-rate freezing maintains tissue viability and biological properties for fresh-frozen products requiring refrigerated storage.
              </p>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <h3 className="font-display text-xl font-medium mb-3">Dehydration Technology</h3>
              <p className="font-body text-muted-foreground">
                Advanced dehydration methods create shelf-stable products with preserved growth factor activity and convenient room-temperature storage.
              </p>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <h3 className="font-display text-xl font-medium mb-3">Micronization</h3>
              <p className="font-body text-muted-foreground">
                Particulate and injectable formulations created through controlled particle size reduction while maintaining biological functionality.
              </p>
            </CardBody>
          </Card>
        </div>
      </Section>

      <Section title="Quality & Safety" description="Rigorous standards protecting patients and ensuring efficacy">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardBody>
              <h3 className="font-display text-xl font-medium mb-3">Donor Screening</h3>
              <p className="font-body text-muted-foreground">
                Comprehensive maternal health screening including medical history review and serological testing for infectious diseases.
              </p>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <h3 className="font-display text-xl font-medium mb-3">Sterility Assurance</h3>
              <p className="font-body text-muted-foreground">
                Terminal sterilization or aseptic processing combined with sterility testing ensures microbiological safety of final products.
              </p>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <h3 className="font-display text-xl font-medium mb-3">AATB Accreditation</h3>
              <p className="font-body text-muted-foreground">
                Tissue banking operations maintain American Association of Tissue Banks accreditation demonstrating quality excellence.
              </p>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <h3 className="font-display text-xl font-medium mb-3">FDA Compliance</h3>
              <p className="font-body text-muted-foreground">
                Full compliance with FDA regulations governing human cells, tissues, and cellular and tissue-based products (HCT/Ps).
              </p>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <h3 className="font-display text-xl font-medium mb-3">Traceability</h3>
              <p className="font-body text-muted-foreground">
                Complete documentation from tissue recovery through processing and distribution enables full product traceability.
              </p>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <h3 className="font-display text-xl font-medium mb-3">Potency Testing</h3>
              <p className="font-body text-muted-foreground">
                Biological assays confirm retention of growth factor activity and regenerative properties throughout product shelf life.
              </p>
            </CardBody>
          </Card>
        </div>
      </Section>

      <Section title="Clinical Evidence" description="Robust data supporting birth tissue applications">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <Card>
            <CardBody>
              <h3 className="font-display text-xl font-medium mb-3">Published Studies</h3>
              <p className="font-body text-muted-foreground">
                Extensive peer-reviewed literature demonstrates safety and efficacy across multiple clinical applications with consistent positive outcomes.
              </p>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <h3 className="font-display text-xl font-medium mb-3">Registry Data</h3>
              <p className="font-body text-muted-foreground">
                Real-world evidence from large patient registries confirms clinical trial findings translate to diverse practice settings and patient populations.
              </p>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <h3 className="font-display text-xl font-medium mb-3">Comparative Effectiveness</h3>
              <p className="font-body text-muted-foreground">
                Head-to-head studies demonstrate superior or equivalent outcomes compared to alternative treatments across multiple indications.
              </p>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <h3 className="font-display text-xl font-medium mb-3">Safety Profile</h3>
              <p className="font-body text-muted-foreground">
                Extensive safety experience with minimal adverse events demonstrates excellent tolerability and biocompatibility of birth tissue products.
              </p>
            </CardBody>
          </Card>
        </div>
      </Section>
    </main>
  );
}
