import { Metadata } from "next";
import { Hero } from "@/components/site/Hero";
import { Section } from "@/components/site/Section";
import { Card, CardBody } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Open Positions - Tiger BioSciences Careers",
  description: "Explore career opportunities at Tiger BioSciences and join our team in advancing regenerative medicine and improving patient outcomes.",
};

export default function OpenPositions() {
  return (
    <main className="min-h-screen">
      <Hero
        title="Open Positions"
        description="Join our team of innovators and help us transform regenerative medicine. Explore opportunities across research, manufacturing, quality, and operations."
        primaryCTA={{ text: "Contact Us", href: "/contact" }}
      />

      <Section title="Research & Development" description="Drive innovation in regenerative medicine">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardBody>
              <h3 className="font-display text-xl font-medium mb-3">Senior Research Scientist</h3>
              <p className="font-body text-muted-foreground mb-4">
                Lead cutting-edge research in cell therapy development, process optimization, and analytical method development. PhD in Biology, Biochemistry, or related field required.
              </p>
              <div className="text-sm text-brand font-medium">Boston, MA</div>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <h3 className="font-display text-xl font-medium mb-3">Research Associate</h3>
              <p className="font-body text-muted-foreground mb-4">
                Support laboratory research activities including cell culture, sample analysis, and data documentation. BS/MS in Life Sciences with 2+ years experience.
              </p>
              <div className="text-sm text-brand font-medium">Boston, MA</div>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <h3 className="font-display text-xl font-medium mb-3">Bioprocess Engineer</h3>
              <p className="font-body text-muted-foreground mb-4">
                Design and optimize bioreactor processes for cell therapy manufacturing. MS in Bioengineering or Chemical Engineering with bioprocess experience.
              </p>
              <div className="text-sm text-brand font-medium">Boston, MA</div>
            </CardBody>
          </Card>
        </div>
      </Section>

      <Section title="Manufacturing & Operations" description="Scale production of life-changing therapies">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardBody>
              <h3 className="font-display text-xl font-medium mb-3">Manufacturing Manager</h3>
              <p className="font-body text-muted-foreground mb-4">
                Lead GMP manufacturing operations for cell therapy products. Oversee production teams, ensure compliance, and drive operational excellence.
              </p>
              <div className="text-sm text-brand font-medium">Boston, MA</div>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <h3 className="font-display text-xl font-medium mb-3">Manufacturing Specialist</h3>
              <p className="font-body text-muted-foreground mb-4">
                Execute cell therapy manufacturing processes in cleanroom environments. Experience in aseptic processing and GMP documentation required.
              </p>
              <div className="text-sm text-brand font-medium">Boston, MA</div>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <h3 className="font-display text-xl font-medium mb-3">Supply Chain Coordinator</h3>
              <p className="font-body text-muted-foreground mb-4">
                Manage inventory, vendor relationships, and materials procurement for manufacturing operations. Experience in regulated environments preferred.
              </p>
              <div className="text-sm text-brand font-medium">Boston, MA</div>
            </CardBody>
          </Card>
        </div>
      </Section>

      <Section title="Quality & Regulatory" description="Ensure compliance and product excellence">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <Card>
            <CardBody>
              <h3 className="font-display text-xl font-medium mb-3">Quality Assurance Manager</h3>
              <p className="font-body text-muted-foreground mb-4">
                Lead QA operations including batch disposition, deviation management, and CAPA systems. Strong knowledge of FDA regulations and cGMP required.
              </p>
              <div className="text-sm text-brand font-medium">Boston, MA</div>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <h3 className="font-display text-xl font-medium mb-3">Quality Control Analyst</h3>
              <p className="font-body text-muted-foreground mb-4">
                Perform analytical testing of raw materials and finished products. Execute quality control protocols and maintain laboratory equipment.
              </p>
              <div className="text-sm text-brand font-medium">Boston, MA</div>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <h3 className="font-display text-xl font-medium mb-3">Regulatory Affairs Specialist</h3>
              <p className="font-body text-muted-foreground mb-4">
                Support regulatory submissions and maintain compliance with FDA and international regulations. Experience with IND/BLA submissions preferred.
              </p>
              <div className="text-sm text-brand font-medium">Boston, MA</div>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <h3 className="font-display text-xl font-medium mb-3">Document Control Specialist</h3>
              <p className="font-body text-muted-foreground mb-4">
                Manage controlled documents, SOPs, and training records. Ensure document lifecycle compliance with GMP requirements and internal procedures.
              </p>
              <div className="text-sm text-brand font-medium">Boston, MA</div>
            </CardBody>
          </Card>
        </div>
      </Section>

      <Section title="Corporate Functions" description="Support our mission with essential business operations">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardBody>
              <h3 className="font-display text-xl font-medium mb-3">Human Resources Manager</h3>
              <p className="font-body text-muted-foreground mb-4">
                Lead talent acquisition, employee relations, and HR operations. Partner with leadership to develop people strategies and programs.
              </p>
              <div className="text-sm text-brand font-medium">Boston, MA</div>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <h3 className="font-display text-xl font-medium mb-3">Financial Analyst</h3>
              <p className="font-body text-muted-foreground mb-4">
                Support financial planning, analysis, and reporting. Partner with business leaders to drive financial performance and strategic decisions.
              </p>
              <div className="text-sm text-brand font-medium">Boston, MA</div>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <h3 className="font-display text-xl font-medium mb-3">IT Systems Administrator</h3>
              <p className="font-body text-muted-foreground mb-4">
                Manage enterprise systems, network infrastructure, and cybersecurity. Support validated systems in GMP environments.
              </p>
              <div className="text-sm text-brand font-medium">Boston, MA</div>
            </CardBody>
          </Card>
        </div>
      </Section>

      <Section title="Application Process" description="How to apply for positions at Tiger BioSciences">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <Card>
            <CardBody>
              <h3 className="font-display text-xl font-medium mb-3">Submit Your Application</h3>
              <p className="font-body text-muted-foreground">
                Review open positions and submit your resume through our contact page. Include a cover letter highlighting your relevant experience and interest in regenerative medicine.
              </p>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <h3 className="font-display text-xl font-medium mb-3">Interview Process</h3>
              <p className="font-body text-muted-foreground">
                Qualified candidates will participate in phone screens and on-site interviews with hiring managers and team members. We evaluate technical skills, cultural fit, and passion for our mission.
              </p>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <h3 className="font-display text-xl font-medium mb-3">Background & References</h3>
              <p className="font-body text-muted-foreground">
                Final candidates complete background checks and reference verification. We verify education, employment history, and professional credentials.
              </p>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <h3 className="font-display text-xl font-medium mb-3">Offer & Onboarding</h3>
              <p className="font-body text-muted-foreground">
                Selected candidates receive competitive offers and comprehensive onboarding. We provide training, resources, and support to ensure your success from day one.
              </p>
            </CardBody>
          </Card>
        </div>
      </Section>
    </main>
  );
}
