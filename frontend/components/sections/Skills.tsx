"use client";

import React from "react";
import { Section } from "@/components/ui/Section";
import { BentoCard } from "@/components/ui/BentoCard";
import { Reveal } from "@/components/ui/Reveal";
import { Chip } from "@/components/ui/Chip";
import { skillGroups } from "@/data/skills";
import {
  Smartphone,
  Cpu,
  Layers,
  Server,
  Wrench,
} from "lucide-react";

export function Skills() {
  const iconMap: Record<string, React.ReactNode> = {
    "Cross-Platform": <Smartphone className="w-5 h-5" />,
    "State Management & Architecture": <Layers className="w-5 h-5" />,
    "Backend & APIs": <Server className="w-5 h-5" />,
    "Native Android": <Cpu className="w-5 h-5" />,
    "Tools & Workflow": <Wrench className="w-5 h-5" />,
  };

  return (
    <Section
      id="skills"
      badge="Technical Expertise"
      title="Grouped Core Competencies"
      subtitle="Hands-on mastery in cross-platform Dart & Flutter, native Android environments, and structured state management."
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillGroups.map((group, index) => {
          // Span the first 2 groups nicely in a bento pattern
          const isFeatured = index === 0;

          return (
            <Reveal
              key={group.category}
              delay={index * 0.07}
              className={isFeatured ? "md:col-span-2 lg:col-span-2" : "col-span-1"}
            >
              <BentoCard
                variant={isFeatured ? "solid" : "glass"}
                className="h-full flex flex-col justify-between p-6 sm:p-8"
              >
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <div
                      className={`p-2.5 rounded-2xl ${
                        isFeatured
                          ? "bg-white/15 text-champagne border border-white/20"
                          : "bg-burgundy-600/10 dark:bg-burgundy-800/60 text-burgundy-700 dark:text-champagne border border-burgundy-400/20"
                      }`}
                    >
                      {iconMap[group.category]}
                    </div>
                    <div>
                      <h3
                        className={`text-lg sm:text-xl font-heading font-bold ${
                          isFeatured
                            ? "text-white"
                            : "text-burgundy-950 dark:text-champagne-light"
                        }`}
                      >
                        {group.category}
                      </h3>
                      <span className="text-xs text-rose-soft/80 font-mono">
                        {group.skills.length} core technologies
                      </span>
                    </div>
                  </div>

                  <p
                    className={`text-xs sm:text-sm leading-relaxed mb-6 ${
                      isFeatured
                        ? "text-burgundy-100"
                        : "text-burgundy-900/80 dark:text-burgundy-200/80"
                    }`}
                  >
                    {group.description}
                  </p>
                </div>

                {/* Pill Chips */}
                <div className="flex flex-wrap gap-2 pt-4 border-t border-burgundy-200/40 dark:border-burgundy-800/40">
                  {group.skills.map((skill) => (
                    <Chip
                      key={skill}
                      variant={isFeatured ? "accent" : "primary"}
                      size="md"
                    >
                      {skill}
                    </Chip>
                  ))}
                </div>
              </BentoCard>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}

