"use client";

import React from "react";
import Link from "next/link";
import { NAV_LINKS } from "@/lib/constants";
import { ArrowUp, Github, Mail, MessageCircle } from "lucide-react";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-burgundy-950 text-white border-t border-burgundy-900/80 pt-16 pb-12 overflow-hidden">
      {/* Background subtle radial glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-48 bg-burgundy-700/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-burgundy-900">
          {/* Brand Info */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-burgundy-600 to-burgundy-900 flex items-center justify-center text-champagne font-heading font-black text-base border border-champagne/40">
                ZR
              </div>
              <span className="font-heading font-bold text-xl text-champagne-light">
                Zohaib Rukhsar
              </span>
            </div>
            <p className="text-burgundy-200/80 text-sm max-w-md leading-relaxed">
              Flutter Developer & Cross-Platform Mobile Engineer. Building scalable, reactive mobile applications with Dart, BLoC, and Clean Architecture, plus native Android in Kotlin, Java, and XML.
            </p>
            <div className="text-xs text-rose-soft/80 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              <span>Available for full-time & part-time roles &bull; Lahore, Pakistan</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-champagne">
              Quick Links
            </h4>
            <ul className="space-y-2 text-sm text-burgundy-200/80">
              {NAV_LINKS.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="hover:text-champagne transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div className="space-y-3">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-champagne">
              Direct Channels
            </h4>
            <div className="flex flex-col gap-2.5 text-sm text-burgundy-200/80">
              <a
                href="mailto:zohaibmalikzm401@gmail.com"
                className="hover:text-champagne transition-colors flex items-center gap-2"
              >
                <Mail className="w-4 h-4 text-rose-soft" />
                <span>zohaibmalikzm401@gmail.com</span>
              </a>
              <a
                href="https://wa.me/923420442565"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-champagne transition-colors flex items-center gap-2"
              >
                <MessageCircle className="w-4 h-4 text-emerald-400" />
                <span>+92 342 0442565 (WhatsApp)</span>
              </a>
              <a
                href="https://github.com/zohaib-malik6"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-champagne transition-colors flex items-center gap-2"
              >
                <Github className="w-4 h-4 text-champagne" />
                <span>github.com/zohaib-malik6</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-burgundy-300/70">
          <p>&copy; {currentYear} Zohaib Rukhsar. All rights reserved.</p>

          <button
            onClick={scrollToTop}
            type="button"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-burgundy-900/80 hover:bg-burgundy-800 text-champagne border border-burgundy-800/80 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-burgundy-500"
            aria-label="Scroll back to top"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}

