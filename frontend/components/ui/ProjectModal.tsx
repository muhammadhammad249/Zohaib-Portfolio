"use client";

import React, { useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Project } from "@/data/projects";
import { Chip } from "./Chip";
import { Button } from "./Button";
import { X, CheckCircle2, Github, ExternalLink, Smartphone } from "lucide-react";
import { useReducedMotion } from "@/hooks/useReducedMotion";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const reducedMotion = useReducedMotion();

  // Close on Escape & trap focus
  useEffect(() => {
    if (!project) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
        return;
      }

      if (e.key === "Tab" && modalRef.current) {
        const focusableElements = modalRef.current.querySelectorAll<HTMLElement>(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        const firstElement = focusableElements[0];
        const lastElement = focusableElements[focusableElements.length - 1];

        if (e.shiftKey) {
          if (document.activeElement === firstElement) {
            e.preventDefault();
            lastElement?.focus();
          }
        } else {
          if (document.activeElement === lastElement) {
            e.preventDefault();
            firstElement?.focus();
          }
        }
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    // Prevent body scrolling
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    // Set initial focus
    setTimeout(() => {
      closeButtonRef.current?.focus();
    }, 50);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = originalOverflow;
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <AnimatePresence>
      <div
        className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
      >
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: reducedMotion ? 0 : 0.2 }}
          onClick={onClose}
          className="fixed inset-0 bg-burgundy-950/80 backdrop-blur-md"
          aria-hidden="true"
        />

        {/* Modal Window */}
        <motion.div
          ref={modalRef}
          initial={reducedMotion ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={reducedMotion ? { opacity: 0 } : { opacity: 0, scale: 0.95, y: 15 }}
          transition={{ duration: reducedMotion ? 0 : 0.25, ease: "easeOut" }}
          className="relative w-full max-w-2xl bg-white dark:bg-burgundy-900 border border-burgundy-300 dark:border-burgundy-700 rounded-3xl shadow-2xl p-6 sm:p-8 z-10 max-h-[90vh] overflow-y-auto focus:outline-none"
        >
          {/* Header */}
          <div className="flex items-start justify-between gap-4 border-b border-burgundy-200/60 dark:border-burgundy-800/80 pb-4">
            <div>
              <div className="flex items-center gap-2 mb-2 flex-wrap">
                <Chip variant={project.platform === "Flutter" ? "primary" : "secondary"} size="sm">
                  <Smartphone className="w-3.5 h-3.5 mr-1" />
                  {project.platform}
                </Chip>
                {project.isLiveOnPlayStore && (
                  <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-500/20 text-emerald-800 dark:text-emerald-300 border border-emerald-500/40">
                    Live on Google Play
                  </span>
                )}
                <span className="text-xs text-burgundy-700/80 dark:text-burgundy-300/80 font-mono">
                  {project.category}
                </span>
              </div>
              <h2 id="modal-title" className="text-2xl sm:text-3xl font-heading font-bold text-burgundy-950 dark:text-champagne-light">
                {project.title}
              </h2>
            </div>

            <button
              ref={closeButtonRef}
              onClick={onClose}
              type="button"
              className="p-2 rounded-full text-burgundy-800 dark:text-burgundy-200 hover:bg-burgundy-100 dark:hover:bg-burgundy-800 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-burgundy-500"
              aria-label="Close project modal"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Description */}
          <div className="mt-6 space-y-6">
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-burgundy-700 dark:text-rose-soft mb-2">
                Overview
              </h3>
              <p className="text-base text-burgundy-900/90 dark:text-burgundy-100 leading-relaxed font-sans">
                {project.description}
              </p>
            </div>

            {/* Key Engineering Highlights */}
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-burgundy-700 dark:text-rose-soft mb-3">
                Key Engineering Highlights
              </h3>
              <ul className="space-y-2.5">
                {project.highlights.map((highlight, index) => (
                  <li key={index} className="flex items-start gap-2.5 text-sm sm:text-base text-burgundy-900/85 dark:text-burgundy-200/90">
                    <CheckCircle2 className="w-5 h-5 text-burgundy-600 dark:text-champagne shrink-0 mt-0.5" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Tech Stack */}
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-burgundy-700 dark:text-rose-soft mb-2">
                Technologies & Architecture
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((item) => (
                  <Chip key={item} variant="primary" size="sm">
                    {item}
                  </Chip>
                ))}
              </div>
            </div>

            {/* Modal Links Footer */}
            <div className="pt-6 border-t border-burgundy-200/60 dark:border-burgundy-800/80 flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                {project.links.playStore && (
                  <Button
                    href={project.links.playStore}
                    external
                    variant="primary"
                    rightIcon={<ExternalLink className="w-4 h-4" />}
                  >
                    View on Google Play
                  </Button>
                )}
                {project.links.github && (
                  <Button
                    href={project.links.github}
                    external
                    variant="secondary"
                    leftIcon={<Github className="w-4 h-4" />}
                  >
                    GitHub Source
                  </Button>
                )}
              </div>

              <Button variant="ghost" onClick={onClose}>
                Close
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}

