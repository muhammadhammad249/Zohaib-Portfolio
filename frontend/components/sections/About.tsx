"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Section } from "@/components/ui/Section";
import { BentoCard } from "@/components/ui/BentoCard";
import { Reveal } from "@/components/ui/Reveal";
import { Chip } from "@/components/ui/Chip";
import { profileData } from "@/data/profile";
import {
  Layers,
  Zap,
  Figma,
  Languages,
  MapPin,
  Clock,
  Github,
  ExternalLink,
  ShieldCheck,
} from "lucide-react";

export function About() {
  const [imgError, setImgError] = useState(false);

  return (
    <Section
      id="about"
      badge="About Me"
      title="Engineering Clean & Responsive Mobile Systems"
      subtitle="Flutter & native Android developer specializing in scalable architectural patterns, fluid UI translation, and production reliability."
    >
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        {/* Main Bio Card (spans 8 cols) */}
        <Reveal className="md:col-span-8 flex">
          <BentoCard variant="glass" className="w-full flex flex-col justify-between">
            <div className="space-y-4">
              <h3 className="text-xl sm:text-2xl font-heading font-bold text-burgundy-950 dark:text-champagne-light">
                Professional Background
              </h3>
              <p className="text-base text-burgundy-900/85 dark:text-burgundy-200/90 leading-relaxed font-sans">
                {profileData.summary}
              </p>
              <p className="text-base text-burgundy-900/85 dark:text-burgundy-200/90 leading-relaxed font-sans">
                I develop end-to-end mobile apps from the ground up, starting with well-structured project hierarchies, strictly adhering to clean state boundaries, and ensuring seamless communication with REST APIs and Firebase backends.
              </p>
            </div>

            {/* Approach Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6 pt-6 border-t border-burgundy-200/50 dark:border-burgundy-800/60">
              <div className="space-y-1.5">
                <div className="flex items-center gap-2 text-burgundy-700 dark:text-champagne font-semibold text-sm">
                  <Layers className="w-4 h-4" />
                  <span>Clean Architecture</span>
                </div>
                <p className="text-xs text-burgundy-800/75 dark:text-burgundy-300/75">
                  Separation of concerns using BLoC, Riverpod, and MVVM patterns.
                </p>
              </div>

              <div className="space-y-1.5">
                <div className="flex items-center gap-2 text-burgundy-700 dark:text-champagne font-semibold text-sm">
                  <Zap className="w-4 h-4" />
                  <span>Performance First</span>
                </div>
                <p className="text-xs text-burgundy-800/75 dark:text-burgundy-300/75">
                  Reduced rebuild overhead, smooth 60fps renders, and memory efficiency.
                </p>
              </div>

              <div className="space-y-1.5">
                <div className="flex items-center gap-2 text-burgundy-700 dark:text-champagne font-semibold text-sm">
                  <Figma className="w-4 h-4" />
                  <span>Figma Precision</span>
                </div>
                <p className="text-xs text-burgundy-800/75 dark:text-burgundy-300/75">
                  Pixel-accurate widget composition matching designers&apos; exact systems.
                </p>
              </div>
            </div>
          </BentoCard>
        </Reveal>

        {/* Profile Picture Card with Blob Frame (spans 4 cols) */}
        <Reveal delay={0.1} className="md:col-span-4 flex">
          <BentoCard variant="gradient" className="w-full flex flex-col items-center justify-center p-6 text-center">
            <div className="relative w-44 h-44 sm:w-48 sm:h-48 my-2 group">
              <div className="absolute inset-0 bg-gradient-to-tr from-burgundy-500 via-champagne to-rose-soft rounded-blob filter blur-md opacity-80" />
              <div className="relative w-full h-full rounded-blob overflow-hidden border-2 border-champagne shadow-xl bg-burgundy-950 flex items-center justify-center">
                {!imgError ? (
                  <Image
                    src={profileData.avatarUrl}
                    alt={`${profileData.name} portrait`}
                    fill
                    sizes="200px"
                    className="object-cover"
                    onError={() => setImgError(true)}
                  />
                ) : (
                  <div className="text-champagne font-heading font-black text-3xl">ZR</div>
                )}
              </div>
            </div>
            <div className="mt-3">
              <h4 className="text-lg font-heading font-bold text-white">{profileData.name}</h4>
              <p className="text-xs text-burgundy-200 mt-0.5">AVISA DEV &bull; Lahore, Pakistan</p>
            </div>
          </BentoCard>
        </Reveal>

        {/* Location & Availability Card (spans 4 cols) */}
        <Reveal delay={0.15} className="md:col-span-4 flex">
          <BentoCard variant="glass" className="w-full space-y-4">
            <div className="flex items-center gap-2.5 text-burgundy-700 dark:text-champagne font-heading font-bold text-base">
              <MapPin className="w-5 h-5 text-rose-soft" />
              <span>Location & Availability</span>
            </div>
            <div className="space-y-2 text-sm text-burgundy-900/80 dark:text-burgundy-200/90">
              <p className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-burgundy-600 dark:text-champagne shrink-0" />
                <span><strong>Role:</strong> {profileData.availability}</span>
              </p>
              <p className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-500 shrink-0" />
                <span><strong>Workplace:</strong> Onsite at AVISA DEV (Lahore)</span>
              </p>
            </div>
          </BentoCard>
        </Reveal>

        {/* Languages Card (spans 4 cols) */}
        <Reveal delay={0.2} className="md:col-span-4 flex">
          <BentoCard variant="glass" className="w-full space-y-4">
            <div className="flex items-center gap-2.5 text-burgundy-700 dark:text-champagne font-heading font-bold text-base">
              <Languages className="w-5 h-5 text-champagne" />
              <span>Languages</span>
            </div>
            <div className="space-y-3">
              {profileData.languages.map((lang) => (
                <div key={lang.name} className="flex items-center justify-between text-sm">
                  <span className="font-semibold text-burgundy-950 dark:text-white">{lang.name}</span>
                  <Chip variant="accent" size="sm">
                    {lang.proficiency}
                  </Chip>
                </div>
              ))}
            </div>
          </BentoCard>
        </Reveal>

        {/* GitHub Card (spans 4 cols) */}
        <Reveal delay={0.25} className="md:col-span-4 flex">
          <BentoCard variant="glass" className="w-full flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-burgundy-900 dark:text-white font-heading font-bold">
                  <Github className="w-5 h-5 text-burgundy-600 dark:text-champagne" />
                  <span>GitHub Profile</span>
                </div>
                <ExternalLink className="w-4 h-4 text-burgundy-500" />
              </div>
              <p className="text-xs text-burgundy-800/80 dark:text-burgundy-300/80 mt-2">
                Open-source repositories, mobile experiments, and continuous code commits.
              </p>
            </div>
            <a
              href={profileData.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 text-xs font-semibold text-burgundy-600 dark:text-champagne hover:underline inline-flex items-center gap-1.5"
            >
              <span>Explore @zohaib-malik6</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </BentoCard>
        </Reveal>
      </div>
    </Section>
  );
}

