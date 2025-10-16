import { Metadata } from "next";
import { Hero } from "@/components/site/Hero";
import { Section } from "@/components/site/Section";
import { Card, CardBody } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Airway Systems - Tiger BioSciences",
  description: "Advanced airway management solutions and respiratory support systems for critical care, emergency medicine, and anesthesiology applications.",
};

export default function AirwaySystems() {
  return (
    <main className="min-h-screen">
      <Hero
        title="Airway Systems"
        description="Comprehensive portfolio of airway management devices and respiratory support technologies designed to ensure patient safety and optimal ventilation in critical situations."
      />

      <Section title="Airway Management Devices" description="Essential tools for securing and maintaining airway patency">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardBody>
              <h3 className="font-display text-xl font-medium mb-3">Endotracheal Tubes</h3>
              <p className="font-body text-muted-foreground">
                High-quality endotracheal tubes with soft, atraumatic cuffs and clear depth markings for secure airway management during intubation.
              </p>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <h3 className="font-display text-xl font-medium mb-3">Laryngeal Masks</h3>
              <p className="font-body text-muted-foreground">
                Supraglottic airway devices providing rapid, reliable airway access for emergency situations and routine anesthesia procedures.
              </p>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <h3 className="font-display text-xl font-medium mb-3">Laryngoscopes</h3>
              <p className="font-body text-muted-foreground">
                Video and direct laryngoscopy systems with superior visualization capabilities facilitating successful first-pass intubation.
              </p>
            </CardBody>
          </Card>
        </div>
      </Section>

      <Section title="Respiratory Support Systems" description="Advanced ventilation and oxygen delivery solutions">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <Card>
            <CardBody>
              <h3 className="font-display text-xl font-medium mb-3">Mechanical Ventilators</h3>
              <p className="font-body text-muted-foreground">
                Sophisticated ventilation systems with multiple modes, lung-protective strategies, and comprehensive monitoring for ICU and transport applications requiring precise respiratory support.
              </p>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <h3 className="font-display text-xl font-medium mb-3">Oxygen Therapy Devices</h3>
              <p className="font-body text-muted-foreground">
                High-flow nasal cannula systems, venturi masks, and non-rebreather devices delivering controlled oxygen supplementation for various clinical needs.
              </p>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <h3 className="font-display text-xl font-medium mb-3">CPAP/BiPAP Systems</h3>
              <p className="font-body text-muted-foreground">
                Non-invasive positive pressure ventilation devices for respiratory failure, sleep apnea, and post-operative respiratory support applications.
              </p>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <h3 className="font-display text-xl font-medium mb-3">Nebulizers</h3>
              <p className="font-body text-muted-foreground">
                Efficient aerosol delivery systems for bronchodilators and other respiratory medications in acute and chronic respiratory conditions.
              </p>
            </CardBody>
          </Card>
        </div>
      </Section>

      <Section title="Clinical Applications" description="Supporting airway management across care settings">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardBody>
              <h3 className="font-display text-xl font-medium mb-3">Emergency Medicine</h3>
              <p className="font-body text-muted-foreground">
                Rapid airway access devices and portable ventilation systems for pre-hospital and emergency department resuscitation.
              </p>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <h3 className="font-display text-xl font-medium mb-3">Intensive Care</h3>
              <p className="font-body text-muted-foreground">
                Advanced ventilator technologies with lung-protective strategies for managing critically ill patients with respiratory failure.
              </p>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <h3 className="font-display text-xl font-medium mb-3">Operating Rooms</h3>
              <p className="font-body text-muted-foreground">
                Anesthesia-specific airway devices and ventilation systems ensuring patient safety during surgical procedures.
              </p>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <h3 className="font-display text-xl font-medium mb-3">Transport Medicine</h3>
              <p className="font-body text-muted-foreground">
                Compact, battery-powered ventilators and oxygen delivery systems for ambulance and air medical transport.
              </p>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <h3 className="font-display text-xl font-medium mb-3">Respiratory Care</h3>
              <p className="font-body text-muted-foreground">
                Comprehensive respiratory therapy solutions for managing chronic respiratory conditions and weaning from ventilation.
              </p>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <h3 className="font-display text-xl font-medium mb-3">Disaster Response</h3>
              <p className="font-body text-muted-foreground">
                Field-deployable airway management kits and portable ventilators for mass casualty and disaster response scenarios.
              </p>
            </CardBody>
          </Card>
        </div>
      </Section>

      <Section title="Technology Features" description="Advanced capabilities enhancing patient safety">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <Card>
            <CardBody>
              <h3 className="font-display text-xl font-medium mb-3">Visualization Technology</h3>
              <p className="font-body text-muted-foreground">
                High-definition video laryngoscopy and bronchoscopy systems with recording capabilities improving first-attempt success rates and enabling procedure documentation and quality review.
              </p>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <h3 className="font-display text-xl font-medium mb-3">Monitoring Integration</h3>
              <p className="font-body text-muted-foreground">
                Comprehensive monitoring of airway pressures, tidal volumes, oxygen saturation, and capnography providing real-time assessment of ventilation adequacy.
              </p>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <h3 className="font-display text-xl font-medium mb-3">Alarm Systems</h3>
              <p className="font-body text-muted-foreground">
                Intelligent alarm management with prioritization and escalation ensuring critical airway events receive immediate attention while reducing alarm fatigue.
              </p>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <h3 className="font-display text-xl font-medium mb-3">Data Analytics</h3>
              <p className="font-body text-muted-foreground">
                Ventilator data collection and analysis tools supporting quality improvement initiatives and research into optimal ventilation strategies.
              </p>
            </CardBody>
          </Card>
        </div>
      </Section>

      <Section title="Safety Features" description="Protecting patients during airway management">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardBody>
              <h3 className="font-display text-xl font-medium mb-3">Cuff Pressure Management</h3>
              <p className="font-body text-muted-foreground">
                Automated cuff pressure monitoring and control preventing tracheal injury while maintaining adequate seal for ventilation.
              </p>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <h3 className="font-display text-xl font-medium mb-3">Aspiration Prevention</h3>
              <p className="font-body text-muted-foreground">
                Subglottic suction ports and specialized tube designs reducing risk of ventilator-associated pneumonia.
              </p>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <h3 className="font-display text-xl font-medium mb-3">Backup Systems</h3>
              <p className="font-body text-muted-foreground">
                Redundant power supplies, backup ventilation modes, and manual override capabilities ensuring continuous support.
              </p>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <h3 className="font-display text-xl font-medium mb-3">Infection Control</h3>
              <p className="font-body text-muted-foreground">
                Single-use airway devices and effective ventilator circuit designs minimizing cross-contamination risk.
              </p>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <h3 className="font-display text-xl font-medium mb-3">User Interface</h3>
              <p className="font-body text-muted-foreground">
                Intuitive controls and clear displays reducing user error and enabling rapid intervention during emergencies.
              </p>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <h3 className="font-display text-xl font-medium mb-3">Quality Assurance</h3>
              <p className="font-body text-muted-foreground">
                Automated self-tests and quality control systems ensuring equipment readiness and performance reliability.
              </p>
            </CardBody>
          </Card>
        </div>
      </Section>

      <Section title="Training & Education" description="Building airway management competency">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <Card>
            <CardBody>
              <h3 className="font-display text-xl font-medium mb-3">Simulation Training</h3>
              <p className="font-body text-muted-foreground">
                High-fidelity airway manikins and simulation scenarios enabling realistic practice of difficult airway management techniques in safe learning environment.
              </p>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <h3 className="font-display text-xl font-medium mb-3">Certification Programs</h3>
              <p className="font-body text-muted-foreground">
                Comprehensive training curricula for advanced airway management certification including didactic and hands-on components with competency assessment.
              </p>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <h3 className="font-display text-xl font-medium mb-3">Clinical Guidelines</h3>
              <p className="font-body text-muted-foreground">
                Evidence-based protocols and algorithms for airway assessment, device selection, and management of difficult airways and complications.
              </p>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <h3 className="font-display text-xl font-medium mb-3">Technical Support</h3>
              <p className="font-body text-muted-foreground">
                Comprehensive training on equipment setup, troubleshooting, and maintenance ensuring optimal performance and longevity of airway management systems.
              </p>
            </CardBody>
          </Card>
        </div>
      </Section>

      <Section title="Global Distribution" description="Supporting international healthcare delivery">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardBody>
              <h3 className="font-display text-xl font-medium mb-3">Regulatory Compliance</h3>
              <p className="font-body text-muted-foreground">
                CE marking, ISO certification, and country-specific registrations ensuring compliance with international medical device regulations.
              </p>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <h3 className="font-display text-xl font-medium mb-3">Regional Support</h3>
              <p className="font-body text-muted-foreground">
                Local service centers and technical support teams providing responsive assistance in regional languages and time zones.
              </p>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <h3 className="font-display text-xl font-medium mb-3">Supply Chain</h3>
              <p className="font-body text-muted-foreground">
                Robust distribution network ensuring reliable product availability and rapid delivery to healthcare facilities worldwide.
              </p>
            </CardBody>
          </Card>
        </div>
      </Section>
    </main>
  );
}
