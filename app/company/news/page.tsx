import { Metadata } from "next";
import { Hero } from "@/components/site/Hero";
import { Section } from "@/components/site/Section";
import { Card, CardBody } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Company News & Press Releases - Tiger BioSciences",
  description: "Stay informed with the latest news, announcements, and press releases from Tiger BioSciences. Discover our innovations, partnerships, and impact on healthcare.",
};

export default function NewsPage() {
  return (
    <main className="min-h-screen">
      <Hero
        title="Company News"
        description="Stay informed about the latest developments, innovations, and achievements at Tiger BioSciences."
        backgroundImage="/images/05.png"
      />

      <Section
        title="Latest News"
        description="Recent announcements and press releases"
      >
        <div className="space-y-6">
          <Card>
            <CardBody>
              <div className="mb-3 flex items-center gap-3">
                <span className="inline-block rounded-full border border-brand/20 bg-brand/10 px-3 py-1 text-xs font-medium uppercase tracking-wider text-brand">
                  Press Release
                </span>
                <span className="text-sm text-muted-foreground">October 8, 2025</span>
              </div>
              <h3 className="font-display text-xl mb-3">Tiger BioSciences Announces FDA Approval for Advanced Dermal Regeneration Matrix</h3>
              <p className="text-lead text-muted-foreground mb-4">
                Tiger BioSciences receives FDA clearance for its next-generation dermal regeneration matrix, offering enhanced healing properties for complex wound management. This breakthrough product incorporates advanced biomaterial technology to accelerate tissue regeneration.
              </p>
              <a
                href="#"
                className="inline-flex items-center font-semibold text-brand hover:underline"
              >
                Read full announcement →
              </a>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <div className="mb-3 flex items-center gap-3">
                <span className="inline-block rounded-full border border-brand/20 bg-brand/10 px-3 py-1 text-xs font-medium uppercase tracking-wider text-brand">
                  Company News
                </span>
                <span className="text-sm text-muted-foreground">September 22, 2025</span>
              </div>
              <h3 className="font-display text-xl mb-3">Strategic Partnership with Global Healthcare Network to Expand Access</h3>
              <p className="text-lead text-muted-foreground mb-4">
                New collaboration aims to bring innovative tissue engineering solutions to underserved regions across Asia and Africa. The partnership will establish distribution channels and training programs for healthcare professionals.
              </p>
              <a
                href="#"
                className="inline-flex items-center font-semibold text-brand hover:underline"
              >
                Read more →
              </a>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <div className="mb-3 flex items-center gap-3">
                <span className="inline-block rounded-full border border-brand/20 bg-brand/10 px-3 py-1 text-xs font-medium uppercase tracking-wider text-brand">
                  Research
                </span>
                <span className="text-sm text-muted-foreground">September 5, 2025</span>
              </div>
              <h3 className="font-display text-xl mb-3">Groundbreaking Study Published in Nature Medicine</h3>
              <p className="text-lead text-muted-foreground mb-4">
                Tiger BioSciences researchers publish landmark study demonstrating superior outcomes in chronic wound healing using bioengineered tissue constructs. The peer-reviewed research provides compelling evidence for advanced regenerative therapies.
              </p>
              <a
                href="#"
                className="inline-flex items-center font-semibold text-brand hover:underline"
              >
                View publication →
              </a>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <div className="mb-3 flex items-center gap-3">
                <span className="inline-block rounded-full border border-brand/20 bg-brand/10 px-3 py-1 text-xs font-medium uppercase tracking-wider text-brand">
                  Awards
                </span>
                <span className="text-sm text-muted-foreground">August 18, 2025</span>
              </div>
              <h3 className="font-display text-xl mb-3">Tiger BioSciences Receives Medical Innovation Excellence Award</h3>
              <p className="text-lead text-muted-foreground mb-4">
                Recognized by the International Medical Technology Association for outstanding contributions to regenerative medicine. The award highlights our commitment to advancing patient care through innovative solutions.
              </p>
              <a
                href="#"
                className="inline-flex items-center font-semibold text-brand hover:underline"
              >
                Learn more →
              </a>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <div className="mb-3 flex items-center gap-3">
                <span className="inline-block rounded-full border border-brand/20 bg-brand/10 px-3 py-1 text-xs font-medium uppercase tracking-wider text-brand">
                  Company News
                </span>
                <span className="text-sm text-muted-foreground">July 30, 2025</span>
              </div>
              <h3 className="font-display text-xl mb-3">Expansion of Manufacturing Capabilities Announced</h3>
              <p className="text-lead text-muted-foreground mb-4">
                Tiger BioSciences invests $50 million in new manufacturing facility to meet growing global demand. The state-of-the-art facility will double production capacity while maintaining our rigorous quality standards.
              </p>
              <a
                href="#"
                className="inline-flex items-center font-semibold text-brand hover:underline"
              >
                Read announcement →
              </a>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <div className="mb-3 flex items-center gap-3">
                <span className="inline-block rounded-full border border-brand/20 bg-brand/10 px-3 py-1 text-xs font-medium uppercase tracking-wider text-brand">
                  Clinical
                </span>
                <span className="text-sm text-muted-foreground">July 12, 2025</span>
              </div>
              <h3 className="font-display text-xl mb-3">Phase III Clinical Trial Results Exceed Primary Endpoints</h3>
              <p className="text-lead text-muted-foreground mb-4">
                Latest clinical trial data demonstrates significant improvement in healing rates and patient outcomes. Results support regulatory submissions for expanded product indications in multiple therapeutic areas.
              </p>
              <a
                href="#"
                className="inline-flex items-center font-semibold text-brand hover:underline"
              >
                View results →
              </a>
            </CardBody>
          </Card>
        </div>
      </Section>

      <Section
        title="Media Resources"
        description="Information for journalists and media professionals"
      >
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          <Card>
            <CardBody>
              <h3 className="font-display text-xl mb-3 text-brand">Press Kit</h3>
              <p className="font-body text-muted-foreground mb-4">
                Download our comprehensive press kit including company backgrounders, leadership bios, and high-resolution images.
              </p>
              <a
                href="#"
                className="inline-flex items-center font-semibold text-brand hover:underline"
              >
                Download Kit →
              </a>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <h3 className="font-display text-xl mb-3 text-brand">Media Contact</h3>
              <p className="font-body text-muted-foreground mb-4">
                For press inquiries and interview requests, contact our media relations team.
              </p>
              <a
                href="mailto:media@tigerbiosciences.com"
                className="inline-flex items-center font-semibold text-brand hover:underline"
              >
                media@tigerbiosciences.com
              </a>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <h3 className="font-display text-xl mb-3 text-brand">Newsletter</h3>
              <p className="font-body text-muted-foreground mb-4">
                Subscribe to receive the latest news and updates directly to your inbox.
              </p>
              <a
                href="#"
                className="inline-flex items-center font-semibold text-brand hover:underline"
              >
                Subscribe Now →
              </a>
            </CardBody>
          </Card>
        </div>
      </Section>

      <Section
        title="Stay Connected"
        description="Follow our latest updates"
      >
        <Card>
          <CardBody>
            <p className="text-lead text-muted-foreground mb-6">
              Stay informed about Tiger BioSciences&apos; latest innovations, clinical research, and company developments. Follow us on social media or subscribe to our newsletter for regular updates.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <a
                href="#"
                className="inline-flex items-center justify-center rounded-full px-8 py-3 bg-brand text-brand-foreground font-semibold hover:brightness-110 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand/60"
              >
                Subscribe to Newsletter
              </a>
              <a
                href="/contact"
                className="inline-flex items-center justify-center rounded-full px-8 py-3 border border-input bg-background hover:bg-accent hover:text-accent-foreground font-semibold transition-all duration-200"
              >
                Contact Media Relations
              </a>
            </div>
          </CardBody>
        </Card>
      </Section>
    </main>
  );
}
