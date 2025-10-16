import { Metadata } from "next";
import { Hero } from "@/components/site/Hero";
import { Section } from "@/components/site/Section";
import { Card, CardBody } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Our Credo & Purpose - Tiger BioSciences",
  description: "Our commitment to advancing medical science with integrity and excellence",
};

export default function CredoPage() {
  return (
    <main className="min-h-screen">
      <Hero
        title="Our Credo & Purpose"
        description="Tiger BioSciences is committed to advancing medical science through innovation, integrity, and unwavering dedication to patient care."
        backgroundImage="/images/boredoptimism_close_up_of_Tiger_eye_--ar_169_--raw_--profile__d0b094ae-d672-42f0-b38e-82826641a7d4_3.png"
      />

      <Section
        title="Our Core Values"
        description="The principles that guide everything we do"
      >
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardBody>
              <h3 className="font-display text-xl font-medium mb-3">Innovation</h3>
              <p className="font-body text-muted-foreground">
                Pushing the boundaries of medical technology to deliver breakthrough solutions that transform patient outcomes.
              </p>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <h3 className="font-display text-xl font-medium mb-3">Integrity</h3>
              <p className="font-body text-muted-foreground">
                Operating with the highest ethical standards in all aspects of our business, from research to distribution.
              </p>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <h3 className="font-display text-xl font-medium mb-3">Excellence</h3>
              <p className="font-body text-muted-foreground">
                Maintaining rigorous quality standards and pursuing continuous improvement in every product and process.
              </p>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <h3 className="font-display text-xl font-medium mb-3">Collaboration</h3>
              <p className="font-body text-muted-foreground">
                Building strong partnerships with healthcare professionals to advance patient care worldwide.
              </p>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <h3 className="font-display text-xl font-medium mb-3">Patient Focus</h3>
              <p className="font-body text-muted-foreground">
                Keeping patient outcomes at the center of every decision, from product development to delivery.
              </p>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <h3 className="font-display text-xl font-medium mb-3">Sustainability</h3>
              <p className="font-body text-muted-foreground">
                Responsible stewardship of resources and commitment to sustainable practices across our operations.
              </p>
            </CardBody>
          </Card>
        </div>
      </Section>

      <Section
        title="Our Purpose"
        description="Why we exist and what drives us forward"
      >
        <Card>
          <CardBody>
            <p className="text-lead text-muted-foreground mb-6">
              Tiger BioSciences exists to transform lives through advanced medical technology. We are driven by a singular purpose: to provide healthcare professionals with innovative, reliable solutions that improve patient outcomes and quality of life.
            </p>
            <p className="text-lead text-muted-foreground">
              Through our commitment to research, development, and ethical practices, we strive to set new standards in tissue engineering and regenerative medicine, making a lasting impact on global healthcare.
            </p>
          </CardBody>
        </Card>
      </Section>
    </main>
  );
}
