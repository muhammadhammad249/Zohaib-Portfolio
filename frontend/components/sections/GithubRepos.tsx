"use client";

import React, { useEffect, useState } from "react";
import { Section } from "@/components/ui/Section";
import { BentoCard } from "@/components/ui/BentoCard";
import { Reveal } from "@/components/ui/Reveal";
import { getGithubRepos, GithubRepo } from "@/lib/api";
import { Github, Star, GitFork, ExternalLink, Code2 } from "lucide-react";

const INITIAL_REPOS: GithubRepo[] = [
  {
    name: "flutter-fintech-wallet",
    description: "Fintech mobile wallet implementation with BLoC state management and REST API integration.",
    language: "Dart",
    stars: 3,
    url: "https://github.com/zohaib-malik6",
  },
  {
    name: "qr-vertex-android",
    description: "Native Android application for QR code generation and barcode scanning with Kotlin and XML.",
    language: "Kotlin",
    stars: 2,
    url: "https://github.com/zohaib-malik6",
  },
  {
    name: "still-blink-mobile",
    description: "Cross-platform mobile application built with Flutter, Dart and BLoC architecture.",
    language: "Dart",
    stars: 1,
    url: "https://github.com/zohaib-malik6",
  },
  {
    name: "nectar-ui-flutter",
    description: "Grocery e-commerce responsive UI case study featuring custom animated Flutter widgets.",
    language: "Dart",
    stars: 2,
    url: "https://github.com/zohaib-malik6",
  },
];

export function GithubRepos() {
  const [repos, setRepos] = useState<GithubRepo[]>(INITIAL_REPOS);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    let isMounted = true;
    async function loadRepos() {
      try {
        const data = await getGithubRepos();
        if (isMounted && data.length > 0) {
          setRepos(data.slice(0, 4));
        }
      } catch (err) {
        console.error("Failed to load GitHub repos", err);
      }
    }
    loadRepos();
    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <Section
      id="github-repos"
      badge="Code Repositories"
      title="Recent GitHub Activity"
      subtitle="Public repositories, Dart libraries, and native experiments streamed from GitHub API."
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {loading ? (
          // Skeleton Loaders
          Array.from({ length: 4 }).map((_, i) => (
            <div
              key={i}
              className="rounded-3xl p-6 bg-burgundy-900/20 border border-burgundy-800/40 animate-pulse h-48 flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="h-5 w-2/3 bg-burgundy-800/40 rounded" />
                <div className="h-3 w-full bg-burgundy-800/30 rounded" />
                <div className="h-3 w-4/5 bg-burgundy-800/30 rounded" />
              </div>
              <div className="h-4 w-1/3 bg-burgundy-800/40 rounded" />
            </div>
          ))
        ) : repos.length > 0 ? (
          repos.map((repo, idx) => (
            <Reveal key={repo.name} delay={idx * 0.08} className="col-span-1 flex">
              <BentoCard
                variant="glass"
                className="w-full flex flex-col justify-between p-6 transition-all duration-300 hover:border-burgundy-500/60"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <Github className="w-5 h-5 text-burgundy-600 dark:text-champagne" />
                    <a
                      href={repo.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1 text-burgundy-700 dark:text-burgundy-300 hover:text-burgundy-950 dark:hover:text-white"
                      aria-label={`View ${repo.name} repository on GitHub`}
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>

                  <h3 className="font-heading font-bold text-base text-burgundy-950 dark:text-champagne-light line-clamp-1 hover:underline">
                    <a href={repo.url} target="_blank" rel="noopener noreferrer">
                      {repo.name}
                    </a>
                  </h3>

                  <p className="mt-2 text-xs text-burgundy-900/80 dark:text-burgundy-200/80 line-clamp-3 leading-relaxed">
                    {repo.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-burgundy-200/50 dark:border-burgundy-800/60 flex items-center justify-between text-xs text-burgundy-800/70 dark:text-burgundy-300/70">
                  <span className="flex items-center gap-1.5 font-medium">
                    <Code2 className="w-3.5 h-3.5 text-rose-soft" />
                    {repo.language}
                  </span>
                  <span className="flex items-center gap-1">
                    <Star className="w-3.5 h-3.5 text-amber-500" />
                    {repo.stars}
                  </span>
                </div>
              </BentoCard>
            </Reveal>
          ))
        ) : (
          <div className="col-span-full text-center py-8 text-sm text-burgundy-700 dark:text-burgundy-300">
            No public repositories found. Check out the GitHub profile directly.
          </div>
        )}
      </div>
    </Section>
  );
}

