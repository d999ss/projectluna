import { Metadata } from "next";
import { Hero } from "@/components/site/Hero";
import { Section } from "@/components/site/Section";
import { Card, CardBody } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Medical Devices - Tiger BioSciences",
  description: "Innovative medical devices and delivery systems designed to optimize the application and performance of regenerative biomaterials in clinical practice.",
};

export default function MedicalDevices() {
  return (
    <main className="min-h-screen">
      <Hero
        title="Medical Devices"
        description="Precision-engineered medical devices and application systems that integrate seamlessly with our regenerative biomaterials to enhance ease of use, improve clinical outcomes, and optimize patient care."
        primaryCTA={{ text: "Contact Sales", href: "/contact" }}
        secondaryCTA={{ text: "View All Products", href: "/products" }}
      />

      <Section title="Device Categories" description="Comprehensive solutions for biomaterial delivery and application">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardBody>
              <h3 className="font-display text-xl font-medium mb-3">Application Systems</h3>
              <p className="font-body text-muted-foreground">
                Specialized devices designed for precise placement and controlled delivery of regenerative biomaterials in surgical and clinical settings.
              </p>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <h3 className="font-display text-xl font-medium mb-3">Wound Care Devices</h3>
              <p className="font-body text-muted-foreground">
                Advanced systems for wound preparation, measurement, and monitoring that optimize the wound environment for regenerative therapy success.
              </p>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <h3 className="font-display text-xl font-medium mb-3">Surgical Instruments</h3>
              <p className="font-body text-muted-foreground">
                Purpose-built surgical instruments engineered specifically for handling, preparing, and applying biological matrices in reconstructive procedures.
              </p>
            </CardBody>
          </Card>
        </div>
      </Section>

      <Section title="Product Solutions" description="Innovative devices across clinical applications">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <Card>
            <CardBody>
              <h3 className="font-display text-xl font-medium mb-3">Injectable Delivery Systems</h3>
              <p className="font-body text-muted-foreground">
                Precision injection systems for controlled delivery of particulate matrices, flowable biomaterials, and regenerative formulations with optimal force requirements and placement accuracy.
              </p>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <h3 className="font-display text-xl font-medium mb-3">Negative Pressure Therapy</h3>
              <p className="font-body text-muted-foreground">
                Advanced negative pressure wound therapy systems designed to work synergistically with regenerative matrices, promoting granulation tissue formation and accelerating wound closure.
              </p>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <h3 className="font-display text-xl font-medium mb-3">Fixation Systems</h3>
              <p className="font-body text-muted-foreground">
                Innovative fixation devices and techniques for secure placement of biological meshes and matrices in hernia repair and reconstructive surgery applications.
              </p>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <h3 className="font-display text-xl font-medium mb-3">Hydration Systems</h3>
              <p className="font-body text-muted-foreground">
                Sterile hydration and preparation systems that ensure optimal reconstitution of lyophilized biomaterials while maintaining product integrity and biological activity.
              </p>
            </CardBody>
          </Card>
        </div>
      </Section>

      <Section title="Design Features" description="Engineering excellence for clinical performance">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardBody>
              <h3 className="font-display text-xl font-medium mb-3">Ergonomic Design</h3>
              <p className="font-body text-muted-foreground">
                Thoughtful ergonomics reduce hand fatigue and improve control during procedures, enhancing precision and reducing procedural time.
              </p>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <h3 className="font-display text-xl font-medium mb-3">Sterile Packaging</h3>
              <p className="font-body text-muted-foreground">
                Ready-to-use sterile devices with intuitive packaging design that maintains sterility while facilitating easy opening and immediate use.
              </p>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <h3 className="font-display text-xl font-medium mb-3">Material Compatibility</h3>
              <p className="font-body text-muted-foreground">
                Devices engineered specifically for compatibility with biological materials, preventing damage or degradation during handling and application.
              </p>
            </CardBody>
          </Card>
        </div>
      </Section>

      <Section title="Clinical Benefits" description="Optimizing outcomes through device innovation">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <Card>
            <CardBody>
              <h3 className="font-display text-xl font-medium mb-3">Improved Precision</h3>
              <p className="font-body text-muted-foreground">
                Specialized devices enable more accurate placement and application of biomaterials, improving contact with target tissue and optimizing regenerative potential.
              </p>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <h3 className="font-display text-xl font-medium mb-3">Reduced Procedure Time</h3>
              <p className="font-body text-muted-foreground">
                Streamlined device design and intuitive operation reduce preparation and application time, improving OR efficiency and reducing patient exposure to anesthesia.
              </p>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <h3 className="font-display text-xl font-medium mb-3">Enhanced Safety</h3>
              <p className="font-body text-muted-foreground">
                Safety features and quality controls minimize risk of contamination or application errors, protecting both patients and healthcare providers.
              </p>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <h3 className="font-display text-xl font-medium mb-3">Consistent Results</h3>
              <p className="font-body text-muted-foreground">
                Standardized delivery systems reduce technique-dependent variability, helping ensure consistent clinical outcomes across different practitioners and settings.
              </p>
            </CardBody>
          </Card>
        </div>
      </Section>

      <Section title="Support and Training" description="Comprehensive resources for device utilization">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardBody>
              <h3 className="font-display text-xl font-medium mb-3">Device Training</h3>
              <p className="font-body text-muted-foreground">
                Hands-on training programs and instructional materials ensure proper device operation and optimal technique for biomaterial application.
              </p>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <h3 className="font-display text-xl font-medium mb-3">Technical Support</h3>
              <p className="font-body text-muted-foreground">
                Dedicated technical support team available to answer questions, troubleshoot issues, and provide guidance on device selection and use.
              </p>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <h3 className="font-display text-xl font-medium mb-3">Quality Assurance</h3>
              <p className="font-body text-muted-foreground">
                Rigorous quality control processes and regulatory compliance ensure all devices meet the highest standards for safety, performance, and reliability.
              </p>
            </CardBody>
          </Card>
        </div>
      </Section>
    </main>
  );
}
