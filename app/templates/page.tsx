import { ArrowRightIcon, HomeIcon, MoonIcon } from "lucide-react";
import { Metadata } from "next";
import Link from "next/link";

import { Badge } from "../../components/ui/badge";
import { Button } from "../../components/ui/button";
import { Card } from "../../components/ui/card";
import { Section } from "../../components/ui/section";

export const metadata: Metadata = {
  title: "Templates - Launch UI",
  description: "Explore beautiful landing page templates built with Launch UI",
};

const templates = [
  {
    id: "default",
    name: "Default",
    description:
      "The classic Launch UI template with a clean, professional design perfect for any product or service.",
    href: "/",
    icon: <HomeIcon className="size-8" />,
    theme: "Professional",
    tags: ["Classic", "Versatile", "Clean"],
  },
  {
    id: "luna",
    name: "Luna",
    description:
      "An elegant moonlit template with -blue gradients and cosmic aesthetics for a sophisticated, dreamy feel.",
    href: "/luna",
    icon: <MoonIcon className="size-8" />,
    theme: "Moonlit",
    tags: ["Elegant", "", "Modern"],
    badge: "New",
  },
];

export default function TemplatesPage() {
  return (
    <main className="min-h-screen w-full overflow-hidden bg-background text-foreground">
      <Section className="py-24">
        <div className="max-w-container mx-auto space-y-16">
          {/* Header */}
          <div className="flex flex-col items-center gap-6 text-center">
            <Badge variant="outline">Templates</Badge>
            <h1 className="from-foreground to-foreground dark:to-muted-foreground bg-linear-to-r bg-clip-text text-4xl leading-tight font-semibold text-balance text-transparent sm:text-6xl sm:leading-tight">
              Choose Your Perfect Template
            </h1>
            <p className="text-muted-foreground max-w-[740px] text-lg font-medium text-balance sm:text-xl">
              Start with a beautifully designed template and customize it to
              match your brand. All templates are fully responsive and built
              with modern best practices.
            </p>
          </div>

          {/* Templates Grid */}
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {templates.map((template) => (
              <Card
                key={template.id}
                className="border-border hover:border-foreground/20 group relative flex flex-col gap-6 border bg-transparent p-8 transition-all duration-300 hover:shadow-lg"
              >
                {/* Badge */}
                {template.badge && (
                  <Badge
                    variant="outline"
                    className="border-brand/30 text-brand absolute top-4 right-4"
                  >
                    {template.badge}
                  </Badge>
                )}

                {/* Icon */}
                <div className="from-foreground/10 to-foreground/5 flex size-16 items-center justify-center rounded-2xl bg-linear-to-br">
                  {template.icon}
                </div>

                {/* Content */}
                <div className="flex flex-1 flex-col gap-4">
                  <div className="space-y-2">
                    <div className="flex items-center gap-3">
                      <h2 className="text-2xl font-semibold">
                        {template.name}
                      </h2>
                      <span className="text-muted-foreground text-sm">
                        {template.theme}
                      </span>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">
                      {template.description}
                    </p>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {template.tags.map((tag) => (
                      <Badge key={tag} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Action */}
                <div className="flex gap-3">
                  <Button variant="default" size="lg" asChild className="flex-1">
                    <Link href={template.href}>
                      View Template
                      <ArrowRightIcon className="ml-2 size-4" />
                    </Link>
                  </Button>
                </div>
              </Card>
            ))}
          </div>

          {/* Footer CTA */}
          <div className="border-border mt-16 flex flex-col items-center gap-6 rounded-2xl border bg-gradient-to-br /5 /5 p-12 text-center">
            <h3 className="text-2xl font-semibold sm:text-3xl">
              Need a custom template?
            </h3>
            <p className="text-muted-foreground max-w-[600px] text-balance">
              All templates are fully customizable. Mix and match sections from
              different templates or create your own unique design.
            </p>
            <Button variant="glow" size="lg" asChild>
              <Link href="https://github.com/launch-ui/launch-ui">
                View on GitHub
                <ArrowRightIcon className="ml-2 size-4" />
              </Link>
            </Button>
          </div>
        </div>
      </Section>
    </main>
  );
}

