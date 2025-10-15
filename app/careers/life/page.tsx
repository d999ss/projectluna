import { Metadata } from "next";
import { Hero } from "@/components/site/Hero";
import { Section } from "@/components/site/Section";
import { Card, CardBody } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Life at Tiger - Tiger BioSciences",
  description: "Discover what it's like to work at Tiger BioSciences, where innovation meets purpose in advancing regenerative medicine.",
};

export default function LifeAtTiger() {
  return (
    <main className="min-h-screen">
      <Hero
        title="Life at Tiger BioSciences"
        description="Join a team of passionate innovators dedicated to transforming patient outcomes through groundbreaking regenerative medicine solutions."
      />

      <Section title="Our Culture" description="A workplace that values innovation, collaboration, and purpose">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardBody>
              <h3 className="font-display text-xl font-medium mb-3">Mission-Driven Work</h3>
              <p className="font-body text-muted-foreground">
                Every day, our work directly impacts patient lives. From research scientists to manufacturing specialists, each team member contributes to advancing healthcare and improving clinical outcomes.
              </p>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <h3 className="font-display text-xl font-medium mb-3">Innovation Culture</h3>
              <p className="font-body text-muted-foreground">
                We encourage creative thinking, experimentation, and continuous improvement. Your ideas and insights help drive breakthroughs in regenerative medicine technology.
              </p>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <h3 className="font-display text-xl font-medium mb-3">Collaborative Environment</h3>
              <p className="font-body text-muted-foreground">
                Cross-functional teams work together seamlessly, sharing expertise and perspectives to solve complex challenges and accelerate innovation.
              </p>
            </CardBody>
          </Card>
        </div>
      </Section>

      <Section title="Benefits & Wellness" description="Comprehensive support for your health and well-being">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <Card>
            <CardBody>
              <h3 className="font-display text-xl font-medium mb-3">Health & Insurance</h3>
              <p className="font-body text-muted-foreground">
                Comprehensive medical, dental, and vision coverage with multiple plan options. Health savings accounts, flexible spending accounts, and wellness programs support your physical and mental health.
              </p>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <h3 className="font-display text-xl font-medium mb-3">Financial Security</h3>
              <p className="font-body text-muted-foreground">
                Competitive salaries, 401(k) retirement plans with company match, life insurance, disability coverage, and equity opportunities for eligible employees.
              </p>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <h3 className="font-display text-xl font-medium mb-3">Work-Life Balance</h3>
              <p className="font-body text-muted-foreground">
                Generous paid time off, flexible work arrangements, parental leave, and paid holidays support balance between professional excellence and personal well-being.
              </p>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <h3 className="font-display text-xl font-medium mb-3">Wellness Programs</h3>
              <p className="font-body text-muted-foreground">
                On-site fitness facilities, wellness challenges, mental health resources, and employee assistance programs promote holistic well-being.
              </p>
            </CardBody>
          </Card>
        </div>
      </Section>

      <Section title="Growth & Development" description="Investing in your professional advancement">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardBody>
              <h3 className="font-display text-xl font-medium mb-3">Learning Opportunities</h3>
              <p className="font-body text-muted-foreground">
                Tuition reimbursement, professional certification support, continuing education programs, and access to online learning platforms.
              </p>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <h3 className="font-display text-xl font-medium mb-3">Career Advancement</h3>
              <p className="font-body text-muted-foreground">
                Clear career pathways, mentorship programs, and internal mobility opportunities help you build a long-term career with Tiger BioSciences.
              </p>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <h3 className="font-display text-xl font-medium mb-3">Leadership Development</h3>
              <p className="font-body text-muted-foreground">
                Executive coaching, leadership training programs, and management development initiatives prepare emerging leaders for greater responsibilities.
              </p>
            </CardBody>
          </Card>
        </div>
      </Section>

      <Section title="Diversity & Inclusion" description="Building a workplace that reflects and respects all perspectives">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <Card>
            <CardBody>
              <h3 className="font-display text-xl font-medium mb-3">Inclusive Culture</h3>
              <p className="font-body text-muted-foreground">
                We celebrate diversity in all forms and foster an inclusive environment where every employee feels valued, respected, and empowered to contribute their unique perspectives and talents.
              </p>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <h3 className="font-display text-xl font-medium mb-3">Equal Opportunity</h3>
              <p className="font-body text-muted-foreground">
                Tiger BioSciences is an equal opportunity employer committed to fair hiring, promotion, and compensation practices regardless of race, gender, age, religion, disability, or background.
              </p>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <h3 className="font-display text-xl font-medium mb-3">Employee Resource Groups</h3>
              <p className="font-body text-muted-foreground">
                Voluntary employee-led groups provide networking, professional development, and community building around shared identities and interests.
              </p>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <h3 className="font-display text-xl font-medium mb-3">Community Engagement</h3>
              <p className="font-body text-muted-foreground">
                Volunteer opportunities, charitable giving programs, and community partnerships allow employees to give back and make a difference beyond our products.
              </p>
            </CardBody>
          </Card>
        </div>
      </Section>

      <Section title="Workplace Experience" description="Modern facilities designed for collaboration and innovation">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardBody>
              <h3 className="font-display text-xl font-medium mb-3">Modern Facilities</h3>
              <p className="font-body text-muted-foreground">
                State-of-the-art laboratories, manufacturing suites, and office spaces equipped with advanced technology and collaborative work areas.
              </p>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <h3 className="font-display text-xl font-medium mb-3">Amenities</h3>
              <p className="font-body text-muted-foreground">
                On-site cafeterias, break rooms, fitness centers, and outdoor spaces create a comfortable and energizing work environment.
              </p>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <h3 className="font-display text-xl font-medium mb-3">Technology</h3>
              <p className="font-body text-muted-foreground">
                Advanced tools, equipment, and digital systems enable efficient work and cutting-edge research in regenerative medicine.
              </p>
            </CardBody>
          </Card>
        </div>
      </Section>

      <Section title="Recognition & Rewards" description="Celebrating excellence and achievement">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <Card>
            <CardBody>
              <h3 className="font-display text-xl font-medium mb-3">Performance Recognition</h3>
              <p className="font-body text-muted-foreground">
                Regular performance reviews, merit-based compensation increases, and bonus programs reward exceptional contributions and achievements.
              </p>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <h3 className="font-display text-xl font-medium mb-3">Innovation Awards</h3>
              <p className="font-body text-muted-foreground">
                Special recognition programs honor employees who develop breakthrough technologies, improve processes, or deliver exceptional results.
              </p>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <h3 className="font-display text-xl font-medium mb-3">Service Milestones</h3>
              <p className="font-body text-muted-foreground">
                Celebrating employee loyalty and commitment with recognition programs for service anniversaries and long-term contributions.
              </p>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <h3 className="font-display text-xl font-medium mb-3">Team Celebrations</h3>
              <p className="font-body text-muted-foreground">
                Company events, team outings, and social gatherings foster camaraderie and celebrate collective achievements.
              </p>
            </CardBody>
          </Card>
        </div>
      </Section>
    </main>
  );
}
