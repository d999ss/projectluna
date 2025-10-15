import { Metadata } from "next";
import { Hero } from "@/components/site/Hero";
import { Section } from "@/components/site/Section";
import { Card, CardBody } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Our Heritage - Tiger BioSciences",
  description: "Discover the rich history and legacy of Tiger BioSciences, from our founding to becoming a global leader in tissue engineering and regenerative medicine.",
};

export default function HeritagePage() {
  return (
    <main className="min-h-screen">
      <Hero
        title="Our Heritage"
        description="A legacy of innovation, excellence, and dedication to advancing medical science for over three decades."
      />

      <Section
        title="Our Story"
        description="From humble beginnings to global leadership"
      >
        <Card>
          <CardBody>
            <p className="text-lead text-muted-foreground mb-6">
              Tiger BioSciences was founded with a singular vision: to revolutionize tissue engineering and regenerative medicine. What began as a small research laboratory has grown into a global enterprise, but our commitment to innovation and patient care remains unchanged.
            </p>
            <p className="text-lead text-muted-foreground">
              Our journey has been marked by groundbreaking discoveries, strategic partnerships, and an unwavering dedication to scientific excellence. Today, we stand as a testament to what can be achieved when passion, expertise, and purpose align.
            </p>
          </CardBody>
        </Card>
      </Section>

      <Section
        title="Key Milestones"
        description="Defining moments in our history"
      >
        <div className="space-y-6">
          <Card>
            <CardBody>
              <div className="flex flex-col md:flex-row md:items-start gap-6">
                <div className="flex-shrink-0">
                  <span className="text-display font-bold text-brand">1995</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-h2 mb-3">Company Founded</h3>
                  <p className="font-body text-muted-foreground">
                    Dr. Sarah Mitchell and Dr. James Chen establish Tiger BioSciences with a focus on developing advanced tissue engineering solutions. The company begins operations with a team of five researchers in a modest laboratory facility.
                  </p>
                </div>
              </div>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <div className="flex flex-col md:flex-row md:items-start gap-6">
                <div className="flex-shrink-0">
                  <span className="text-display font-bold text-brand">2001</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-h2 mb-3">First FDA Approval</h3>
                  <p className="font-body text-muted-foreground">
                    Tiger BioSciences receives FDA approval for its first bioengineered tissue product, marking a significant milestone in regenerative medicine. This breakthrough opens new possibilities for treating complex wounds and tissue injuries.
                  </p>
                </div>
              </div>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <div className="flex flex-col md:flex-row md:items-start gap-6">
                <div className="flex-shrink-0">
                  <span className="text-display font-bold text-brand">2008</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-h2 mb-3">Global Expansion</h3>
                  <p className="font-body text-muted-foreground">
                    The company expands operations internationally, establishing distribution partnerships across Europe and Asia. Our products begin reaching patients in over 25 countries, significantly expanding our global impact.
                  </p>
                </div>
              </div>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <div className="flex flex-col md:flex-row md:items-start gap-6">
                <div className="flex-shrink-0">
                  <span className="text-display font-bold text-brand">2014</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-h2 mb-3">Research Center Opening</h3>
                  <p className="font-body text-muted-foreground">
                    Tiger BioSciences inaugurates a state-of-the-art research and development center, featuring advanced laboratories and manufacturing facilities. This investment reinforces our commitment to innovation and product development.
                  </p>
                </div>
              </div>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <div className="flex flex-col md:flex-row md:items-start gap-6">
                <div className="flex-shrink-0">
                  <span className="text-display font-bold text-brand">2019</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-h2 mb-3">One Million Patients</h3>
                  <p className="font-body text-muted-foreground">
                    We reach a significant milestone as our products have been used to treat over one million patients worldwide. This achievement reflects the trust healthcare professionals place in our solutions.
                  </p>
                </div>
              </div>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <div className="flex flex-col md:flex-row md:items-start gap-6">
                <div className="flex-shrink-0">
                  <span className="text-display font-bold text-brand">2023</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-h2 mb-3">Next-Generation Platform</h3>
                  <p className="font-body text-muted-foreground">
                    Launch of our next-generation tissue engineering platform, incorporating cutting-edge biomaterials and cellular technologies. This platform represents the future of regenerative medicine.
                  </p>
                </div>
              </div>
            </CardBody>
          </Card>
        </div>
      </Section>

      <Section
        title="Leadership Legacy"
        description="Visionaries who shaped our company"
      >
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <Card>
            <CardBody>
              <h3 className="text-h2 mb-3 text-brand">Dr. Sarah Mitchell</h3>
              <p className="font-display text-lg font-medium mb-3">Co-Founder & Former CEO</p>
              <p className="font-body text-muted-foreground">
                A pioneer in tissue engineering, Dr. Mitchell's groundbreaking research in biomaterials laid the foundation for our company's success. Her vision and leadership transformed Tiger BioSciences from a startup to an industry leader.
              </p>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <h3 className="text-h2 mb-3 text-brand">Dr. James Chen</h3>
              <p className="font-display text-lg font-medium mb-3">Co-Founder & Chief Scientific Officer</p>
              <p className="font-body text-muted-foreground">
                Dr. Chen's expertise in cellular biology and regenerative medicine has been instrumental in developing our innovative product portfolio. His commitment to scientific excellence continues to drive our research initiatives.
              </p>
            </CardBody>
          </Card>
        </div>
      </Section>

      <Section
        title="Our Continuing Journey"
        description="Building on our legacy for the future"
      >
        <Card>
          <CardBody>
            <p className="text-lead text-muted-foreground mb-6">
              As we look to the future, we remain committed to the values and vision that have guided us from the beginning. Our heritage is not just about our past achievements—it's about the foundation upon which we continue to build, innovate, and transform patient care.
            </p>
            <p className="text-lead text-muted-foreground mb-6">
              Every product we develop, every partnership we forge, and every patient we help reflects the legacy of excellence established by our founders and sustained by our dedicated team.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <a
                href="/company/about"
                className="inline-flex items-center justify-center rounded-full px-8 py-3 bg-brand text-brand-foreground font-semibold hover:brightness-110 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand/60"
              >
                About Us
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
