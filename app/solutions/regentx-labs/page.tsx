import { Metadata } from "next";
import { Hero } from "@/components/site/Hero";
import { Section } from "@/components/site/Section";
import { Card, CardBody } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "RegenTX Labs - Tiger BioSciences",
  description: "Advanced research and development division pioneering next-generation regenerative medicine technologies and therapeutic platforms.",
};

export default function RegenTXLabs() {
  return (
    <main className="min-h-screen">
      <Hero
        title="RegenTX Labs"
        description="Our advanced research division driving innovation in regenerative medicine through cutting-edge science, translational research, and breakthrough technology development."
      />

      <Section title="Research Focus Areas" description="Pioneering the future of regenerative medicine">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardBody>
              <h3 className="font-display text-xl font-medium mb-3">Advanced Biomaterials</h3>
              <p className="font-body text-muted-foreground">
                Developing next-generation tissue scaffolds with enhanced bioactivity, improved mechanical properties, and optimized remodeling kinetics.
              </p>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <h3 className="font-display text-xl font-medium mb-3">Cellular Therapies</h3>
              <p className="font-body text-muted-foreground">
                Investigating cell-based approaches and hybrid constructs combining scaffolds with cellular components for enhanced regenerative potential.
              </p>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <h3 className="font-display text-xl font-medium mb-3">Growth Factor Engineering</h3>
              <p className="font-body text-muted-foreground">
                Optimizing biological signaling through controlled release systems and engineered growth factor formulations.
              </p>
            </CardBody>
          </Card>
        </div>
      </Section>

      <Section title="Technology Platforms" description="Core capabilities driving regenerative innovation">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <Card>
            <CardBody>
              <h3 className="font-display text-xl font-medium mb-3">Tissue Engineering</h3>
              <p className="font-body text-muted-foreground">
                State-of-the-art tissue engineering capabilities including 3D culture systems, bioreactor technologies, and advanced characterization methods for developing complex tissue constructs.
              </p>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <h3 className="font-display text-xl font-medium mb-3">Biomaterial Science</h3>
              <p className="font-body text-muted-foreground">
                Comprehensive biomaterial characterization including mechanical testing, degradation studies, and biological activity assessment to optimize product performance.
              </p>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <h3 className="font-display text-xl font-medium mb-3">Cell Biology</h3>
              <p className="font-body text-muted-foreground">
                Advanced cellular assays and stem cell research platforms investigating cell-material interactions and mechanisms of tissue regeneration.
              </p>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <h3 className="font-display text-xl font-medium mb-3">Preclinical Models</h3>
              <p className="font-body text-muted-foreground">
                Validated animal models and ex vivo tissue systems for rigorous efficacy testing and safety evaluation of novel regenerative therapies.
              </p>
            </CardBody>
          </Card>
        </div>
      </Section>

      <Section title="Innovation Pipeline" description="From discovery to clinical translation">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardBody>
              <h3 className="font-display text-xl font-medium mb-3">Discovery Research</h3>
              <p className="font-body text-muted-foreground">
                Early-stage exploration of novel concepts, materials, and therapeutic approaches with potential to advance regenerative medicine.
              </p>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <h3 className="font-display text-xl font-medium mb-3">Technology Development</h3>
              <p className="font-body text-muted-foreground">
                Optimization and scale-up of promising technologies, developing robust manufacturing processes and characterization methods.
              </p>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <h3 className="font-display text-xl font-medium mb-3">Translational Studies</h3>
              <p className="font-body text-muted-foreground">
                Bridging laboratory discoveries to clinical applications through rigorous preclinical validation and regulatory pathway development.
              </p>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <h3 className="font-display text-xl font-medium mb-3">Clinical Development</h3>
              <p className="font-body text-muted-foreground">
                Designing and executing clinical trials to demonstrate safety and efficacy of novel regenerative medicine products.
              </p>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <h3 className="font-display text-xl font-medium mb-3">Product Launch</h3>
              <p className="font-body text-muted-foreground">
                Seamless transition from development to commercialization with comprehensive launch support and post-market surveillance.
              </p>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <h3 className="font-display text-xl font-medium mb-3">Lifecycle Management</h3>
              <p className="font-body text-muted-foreground">
                Continuous improvement of existing products through formulation optimization, new indications, and enhanced delivery systems.
              </p>
            </CardBody>
          </Card>
        </div>
      </Section>

      <Section title="Collaborative Research" description="Partnerships advancing regenerative medicine science">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <Card>
            <CardBody>
              <h3 className="font-display text-xl font-medium mb-3">Academic Partnerships</h3>
              <p className="font-body text-muted-foreground">
                Collaborations with leading universities and research institutions leverage complementary expertise and accelerate scientific discovery in regenerative medicine.
              </p>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <h3 className="font-display text-xl font-medium mb-3">Clinical Research Networks</h3>
              <p className="font-body text-muted-foreground">
                Partnerships with academic medical centers and clinical research organizations enable rigorous evaluation of novel therapies in diverse patient populations.
              </p>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <h3 className="font-display text-xl font-medium mb-3">Industry Collaborations</h3>
              <p className="font-body text-muted-foreground">
                Strategic alliances with technology companies and medical device firms integrate complementary capabilities for innovative product development.
              </p>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <h3 className="font-display text-xl font-medium mb-3">Government Funding</h3>
              <p className="font-body text-muted-foreground">
                Research grants from NIH, DOD, and other agencies support high-risk, high-reward projects advancing regenerative medicine science.
              </p>
            </CardBody>
          </Card>
        </div>
      </Section>

      <Section title="Facilities & Capabilities" description="World-class infrastructure for regenerative medicine research">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardBody>
              <h3 className="font-display text-xl font-medium mb-3">BSL-2 Laboratories</h3>
              <p className="font-body text-muted-foreground">
                Modern cell culture facilities with environmental controls and biosafety infrastructure for tissue engineering research.
              </p>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <h3 className="font-display text-xl font-medium mb-3">Analytical Core</h3>
              <p className="font-body text-muted-foreground">
                Advanced instrumentation for biomaterial characterization including microscopy, spectroscopy, and mechanical testing equipment.
              </p>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <h3 className="font-display text-xl font-medium mb-3">Pilot Manufacturing</h3>
              <p className="font-body text-muted-foreground">
                Small-scale GMP suites for producing clinical trial materials and validating manufacturing processes.
              </p>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <h3 className="font-display text-xl font-medium mb-3">Vivarium</h3>
              <p className="font-body text-muted-foreground">
                AAALAC-accredited animal facilities supporting preclinical efficacy and safety studies with rigorous ethical oversight.
              </p>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <h3 className="font-display text-xl font-medium mb-3">Bioprocessing Suite</h3>
              <p className="font-body text-muted-foreground">
                Bioreactor systems and downstream processing equipment for developing scalable tissue engineering manufacturing.
              </p>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <h3 className="font-display text-xl font-medium mb-3">Computational Biology</h3>
              <p className="font-body text-muted-foreground">
                High-performance computing resources for data analysis, modeling, and bioinformatics supporting research programs.
              </p>
            </CardBody>
          </Card>
        </div>
      </Section>

      <Section title="Scientific Publications" description="Contributing to regenerative medicine knowledge">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <Card>
            <CardBody>
              <h3 className="font-display text-xl font-medium mb-3">Peer-Reviewed Research</h3>
              <p className="font-body text-muted-foreground">
                RegenTX Labs scientists regularly publish in leading journals including Nature Biomedical Engineering, Biomaterials, and Tissue Engineering, advancing the scientific understanding of regenerative medicine.
              </p>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <h3 className="font-display text-xl font-medium mb-3">Conference Presentations</h3>
              <p className="font-body text-muted-foreground">
                Our research team presents findings at major scientific conferences including TERMIS, Tissue Engineering, and Materials Research Society meetings.
              </p>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <h3 className="font-display text-xl font-medium mb-3">Intellectual Property</h3>
              <p className="font-body text-muted-foreground">
                Extensive patent portfolio protecting innovative technologies and manufacturing processes developed through our research programs.
              </p>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <h3 className="font-display text-xl font-medium mb-3">Scientific Reviews</h3>
              <p className="font-body text-muted-foreground">
                Thought leadership through review articles and book chapters synthesizing current knowledge and future directions in regenerative medicine.
              </p>
            </CardBody>
          </Card>
        </div>
      </Section>
    </main>
  );
}
