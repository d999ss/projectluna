import { ReactNode } from "react";

import { cn } from "@/lib/utils";

interface SectionProps {
  children: ReactNode;
  className?: string;
  title?: string;
  description?: string;
}

export function Section({ children, className, title, description }: SectionProps) {
  return (
    <section className={cn("py-16 md:py-24", className)}>
      <div className="max-w-container mx-auto px-4">
        {(title || description) && (
          <div className="mb-12 text-center md:mb-16">
            {title && (
              <h2 className="text-h2 mb-4">
                {title}
              </h2>
            )}
            {description && (
              <p className="text-lead text-muted-foreground mx-auto max-w-2xl">
                {description}
              </p>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}

