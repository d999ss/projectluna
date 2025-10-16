import { Metadata } from "next";
import { Hero } from "@/components/site/Hero";
import { Section } from "@/components/site/Section";
import { Card, CardBody } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Benefits & Growth - Tiger BioSciences Careers",
  description: "Comprehensive benefits, competitive compensation, and professional development opportunities that support your health, wellness, and career growth.",
};

export default function BenefitsAndGrowth() {
  return (
    <main className="min-h-screen">
      <Hero
        title="Benefits & Growth"
        description="We invest in our employees through comprehensive benefits packages and professional development programs that support your success and well-being."
        primaryCTA={{ text: "Explore Careers", href: "/contact" }}
      />

      <Section title="Health & Wellness" description="Comprehensive coverage for you and your family">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <Card>
            <CardBody>
              <h3 className="font-display text-xl font-medium mb-3">Medical Coverage</h3>
              <p className="font-body text-muted-foreground">
                Multiple health insurance plan options with competitive employer contributions. Comprehensive coverage includes preventive care, specialist visits, hospital services, and prescription drugs.
              </p>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <h3 className="font-display text-xl font-medium mb-3">Dental & Vision</h3>
              <p className="font-body text-muted-foreground">
                Full dental coverage including preventive, restorative, and orthodontic care. Vision insurance covers annual exams, lenses, frames, and contact lenses.
              </p>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <h3 className="font-display text-xl font-medium mb-3">Mental Health Support</h3>
              <p className="font-body text-muted-foreground">
                Employee Assistance Program providing confidential counseling, mental health resources, and work-life services. Coverage for therapy and psychiatric care through medical plans.
              </p>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <h3 className="font-display text-xl font-medium mb-3">Wellness Programs</h3>
              <p className="font-body text-muted-foreground">
                On-site fitness facilities, wellness challenges, health screenings, and incentive programs. Resources for nutrition, stress management, and healthy living.
              </p>
            </CardBody>
          </Card>
        </div>
      </Section>

      <Section title="Financial Benefits" description="Competitive compensation and financial security">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardBody>
              <h3 className="font-display text-xl font-medium mb-3">Competitive Salaries</h3>
              <p className="font-body text-muted-foreground">
                Market-competitive base compensation reviewed annually. Performance-based salary increases reward exceptional contributions and achievement.
              </p>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <h3 className="font-display text-xl font-medium mb-3">Retirement Plans</h3>
              <p className="font-body text-muted-foreground">
                401(k) plan with generous company matching contributions. Immediate vesting and diverse investment options help secure your financial future.
              </p>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <h3 className="font-display text-xl font-medium mb-3">Bonus Programs</h3>
              <p className="font-body text-muted-foreground">
                Annual performance bonuses based on individual and company achievement. Special recognition awards for innovation and exceptional contributions.
              </p>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <h3 className="font-display text-xl font-medium mb-3">Equity Opportunities</h3>
              <p className="font-body text-muted-foreground">
                Eligible employees receive stock options or equity grants. Share in the company&apos;s success and growth as we advance regenerative medicine.
              </p>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <h3 className="font-display text-xl font-medium mb-3">Life Insurance</h3>
              <p className="font-body text-muted-foreground">
                Company-paid basic life and accidental death insurance. Supplemental coverage options available for additional protection.
              </p>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <h3 className="font-display text-xl font-medium mb-3">Disability Coverage</h3>
              <p className="font-body text-muted-foreground">
                Short-term and long-term disability insurance protects your income if you&apos;re unable to work due to illness or injury.
              </p>
            </CardBody>
          </Card>
        </div>
      </Section>

      <Section title="Time Off & Flexibility" description="Work-life balance and personal time">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <Card>
            <CardBody>
              <h3 className="font-display text-xl font-medium mb-3">Paid Time Off</h3>
              <p className="font-body text-muted-foreground">
                Generous PTO policy starting at 20 days annually, increasing with tenure. Use time for vacation, personal needs, or rest and rejuvenation.
              </p>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <h3 className="font-display text-xl font-medium mb-3">Paid Holidays</h3>
              <p className="font-body text-muted-foreground">
                11 paid holidays per year including major federal holidays. Year-end shutdown provides extended time with family during the holiday season.
              </p>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <h3 className="font-display text-xl font-medium mb-3">Parental Leave</h3>
              <p className="font-body text-muted-foreground">
                Paid parental leave for birth, adoption, or foster placement. Additional time and flexible return-to-work options support new parents.
              </p>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <h3 className="font-display text-xl font-medium mb-3">Flexible Schedules</h3>
              <p className="font-body text-muted-foreground">
                Flexible work arrangements where possible to support work-life integration. Remote work options for eligible roles and situations.
              </p>
            </CardBody>
          </Card>
        </div>
      </Section>

      <Section title="Professional Development" description="Investing in your career growth">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardBody>
              <h3 className="font-display text-xl font-medium mb-3">Tuition Reimbursement</h3>
              <p className="font-body text-muted-foreground">
                Financial support for degree programs, certificates, and continuing education. Up to $10,000 annually for approved coursework related to your role.
              </p>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <h3 className="font-display text-xl font-medium mb-3">Training Programs</h3>
              <p className="font-body text-muted-foreground">
                Technical training, leadership development, and professional skills courses. Access to online learning platforms and industry conferences.
              </p>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <h3 className="font-display text-xl font-medium mb-3">Certification Support</h3>
              <p className="font-body text-muted-foreground">
                Financial assistance and study time for professional certifications. Support for maintaining licenses and credentials required for your role.
              </p>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <h3 className="font-display text-xl font-medium mb-3">Mentorship Program</h3>
              <p className="font-body text-muted-foreground">
                Formal mentorship pairing with experienced professionals. Guidance, career advice, and networking opportunities accelerate your development.
              </p>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <h3 className="font-display text-xl font-medium mb-3">Career Pathing</h3>
              <p className="font-body text-muted-foreground">
                Clear career progression frameworks and development plans. Regular discussions with managers about goals, growth, and advancement opportunities.
              </p>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <h3 className="font-display text-xl font-medium mb-3">Internal Mobility</h3>
              <p className="font-body text-muted-foreground">
                Priority consideration for internal candidates. Explore opportunities across departments to build diverse experience and advance your career.
              </p>
            </CardBody>
          </Card>
        </div>
      </Section>

      <Section title="Additional Benefits" description="Perks and programs that enhance your experience">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <Card>
            <CardBody>
              <h3 className="font-display text-xl font-medium mb-3">Commuter Benefits</h3>
              <p className="font-body text-muted-foreground">
                Pre-tax commuter accounts for parking and public transportation. On-site parking available at our facilities.
              </p>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <h3 className="font-display text-xl font-medium mb-3">Employee Discounts</h3>
              <p className="font-body text-muted-foreground">
                Corporate discounts on technology, entertainment, travel, and retail. Partnerships with local businesses provide additional savings.
              </p>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <h3 className="font-display text-xl font-medium mb-3">Relocation Assistance</h3>
              <p className="font-body text-muted-foreground">
                Comprehensive relocation packages for eligible positions. Support includes moving expenses, temporary housing, and transition assistance.
              </p>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <h3 className="font-display text-xl font-medium mb-3">Referral Bonuses</h3>
              <p className="font-body text-muted-foreground">
                Generous bonuses for successful employee referrals. Help build our team and earn rewards for bringing great talent to Tiger BioSciences.
              </p>
            </CardBody>
          </Card>
        </div>
      </Section>

      <Section title="Workplace Amenities" description="Facilities and services that support your daily work">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardBody>
              <h3 className="font-display text-xl font-medium mb-3">Modern Facilities</h3>
              <p className="font-body text-muted-foreground">
                State-of-the-art laboratories, manufacturing suites, and office spaces designed for collaboration and innovation.
              </p>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <h3 className="font-display text-xl font-medium mb-3">On-Site Cafeteria</h3>
              <p className="font-body text-muted-foreground">
                Healthy meal options, snacks, and beverages. Comfortable dining areas for meals and informal collaboration.
              </p>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <h3 className="font-display text-xl font-medium mb-3">Fitness Center</h3>
              <p className="font-body text-muted-foreground">
                Fully equipped fitness facilities with cardio equipment, weights, and group fitness classes. Stay healthy and active during the workday.
              </p>
            </CardBody>
          </Card>
        </div>
      </Section>
    </main>
  );
}
