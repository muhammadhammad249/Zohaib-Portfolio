import React from "react";
import { cn } from "@/lib/utils";

interface ChipProps extends React.HTMLAttributes<HTMLSpanElement> {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "accent" | "outline" | "active";
  size?: "sm" | "md" | "lg";
  onClick?: () => void;
}

export function Chip({
  children,
  variant = "primary",
  size = "md",
  className,
  onClick,
  ...props
}: ChipProps) {
  const variantStyles = {
    primary:
      "bg-burgundy-600/15 text-burgundy-800 dark:bg-burgundy-800/50 dark:text-burgundy-200 border border-burgundy-400/25",
    secondary:
      "bg-burgundy-900/10 text-burgundy-900 dark:bg-burgundy-900/60 dark:text-rose-soft border border-burgundy-700/30",
    accent:
      "bg-champagne/15 text-burgundy-950 dark:text-champagne-light border border-champagne/40",
    outline:
      "bg-transparent text-burgundy-800 dark:text-burgundy-200 border border-burgundy-300 dark:border-burgundy-700/70 hover:border-burgundy-500",
    active:
      "bg-burgundy-600 text-white border border-burgundy-500 shadow-md font-semibold",
  };

  const sizeStyles = {
    sm: "text-xs px-2.5 py-1",
    md: "text-xs md:text-sm px-3.5 py-1.5",
    lg: "text-sm md:text-base px-4 py-2",
  };

  const isClickable = Boolean(onClick);

  return (
    <span
      onClick={onClick}
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full font-medium transition-all duration-200 select-none",
        variantStyles[variant],
        sizeStyles[size],
        isClickable && "cursor-pointer hover:scale-105 active:scale-95",
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}

