import { Metadata } from "next";
import { Hero } from "@/components/site/Hero";
import { Section } from "@/components/site/Section";
import { Card, CardBody } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Investor Relations - Tiger BioSciences",
  description: "Access investor information, financial reports, corporate governance, and shareholder resources for Tiger BioSciences.",
};

export default function InvestorsPage() {
  return (
    <main className="min-h-screen">
      <Hero
        title="Investor Relations"
        description="Building long-term value through innovation, operational excellence, and commitment to our stakeholders."
        backgroundImage="/images/boredoptimism_close_up_of_Tiger_eye_--ar_169_--raw_--profile__d0b094ae-d672-42f0-b38e-82826641a7d4_3.png"
      />

      <Section
        title="Investment Highlights"
        description="Why invest in Tiger BioSciences"
      >
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardBody>
              <h3 className="font-display text-xl mb-3 text-brand">Market Leadership</h3>
              <p className="font-body text-muted-foreground">
                Leading position in the rapidly growing tissue engineering and regenerative medicine market with a comprehensive product portfolio.
              </p>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <h3 className="font-display text-xl mb-3 text-brand">Innovation Pipeline</h3>
              <p className="font-body text-muted-foreground">
                Robust R&D pipeline with multiple products in clinical development, supported by strategic investments in cutting-edge technology.
              </p>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <h3 className="font-display text-xl mb-3 text-brand">Global Presence</h3>
              <p className="font-body text-muted-foreground">
                Established distribution network across 50+ countries with continued expansion into high-growth emerging markets.
              </p>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <h3 className="font-display text-xl mb-3 text-brand">Financial Performance</h3>
              <p className="font-body text-muted-foreground">
                Consistent revenue growth and improving profitability driven by strong product demand and operational efficiency.
              </p>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <h3 className="font-display text-xl mb-3 text-brand">Strategic Partnerships</h3>
              <p className="font-body text-muted-foreground">
                Collaborative relationships with leading healthcare institutions and research organizations worldwide.
              </p>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <h3 className="font-display text-xl mb-3 text-brand">Experienced Leadership</h3>
              <p className="font-body text-muted-foreground">
                Proven management team with deep industry expertise and track record of successful execution.
              </p>
            </CardBody>
          </Card>
        </div>
      </Section>

      <Section
        title="Financial Information"
        description="Access our latest financial reports and data"
      >
        <div className="space-y-6">
          <Card>
            <CardBody>
              <div className="mb-4 flex items-center justify-between">
                <h3 className="font-display text-xl">Quarterly Earnings</h3>
                <span className="inline-block rounded-full border border-brand/20 bg-brand/10 px-3 py-1 text-xs font-medium uppercase tracking-wider text-brand">
                  Latest
                </span>
              </div>
              <p className="text-lead text-muted-foreground mb-4">
                Q3 2025 earnings results exceeded analyst expectations with revenue growth of 24% year-over-year. Strong performance across all product categories and geographic regions.
              </p>
              <div className="flex flex-col gap-3 sm:flex-row">
                <a
                  href="#"
                  className="inline-flex items-center font-semibold text-brand hover:underline"
                >
                  View Earnings Report →
                </a>
                <a
                  href="#"
                  className="inline-flex items-center font-semibold text-brand hover:underline"
                >
                  Watch Earnings Call →
                </a>
              </div>
            </CardBody>
          </Card>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <Card>
              <CardBody>
                <h3 className="font-display text-xl mb-3">Annual Reports</h3>
                <p className="font-body text-muted-foreground mb-4">
                  Download our comprehensive annual reports, including financial statements and management discussion and analysis.
                </p>
                <a
                  href="#"
                  className="inline-flex items-center font-semibold text-brand hover:underline"
                >
                  Access Reports →
                </a>
              </CardBody>
            </Card>

            <Card>
              <CardBody>
                <h3 className="font-display text-xl mb-3">SEC Filings</h3>
                <p className="font-body text-muted-foreground mb-4">
                  View our latest 10-K, 10-Q, 8-K, and other regulatory filings with the Securities and Exchange Commission.
                </p>
                <a
                  href="#"
                  className="inline-flex items-center font-semibold text-brand hover:underline"
                >
                  View Filings →
                </a>
              </CardBody>
            </Card>

            <Card>
              <CardBody>
                <h3 className="font-display text-xl mb-3">Financial Presentations</h3>
                <p className="font-body text-muted-foreground mb-4">
                  Access investor presentations, conference materials, and other key financial documents.
                </p>
                <a
                  href="#"
                  className="inline-flex items-center font-semibold text-brand hover:underline"
                >
                  View Presentations →
                </a>
              </CardBody>
            </Card>

            <Card>
              <CardBody>
                <h3 className="font-display text-xl mb-3">Stock Information</h3>
                <p className="font-body text-muted-foreground mb-4">
                  Real-time stock quotes, historical data, and analyst coverage information for TGBS shares.
                </p>
                <a
                  href="#"
                  className="inline-flex items-center font-semibold text-brand hover:underline"
                >
                  View Stock Data →
                </a>
              </CardBody>
            </Card>
          </div>
        </div>
      </Section>

      <Section
        title="Corporate Governance"
        description="Committed to transparency and ethical business practices"
      >
        <Card>
          <CardBody>
            <p className="text-lead text-muted-foreground mb-6">
              Tiger BioSciences is committed to the highest standards of corporate governance, transparency, and ethical conduct. Our board of directors and management team work together to ensure we create sustainable value for all stakeholders.
            </p>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              <a
                href="#"
                className="inline-flex items-center font-semibold text-brand hover:underline"
              >
                Board of Directors →
              </a>
              <a
                href="#"
                className="inline-flex items-center font-semibold text-brand hover:underline"
              >
                Corporate Governance Guidelines →
              </a>
              <a
                href="#"
                className="inline-flex items-center font-semibold text-brand hover:underline"
              >
                Committee Charters →
              </a>
              <a
                href="#"
                className="inline-flex items-center font-semibold text-brand hover:underline"
              >
                Code of Conduct →
              </a>
              <a
                href="#"
                className="inline-flex items-center font-semibold text-brand hover:underline"
              >
                Compliance Program →
              </a>
              <a
                href="#"
                className="inline-flex items-center font-semibold text-brand hover:underline"
              >
                ESG Initiatives →
              </a>
            </div>
          </CardBody>
        </Card>
      </Section>

      <Section
        title="Shareholder Resources"
        description="Important information for our shareholders"
      >
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <Card>
            <CardBody>
              <h3 className="font-display text-xl mb-3 text-brand">Annual Meeting</h3>
              <p className="font-body text-muted-foreground mb-4">
                Information about our upcoming annual shareholders meeting, including proxy materials, voting procedures, and meeting logistics.
              </p>
              <a
                href="#"
                className="inline-flex items-center font-semibold text-brand hover:underline"
              >
                Meeting Details →
              </a>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <h3 className="font-display text-xl mb-3 text-brand">Dividend Information</h3>
              <p className="font-body text-muted-foreground mb-4">
                Current dividend policy, payment schedules, and historical dividend information for Tiger BioSciences shareholders.
              </p>
              <a
                href="#"
                className="inline-flex items-center font-semibold text-brand hover:underline"
              >
                View Dividends →
              </a>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <h3 className="font-display text-xl mb-3 text-brand">Transfer Agent</h3>
              <p className="font-body text-muted-foreground mb-4">
                Contact information and resources for share transfers, certificate replacements, and other shareholder services.
              </p>
              <a
                href="#"
                className="inline-flex items-center font-semibold text-brand hover:underline"
              >
                Transfer Agent Info →
              </a>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <h3 className="font-display text-xl mb-3 text-brand">Email Alerts</h3>
              <p className="font-body text-muted-foreground mb-4">
                Subscribe to receive email notifications about press releases, earnings announcements, and other investor updates.
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
        title="Investor Contact"
        description="Connect with our investor relations team"
      >
        <Card>
          <CardBody>
            <p className="text-lead text-muted-foreground mb-6">
              Our investor relations team is here to answer your questions and provide additional information about Tiger BioSciences. We welcome inquiries from current and prospective investors, analysts, and financial professionals.
            </p>
            <div className="mb-6 space-y-3">
              <div>
                <p className="font-display font-medium mb-1">Email</p>
                <a
                  href="mailto:investors@tigerbiosciences.com"
                  className="text-brand hover:underline"
                >
                  investors@tigerbiosciences.com
                </a>
              </div>
              <div>
                <p className="font-display font-medium mb-1">Phone</p>
                <a
                  href="tel:+1-555-0123"
                  className="text-brand hover:underline"
                >
                  +1 (555) 012-3456
                </a>
              </div>
            </div>
            <div className="flex flex-col gap-4 sm:flex-row">
              <a
                href="/contact"
                className="inline-flex items-center justify-center rounded-full px-8 py-3 bg-brand text-brand-foreground font-semibold hover:brightness-110 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand/60"
              >
                Contact Investor Relations
              </a>
              <a
                href="#"
                className="inline-flex items-center justify-center rounded-full px-8 py-3 border border-input bg-background hover:bg-accent hover:text-accent-foreground font-semibold transition-all duration-200"
              >
                Request Information
              </a>
            </div>
          </CardBody>
        </Card>
      </Section>
    </main>
  );
}
