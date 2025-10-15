import { ReactNode } from "react";

interface StatCardProps {
  title: string;
  value?: string | number;
  description?: string;
  icon?: ReactNode;
  children?: ReactNode;
}

export function StatCard({ title, value, description, icon, children }: StatCardProps) {
  return (
    <div
      className="group relative overflow-hidden rounded-2xl border border-[rgba(12,16,24,.12)] bg-[rgba(255,255,255,.55)] p-6 backdrop-blur-xl transition-all duration-300 hover:border-[rgba(12,16,24,.18)] hover:bg-[rgba(255,255,255,.65)] dark:border-[rgba(255,255,255,.12)] dark:bg-[rgba(0,0,0,.35)] dark:hover:border-[rgba(255,255,255,.18)] dark:hover:bg-[rgba(0,0,0,.45)] md:p-8"
      style={{
        boxShadow: "inset 0 1px 0 0 rgba(255,255,255,.15)",
      }}
    >
      {/* Icon */}
      {icon && (
        <div className="mb-4 flex size-12 items-center justify-center rounded-xl bg-gradient-to-br from-brand/10 to-accent/10">
          {icon}
        </div>
      )}

      {/* Content */}
      <div className="space-y-2">
        {value && (
          <div className="bg-gradient-to-r from-brand to-accent bg-clip-text text-4xl font-bold text-transparent md:text-5xl">
            {value}
          </div>
        )}
        <h3 className="text-lg font-semibold text-foreground">{title}</h3>
        {description && (
          <p className="text-sm leading-relaxed text-muted-foreground">
            {description}
          </p>
        )}
        {children}
      </div>
    </div>
  );
}

