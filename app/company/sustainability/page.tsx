import { Metadata } from "next";
import { Hero } from "@/components/site/Hero";
import { Section } from "@/components/site/Section";
import { Card, CardBody } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Sustainability Initiatives - Tiger BioSciences",
  description: "Our commitment to environmental stewardship, ethical sourcing, and sustainable operations in regenerative medicine manufacturing.",
};

export default function Sustainability() {
  return (
    <main className="min-h-screen">
      <Hero
        title="Sustainability & Responsibility"
        description="Tiger BioSciences is committed to sustainable practices that protect our environment, ensure ethical operations, and create lasting positive impact for future generations."
      />

      <Section title="Environmental Stewardship" description="Minimizing our environmental footprint through innovative practices">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardBody>
              <h3 className="font-display text-xl font-medium mb-3">Energy Efficiency</h3>
              <p className="font-body text-muted-foreground">
                Our manufacturing facilities utilize energy-efficient systems, renewable energy sources, and smart building technologies to reduce carbon emissions and energy consumption.
              </p>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <h3 className="font-display text-xl font-medium mb-3">Waste Reduction</h3>
              <p className="font-body text-muted-foreground">
                Comprehensive waste management programs including recycling, composting, and waste-to-energy initiatives minimize landfill contributions and promote circular economy principles.
              </p>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <h3 className="font-display text-xl font-medium mb-3">Water Conservation</h3>
              <p className="font-body text-muted-foreground">
                Advanced water treatment and recycling systems reduce water consumption while ensuring compliance with environmental regulations and protecting local water resources.
              </p>
            </CardBody>
          </Card>
        </div>
      </Section>

      <Section title="Ethical Sourcing" description="Upholding the highest standards in tissue recovery and processing">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <Card>
            <CardBody>
              <h3 className="font-display text-xl font-medium mb-3">Donor Screening & Consent</h3>
              <p className="font-body text-muted-foreground">
                Rigorous donor screening protocols and comprehensive informed consent processes ensure ethical tissue recovery that honors donors and prioritizes safety.
              </p>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <h3 className="font-display text-xl font-medium mb-3">AATB Accreditation</h3>
              <p className="font-body text-muted-foreground">
                Our tissue banking operations maintain American Association of Tissue Banks accreditation, demonstrating commitment to the highest industry standards for safety and ethics.
              </p>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <h3 className="font-display text-xl font-medium mb-3">Transparency & Traceability</h3>
              <p className="font-body text-muted-foreground">
                Complete traceability from tissue recovery through final product ensures accountability and enables comprehensive quality documentation.
              </p>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <h3 className="font-display text-xl font-medium mb-3">Regulatory Compliance</h3>
              <p className="font-body text-muted-foreground">
                Full compliance with FDA regulations, international standards, and ethical guidelines governing human tissue-based products.
              </p>
            </CardBody>
          </Card>
        </div>
      </Section>

      <Section title="Sustainable Operations" description="Building a resilient and responsible business">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardBody>
              <h3 className="font-display text-xl font-medium mb-3">Green Chemistry</h3>
              <p className="font-body text-muted-foreground">
                Proprietary processing methods minimize chemical use and environmental impact while maintaining product safety and efficacy standards.
              </p>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <h3 className="font-display text-xl font-medium mb-3">Sustainable Packaging</h3>
              <p className="font-body text-muted-foreground">
                Eco-friendly packaging materials and optimized designs reduce waste while ensuring product sterility and stability throughout distribution.
              </p>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <h3 className="font-display text-xl font-medium mb-3">Supply Chain Responsibility</h3>
              <p className="font-body text-muted-foreground">
                Partnering with suppliers who share our commitment to sustainability, ethical practices, and social responsibility.
              </p>
            </CardBody>
          </Card>
        </div>
      </Section>

      <Section title="Social Responsibility" description="Creating positive impact in our communities">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <Card>
            <CardBody>
              <h3 className="font-display text-xl font-medium mb-3">Employee Well-being</h3>
              <p className="font-body text-muted-foreground">
                Comprehensive health and wellness programs, professional development opportunities, and inclusive workplace culture that values diversity and employee growth.
              </p>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <h3 className="font-display text-xl font-medium mb-3">Community Engagement</h3>
              <p className="font-body text-muted-foreground">
                Supporting local communities through charitable giving, volunteer programs, and partnerships with healthcare organizations serving underserved populations.
              </p>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <h3 className="font-display text-xl font-medium mb-3">Healthcare Access</h3>
              <p className="font-body text-muted-foreground">
                Product donation programs and humanitarian partnerships expand access to advanced regenerative medicine solutions in developing regions.
              </p>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <h3 className="font-display text-xl font-medium mb-3">Education & Outreach</h3>
              <p className="font-body text-muted-foreground">
                Supporting STEM education, medical training programs, and public awareness initiatives about tissue donation and regenerative medicine.
              </p>
            </CardBody>
          </Card>
        </div>
      </Section>

      <Section title="Continuous Improvement" description="Our commitment to ongoing sustainability progress">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardBody>
              <h3 className="font-display text-xl font-medium mb-3">Goals & Metrics</h3>
              <p className="font-body text-muted-foreground">
                Measurable sustainability targets with regular progress reporting and third-party verification of environmental and social performance.
              </p>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <h3 className="font-display text-xl font-medium mb-3">Innovation Investment</h3>
              <p className="font-body text-muted-foreground">
                Ongoing research into more sustainable manufacturing processes, biodegradable materials, and reduced environmental impact technologies.
              </p>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <h3 className="font-display text-xl font-medium mb-3">Stakeholder Engagement</h3>
              <p className="font-body text-muted-foreground">
                Regular dialogue with employees, communities, customers, and partners to identify opportunities and drive sustainability improvements.
              </p>
            </CardBody>
          </Card>
        </div>
      </Section>
    </main>
  );
}
