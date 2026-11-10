"use client";

import React, { useState } from "react";
import { Section } from "@/components/ui/Section";
import { BentoCard } from "@/components/ui/BentoCard";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { profileData } from "@/data/profile";
import { submitContactForm } from "@/lib/api";
import {
  Mail,
  Phone,
  MessageCircle,
  Github,
  Download,
  Send,
  CheckCircle2,
  AlertCircle,
  Loader2,
  ExternalLink,
} from "lucide-react";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    honeypot: "",
  });

  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [feedbackMessage, setFeedbackMessage] = useState("");
  const [validationErrors, setValidationErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const errors: Record<string, string> = {};
    if (!formData.name.trim() || formData.name.trim().length < 2) {
      errors.name = "Name must be at least 2 characters";
    }
    if (!formData.email.trim() || !/^\S+@\S+\.\S+$/.test(formData.email)) {
      errors.email = "Please enter a valid email address";
    }
    if (!formData.subject.trim() || formData.subject.trim().length < 3) {
      errors.subject = "Subject must be at least 3 characters";
    }
    if (!formData.message.trim() || formData.message.trim().length < 10) {
      errors.message = "Message must be at least 10 characters";
    }
    setValidationErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus("submitting");
    setFeedbackMessage("");

    try {
      const response = await submitContactForm(formData);

      if (response.success) {
        setStatus("success");
        setFeedbackMessage(
          response.message || "Message sent successfully! Thank you for getting in touch."
        );
        setFormData({ name: "", email: "", subject: "", message: "", honeypot: "" });
      } else {
        // Fallback: If backend is unreachable or returns error (e.g. SMTP 503)
        setStatus("error");
        setFeedbackMessage(
          response.message || "Server service unavailable. Opening your direct email client..."
        );

        // Open prefilled mailto fallback
        setTimeout(() => {
          const mailtoUrl = `mailto:${profileData.email}?subject=${encodeURIComponent(
            formData.subject
          )}&body=${encodeURIComponent(
            `Hi Zohaib,\n\nName: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`
          )}`;
          window.location.href = mailtoUrl;
        }, 1200);
      }
    } catch (err: any) {
      setStatus("error");
      setFeedbackMessage("Network error encountered. Opening your direct email client...");

      setTimeout(() => {
        const mailtoUrl = `mailto:${profileData.email}?subject=${encodeURIComponent(
          formData.subject
        )}&body=${encodeURIComponent(
          `Hi Zohaib,\n\nName: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`
        )}`;
        window.location.href = mailtoUrl;
      }, 1200);
    }
  };

  return (
    <Section
      id="contact"
      badge="Let's Connect"
      title="Start a Conversation"
      subtitle="Looking for a Flutter & Android engineer for full-time or project-based roles? Reach out through direct channels or send a message below."
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Direct Channel Bento Cards (spans 5 cols) */}
        <div className="lg:col-span-5 space-y-4">
          {/* Email Card */}
          <Reveal>
            <BentoCard variant="glass" className="p-5 sm:p-6">
              <a
                href={`mailto:${profileData.email}`}
                className="flex items-center gap-4 group"
              >
                <div className="w-12 h-12 rounded-2xl bg-burgundy-600/15 text-burgundy-700 dark:text-champagne flex items-center justify-center shrink-0 border border-burgundy-400/20 group-hover:scale-105 transition-transform">
                  <Mail className="w-6 h-6" />
                </div>
                <div className="overflow-hidden">
                  <div className="text-xs uppercase font-semibold text-burgundy-700/80 dark:text-rose-soft/80">
                    Direct Email
                  </div>
                  <div className="text-sm sm:text-base font-bold text-burgundy-950 dark:text-white truncate group-hover:text-burgundy-600 dark:group-hover:text-champagne transition-colors">
                    {profileData.email}
                  </div>
                </div>
              </a>
            </BentoCard>
          </Reveal>

          {/* WhatsApp / Phone Card */}
          <Reveal delay={0.08}>
            <BentoCard variant="glass" className="p-5 sm:p-6">
              <div className="flex items-center justify-between gap-2">
                <a
                  href={`tel:${profileData.phone.replace(/\s+/g, "")}`}
                  className="flex items-center gap-4 group overflow-hidden"
                >
                  <div className="w-12 h-12 rounded-2xl bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0 border border-emerald-500/30 group-hover:scale-105 transition-transform">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div className="overflow-hidden">
                    <div className="text-xs uppercase font-semibold text-emerald-700 dark:text-emerald-300">
                      Phone & WhatsApp
                    </div>
                    <div className="text-sm sm:text-base font-bold text-burgundy-950 dark:text-white truncate">
                      {profileData.phone}
                    </div>
                  </div>
                </a>

                <Button
                  href={profileData.whatsappUrl}
                  external
                  size="sm"
                  variant="outline"
                  aria-label="Chat on WhatsApp"
                  leftIcon={<MessageCircle className="w-3.5 h-3.5 text-emerald-500" />}
                >
                  Chat
                </Button>
              </div>
            </BentoCard>
          </Reveal>

          {/* GitHub Card */}
          <Reveal delay={0.16}>
            <BentoCard variant="glass" className="p-5 sm:p-6">
              <a
                href={profileData.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between group"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-burgundy-900/15 dark:bg-burgundy-800/50 text-burgundy-900 dark:text-champagne flex items-center justify-center shrink-0 border border-burgundy-500/30 group-hover:scale-105 transition-transform">
                    <Github className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-xs uppercase font-semibold text-burgundy-700/80 dark:text-rose-soft/80">
                      GitHub Profile
                    </div>
                    <div className="text-sm sm:text-base font-bold text-burgundy-950 dark:text-white group-hover:text-burgundy-600 dark:group-hover:text-champagne transition-colors">
                      @zohaib-malik6
                    </div>
                  </div>
                </div>
                <ExternalLink className="w-4 h-4 text-burgundy-600 dark:text-champagne shrink-0" />
              </a>
            </BentoCard>
          </Reveal>

          {/* Download CV Bento Card */}
          <Reveal delay={0.24}>
            <BentoCard variant="gradient" className="p-6 text-white">
              <div className="flex items-center justify-between gap-4">
                <div className="space-y-1">
                  <div className="text-xs uppercase font-semibold text-champagne">
                    Resume / Curriculum Vitae
                  </div>
                  <h4 className="font-heading font-bold text-lg text-white">
                    Zohaib Rukhsar CV
                  </h4>
                  <p className="text-xs text-burgundy-200">
                    PDF format &bull; Mobile & Android details
                  </p>
                </div>
                <Button
                  href={profileData.resumePath}
                  download="Zohaib_Rukhsar_Resume_Flutter_Developer.pdf"
                  variant="gold"
                  size="sm"
                  leftIcon={<Download className="w-4 h-4" />}
                >
                  Download
                </Button>
              </div>
            </BentoCard>
          </Reveal>
        </div>

        {/* Right Column: Contact Form Bento Card (spans 7 cols) */}
        <Reveal delay={0.12} className="lg:col-span-7">
          <BentoCard variant="glass" className="p-6 sm:p-10 border-burgundy-300/50 dark:border-burgundy-700/50">
            <h3 className="text-2xl font-heading font-bold text-burgundy-950 dark:text-champagne-light mb-2">
              Send an Instant Inquiry
            </h3>
            <p className="text-sm text-burgundy-900/80 dark:text-burgundy-200/80 mb-6">
              Fill out the form below. Messages are routed directly to my inbox with instant notifications.
            </p>

            {/* Status alerts */}
            {status === "success" && (
              <div
                className="p-4 mb-6 rounded-2xl bg-emerald-500/15 border border-emerald-500/30 text-emerald-800 dark:text-emerald-200 flex items-start gap-3"
                role="alert"
              >
                <CheckCircle2 className="w-5 h-5 shrink-0 text-emerald-500 mt-0.5" />
                <span className="text-sm">{feedbackMessage}</span>
              </div>
            )}

            {status === "error" && (
              <div
                className="p-4 mb-6 rounded-2xl bg-rose-500/15 border border-rose-500/30 text-rose-900 dark:text-rose-200 flex items-start gap-3"
                role="alert"
              >
                <AlertCircle className="w-5 h-5 shrink-0 text-rose-500 mt-0.5" />
                <span className="text-sm">{feedbackMessage}</span>
              </div>
            )}

            <form onSubmit={handleSubmit} noValidate className="space-y-4">
              {/* Anti-spam Honeypot Field (hidden from real users) */}
              <div className="hidden" aria-hidden="true">
                <label htmlFor="contact-honeypot">Leave empty</label>
                <input
                  id="contact-honeypot"
                  type="text"
                  tabIndex={-1}
                  autoComplete="off"
                  value={formData.honeypot}
                  onChange={(e) => setFormData({ ...formData, honeypot: e.target.value })}
                />
              </div>

              {/* Name & Email Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="contact-name"
                    className="block text-xs font-semibold uppercase tracking-wider text-burgundy-800 dark:text-burgundy-200 mb-1.5"
                  >
                    Your Name <span className="text-burgundy-500">*</span>
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className={`w-full px-4 py-2.5 rounded-2xl text-sm bg-white/70 dark:bg-burgundy-950/60 border ${
                      validationErrors.name
                        ? "border-rose-500"
                        : "border-burgundy-300 dark:border-burgundy-700"
                    } text-burgundy-950 dark:text-white placeholder-burgundy-400 focus:outline-none focus:ring-2 focus:ring-burgundy-500`}
                    placeholder="e.g. Sarah Jenkins"
                  />
                  {validationErrors.name && (
                    <p className="text-xs text-rose-500 mt-1">{validationErrors.name}</p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="contact-email"
                    className="block text-xs font-semibold uppercase tracking-wider text-burgundy-800 dark:text-burgundy-200 mb-1.5"
                  >
                    Your Email <span className="text-burgundy-500">*</span>
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className={`w-full px-4 py-2.5 rounded-2xl text-sm bg-white/70 dark:bg-burgundy-950/60 border ${
                      validationErrors.email
                        ? "border-rose-500"
                        : "border-burgundy-300 dark:border-burgundy-700"
                    } text-burgundy-950 dark:text-white placeholder-burgundy-400 focus:outline-none focus:ring-2 focus:ring-burgundy-500`}
                    placeholder="sarah@example.com"
                  />
                  {validationErrors.email && (
                    <p className="text-xs text-rose-500 mt-1">{validationErrors.email}</p>
                  )}
                </div>
              </div>

              {/* Subject */}
              <div>
                <label
                  htmlFor="contact-subject"
                  className="block text-xs font-semibold uppercase tracking-wider text-burgundy-800 dark:text-burgundy-200 mb-1.5"
                >
                  Subject <span className="text-burgundy-500">*</span>
                </label>
                <input
                  id="contact-subject"
                  type="text"
                  required
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className={`w-full px-4 py-2.5 rounded-2xl text-sm bg-white/70 dark:bg-burgundy-950/60 border ${
                    validationErrors.subject
                      ? "border-rose-500"
                      : "border-burgundy-300 dark:border-burgundy-700"
                  } text-burgundy-950 dark:text-white placeholder-burgundy-400 focus:outline-none focus:ring-2 focus:ring-burgundy-500`}
                  placeholder="e.g. Flutter Developer Role / Project Discussion"
                />
                {validationErrors.subject && (
                  <p className="text-xs text-rose-500 mt-1">{validationErrors.subject}</p>
                )}
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="contact-message"
                  className="block text-xs font-semibold uppercase tracking-wider text-burgundy-800 dark:text-burgundy-200 mb-1.5"
                >
                  Message <span className="text-burgundy-500">*</span>
                </label>
                <textarea
                  id="contact-message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className={`w-full px-4 py-3 rounded-2xl text-sm bg-white/70 dark:bg-burgundy-950/60 border ${
                    validationErrors.message
                      ? "border-rose-500"
                      : "border-burgundy-300 dark:border-burgundy-700"
                  } text-burgundy-950 dark:text-white placeholder-burgundy-400 focus:outline-none focus:ring-2 focus:ring-burgundy-500 resize-none`}
                  placeholder="Tell me about your mobile project, tech stack requirements, or team timeline..."
                />
                {validationErrors.message && (
                  <p className="text-xs text-rose-500 mt-1">{validationErrors.message}</p>
                )}
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <Button
                  type="submit"
                  disabled={status === "submitting"}
                  variant="primary"
                  size="lg"
                  className="w-full sm:w-auto"
                  rightIcon={
                    status === "submitting" ? (
                      <Loader2 className="w-4 h-4 animate-spin" />
                    ) : (
                      <Send className="w-4 h-4" />
                    )
                  }
                >
                  {status === "submitting" ? "Sending Message..." : "Send Message"}
                </Button>
              </div>
            </form>
          </BentoCard>
        </Reveal>
      </div>
    </Section>
  );
}

