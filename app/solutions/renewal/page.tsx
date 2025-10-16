import { Metadata } from "next";
import { Hero } from "@/components/site/Hero";
import { Section } from "@/components/site/Section";
import { Card, CardBody } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Renewal Solutions - Tiger BioSciences",
  description: "Advanced regenerative therapies for tissue renewal and rejuvenation that restore function and vitality to aging or damaged tissues.",
};

export default function RenewalSolutions() {
  return (
    <main className="min-h-screen">
      <Hero
        title="Renewal Solutions"
        description="Cutting-edge regenerative therapies that harness the body's natural healing mechanisms to renew, restore, and rejuvenate damaged or aging tissues."
        backgroundImage="/images/boredoptimism_close_up_of_skin_--ar_169_--raw_--profile_el37i_d81643f3-7159-4088-adcf-d7413e31b848_1.png"
        size="large"
      />

      <Section title="Clinical Applications" description="Comprehensive approaches to tissue renewal and restoration">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardBody>
              <h3 className="font-display text-xl font-medium mb-3">Dermal Renewal</h3>
              <p className="font-body text-muted-foreground">
                Advanced matrices that stimulate collagen production and cellular renewal for improved skin quality, texture, and resilience.
              </p>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <h3 className="font-display text-xl font-medium mb-3">Soft Tissue Restoration</h3>
              <p className="font-body text-muted-foreground">
                Regenerative solutions for restoring volume and function to soft tissues affected by aging, trauma, or disease.
              </p>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <h3 className="font-display text-xl font-medium mb-3">Functional Recovery</h3>
              <p className="font-body text-muted-foreground">
                Therapeutic approaches that restore tissue function and mechanical properties through guided regeneration.
              </p>
            </CardBody>
          </Card>
        </div>
      </Section>

      <Section title="Regenerative Technology" description="Harnessing biological signals for tissue renewal">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <Card>
            <CardBody>
              <h3 className="font-display text-xl font-medium mb-3">Growth Factor Delivery</h3>
              <p className="font-body text-muted-foreground">
                Native growth factors preserved within extracellular matrix scaffolds provide sustained biological signals that activate resident stem cells and promote tissue regeneration.
              </p>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <h3 className="font-display text-xl font-medium mb-3">Cell Recruitment</h3>
              <p className="font-body text-muted-foreground">
                Chemotactic gradients attract host progenitor cells to the treatment site, facilitating cellular repopulation and new tissue formation.
              </p>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <h3 className="font-display text-xl font-medium mb-3">Matrix Remodeling</h3>
              <p className="font-body text-muted-foreground">
                Controlled degradation and replacement with native tissue allows progressive restoration of tissue architecture and biomechanical properties.
              </p>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <h3 className="font-display text-xl font-medium mb-3">Immunomodulation</h3>
              <p className="font-body text-muted-foreground">
                Anti-inflammatory properties modulate immune response to favor constructive remodeling over scar tissue formation.
              </p>
            </CardBody>
          </Card>
        </div>
      </Section>

      <Section title="Therapeutic Benefits" description="Clinical outcomes that enhance quality of life">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardBody>
              <h3 className="font-display text-xl font-medium mb-3">Improved Function</h3>
              <p className="font-body text-muted-foreground">
                Restoration of tissue biomechanical properties improves functional capacity and reduces limitations in daily activities.
              </p>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <h3 className="font-display text-xl font-medium mb-3">Pain Reduction</h3>
              <p className="font-body text-muted-foreground">
                Tissue regeneration and inflammation modulation provide sustained pain relief without ongoing pharmaceutical intervention.
              </p>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <h3 className="font-display text-xl font-medium mb-3">Enhanced Healing</h3>
              <p className="font-body text-muted-foreground">
                Accelerated tissue repair and organized regeneration lead to faster recovery and return to normal activities.
              </p>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <h3 className="font-display text-xl font-medium mb-3">Quality Tissue Formation</h3>
              <p className="font-body text-muted-foreground">
                Promotes development of organized, functional tissue rather than disorganized scar tissue with compromised properties.
              </p>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <h3 className="font-display text-xl font-medium mb-3">Long-term Efficacy</h3>
              <p className="font-body text-muted-foreground">
                Sustained benefits result from actual tissue regeneration rather than temporary symptomatic relief.
              </p>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <h3 className="font-display text-xl font-medium mb-3">Minimally Invasive Options</h3>
              <p className="font-body text-muted-foreground">
                Injectable and minimally invasive delivery methods reduce surgical trauma and facilitate rapid recovery.
              </p>
            </CardBody>
          </Card>
        </div>
      </Section>

      <Section title="Product Portfolio" description="Diverse formats for varied clinical needs">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <Card>
            <CardBody>
              <h3 className="font-display text-xl font-medium mb-3">Amniotic Membranes</h3>
              <p className="font-body text-muted-foreground">
                Birth tissue products rich in growth factors and cytokines that promote cellular proliferation, reduce inflammation, and accelerate tissue renewal.
              </p>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <h3 className="font-display text-xl font-medium mb-3">Injectable Matrices</h3>
              <p className="font-body text-muted-foreground">
                Micronized extracellular matrix particles for minimally invasive delivery of regenerative scaffolds to target tissues.
              </p>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <h3 className="font-display text-xl font-medium mb-3">Dermal Scaffolds</h3>
              <p className="font-body text-muted-foreground">
                Intact tissue matrices that provide three-dimensional scaffolding for cellular infiltration and organized tissue regeneration.
              </p>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <h3 className="font-display text-xl font-medium mb-3">Combination Therapies</h3>
              <p className="font-body text-muted-foreground">
                Multi-component systems combining scaffolds, biological factors, and cellular elements for enhanced regenerative potential.
              </p>
            </CardBody>
          </Card>
        </div>
      </Section>

      <Section title="Clinical Support" description="Comprehensive resources for optimal therapeutic outcomes">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardBody>
              <h3 className="font-display text-xl font-medium mb-3">Treatment Protocols</h3>
              <p className="font-body text-muted-foreground">
                Evidence-based protocols guide product selection, dosing, and treatment intervals for optimal regenerative outcomes.
              </p>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <h3 className="font-display text-xl font-medium mb-3">Physician Training</h3>
              <p className="font-body text-muted-foreground">
                Comprehensive education programs teach proper technique and patient selection for regenerative therapies.
              </p>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <h3 className="font-display text-xl font-medium mb-3">Clinical Evidence</h3>
              <p className="font-body text-muted-foreground">
                Robust clinical data and published studies support efficacy claims and guide clinical decision-making.
              </p>
            </CardBody>
          </Card>
        </div>
      </Section>
    </main>
  );
}
