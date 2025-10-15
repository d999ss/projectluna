import { Metadata } from "next";
import { Hero } from "@/components/site/Hero";
import { Section } from "@/components/site/Section";
import { Card, CardBody } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "University Programs - Tiger BioSciences Careers",
  description: "Internships, co-ops, and entry-level opportunities for students and recent graduates interested in regenerative medicine careers.",
};

export default function UniversityPrograms() {
  return (
    <main className="min-h-screen">
      <Hero
        title="University Programs"
        description="Launch your career in regenerative medicine through internships, co-op programs, and entry-level opportunities designed for students and recent graduates."
        primaryCTA={{ text: "Apply Now", href: "/contact" }}
      />

      <Section title="Why Tiger for Students" description="Build your career foundation in biotechnology">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <Card>
            <CardBody>
              <h3 className="font-display text-xl font-medium mb-3">Hands-On Experience</h3>
              <p className="font-body text-muted-foreground">
                Work alongside experienced scientists and engineers on real projects that advance regenerative medicine. Apply classroom knowledge to cutting-edge research and manufacturing.
              </p>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <h3 className="font-display text-xl font-medium mb-3">Mentorship & Guidance</h3>
              <p className="font-body text-muted-foreground">
                Each student works with a dedicated mentor who provides technical guidance, career advice, and support throughout your program experience.
              </p>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <h3 className="font-display text-xl font-medium mb-3">Professional Development</h3>
              <p className="font-body text-muted-foreground">
                Attend professional development workshops, networking events, and technical seminars. Build skills in communication, project management, and scientific presentation.
              </p>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <h3 className="font-display text-xl font-medium mb-3">Career Path Exploration</h3>
              <p className="font-body text-muted-foreground">
                Explore different functions and roles across research, manufacturing, quality, and operations. Discover where your interests and skills best align.
              </p>
            </CardBody>
          </Card>
        </div>
      </Section>

      <Section title="Internship Program" description="Summer opportunities for undergraduate and graduate students">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardBody>
              <h3 className="font-display text-xl font-medium mb-3">Research Internships</h3>
              <p className="font-body text-muted-foreground mb-4">
                Support laboratory research in cell therapy development, analytical methods, and process optimization. Ideal for biology, biochemistry, and bioengineering students.
              </p>
              <div className="text-sm text-brand font-medium">10-12 weeks, Summer</div>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <h3 className="font-display text-xl font-medium mb-3">Manufacturing Internships</h3>
              <p className="font-body text-muted-foreground mb-4">
                Learn GMP manufacturing processes, aseptic techniques, and production documentation. Experience cleanroom operations and quality systems.
              </p>
              <div className="text-sm text-brand font-medium">10-12 weeks, Summer</div>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <h3 className="font-display text-xl font-medium mb-3">Quality Internships</h3>
              <p className="font-body text-muted-foreground mb-4">
                Assist with quality control testing, document review, and compliance activities. Gain exposure to FDA regulations and pharmaceutical quality systems.
              </p>
              <div className="text-sm text-brand font-medium">10-12 weeks, Summer</div>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <h3 className="font-display text-xl font-medium mb-3">Engineering Internships</h3>
              <p className="font-body text-muted-foreground mb-4">
                Support process engineering, facilities, and equipment projects. Apply engineering principles to biopharmaceutical manufacturing challenges.
              </p>
              <div className="text-sm text-brand font-medium">10-12 weeks, Summer</div>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <h3 className="font-display text-xl font-medium mb-3">Data Science Internships</h3>
              <p className="font-body text-muted-foreground mb-4">
                Analyze research and manufacturing data, develop analytical tools, and support data-driven decision making across the organization.
              </p>
              <div className="text-sm text-brand font-medium">10-12 weeks, Summer</div>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <h3 className="font-display text-xl font-medium mb-3">Business Internships</h3>
              <p className="font-body text-muted-foreground mb-4">
                Support operations, finance, human resources, or business development. Learn biotechnology business fundamentals in a fast-paced environment.
              </p>
              <div className="text-sm text-brand font-medium">10-12 weeks, Summer</div>
            </CardBody>
          </Card>
        </div>
      </Section>

      <Section title="Co-op Program" description="Extended work experiences with academic credit">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <Card>
            <CardBody>
              <h3 className="font-display text-xl font-medium mb-3">Program Structure</h3>
              <p className="font-body text-muted-foreground">
                Six-month co-op rotations aligned with academic calendars. Work full-time while earning academic credit through your university's co-op program.
              </p>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <h3 className="font-display text-xl font-medium mb-3">Project-Based Learning</h3>
              <p className="font-body text-muted-foreground">
                Own meaningful projects that contribute to company goals. Present results to leadership and team members at program completion.
              </p>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <h3 className="font-display text-xl font-medium mb-3">Multiple Rotations</h3>
              <p className="font-body text-muted-foreground">
                Complete multiple co-op rotations to explore different functions and build diverse experience before graduation.
              </p>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <h3 className="font-display text-xl font-medium mb-3">Full-Time Pathway</h3>
              <p className="font-body text-muted-foreground">
                Strong co-op performance can lead to full-time offers upon graduation. Many of our employees started as co-op students.
              </p>
            </CardBody>
          </Card>
        </div>
      </Section>

      <Section title="Entry-Level Opportunities" description="Full-time positions for recent graduates">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardBody>
              <h3 className="font-display text-xl font-medium mb-3">Associate Scientist</h3>
              <p className="font-body text-muted-foreground mb-4">
                Entry-level research position for recent BS/MS graduates. Conduct experiments, analyze data, and contribute to research projects under mentorship.
              </p>
              <div className="text-sm text-brand font-medium">Full-Time</div>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <h3 className="font-display text-xl font-medium mb-3">Manufacturing Associate</h3>
              <p className="font-body text-muted-foreground mb-4">
                Execute cell therapy manufacturing in GMP cleanroom environments. Training provided for aseptic processing and documentation.
              </p>
              <div className="text-sm text-brand font-medium">Full-Time</div>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <h3 className="font-display text-xl font-medium mb-3">QC Analyst</h3>
              <p className="font-body text-muted-foreground mb-4">
                Perform quality control testing and laboratory analysis. Learn regulatory requirements and quality systems in biopharmaceutical manufacturing.
              </p>
              <div className="text-sm text-brand font-medium">Full-Time</div>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <h3 className="font-display text-xl font-medium mb-3">Process Engineer</h3>
              <p className="font-body text-muted-foreground mb-4">
                Support bioprocess development and manufacturing. Apply engineering principles to optimize cell therapy production processes.
              </p>
              <div className="text-sm text-brand font-medium">Full-Time</div>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <h3 className="font-display text-xl font-medium mb-3">Regulatory Coordinator</h3>
              <p className="font-body text-muted-foreground mb-4">
                Assist with regulatory submissions and compliance activities. Learn FDA requirements for biological products and clinical trials.
              </p>
              <div className="text-sm text-brand font-medium">Full-Time</div>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <h3 className="font-display text-xl font-medium mb-3">Operations Analyst</h3>
              <p className="font-body text-muted-foreground mb-4">
                Support business operations through data analysis, project coordination, and process improvement initiatives.
              </p>
              <div className="text-sm text-brand font-medium">Full-Time</div>
            </CardBody>
          </Card>
        </div>
      </Section>

      <Section title="Program Benefits" description="What you'll receive as a university program participant">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <Card>
            <CardBody>
              <h3 className="font-display text-xl font-medium mb-3">Competitive Compensation</h3>
              <p className="font-body text-muted-foreground">
                Hourly wages for interns and co-ops competitive with industry standards. Full-time positions include comprehensive benefits packages.
              </p>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <h3 className="font-display text-xl font-medium mb-3">Housing Support</h3>
              <p className="font-body text-muted-foreground">
                Housing stipends or assistance finding local accommodations for students relocating for summer internships or co-op programs.
              </p>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <h3 className="font-display text-xl font-medium mb-3">Professional Networks</h3>
              <p className="font-body text-muted-foreground">
                Build connections with professionals across biotechnology. Join our intern and co-op cohort for networking and social events.
              </p>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <h3 className="font-display text-xl font-medium mb-3">Skills Development</h3>
              <p className="font-body text-muted-foreground">
                Develop technical skills, professional competencies, and industry knowledge. Resume building and career planning support provided.
              </p>
            </CardBody>
          </Card>
        </div>
      </Section>

      <Section title="Application Process" description="How to apply for university programs">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardBody>
              <h3 className="font-display text-xl font-medium mb-3">Application Timeline</h3>
              <p className="font-body text-muted-foreground">
                Summer internship applications open in January. Co-op applications accepted on rolling basis. Entry-level positions posted as available.
              </p>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <h3 className="font-display text-xl font-medium mb-3">Requirements</h3>
              <p className="font-body text-muted-foreground">
                Submit resume, cover letter, and unofficial transcript. Include relevant coursework, research experience, and career interests.
              </p>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <h3 className="font-display text-xl font-medium mb-3">Selection Process</h3>
              <p className="font-body text-muted-foreground">
                Phone interviews followed by on-site or virtual interviews. We evaluate technical knowledge, learning potential, and cultural fit.
              </p>
            </CardBody>
          </Card>
        </div>
      </Section>

      <Section title="Eligibility" description="Who can apply for university programs">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <Card>
            <CardBody>
              <h3 className="font-display text-xl font-medium mb-3">Academic Standing</h3>
              <p className="font-body text-muted-foreground">
                Current undergraduate or graduate students enrolled in accredited degree programs. Minimum 3.0 GPA preferred for most positions.
              </p>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <h3 className="font-display text-xl font-medium mb-3">Major Focus Areas</h3>
              <p className="font-body text-muted-foreground">
                Biology, biochemistry, bioengineering, chemical engineering, chemistry, data science, business, and related fields aligned with biotechnology.
              </p>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <h3 className="font-display text-xl font-medium mb-3">Work Authorization</h3>
              <p className="font-body text-muted-foreground">
                Must be authorized to work in the United States. Sponsorship not available for internship or co-op programs.
              </p>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <h3 className="font-display text-xl font-medium mb-3">Recent Graduates</h3>
              <p className="font-body text-muted-foreground">
                Entry-level positions open to candidates within one year of graduation. Strong academic record and relevant experience preferred.
              </p>
            </CardBody>
          </Card>
        </div>
      </Section>
    </main>
  );
}
