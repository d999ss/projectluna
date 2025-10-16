import { Metadata } from "next";
import { Hero } from "@/components/site/Hero";
import { Section } from "@/components/site/Section";
import { Card, CardBody } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "About Tiger BioSciences - Leading Tissue Engineering Innovation",
  description: "Learn about Tiger BioSciences, a pioneer in tissue engineering and regenerative medicine committed to advancing patient care worldwide.",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <Hero
        title="About Tiger BioSciences"
        description="Pioneering tissue engineering and regenerative medicine to transform patient outcomes globally."
        backgroundImage="/images/boredoptimism_close_up_of_Tiger_eye_--ar_169_--raw_--profile__d0b094ae-d672-42f0-b38e-82826641a7d4_2.png"
      />

      <Section
        title="Who We Are"
        description="A global leader in advanced medical technology"
      >
        <Card>
          <CardBody>
            <p className="text-lead text-muted-foreground mb-6">
              Tiger BioSciences is a global leader in tissue engineering and regenerative medicine, dedicated to developing innovative solutions that improve patient outcomes and quality of life. Since our founding, we have been at the forefront of medical technology, pushing the boundaries of what's possible in tissue repair and regeneration.
            </p>
            <p className="text-lead text-muted-foreground">
              With state-of-the-art research facilities and a team of world-class scientists and medical professionals, we are committed to advancing the field of regenerative medicine through rigorous research, innovative product development, and collaborative partnerships with healthcare providers worldwide.
            </p>
          </CardBody>
        </Card>
      </Section>

      <Section
        title="Our Expertise"
        description="Specialized capabilities across regenerative medicine"
      >
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardBody>
              <h3 className="font-display text-xl mb-3 text-brand">Tissue Engineering</h3>
              <p className="font-body text-muted-foreground">
                Advanced bioengineered tissue solutions for complex wound care, surgical applications, and reconstructive procedures.
              </p>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <h3 className="font-display text-xl mb-3 text-brand">Regenerative Medicine</h3>
              <p className="font-body text-muted-foreground">
                Cutting-edge cellular therapies and biological products that harness the body's natural healing capabilities.
              </p>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <h3 className="font-display text-xl mb-3 text-brand">Research & Development</h3>
              <p className="font-body text-muted-foreground">
                Continuous innovation through dedicated R&D programs focused on next-generation medical technologies.
              </p>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <h3 className="font-display text-xl mb-3 text-brand">Clinical Excellence</h3>
              <p className="font-body text-muted-foreground">
                Rigorous clinical trials and evidence-based research supporting the safety and efficacy of our products.
              </p>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <h3 className="font-display text-xl mb-3 text-brand">Quality Assurance</h3>
              <p className="font-body text-muted-foreground">
                Industry-leading quality standards and regulatory compliance across all manufacturing processes.
              </p>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <h3 className="font-display text-xl mb-3 text-brand">Global Distribution</h3>
              <p className="font-body text-muted-foreground">
                Comprehensive distribution network ensuring reliable access to our products for healthcare providers worldwide.
              </p>
            </CardBody>
          </Card>
        </div>
      </Section>

      <Section
        title="Global Impact"
        description="Making a difference in healthcare worldwide"
      >
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          <Card>
            <CardBody>
              <p className="text-display font-bold text-brand mb-2">50+</p>
              <h3 className="font-display text-xl font-medium mb-3">Countries Served</h3>
              <p className="font-body text-muted-foreground">
                Our products are available in healthcare facilities across six continents, serving diverse patient populations.
              </p>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <p className="text-display font-bold text-brand mb-2">1M+</p>
              <h3 className="font-display text-xl font-medium mb-3">Patients Treated</h3>
              <p className="font-body text-muted-foreground">
                Over one million patients have benefited from our innovative tissue engineering solutions.
              </p>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <p className="text-display font-bold text-brand mb-2">200+</p>
              <h3 className="font-display text-xl font-medium mb-3">Clinical Studies</h3>
              <p className="font-body text-muted-foreground">
                Extensive clinical research demonstrating the safety and efficacy of our products.
              </p>
            </CardBody>
          </Card>
        </div>
      </Section>

      <Section
        title="Join Our Mission"
        description="Be part of the future of regenerative medicine"
      >
        <Card>
          <CardBody>
            <p className="text-lead text-muted-foreground mb-6">
              Whether you're a healthcare professional, researcher, or potential partner, we invite you to join us in advancing the field of regenerative medicine. Together, we can transform patient care and improve lives around the world.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <a
                href="/contact"
                className="inline-flex items-center justify-center rounded-full px-8 py-3 bg-brand text-brand-foreground font-semibold hover:brightness-110 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand/60"
              >
                Contact Us
              </a>
              <a
                href="/company/credo"
                className="inline-flex items-center justify-center rounded-full px-8 py-3 border border-input bg-background hover:bg-accent hover:text-accent-foreground font-semibold transition-all duration-200"
              >
                Our Credo
              </a>
            </div>
          </CardBody>
        </Card>
      </Section>
    </main>
  );
}
