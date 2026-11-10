"use client";

import React, { useState } from "react";
import Image from "next/image";
import { profileData } from "@/data/profile";
import { ROLE_ROTATIONS } from "@/lib/constants";
import { BentoCard } from "@/components/ui/BentoCard";
import { Button } from "@/components/ui/Button";
import { Bubble } from "@/components/ui/Bubble";
import { TypingText } from "@/components/ui/TypingText";
import { Reveal } from "@/components/ui/Reveal";
import {
  Download,
  FolderGit2,
  Mail,
  MapPin,
  CheckCircle,
  Smartphone,
  Play,
  Briefcase,
} from "lucide-react";

export function Hero() {
  const [imgError, setImgError] = useState(false);

  return (
    <section id="hero" className="relative pt-12 pb-16 md:pt-20 md:pb-24 overflow-hidden">
      {/* Floating Ambient Background Bubbles */}
      <Bubble variant="primary" size="xl" className="-top-32 -left-28 opacity-40" animation="float" />
      <Bubble variant="champagne" size="lg" className="top-1/3 -right-24 opacity-30" animation="reverse" />
      <Bubble variant="rose" size="md" className="bottom-0 left-1/3 opacity-25" animation="float" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Bento Grid Header */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch">
          {/* Main Hero Card (spans 8 cols) */}
          <Reveal className="md:col-span-8 flex">
            <BentoCard
              variant="gradient"
              className="w-full flex flex-col justify-between p-8 sm:p-10 border-burgundy-700/60 shadow-2xl relative"
            >
              <div className="space-y-6">
                {/* Location and Status Pill */}
                <div className="flex flex-wrap items-center gap-2.5">
                  <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-semibold bg-burgundy-950/70 border border-burgundy-600/60 text-champagne">
                    <MapPin className="w-3.5 h-3.5 text-rose-soft" />
                    {profileData.location}
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/20 text-emerald-200 border border-emerald-500/40">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    {profileData.availability}
                  </span>
                </div>

                {/* Main Headline */}
                <div>
                  <h1 className="text-3xl sm:text-5xl lg:text-6xl font-heading font-extrabold text-white tracking-tight leading-tight">
                    Hi, I&apos;m{" "}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-champagne-light via-champagne to-rose-soft">
                      {profileData.name}
                    </span>
                  </h1>

                  <div className="mt-3 text-lg sm:text-2xl font-heading font-medium text-burgundy-200 flex items-center flex-wrap">
                    <span className="mr-2 text-rose-soft">Specialized in:</span>
                    <TypingText
                      roles={ROLE_ROTATIONS}
                      className="font-bold text-champagne underline decoration-champagne/40 underline-offset-4"
                    />
                  </div>
                </div>

                {/* Subtitle / Intro */}
                <p className="text-base sm:text-lg text-burgundy-100/90 max-w-2xl leading-relaxed font-sans">
                  {profileData.summary}
                </p>
              </div>

              {/* Action Buttons */}
              <div className="mt-8 pt-6 border-t border-burgundy-700/50 flex flex-wrap items-center gap-3">
                <Button
                  href="#projects"
                  variant="gold"
                  size="md"
                  leftIcon={<FolderGit2 className="w-4 h-4" />}
                >
                  View Projects
                </Button>
                <Button
                  href={profileData.resumePath}
                  download="Zohaib_Rukhsar_Resume_Flutter_Developer.pdf"
                  variant="primary"
                  size="md"
                  leftIcon={<Download className="w-4 h-4" />}
                >
                  Download CV
                </Button>
                <Button
                  href="#contact"
                  variant="outline"
                  size="md"
                  className="text-white border-burgundy-400/60 hover:bg-burgundy-800/80"
                  leftIcon={<Mail className="w-4 h-4" />}
                >
                  Contact
                </Button>
              </div>
            </BentoCard>
          </Reveal>

          {/* Profile Picture Card in Blob Frame (spans 4 cols) */}
          <Reveal delay={0.1} className="md:col-span-4 flex">
            <BentoCard
              variant="glass"
              className="w-full flex flex-col items-center justify-center p-6 text-center relative overflow-hidden"
            >
              {/* Blob Frame Container */}
              <div className="relative w-52 h-52 sm:w-60 sm:h-60 mx-auto my-2 group">
                {/* Glowing blob background backdrop */}
                <div className="absolute inset-0 bg-gradient-to-tr from-burgundy-600 via-rose-soft to-champagne rounded-blob filter blur-md opacity-70 group-hover:opacity-90 transition-opacity duration-300" />

                {/* Blob Frame for Image */}
                <div className="relative w-full h-full rounded-blob overflow-hidden border-4 border-champagne/50 shadow-2xl bg-burgundy-950 flex items-center justify-center">
                  {!imgError ? (
                    <Image
                      src={profileData.avatarUrl}
                      alt={`${profileData.name} - ${profileData.title}`}
                      fill
                      priority
                      sizes="(max-width: 768px) 240px, 280px"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      onError={() => setImgError(true)}
                    />
                  ) : (
                    // Gradient Fallback if avatar fails
                    <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-burgundy-700 via-burgundy-900 to-burgundy-950 text-champagne p-4">
                      <span className="font-heading font-black text-4xl">ZR</span>
                      <span className="text-xs text-rose-soft mt-1">Zohaib Rukhsar</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Name Tag under avatar */}
              <div className="mt-4">
                <h2 className="font-heading font-bold text-lg text-burgundy-950 dark:text-champagne-light">
                  {profileData.name}
                </h2>
                <p className="text-xs text-burgundy-700 dark:text-burgundy-300 font-medium">
                  AVISA DEV &bull; Lahore
                </p>
              </div>
            </BentoCard>
          </Reveal>
        </div>

        {/* Truthful Stat Cards Bento Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mt-6">
          {/* Stat 1 */}
          <Reveal delay={0.15}>
            <BentoCard variant="glass" className="p-5 flex items-center gap-3.5">
              <div className="p-3 rounded-2xl bg-burgundy-600/15 text-burgundy-600 dark:text-champagne shrink-0">
                <Smartphone className="w-6 h-6" />
              </div>
              <div>
                <div className="text-xs text-burgundy-800/70 dark:text-burgundy-300/70 font-medium uppercase tracking-wider">
                  Mobile Stack
                </div>
                <div className="text-sm sm:text-base font-bold text-burgundy-950 dark:text-white">
                  Flutter &bull; Android
                </div>
              </div>
            </BentoCard>
          </Reveal>

          {/* Stat 2 */}
          <Reveal delay={0.2}>
            <BentoCard variant="glass" className="p-5 flex items-center gap-3.5">
              <div className="p-3 rounded-2xl bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 shrink-0">
                <Play className="w-6 h-6 fill-current" />
              </div>
              <div>
                <div className="text-xs text-burgundy-800/70 dark:text-burgundy-300/70 font-medium uppercase tracking-wider">
                  Production
                </div>
                <div className="text-sm sm:text-base font-bold text-burgundy-950 dark:text-white">
                  Live on Google Play
                </div>
              </div>
            </BentoCard>
          </Reveal>

          {/* Stat 3 */}
          <Reveal delay={0.25}>
            <BentoCard variant="glass" className="p-5 flex items-center gap-3.5">
              <div className="p-3 rounded-2xl bg-rose-soft/20 text-burgundy-700 dark:text-rose-soft shrink-0">
                <CheckCircle className="w-6 h-6" />
              </div>
              <div>
                <div className="text-xs text-burgundy-800/70 dark:text-burgundy-300/70 font-medium uppercase tracking-wider">
                  Status
                </div>
                <div className="text-sm sm:text-base font-bold text-burgundy-950 dark:text-white">
                  Open to Work
                </div>
              </div>
            </BentoCard>
          </Reveal>

          {/* Stat 4 */}
          <Reveal delay={0.3}>
            <BentoCard variant="glass" className="p-5 flex items-center gap-3.5">
              <div className="p-3 rounded-2xl bg-champagne/20 text-burgundy-900 dark:text-champagne shrink-0">
                <Briefcase className="w-6 h-6" />
              </div>
              <div>
                <div className="text-xs text-burgundy-800/70 dark:text-burgundy-300/70 font-medium uppercase tracking-wider">
                  Current Role
                </div>
                <div className="text-sm sm:text-base font-bold text-burgundy-950 dark:text-white">
                  AVISA DEV (Jan 2025+)
                </div>
              </div>
            </BentoCard>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

