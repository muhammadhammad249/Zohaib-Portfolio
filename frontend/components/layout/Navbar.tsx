"use client";

import React, { useState } from "react";
import Link from "next/link";
import { NAV_LINKS } from "@/lib/constants";
import { Button } from "@/components/ui/Button";
import { ThemeToggle } from "./ThemeToggle";
import { MobileMenu } from "./MobileMenu";
import { ScrollProgress } from "./ScrollProgress";
import { useActiveSection } from "@/hooks/useActiveSection";
import { Download, Menu } from "lucide-react";

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const sectionIds = ["hero", "about", "services", "skills", "experience", "projects", "contact"];
  const activeSection = useActiveSection(sectionIds, 120);

  return (
    <header className="sticky top-0 z-40 w-full transition-all duration-200 bg-white/80 dark:bg-burgundy-950/80 backdrop-blur-md border-b border-burgundy-200/50 dark:border-burgundy-900/60 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo "ZR" */}
          <Link
            href="#hero"
            className="flex items-center gap-2 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-burgundy-500 rounded-full"
            aria-label="Zohaib Rukhsar Home"
          >
            <div className="w-11 h-11 rounded-full bg-gradient-to-br from-burgundy-600 via-burgundy-800 to-burgundy-950 flex items-center justify-center text-champagne font-heading font-black text-lg tracking-wider border border-champagne/40 shadow-md group-hover:scale-105 transition-transform duration-200">
              ZR
            </div>
            <span className="hidden sm:inline font-heading font-bold text-base text-burgundy-950 dark:text-champagne-light tracking-tight">
              Zohaib Rukhsar
            </span>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 bg-burgundy-100/50 dark:bg-burgundy-900/30 p-1.5 rounded-full border border-burgundy-200/60 dark:border-burgundy-800/60 shadow-inner">
            {NAV_LINKS.map((link) => {
              const sectionId = link.href.replace("#", "");
              const isActive = activeSection === sectionId;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-burgundy-500 ${
                    isActive
                      ? "bg-burgundy-600 text-white shadow-sm"
                      : "text-burgundy-900/80 dark:text-burgundy-200/90 hover:text-burgundy-950 dark:hover:text-white hover:bg-white/50 dark:hover:bg-burgundy-800/40"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Right Action Buttons */}
          <div className="flex items-center gap-2 sm:gap-3">
            <ThemeToggle />

            {/* Download CV Pill */}
            <Button
              href="/Zohaib_Rukhsar_Resume_Flutter_Developer.pdf"
              download="Zohaib_Rukhsar_Resume_Flutter_Developer.pdf"
              variant="gold"
              size="sm"
              className="hidden sm:inline-flex"
              leftIcon={<Download className="w-3.5 h-3.5" />}
            >
              Download CV
            </Button>

            {/* Mobile Menu Hamburger Trigger */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="lg:hidden p-2 rounded-full text-burgundy-900 dark:text-burgundy-100 hover:bg-burgundy-100 dark:hover:bg-burgundy-900 border border-burgundy-200 dark:border-burgundy-800"
              aria-label="Open navigation menu"
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Progress Bar under navbar */}
      <ScrollProgress />

      {/* Mobile Menu Drawer */}
      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        activeSection={activeSection}
      />
    </header>
  );
}

