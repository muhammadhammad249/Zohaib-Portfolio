"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import { NAV_LINKS } from "@/lib/constants";
import { Button } from "@/components/ui/Button";
import { X, Download } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  activeSection: string;
}

export function MobileMenu({ isOpen, onClose, activeSection }: MobileMenuProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 lg:hidden" role="dialog" aria-modal="true" aria-label="Mobile Navigation">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-burgundy-950/80 backdrop-blur-sm transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Drawer */}
      <div className="fixed inset-y-0 right-0 w-full max-w-xs bg-white dark:bg-burgundy-900 border-l border-burgundy-200 dark:border-burgundy-800 shadow-2xl p-6 flex flex-col justify-between z-10">
        <div>
          {/* Header */}
          <div className="flex items-center justify-between pb-6 border-b border-burgundy-200/60 dark:border-burgundy-800/80">
            <span className="font-heading font-black text-2xl tracking-wider text-burgundy-600 dark:text-champagne">
              ZR
            </span>
            <div className="flex items-center gap-2">
              <ThemeToggle />
              <button
                type="button"
                onClick={onClose}
                className="p-2 rounded-full text-burgundy-900 dark:text-burgundy-100 hover:bg-burgundy-100 dark:hover:bg-burgundy-800"
                aria-label="Close navigation menu"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Navigation Links */}
          <nav className="mt-6 flex flex-col gap-2">
            {NAV_LINKS.map((link) => {
              const isActive = activeSection === link.href.replace("#", "");
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={onClose}
                  className={`px-4 py-3 rounded-2xl text-base font-medium transition-all ${
                    isActive
                      ? "bg-burgundy-600 text-white font-semibold"
                      : "text-burgundy-900 dark:text-burgundy-100 hover:bg-burgundy-100 dark:hover:bg-burgundy-800/60"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>
        </div>

        {/* Footer Actions */}
        <div className="pt-6 border-t border-burgundy-200/60 dark:border-burgundy-800/80 flex flex-col gap-3">
          <Button
            href="/Zohaib_Rukhsar_Resume_Flutter_Developer.pdf"
            download="Zohaib_Rukhsar_Resume_Flutter_Developer.pdf"
            variant="gold"
            size="md"
            className="w-full"
            leftIcon={<Download className="w-4 h-4" />}
          >
            Download CV
          </Button>
          <div className="text-center text-xs text-burgundy-800/70 dark:text-burgundy-300/70">
            Zohaib Rukhsar &bull; Lahore, PK
          </div>
        </div>
      </div>
    </div>
  );
}

