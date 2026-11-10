"use client";

import React from "react";
import { Project } from "@/data/projects";
import { Chip } from "./Chip";
import { Button } from "./Button";
import { ExternalLink, Github, Smartphone, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

interface ProjectCardProps {
  project: Project;
  onOpenModal: (project: Project) => void;
  className?: string;
}

export function ProjectCard({ project, onOpenModal, className }: ProjectCardProps) {
  const isLarge = project.featured;

  return (
    <div
      onClick={() => onOpenModal(project)}
      tabIndex={0}
      role="button"
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onOpenModal(project);
        }
      }}
      className={cn(
        "group relative rounded-3xl p-6 md:p-8 flex flex-col justify-between overflow-hidden cursor-pointer",
        "bg-white/75 dark:bg-burgundy-900/40 backdrop-blur-md border border-burgundy-200/60 dark:border-burgundy-800/60",
        "transition-all duration-300 motion-safe:hover:-translate-y-1.5 motion-safe:hover:shadow-2xl motion-safe:hover:border-burgundy-400 dark:motion-safe:hover:border-burgundy-600",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-burgundy-500",
        isLarge ? "md:col-span-2 row-span-2" : "col-span-1",
        className
      )}
    >
      {/* Background ambient glow */}
      <div
        className={cn(
          "absolute -top-24 -right-24 w-60 h-60 rounded-full blur-3xl opacity-20 pointer-events-none transition-opacity duration-300 group-hover:opacity-40",
          project.platform === "Flutter" ? "bg-burgundy-500" : "bg-champagne"
        )}
      />

      <div className="flex flex-col gap-4">
        {/* Top Badges */}
        <div className="flex items-center justify-between gap-2 flex-wrap">
          <div className="flex items-center gap-2 flex-wrap">
            <Chip variant={project.platform === "Flutter" ? "primary" : "secondary"} size="sm">
              <Smartphone className="w-3.5 h-3.5 mr-1" />
              {project.platform}
            </Chip>
            {project.isLiveOnPlayStore && (
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/15 text-emerald-700 dark:text-emerald-300 border border-emerald-500/30">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                Live on Google Play
              </span>
            )}
            {project.featured && (
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold bg-champagne/20 text-burgundy-900 dark:text-champagne-light border border-champagne/40">
                <Sparkles className="w-3 h-3" />
                Featured
              </span>
            )}
          </div>
          <span className="text-xs text-burgundy-800/60 dark:text-burgundy-300/60 font-mono">
            {project.category}
          </span>
        </div>

        {/* CSS-Drawn Phone Mockup Frame */}
        <div className="w-full flex justify-center my-2 py-2">
          <div
            className={cn(
              "w-full max-w-[260px] h-[190px] rounded-t-[1.8rem] rounded-b-[1rem] p-2 border-2 border-burgundy-300/60 dark:border-burgundy-700/80 shadow-inner bg-burgundy-950/80 relative flex flex-col items-center overflow-hidden transition-transform duration-300 group-hover:scale-[1.02]"
            )}
          >
            {/* Phone Speaker / Notch */}
            <div className="w-16 h-2.5 bg-burgundy-900/90 rounded-full mb-2 shrink-0 border border-burgundy-800/60" />

            {/* Mockup Screen with unique gradient */}
            <div
              className={cn(
                "w-full h-full rounded-xl bg-gradient-to-br p-3 flex flex-col justify-between text-white text-xs relative overflow-hidden",
                project.gradient
              )}
            >
              {/* Pattern details based on project type */}
              {project.phoneMockupPattern === "wallet" && (
                <>
                  <div className="flex justify-between items-center opacity-80">
                    <span className="font-semibold text-[10px]">FINTECH WALLET</span>
                    <span className="text-[9px] px-1.5 py-0.5 rounded bg-white/20">BLoC</span>
                  </div>
                  <div className="bg-white/15 backdrop-blur-sm p-2 rounded-lg border border-white/20 my-auto shadow-sm">
                    <div className="text-[10px] text-amber-200">Current Balance</div>
                    <div className="text-sm font-bold tracking-tight">$12,480.00</div>
                  </div>
                  <div className="flex justify-between text-[10px] opacity-75">
                    <span>Send</span>
                    <span>Receive</span>
                    <span>Cards</span>
                  </div>
                </>
              )}

              {project.phoneMockupPattern === "qr" && (
                <>
                  <div className="flex justify-between items-center opacity-80">
                    <span className="font-semibold text-[10px]">QR VERTEX SCANNER</span>
                    <span className="text-[9px] px-1.5 py-0.5 rounded bg-emerald-400/20 text-emerald-200">Native</span>
                  </div>
                  <div className="w-16 h-16 border-2 border-dashed border-rose-300/80 rounded-lg mx-auto my-auto flex items-center justify-center relative">
                    <div className="w-12 h-0.5 bg-rose-400 animate-pulse absolute" />
                    <div className="w-6 h-6 border-2 border-white/60 rounded-sm" />
                  </div>
                  <div className="text-center text-[10px] opacity-75">Ready to scan barcode</div>
                </>
              )}

              {project.phoneMockupPattern === "client" && (
                <>
                  <div className="flex justify-between items-center opacity-80">
                    <span className="font-semibold text-[10px]">STILL BLINK</span>
                    <span className="text-[9px] px-1.5 py-0.5 rounded bg-white/20">Client App</span>
                  </div>
                  <div className="space-y-1.5 my-auto">
                    <div className="h-2 w-3/4 bg-white/30 rounded" />
                    <div className="h-2 w-1/2 bg-white/20 rounded" />
                    <div className="h-6 w-full bg-white/10 rounded-lg border border-white/10" />
                  </div>
                  <div className="flex justify-around text-[9px] opacity-70 border-t border-white/10 pt-1">
                    <span>Tab 1</span>
                    <span className="text-champagne font-bold">Active</span>
                    <span>Tab 3</span>
                  </div>
                </>
              )}

              {project.phoneMockupPattern === "ecommerce" && (
                <>
                  <div className="flex justify-between items-center opacity-80">
                    <span className="font-semibold text-[10px]">NECTAR FRESH</span>
                    <span className="text-[9px] px-1.5 py-0.5 rounded bg-emerald-400/20">UI/UX</span>
                  </div>
                  <div className="grid grid-cols-2 gap-1.5 my-auto">
                    <div className="h-9 rounded bg-white/15 p-1 flex flex-col justify-end">
                      <div className="h-1.5 w-1/2 bg-white/40 rounded" />
                    </div>
                    <div className="h-9 rounded bg-white/15 p-1 flex flex-col justify-end">
                      <div className="h-1.5 w-2/3 bg-white/40 rounded" />
                    </div>
                  </div>
                  <div className="text-[9px] text-center opacity-80">Custom Animated Widgets</div>
                </>
              )}

              {project.phoneMockupPattern === "consultant" && (
                <>
                  <div className="flex justify-between items-center opacity-80">
                    <span className="font-semibold text-[10px]">CROWN WELL</span>
                    <span className="text-[9px] px-1.5 py-0.5 rounded bg-white/20">Consultant</span>
                  </div>
                  <div className="p-1.5 bg-white/10 rounded-lg my-auto space-y-1">
                    <div className="h-1.5 w-1/3 bg-white/50 rounded" />
                    <div className="h-2 w-full bg-white/25 rounded" />
                  </div>
                  <div className="text-[9px] opacity-70">Technoblick Collaboration</div>
                </>
              )}
            </div>
          </div>
        </div>

        {/* Project Title & Short Description */}
        <div>
          <h3 className="text-xl md:text-2xl font-heading font-bold text-burgundy-950 dark:text-champagne-light group-hover:text-burgundy-600 dark:group-hover:text-champagne transition-colors">
            {project.title}
          </h3>
          <p className="mt-2 text-sm text-burgundy-900/80 dark:text-burgundy-200/80 line-clamp-2 leading-relaxed">
            {project.description}
          </p>
        </div>

        {/* Tech Stack Chips */}
        <div className="flex flex-wrap gap-1.5 mt-2">
          {project.tech.slice(0, isLarge ? 6 : 4).map((t) => (
            <span
              key={t}
              className="text-[11px] px-2.5 py-0.5 rounded-full bg-burgundy-100 dark:bg-burgundy-800/60 text-burgundy-800 dark:text-burgundy-200 border border-burgundy-300/40 dark:border-burgundy-700/50"
            >
              {t}
            </span>
          ))}
          {project.tech.length > (isLarge ? 6 : 4) && (
            <span className="text-[11px] px-2 py-0.5 text-burgundy-600 dark:text-rose-soft">
              +{project.tech.length - (isLarge ? 6 : 4)} more
            </span>
          )}
        </div>
      </div>

      {/* Card Actions (click prevention for nested links) */}
      <div
        className="flex items-center justify-between gap-3 mt-6 pt-4 border-t border-burgundy-200/40 dark:border-burgundy-800/40"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={() => onOpenModal(project)}
          className="text-xs font-semibold text-burgundy-700 dark:text-champagne hover:underline inline-flex items-center gap-1"
        >
          View Case Study & Highlights &rarr;
        </button>

        <div className="flex items-center gap-2">
          {project.links.playStore && (
            <Button
              href={project.links.playStore}
              external
              size="sm"
              variant="outline"
              aria-label={`Open ${project.title} on Google Play`}
              rightIcon={<ExternalLink className="w-3.5 h-3.5" />}
            >
              Play Store
            </Button>
          )}

          {project.links.github && (
            <Button
              href={project.links.github}
              external
              size="sm"
              variant="ghost"
              aria-label={`View ${project.title} on GitHub`}
              leftIcon={<Github className="w-3.5 h-3.5" />}
            >
              Code
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}

