import { Metadata } from "next";
import { Hero } from "@/components/site/Hero";
import { Section } from "@/components/site/Section";
import { Card, CardBody } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Life at Tiger - Tiger BioSciences Careers",
  description: "Discover what makes Tiger BioSciences a great place to work. Learn about our culture, values, and commitment to innovation and excellence.",
};

export default function LifeAtTiger() {
  return (
    <main className="min-h-screen">
      <Hero
        title="Life at Tiger"
        description="Experience a workplace where innovation meets purpose. Join a team that values collaboration, excellence, and meaningful impact in regenerative medicine."
        primaryCTA={{ text: "Join Our Team", href: "/contact" }}
      />

      <Section title="Our Values" description="Principles that guide everything we do">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardBody>
              <h3 className="font-display text-xl font-medium mb-3">Patient-Centered Innovation</h3>
              <p className="font-body text-muted-foreground">
                Every decision we make puts patients first. From research to manufacturing, we focus on developing therapies that improve lives and advance healthcare outcomes.
              </p>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <h3 className="font-display text-xl font-medium mb-3">Scientific Excellence</h3>
              <p className="font-body text-muted-foreground">
                We maintain the highest standards in research, development, and manufacturing. Rigorous methodology, data integrity, and continuous improvement define our approach.
              </p>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <h3 className="font-display text-xl font-medium mb-3">Collaborative Spirit</h3>
              <p className="font-body text-muted-foreground">
                Cross-functional teamwork drives our success. We share knowledge freely, support each other, and work together to solve complex challenges.
              </p>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <h3 className="font-display text-xl font-medium mb-3">Integrity & Trust</h3>
              <p className="font-body text-muted-foreground">
                Ethical conduct, transparency, and accountability form the foundation of our work. We do what&apos;s right, even when it&apos;s difficult.
              </p>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <h3 className="font-display text-xl font-medium mb-3">Continuous Learning</h3>
              <p className="font-body text-muted-foreground">
                We invest in professional development and encourage curiosity. Learning, growth, and knowledge sharing are essential to our culture.
              </p>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <h3 className="font-display text-xl font-medium mb-3">Diverse Perspectives</h3>
              <p className="font-body text-muted-foreground">
                We value diverse backgrounds, experiences, and viewpoints. Inclusion and respect create a stronger, more innovative organization.
              </p>
            </CardBody>
          </Card>
        </div>
      </Section>

      <Section title="Work Environment" description="A culture that inspires and empowers">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <Card>
            <CardBody>
              <h3 className="font-display text-xl font-medium mb-3">Innovative Mindset</h3>
              <p className="font-body text-muted-foreground">
                We encourage creative thinking and experimentation. New ideas are welcomed, tested, and refined through collaborative discussion and scientific rigor.
              </p>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <h3 className="font-display text-xl font-medium mb-3">Meaningful Work</h3>
              <p className="font-body text-muted-foreground">
                Our work directly impacts patient lives. Whether in the lab, manufacturing suite, or office, every role contributes to advancing regenerative medicine.
              </p>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <h3 className="font-display text-xl font-medium mb-3">Open Communication</h3>
              <p className="font-body text-muted-foreground">
                Leadership is accessible and transparent. Regular town halls, team meetings, and open-door policies ensure everyone stays informed and engaged.
              </p>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <h3 className="font-display text-xl font-medium mb-3">Work-Life Integration</h3>
              <p className="font-body text-muted-foreground">
                We support flexibility and balance. Generous time off, flexible schedules, and wellness programs help employees thrive professionally and personally.
              </p>
            </CardBody>
          </Card>
        </div>
      </Section>

      <Section title="Team Collaboration" description="Working together across functions and disciplines">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardBody>
              <h3 className="font-display text-xl font-medium mb-3">Cross-Functional Teams</h3>
              <p className="font-body text-muted-foreground">
                Research, manufacturing, quality, and operations work seamlessly together to develop and deliver therapies. Regular collaboration drives innovation.
              </p>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <h3 className="font-display text-xl font-medium mb-3">Knowledge Sharing</h3>
              <p className="font-body text-muted-foreground">
                Journal clubs, technical presentations, and informal discussions facilitate learning. Experts share insights across disciplines and experience levels.
              </p>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <h3 className="font-display text-xl font-medium mb-3">Mentorship Culture</h3>
              <p className="font-body text-muted-foreground">
                Senior team members guide and support developing professionals. Formal and informal mentorship accelerates growth and builds strong relationships.
              </p>
            </CardBody>
          </Card>
        </div>
      </Section>

      <Section title="Recognition & Celebration" description="Honoring excellence and achievement">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <Card>
            <CardBody>
              <h3 className="font-display text-xl font-medium mb-3">Achievement Recognition</h3>
              <p className="font-body text-muted-foreground">
                Outstanding contributions are celebrated through awards, bonuses, and public recognition. We honor those who go above and beyond.
              </p>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <h3 className="font-display text-xl font-medium mb-3">Milestone Celebrations</h3>
              <p className="font-body text-muted-foreground">
                Company achievements, product launches, and regulatory approvals are celebrated together. Team events and gatherings build community.
              </p>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <h3 className="font-display text-xl font-medium mb-3">Service Awards</h3>
              <p className="font-body text-muted-foreground">
                Long-term commitment and loyalty are recognized through service anniversary programs. We value employees who grow their careers with us.
              </p>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <h3 className="font-display text-xl font-medium mb-3">Innovation Awards</h3>
              <p className="font-body text-muted-foreground">
                Breakthrough discoveries, process improvements, and creative solutions earn special recognition. Innovation is celebrated across all functions.
              </p>
            </CardBody>
          </Card>
        </div>
      </Section>

      <Section title="Community Impact" description="Making a difference beyond our products">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardBody>
              <h3 className="font-display text-xl font-medium mb-3">Volunteer Programs</h3>
              <p className="font-body text-muted-foreground">
                Employees participate in STEM education, health advocacy, and community service. Paid volunteer time supports engagement in causes that matter.
              </p>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <h3 className="font-display text-xl font-medium mb-3">Educational Partnerships</h3>
              <p className="font-body text-muted-foreground">
                We partner with universities and schools to inspire future scientists. Guest lectures, internships, and lab tours introduce students to regenerative medicine.
              </p>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <h3 className="font-display text-xl font-medium mb-3">Patient Advocacy</h3>
              <p className="font-body text-muted-foreground">
                Supporting patient advocacy organizations and participating in awareness campaigns connects us directly to the communities we serve.
              </p>
            </CardBody>
          </Card>
        </div>
      </Section>

      <Section title="Employee Voice" description="What our team members say about working at Tiger">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <Card>
            <CardBody>
              <p className="font-body text-muted-foreground italic mb-4">
                &quot;Every day I see how my work contributes to therapies that will help patients. That sense of purpose drives me to bring my best to everything I do.&quot;
              </p>
              <div className="text-sm font-medium">Research Scientist</div>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <p className="font-body text-muted-foreground italic mb-4">
                &quot;The collaborative culture here is incredible. People from different departments work together seamlessly, and everyone&apos;s expertise is valued.&quot;
              </p>
              <div className="text-sm font-medium">Manufacturing Manager</div>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <p className="font-body text-muted-foreground italic mb-4">
                &quot;I&apos;ve grown so much in my role. The company invests in training and development, and there are real opportunities to advance your career.&quot;
              </p>
              <div className="text-sm font-medium">Quality Assurance Specialist</div>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <p className="font-body text-muted-foreground italic mb-4">
                &quot;The leadership team is approachable and transparent. I feel informed about company goals and how my work contributes to our success.&quot;
              </p>
              <div className="text-sm font-medium">Operations Coordinator</div>
            </CardBody>
          </Card>
        </div>
      </Section>
    </main>
  );
}
