import React from "react";
import { cn } from "@/lib/utils";

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  id: string;
  badge?: string;
  title?: string;
  subtitle?: string;
  children: React.ReactNode;
  containerClassName?: string;
}

export function Section({
  id,
  badge,
  title,
  subtitle,
  children,
  className,
  containerClassName,
  ...props
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn("relative py-16 md:py-24 scroll-mt-20", className)}
      {...props}
    >
      <div className={cn("max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", containerClassName)}>
        {(badge || title || subtitle) && (
          <div className="mb-12 md:mb-16 text-center max-w-3xl mx-auto">
            {badge && (
              <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase bg-burgundy-600/10 dark:bg-burgundy-900/60 text-burgundy-700 dark:text-rose-soft border border-burgundy-400/20 mb-4">
                {badge}
              </span>
            )}
            {title && (
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-burgundy-950 dark:text-champagne-light tracking-tight">
                {title}
              </h2>
            )}
            {subtitle && (
              <p className="mt-4 text-base sm:text-lg text-burgundy-900/75 dark:text-burgundy-200/80 leading-relaxed font-sans">
                {subtitle}
              </p>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}

