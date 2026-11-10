"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { useReducedMotion } from "@/hooks/useReducedMotion";

interface BubbleProps {
  className?: string;
  size?: "sm" | "md" | "lg" | "xl";
  variant?: "primary" | "champagne" | "rose" | "dark";
  animation?: "float" | "reverse" | "none";
}

export function Bubble({
  className,
  size = "md",
  variant = "primary",
  animation = "float",
}: BubbleProps) {
  const reducedMotion = useReducedMotion();

  const sizeClasses = {
    sm: "w-48 h-48 blur-2xl",
    md: "w-72 h-72 md:w-96 md:h-96 blur-3xl",
    lg: "w-96 h-96 md:w-[32rem] md:h-[32rem] blur-[90px]",
    xl: "w-[28rem] h-[28rem] md:w-[42rem] md:h-[42rem] blur-[110px]",
  };

  const variantClasses = {
    primary: "bg-burgundy-600/35 dark:bg-burgundy-700/25",
    champagne: "bg-champagne/20 dark:bg-champagne/15",
    rose: "bg-rose-soft/30 dark:bg-rose-soft/15",
    dark: "bg-burgundy-900/60 dark:bg-burgundy-950/70",
  };

  const animationClasses = {
    float: "motion-safe:animate-float-slow",
    reverse: "motion-safe:animate-float-reverse",
    none: "",
  };

  return (
    <div
      aria-hidden="true"
      className={cn(
        "pointer-events-none absolute rounded-full select-none -z-10 transition-opacity duration-1000",
        sizeClasses[size],
        variantClasses[variant],
        !reducedMotion ? animationClasses[animation] : "",
        className
      )}
    />
  );
}

