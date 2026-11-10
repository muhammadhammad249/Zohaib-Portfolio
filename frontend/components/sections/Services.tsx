"use client";

import React from "react";
import { Section } from "@/components/ui/Section";
import { BentoCard } from "@/components/ui/BentoCard";
import { Reveal } from "@/components/ui/Reveal";
import { servicesData } from "@/data/services";
import {
  Smartphone,
  Cpu,
  Cloud,
  Layout,
  ShieldCheck,
  Check,
} from "lucide-react";

export function Services() {
  const iconMap: Record<string, React.ReactNode> = {
    Smartphone: <Smartphone className="w-6 h-6" />,
    Cpu: <Cpu className="w-6 h-6" />,
    Cloud: <Cloud className="w-6 h-6" />,
    Layout: <Layout className="w-6 h-6" />,
    ShieldCheck: <ShieldCheck className="w-6 h-6" />,
  };

  return (
    <Section
      id="services"
      badge="Specialized Services"
      title="What I Bring to Mobile Teams"
      subtitle="Comprehensive cross-platform and native Android engineering capabilities from architecture to production release."
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {servicesData.map((service, index) => {
          // make the first service span 2 columns on lg or keep a balanced bento grid
          const isFeatured = index === 0;

          return (
            <Reveal
              key={service.id}
              delay={index * 0.08}
              className={isFeatured ? "lg:col-span-2" : "col-span-1"}
            >
              <BentoCard
                variant={isFeatured ? "gradient" : "glass"}
                className="h-full flex flex-col justify-between p-6 sm:p-8"
              >
                <div>
                  {/* Service Icon */}
                  <div
                    className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-5 ${
                      isFeatured
                        ? "bg-white/15 text-champagne border border-white/20"
                        : "bg-burgundy-600/10 dark:bg-burgundy-800/50 text-burgundy-700 dark:text-champagne border border-burgundy-400/20"
                    }`}
                  >
                    {iconMap[service.icon]}
                  </div>

                  {/* Title & Tagline */}
                  <h3
                    className={`text-xl sm:text-2xl font-heading font-bold ${
                      isFeatured
                        ? "text-white"
                        : "text-burgundy-950 dark:text-champagne-light"
                    }`}
                  >
                    {service.title}
                  </h3>
                  <p
                    className={`text-xs sm:text-sm font-medium mt-1 ${
                      isFeatured ? "text-champagne" : "text-burgundy-600 dark:text-rose-soft"
                    }`}
                  >
                    {service.tagline}
                  </p>

                  {/* Description */}
                  <p
                    className={`mt-4 text-sm leading-relaxed ${
                      isFeatured
                        ? "text-burgundy-100"
                        : "text-burgundy-900/80 dark:text-burgundy-200/80"
                    }`}
                  >
                    {service.description}
                  </p>
                </div>

                {/* Key Deliverables */}
                <div
                  className={`mt-6 pt-5 border-t ${
                    isFeatured
                      ? "border-burgundy-700/60"
                      : "border-burgundy-200/50 dark:border-burgundy-800/60"
                  }`}
                >
                  <div className="flex flex-wrap gap-2">
                    {service.deliverables.map((item) => (
                      <span
                        key={item}
                        className={`inline-flex items-center gap-1.5 text-xs px-3 py-1 rounded-full font-medium ${
                          isFeatured
                            ? "bg-white/10 text-white border border-white/15"
                            : "bg-burgundy-100/70 dark:bg-burgundy-800/60 text-burgundy-900 dark:text-burgundy-200 border border-burgundy-300/40 dark:border-burgundy-700/50"
                        }`}
                      >
                        <Check className="w-3 h-3 text-champagne" />
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </BentoCard>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}

