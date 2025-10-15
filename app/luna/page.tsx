import { MoonIcon, SparklesIcon, StarIcon, ZapIcon } from "lucide-react";
import { Metadata } from "next";

import CTA from "../../components/sections/cta/luna";
import FAQ from "../../components/sections/faq/default";
import Footer from "../../components/sections/footer/default";
import Hero from "../../components/sections/hero/luna";
import Items from "../../components/sections/items/default";
import Logos from "../../components/sections/logos/default";
import Navbar from "../../components/sections/navbar/default";
import Pricing from "../../components/sections/pricing/default";
import Stats from "../../components/sections/stats/default";

export const metadata: Metadata = {
  title: "Luna - A Modern Landing Page Template",
  description: "Beautiful, elegant landing page template with a moonlit theme",
};

export default function LunaTemplate() {
  return (
    <main className="min-h-screen w-full overflow-hidden bg-background text-foreground">
      <Navbar
        name="Luna"
        homeUrl="/luna"
        actions={[
          { text: "Login", href: "#", isButton: false },
          {
            text: "Get Started Free",
            href: "#pricing",
            isButton: true,
            variant: "default",
          },
        ]}
      />
      <Hero
        title="Transform your ideas into reality with Luna"
        description="Experience the perfect blend of elegance and functionality. Luna brings your vision to life with stunning design and powerful features."
        badge={false}
        buttons={[
          {
            href: "#pricing",
            text: "Start Free Trial",
            variant: "default",
            iconRight: <SparklesIcon className="ml-2 size-4" />,
          },
          {
            href: "#features",
            text: "View Features",
            variant: "glow",
          },
        ]}
      />
      <Logos
        title="Trusted by innovative teams worldwide"
        badge={false}
      />
      <Items
        title="Features that shine bright"
        items={[
          {
            icon: <MoonIcon className="size-5 stroke-1" />,
            title: "Elegant Design",
            description:
              "Beautiful, minimalist interface that puts your content front and center",
          },
          {
            icon: <SparklesIcon className="size-5 stroke-1" />,
            title: "Smart Automation",
            description:
              "Automate repetitive tasks and focus on what matters most",
          },
          {
            icon: <StarIcon className="size-5 stroke-1" />,
            title: "Premium Quality",
            description:
              "Built with attention to detail and professional-grade standards",
          },
          {
            icon: <ZapIcon className="size-5 stroke-1" />,
            title: "Lightning Fast",
            description:
              "Optimized for performance with instant loading and smooth interactions",
          },
        ]}
      />
      <Stats
        items={[
          {
            value: "50K+",
            label: "Active Users",
            description: "people trust Luna for their projects",
          },
          {
            value: "99.9%",
            label: "Uptime",
            description: "guaranteed service level agreement",
          },
          {
            value: "24/7",
            label: "Support",
            description: "available whenever you need help",
          },
          {
            value: "150+",
            label: "Countries",
            description: "served around the world",
          },
        ]}
      />
      <Pricing
        title="Simple, transparent pricing"
        description="Choose the perfect plan for your needs. Start free, upgrade when you're ready."
        plans={[
          {
            name: "Starter",
            description: "Perfect for trying out Luna and small projects",
            price: 0,
            priceNote: "Free forever. No credit card required.",
            cta: {
              variant: "glow",
              label: "Start Free",
              href: "#",
            },
            features: [
              "Up to 3 projects",
              "Basic features",
              "Community support",
              "5GB storage",
            ],
            variant: "default",
          },
          {
            name: "Professional",
            icon: <StarIcon className="size-4" />,
            description: "For professionals and growing teams",
            price: 29,
            priceNote: "Per user, per month. Billed monthly.",
            cta: {
              variant: "default",
              label: "Get Started",
              href: "#",
            },
            features: [
              "Unlimited projects",
              "Advanced features",
              "Priority support",
              "100GB storage",
              "Custom integrations",
              "Team collaboration",
            ],
            variant: "glow-brand",
          },
          {
            name: "Enterprise",
            icon: <MoonIcon className="size-4" />,
            description: "For large organizations with custom needs",
            price: 0,
            priceNote: "Custom pricing. Contact sales for details.",
            cta: {
              variant: "default",
              label: "Contact Sales",
              href: "#",
            },
            features: [
              "Everything in Professional",
              "Dedicated account manager",
              "Custom SLA",
              "Unlimited storage",
              "On-premise deployment",
              "Advanced security",
            ],
            variant: "glow",
          },
        ]}
      />
      <FAQ
        title="Frequently asked questions"
        items={[
          {
            question: "What makes Luna different?",
            answer:
              "Luna combines elegant design with powerful functionality. We focus on providing an intuitive user experience while maintaining professional-grade capabilities.",
          },
          {
            question: "Can I switch plans later?",
            answer:
              "Yes, you can upgrade or downgrade your plan at any time. Changes will be reflected in your next billing cycle.",
          },
          {
            question: "Is there a free trial?",
            answer:
              "Our Starter plan is free forever. You can also try any paid plan free for 14 days with no credit card required.",
          },
          {
            question: "What kind of support do you offer?",
            answer:
              "All plans include community support. Professional and Enterprise plans get priority email support, with Enterprise customers receiving dedicated account management.",
          },
          {
            question: "How secure is my data?",
            answer:
              "We take security seriously. All data is encrypted in transit and at rest. We're SOC 2 compliant and undergo regular security audits.",
          },
          {
            question: "Can I cancel anytime?",
            answer:
              "Yes, you can cancel your subscription at any time. You'll continue to have access until the end of your billing period.",
          },
        ]}
      />
      <CTA
        title="Ready to get started with Luna?"
        buttons={[
          {
            href: "#pricing",
            text: "Start Free Trial",
            variant: "default",
          },
          {
            href: "#",
            text: "Schedule Demo",
            variant: "glow",
          },
        ]}
      />
      <Footer />
    </main>
  );
}

