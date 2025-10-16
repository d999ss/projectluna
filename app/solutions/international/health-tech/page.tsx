import { Metadata } from "next";
import { Hero } from "@/components/site/Hero";
import { Section } from "@/components/site/Section";
import { Card, CardBody } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Health Technology Systems - Tiger BioSciences",
  description: "Advanced medical technology platforms and integrated healthcare systems serving international markets with innovative solutions.",
};

export default function HealthTechnologySystems() {
  return (
    <main className="min-h-screen">
      <Hero
        title="Health Technology Systems"
        description="Innovative medical technology platforms and integrated healthcare solutions designed to improve patient outcomes, enhance clinical efficiency, and support healthcare providers worldwide."
      />

      <Section title="Technology Platforms" description="Comprehensive medical technology solutions">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardBody>
              <h3 className="font-display text-xl font-medium mb-3">Surgical Navigation</h3>
              <p className="font-body text-muted-foreground">
                Advanced navigation and visualization systems enabling precise surgical planning and real-time guidance for complex procedures.
              </p>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <h3 className="font-display text-xl font-medium mb-3">Patient Monitoring</h3>
              <p className="font-body text-muted-foreground">
                Integrated monitoring solutions providing continuous assessment of vital signs and physiological parameters in acute care settings.
              </p>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <h3 className="font-display text-xl font-medium mb-3">Diagnostic Imaging</h3>
              <p className="font-body text-muted-foreground">
                State-of-the-art imaging technologies including ultrasound, fluoroscopy, and digital radiography for accurate clinical diagnosis.
              </p>
            </CardBody>
          </Card>
        </div>
      </Section>

      <Section title="Clinical Applications" description="Supporting healthcare delivery across specialties">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <Card>
            <CardBody>
              <h3 className="font-display text-xl font-medium mb-3">Operating Room Solutions</h3>
              <p className="font-body text-muted-foreground">
                Integrated OR systems combining surgical displays, recording capabilities, and equipment integration for optimized workflow and enhanced surgical precision in modern operating theaters.
              </p>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <h3 className="font-display text-xl font-medium mb-3">Intensive Care</h3>
              <p className="font-body text-muted-foreground">
                Comprehensive ICU solutions including ventilators, infusion systems, and monitoring equipment supporting critical care teams in managing complex patients.
              </p>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <h3 className="font-display text-xl font-medium mb-3">Emergency Medicine</h3>
              <p className="font-body text-muted-foreground">
                Rapid-deployment diagnostic and monitoring equipment designed for emergency departments requiring immediate patient assessment and stabilization capabilities.
              </p>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <h3 className="font-display text-xl font-medium mb-3">Surgical Specialties</h3>
              <p className="font-body text-muted-foreground">
                Specialty-specific platforms for orthopedics, neurosurgery, cardiac surgery, and other disciplines with tailored features and workflow optimization.
              </p>
            </CardBody>
          </Card>
        </div>
      </Section>

      <Section title="Digital Health Integration" description="Connected healthcare ecosystems">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardBody>
              <h3 className="font-display text-xl font-medium mb-3">Electronic Health Records</h3>
              <p className="font-body text-muted-foreground">
                Seamless integration with major EHR systems enabling bidirectional data flow and eliminating redundant documentation.
              </p>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <h3 className="font-display text-xl font-medium mb-3">Data Analytics</h3>
              <p className="font-body text-muted-foreground">
                Advanced analytics platforms transforming clinical data into actionable insights for quality improvement and population health management.
              </p>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <h3 className="font-display text-xl font-medium mb-3">Remote Monitoring</h3>
              <p className="font-body text-muted-foreground">
                Telehealth and remote patient monitoring capabilities extending care beyond traditional healthcare facility boundaries.
              </p>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <h3 className="font-display text-xl font-medium mb-3">Artificial Intelligence</h3>
              <p className="font-body text-muted-foreground">
                AI-powered clinical decision support tools assisting providers with diagnosis, treatment planning, and outcome prediction.
              </p>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <h3 className="font-display text-xl font-medium mb-3">Interoperability</h3>
              <p className="font-body text-muted-foreground">
                Standards-based connectivity enabling data exchange across disparate healthcare systems and medical devices.
              </p>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <h3 className="font-display text-xl font-medium mb-3">Cybersecurity</h3>
              <p className="font-body text-muted-foreground">
                Comprehensive security frameworks protecting patient data and ensuring compliance with privacy regulations.
              </p>
            </CardBody>
          </Card>
        </div>
      </Section>

      <Section title="Implementation Services" description="Supporting successful technology adoption">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <Card>
            <CardBody>
              <h3 className="font-display text-xl font-medium mb-3">Needs Assessment</h3>
              <p className="font-body text-muted-foreground">
                Comprehensive evaluation of clinical workflows, infrastructure requirements, and organizational goals to design optimal technology solutions for each healthcare facility.
              </p>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <h3 className="font-display text-xl font-medium mb-3">Installation & Integration</h3>
              <p className="font-body text-muted-foreground">
                Professional installation services and system integration ensuring seamless deployment with minimal disruption to ongoing clinical operations.
              </p>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <h3 className="font-display text-xl font-medium mb-3">Training & Education</h3>
              <p className="font-body text-muted-foreground">
                Comprehensive training programs for clinical and technical staff ensuring proficient use and optimal outcomes with new technology platforms.
              </p>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <h3 className="font-display text-xl font-medium mb-3">Ongoing Support</h3>
              <p className="font-body text-muted-foreground">
                24/7 technical support, preventive maintenance programs, and software updates maintaining system performance and reliability over time.
              </p>
            </CardBody>
          </Card>
        </div>
      </Section>

      <Section title="Global Markets" description="Serving healthcare systems worldwide">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardBody>
              <h3 className="font-display text-xl font-medium mb-3">Asia-Pacific</h3>
              <p className="font-body text-muted-foreground">
                Rapidly growing markets with increasing healthcare infrastructure investment and demand for advanced medical technologies.
              </p>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <h3 className="font-display text-xl font-medium mb-3">Middle East</h3>
              <p className="font-body text-muted-foreground">
                Premium healthcare facilities seeking latest technologies to serve domestic and medical tourism patient populations.
              </p>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <h3 className="font-display text-xl font-medium mb-3">Latin America</h3>
              <p className="font-body text-muted-foreground">
                Expanding private and public healthcare sectors modernizing facilities and upgrading medical equipment capabilities.
              </p>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <h3 className="font-display text-xl font-medium mb-3">Europe</h3>
              <p className="font-body text-muted-foreground">
                Established healthcare systems investing in digital transformation and replacement of aging medical technology infrastructure.
              </p>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <h3 className="font-display text-xl font-medium mb-3">Africa</h3>
              <p className="font-body text-muted-foreground">
                Emerging markets requiring cost-effective, robust solutions appropriate for diverse healthcare delivery environments.
              </p>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <h3 className="font-display text-xl font-medium mb-3">Distribution Network</h3>
              <p className="font-body text-muted-foreground">
                Global network of regional distribution centers and local service partners ensuring responsive support worldwide.
              </p>
            </CardBody>
          </Card>
        </div>
      </Section>

      <Section title="Regulatory Excellence" description="Meeting international quality and safety standards">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <Card>
            <CardBody>
              <h3 className="font-display text-xl font-medium mb-3">CE Marking</h3>
              <p className="font-body text-muted-foreground">
                Full compliance with European Medical Device Regulations ensuring products meet rigorous EU safety and performance requirements.
              </p>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <h3 className="font-display text-xl font-medium mb-3">ISO Certification</h3>
              <p className="font-body text-muted-foreground">
                ISO 13485 certified quality management systems demonstrating consistent ability to provide safe, effective medical devices.
              </p>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <h3 className="font-display text-xl font-medium mb-3">International Standards</h3>
              <p className="font-body text-muted-foreground">
                Compliance with IEC safety standards, DICOM imaging protocols, and other international specifications for medical equipment.
              </p>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <h3 className="font-display text-xl font-medium mb-3">Local Registrations</h3>
              <p className="font-body text-muted-foreground">
                Product registrations and regulatory approvals obtained for individual countries and regions ensuring market access worldwide.
              </p>
            </CardBody>
          </Card>
        </div>
      </Section>
    </main>
  );
}
