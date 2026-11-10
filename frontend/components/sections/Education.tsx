"use client";

import React from "react";
import { Section } from "@/components/ui/Section";
import { BentoCard } from "@/components/ui/BentoCard";
import { Reveal } from "@/components/ui/Reveal";
import { profileData } from "@/data/profile";
import { GraduationCap, MapPin, Calendar, Award } from "lucide-react";

export function Education() {
  const { education } = profileData;

  return (
    <Section
      id="education"
      badge="Academic Foundation"
      title="Education & Qualifications"
      subtitle="Formal computer science foundation backing real-world cross-platform engineering."
    >
      <div className="max-w-3xl mx-auto">
        <Reveal>
          <BentoCard variant="glass" className="p-8 relative overflow-hidden">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5">
              <div className="w-14 h-14 rounded-2xl bg-burgundy-600/15 dark:bg-burgundy-800/60 text-burgundy-700 dark:text-champagne flex items-center justify-center shrink-0 border border-burgundy-400/30">
                <GraduationCap className="w-8 h-8" />
              </div>

              <div className="space-y-1">
                <span className="text-xs font-semibold uppercase tracking-wider text-burgundy-600 dark:text-champagne">
                  Undergraduate Degree
                </span>
                <h3 className="text-xl sm:text-2xl font-heading font-bold text-burgundy-950 dark:text-champagne-light">
                  {education.degree}
                </h3>
                <p className="text-base font-medium text-burgundy-800 dark:text-burgundy-200">
                  {education.institution}
                </p>
              </div>
            </div>

            <div className="mt-6 pt-5 border-t border-burgundy-200/50 dark:border-burgundy-800/60 grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-burgundy-900/80 dark:text-burgundy-200/90">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-rose-soft shrink-0" />
                <span>{education.location}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-champagne shrink-0" />
                <span>Graduated / Class of {education.graduated}</span>
              </div>
            </div>

            <div className="mt-4 p-4 rounded-2xl bg-burgundy-100/60 dark:bg-burgundy-950/60 border border-burgundy-200/50 dark:border-burgundy-800/40 text-xs sm:text-sm text-burgundy-900/80 dark:text-burgundy-200/80 flex items-center gap-2.5">
              <Award className="w-4 h-4 text-champagne shrink-0" />
              <span>
                Coursework focused on Object-Oriented Programming, Data Structures, Mobile Application Engineering, Software Architecture, and Database Systems.
              </span>
            </div>
          </BentoCard>
        </Reveal>
      </div>
    </Section>
  );
}

