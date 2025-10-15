import { Metadata } from "next";
import { Hero } from "@/components/site/Hero";
import { Section } from "@/components/site/Section";
import { Card, CardBody } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Global Impact - Tiger BioSciences",
  description: "Transforming healthcare outcomes across the globe through innovative regenerative medicine solutions and commitment to patient care.",
};

export default function Impact() {
  return (
    <main className="min-h-screen">
      <Hero
        title="Global Impact"
        description="Tiger BioSciences is dedicated to improving patient outcomes and advancing healthcare systems worldwide through innovative regenerative medicine solutions and collaborative partnerships."
      />

      <Section title="Patient Outcomes" description="Improving lives through advanced regenerative therapies">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardBody>
              <h3 className="font-display text-xl font-medium mb-3">Accelerated Healing</h3>
              <p className="font-body text-muted-foreground">
                Our regenerative solutions have demonstrated significant reductions in healing time for chronic wounds, reducing patient suffering and healthcare costs.
              </p>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <h3 className="font-display text-xl font-medium mb-3">Improved Quality of Life</h3>
              <p className="font-body text-muted-foreground">
                Patients treated with our reconstruction and aesthetic solutions report enhanced functional outcomes and increased confidence and satisfaction.
              </p>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <h3 className="font-display text-xl font-medium mb-3">Reduced Complications</h3>
              <p className="font-body text-muted-foreground">
                Clinical evidence shows our biomaterial solutions reduce infection rates and surgical complications compared to traditional treatment approaches.
              </p>
            </CardBody>
          </Card>
        </div>
      </Section>

      <Section title="Healthcare System Impact" description="Supporting providers and improving care delivery">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <Card>
            <CardBody>
              <h3 className="font-display text-xl font-medium mb-3">Clinical Efficiency</h3>
              <p className="font-body text-muted-foreground">
                Our ready-to-use biomaterial solutions streamline surgical workflows, reducing procedure time and operating room costs while maintaining superior clinical outcomes.
              </p>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <h3 className="font-display text-xl font-medium mb-3">Economic Value</h3>
              <p className="font-body text-muted-foreground">
                Health economic studies demonstrate significant cost savings through reduced hospitalization, fewer revision procedures, and decreased long-term care requirements.
              </p>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <h3 className="font-display text-xl font-medium mb-3">Education & Training</h3>
              <p className="font-body text-muted-foreground">
                Comprehensive training programs and clinical education resources support healthcare providers in optimizing patient outcomes with our solutions.
              </p>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <h3 className="font-display text-xl font-medium mb-3">Access & Availability</h3>
              <p className="font-body text-muted-foreground">
                Global distribution network and partnerships ensure consistent supply and access to our regenerative medicine solutions worldwide.
              </p>
            </CardBody>
          </Card>
        </div>
      </Section>

      <Section title="Research & Innovation Impact" description="Advancing the science of regenerative medicine">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardBody>
              <h3 className="font-display text-xl font-medium mb-3">Clinical Evidence</h3>
              <p className="font-body text-muted-foreground">
                Over 100 peer-reviewed publications validate the safety and efficacy of our technologies across multiple therapeutic applications.
              </p>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <h3 className="font-display text-xl font-medium mb-3">Academic Collaboration</h3>
              <p className="font-body text-muted-foreground">
                Partnerships with leading medical centers advance regenerative medicine research and translate discoveries into clinical practice.
              </p>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <h3 className="font-display text-xl font-medium mb-3">Technology Transfer</h3>
              <p className="font-body text-muted-foreground">
                Our innovations in biomaterial processing and tissue engineering have influenced industry standards and best practices globally.
              </p>
            </CardBody>
          </Card>
        </div>
      </Section>

      <Section title="Community & Social Impact" description="Creating positive change beyond clinical outcomes">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <Card>
            <CardBody>
              <h3 className="font-display text-xl font-medium mb-3">Global Health Initiatives</h3>
              <p className="font-body text-muted-foreground">
                Supporting humanitarian medical missions and disaster relief efforts by providing advanced wound care solutions to underserved populations.
              </p>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <h3 className="font-display text-xl font-medium mb-3">Workforce Development</h3>
              <p className="font-body text-muted-foreground">
                Creating high-quality jobs in biotechnology, manufacturing, and healthcare while investing in employee development and advancement opportunities.
              </p>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <h3 className="font-display text-xl font-medium mb-3">STEM Education</h3>
              <p className="font-body text-muted-foreground">
                Supporting science education programs and partnerships with universities to inspire the next generation of regenerative medicine innovators.
              </p>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <h3 className="font-display text-xl font-medium mb-3">Ethical Leadership</h3>
              <p className="font-body text-muted-foreground">
                Maintaining highest ethical standards in tissue sourcing, clinical research, and business practices while promoting transparency and accountability.
              </p>
            </CardBody>
          </Card>
        </div>
      </Section>
    </main>
  );
}
