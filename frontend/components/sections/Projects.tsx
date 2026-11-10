"use client";

import React, { useState, useMemo } from "react";
import dynamic from "next/dynamic";
import { Section } from "@/components/ui/Section";
import { BentoCard } from "@/components/ui/BentoCard";
import { Reveal } from "@/components/ui/Reveal";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { projectsData, Project } from "@/data/projects";
import { profileData } from "@/data/profile";
import { Github, ArrowRight } from "lucide-react";

// Dynamic import for modal to optimize performance as requested
const ProjectModal = dynamic(
  () => import("@/components/ui/ProjectModal").then((mod) => mod.ProjectModal),
  { ssr: false }
);

export function Projects() {
  const [activeFilter, setActiveFilter] = useState<"All" | "Flutter" | "Android">("All");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects = useMemo(() => {
    if (activeFilter === "All") return projectsData;
    return projectsData.filter((p) => p.platform === activeFilter);
  }, [activeFilter]);

  return (
    <Section
      id="projects"
      badge="Portfolio Work"
      title="Featured Mobile Applications"
      subtitle="Production fintech architectures, client deliverables, and Google Play Store published applications."
    >
      {/* Platform Filter Chips */}
      <div className="flex items-center justify-center gap-2 mb-10">
        {(["All", "Flutter", "Android"] as const).map((filter) => {
          const isActive = activeFilter === filter;
          return (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              type="button"
              className={`px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-burgundy-500 ${
                isActive
                  ? "bg-burgundy-600 text-white shadow-md scale-105"
                  : "bg-burgundy-100/60 dark:bg-burgundy-900/40 text-burgundy-900 dark:text-burgundy-200 hover:bg-burgundy-200/60 dark:hover:bg-burgundy-800/60 border border-burgundy-300/40 dark:border-burgundy-800/60"
              }`}
            >
              {filter}
            </button>
          );
        })}
      </div>

      {/* Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((project) => (
          <Reveal key={project.id} className={project.featured ? "md:col-span-2" : "col-span-1"}>
            <ProjectCard
              project={project}
              onOpenModal={(proj) => setSelectedProject(proj)}
            />
          </Reveal>
        ))}

        {/* "More on GitHub" Bento Card */}
        <Reveal className="col-span-1">
          <BentoCard
            variant="gradient"
            className="h-full flex flex-col justify-between p-8 text-white relative overflow-hidden group border-burgundy-600/60 shadow-xl"
          >
            <div>
              <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center mb-5 border border-white/20">
                <Github className="w-6 h-6 text-champagne" />
              </div>
              <h3 className="text-xl sm:text-2xl font-heading font-bold text-white group-hover:text-champagne transition-colors">
                More on GitHub
              </h3>
              <p className="mt-3 text-sm text-burgundy-200 leading-relaxed font-sans">
                Browse open-source mobile packages, mini apps, architecture prototypes, and algorithmic exercises directly on my GitHub.
              </p>
            </div>

            <a
              href={profileData.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-champagne hover:text-white transition-colors"
            >
              <span>Explore @zohaib-malik6</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>
          </BentoCard>
        </Reveal>
      </div>

      {/* Accessible Project Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </Section>
  );
}

