import { Metadata } from "next";
import { Hero } from "@/components/site/Hero";
import { Section } from "@/components/site/Section";
import { Card, CardBody } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Open Positions - Tiger BioSciences",
  description: "Explore career opportunities at Tiger BioSciences and join our team advancing regenerative medicine innovation.",
};

export default function OpenPositions() {
  return (
    <main className="min-h-screen">
      <Hero
        title="Open Positions"
        description="Discover career opportunities to join our team of innovators advancing the field of regenerative medicine and improving patient outcomes worldwide."
      />

      <Section title="Research & Development" description="Drive innovation in regenerative medicine technologies">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <Card>
            <CardBody>
              <h3 className="font-display text-xl font-medium mb-3">Senior Scientist - Tissue Engineering</h3>
              <p className="font-body text-muted-foreground mb-4">
                Lead research initiatives in advanced tissue engineering and biomaterial development. PhD in bioengineering or related field with 5+ years industry experience required.
              </p>
              <p className="font-body text-sm text-brand">Dallas, TX | Full-time</p>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <h3 className="font-display text-xl font-medium mb-3">Research Associate - Cell Biology</h3>
              <p className="font-body text-muted-foreground mb-4">
                Support cellular studies and assay development for regenerative medicine applications. MS/BS in cell biology or biochemistry with laboratory experience.
              </p>
              <p className="font-body text-sm text-brand">Dallas, TX | Full-time</p>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <h3 className="font-display text-xl font-medium mb-3">Principal Scientist - Biomaterials</h3>
              <p className="font-body text-muted-foreground mb-4">
                Direct biomaterial characterization and product development programs. PhD with expertise in extracellular matrix biology and materials science.
              </p>
              <p className="font-body text-sm text-brand">Dallas, TX | Full-time</p>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <h3 className="font-display text-xl font-medium mb-3">R&D Engineer - Process Development</h3>
              <p className="font-body text-muted-foreground mb-4">
                Develop and optimize manufacturing processes for tissue-based products. Engineering degree with bioprocessing experience preferred.
              </p>
              <p className="font-body text-sm text-brand">Dallas, TX | Full-time</p>
            </CardBody>
          </Card>
        </div>
      </Section>

      <Section title="Clinical & Medical Affairs" description="Advance clinical evidence and medical education">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <Card>
            <CardBody>
              <h3 className="font-display text-xl font-medium mb-3">Clinical Research Manager</h3>
              <p className="font-body text-muted-foreground mb-4">
                Oversee clinical trials and generate evidence for regenerative medicine products. Advanced degree with clinical research experience required.
              </p>
              <p className="font-body text-sm text-brand">Dallas, TX | Full-time</p>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <h3 className="font-display text-xl font-medium mb-3">Medical Science Liaison</h3>
              <p className="font-body text-muted-foreground mb-4">
                Engage with healthcare providers and key opinion leaders. PharmD, PhD, or MD with clinical expertise in wound care or plastic surgery.
              </p>
              <p className="font-body text-sm text-brand">Regional | Full-time</p>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <h3 className="font-display text-xl font-medium mb-3">Clinical Specialist</h3>
              <p className="font-body text-muted-foreground mb-4">
                Provide clinical education and support for healthcare providers using our products. RN or clinical background with wound care experience.
              </p>
              <p className="font-body text-sm text-brand">Multiple Locations | Full-time</p>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <h3 className="font-display text-xl font-medium mb-3">Medical Writer</h3>
              <p className="font-body text-muted-foreground mb-4">
                Develop clinical publications, regulatory documents, and medical communications. Advanced degree with scientific writing experience.
              </p>
              <p className="font-body text-sm text-brand">Dallas, TX | Full-time</p>
            </CardBody>
          </Card>
        </div>
      </Section>

      <Section title="Manufacturing & Quality" description="Ensure excellence in product manufacturing and quality systems">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardBody>
              <h3 className="font-display text-xl font-medium mb-3">Manufacturing Manager</h3>
              <p className="font-body text-muted-foreground mb-4">
                Lead production operations for tissue-based products. Experience in biologics or medical device manufacturing required.
              </p>
              <p className="font-body text-sm text-brand">Dallas, TX | Full-time</p>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <h3 className="font-display text-xl font-medium mb-3">Quality Assurance Specialist</h3>
              <p className="font-body text-muted-foreground mb-4">
                Ensure compliance with quality systems and FDA regulations. Experience with cGMP and quality management systems.
              </p>
              <p className="font-body text-sm text-brand">Dallas, TX | Full-time</p>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <h3 className="font-display text-xl font-medium mb-3">Production Technician</h3>
              <p className="font-body text-muted-foreground mb-4">
                Execute tissue processing and manufacturing operations. Cleanroom experience and attention to detail essential.
              </p>
              <p className="font-body text-sm text-brand">Dallas, TX | Full-time</p>
            </CardBody>
          </Card>
        </div>
      </Section>

      <Section title="Commercial & Sales" description="Expand access to innovative regenerative solutions">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <Card>
            <CardBody>
              <h3 className="font-display text-xl font-medium mb-3">Territory Sales Manager</h3>
              <p className="font-body text-muted-foreground mb-4">
                Drive sales growth and build relationships with healthcare providers. Medical device or biologics sales experience preferred.
              </p>
              <p className="font-body text-sm text-brand">Multiple Territories | Full-time</p>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <h3 className="font-display text-xl font-medium mb-3">Regional Sales Director</h3>
              <p className="font-body text-muted-foreground mb-4">
                Lead regional sales teams and develop market strategies. Proven track record in medical device leadership roles.
              </p>
              <p className="font-body text-sm text-brand">Regional | Full-time</p>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <h3 className="font-display text-xl font-medium mb-3">Marketing Manager</h3>
              <p className="font-body text-muted-foreground mb-4">
                Develop and execute marketing strategies for regenerative medicine products. Healthcare marketing experience required.
              </p>
              <p className="font-body text-sm text-brand">Dallas, TX | Full-time</p>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <h3 className="font-display text-xl font-medium mb-3">Market Access Specialist</h3>
              <p className="font-body text-muted-foreground mb-4">
                Support reimbursement and market access initiatives. Experience with payer relations and health economics.
              </p>
              <p className="font-body text-sm text-brand">Dallas, TX | Full-time</p>
            </CardBody>
          </Card>
        </div>
      </Section>

      <Section title="Regulatory & Compliance" description="Navigate complex regulatory requirements">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <Card>
            <CardBody>
              <h3 className="font-display text-xl font-medium mb-3">Regulatory Affairs Manager</h3>
              <p className="font-body text-muted-foreground mb-4">
                Lead FDA submissions and regulatory strategies for tissue-based products. RAC certification and HCT/P experience preferred.
              </p>
              <p className="font-body text-sm text-brand">Dallas, TX | Full-time</p>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <h3 className="font-display text-xl font-medium mb-3">Regulatory Compliance Specialist</h3>
              <p className="font-body text-muted-foreground mb-4">
                Ensure ongoing compliance with FDA and international regulations. Experience with medical devices or biologics.
              </p>
              <p className="font-body text-sm text-brand">Dallas, TX | Full-time</p>
            </CardBody>
          </Card>
        </div>
      </Section>

      <Section title="How to Apply" description="Join our team advancing regenerative medicine">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <Card>
            <CardBody>
              <h3 className="font-display text-xl font-medium mb-3">Application Process</h3>
              <p className="font-body text-muted-foreground">
                Submit your resume and cover letter through our online application system. Selected candidates will be contacted for phone screenings followed by on-site or virtual interviews with hiring managers and team members.
              </p>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <h3 className="font-display text-xl font-medium mb-3">Equal Opportunity Employer</h3>
              <p className="font-body text-muted-foreground">
                Tiger BioSciences is an equal opportunity employer committed to diversity and inclusion. We do not discriminate on the basis of race, religion, color, national origin, gender, sexual orientation, age, marital status, veteran status, or disability status.
              </p>
            </CardBody>
          </Card>
        </div>
      </Section>
    </main>
  );
}
