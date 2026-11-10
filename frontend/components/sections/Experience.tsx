"use client";

import React from "react";
import { Section } from "@/components/ui/Section";
import { BentoCard } from "@/components/ui/BentoCard";
import { Reveal } from "@/components/ui/Reveal";
import { Chip } from "@/components/ui/Chip";
import { experienceData } from "@/data/experience";
import { Briefcase, Calendar, MapPin, CheckCircle2 } from "lucide-react";

export function Experience() {
  return (
    <Section
      id="experience"
      badge="Career Path"
      title="Professional Experience"
      subtitle="Proven track record in cross-platform mobile app development, state architecture, and Play Store releases."
    >
      <div className="max-w-4xl mx-auto">
        <div className="relative pl-6 md:pl-8 border-l-2 border-burgundy-300 dark:border-burgundy-800 space-y-12">
          {experienceData.map((item, index) => (
            <Reveal key={index} delay={index * 0.1}>
              {/* Timeline Indicator Dot */}
              <div className="absolute -left-[17px] top-6 w-8 h-8 rounded-full bg-burgundy-600 border-4 border-white dark:border-burgundy-950 flex items-center justify-center shadow-md">
                <Briefcase className="w-3.5 h-3.5 text-white" />
              </div>

              {/* Experience Bento Card */}
              <BentoCard variant="glass" className="p-6 sm:p-8 ml-2 sm:ml-4">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 border-b border-burgundy-200/50 dark:border-burgundy-800/60 pb-5">
                  <div>
                    <span className="inline-block text-xs font-semibold uppercase tracking-wider text-burgundy-600 dark:text-champagne mb-1">
                      {item.type}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-heading font-bold text-burgundy-950 dark:text-champagne-light">
                      {item.role}
                    </h3>
                    <div className="text-base font-medium text-burgundy-800 dark:text-burgundy-200 mt-0.5">
                      {item.company}
                    </div>
                  </div>

                  <div className="flex flex-col sm:items-end gap-1 text-xs text-burgundy-700/80 dark:text-burgundy-300/80">
                    <span className="flex items-center gap-1.5 font-semibold text-burgundy-900 dark:text-champagne-light">
                      <Calendar className="w-3.5 h-3.5" />
                      {item.period}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5" />
                      {item.location}
                    </span>
                  </div>
                </div>

                {/* Bullets */}
                <ul className="mt-6 space-y-3">
                  {item.bullets.map((bullet, bIndex) => (
                    <li
                      key={bIndex}
                      className="flex items-start gap-3 text-sm sm:text-base text-burgundy-900/85 dark:text-burgundy-200/90 leading-relaxed font-sans"
                    >
                      <CheckCircle2 className="w-5 h-5 text-burgundy-600 dark:text-champagne shrink-0 mt-0.5" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>

                {/* Tech Stack used in role */}
                <div className="mt-6 pt-5 border-t border-burgundy-200/40 dark:border-burgundy-800/40">
                  <div className="text-xs font-semibold uppercase tracking-wider text-burgundy-700/80 dark:text-rose-soft/80 mb-2">
                    Technologies in Production
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {item.techStack.map((tech) => (
                      <Chip key={tech} variant="primary" size="sm">
                        {tech}
                      </Chip>
                    ))}
                  </div>
                </div>
              </BentoCard>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}

