import React from "react";
import { cn } from "@/lib/utils";

interface BentoCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  variant?: "default" | "solid" | "gradient" | "glass" | "accent";
  span?: "col-1" | "col-2" | "col-3" | "row-2";
  hoverEffect?: boolean;
}

export function BentoCard({
  children,
  className,
  variant = "glass",
  span,
  hoverEffect = true,
  ...props
}: BentoCardProps) {
  const variantStyles = {
    glass:
      "bg-white/70 dark:bg-burgundy-900/40 backdrop-blur-md border border-burgundy-200/50 dark:border-burgundy-800/60 text-burgundy-950 dark:text-burgundy-100 shadow-sm",
    default:
      "bg-burgundy-100/60 dark:bg-burgundy-900/60 border border-burgundy-300/40 dark:border-burgundy-800/80 text-burgundy-950 dark:text-burgundy-100",
    solid:
      "bg-burgundy-800 dark:bg-burgundy-950 text-white border border-burgundy-700/60 dark:border-burgundy-800/60 shadow-lg",
    gradient:
      "bg-gradient-to-br from-burgundy-800 via-burgundy-900 to-burgundy-950 text-white border border-burgundy-700/50 shadow-xl",
    accent:
      "bg-gradient-to-br from-burgundy-900/90 to-burgundy-950 border border-champagne/30 text-white shadow-xl",
  };

  const spanStyles = {
    "col-1": "col-span-1",
    "col-2": "col-span-1 md:col-span-2",
    "col-3": "col-span-1 md:col-span-2 lg:col-span-3",
    "row-2": "row-span-2",
  };

  return (
    <div
      className={cn(
        "rounded-3xl p-6 md:p-8 relative overflow-hidden transition-all duration-300",
        variantStyles[variant],
        span ? spanStyles[span] : "",
        hoverEffect &&
          "motion-safe:hover:-translate-y-1 motion-safe:hover:shadow-xl motion-safe:hover:border-burgundy-400/40 dark:motion-safe:hover:border-burgundy-600/60",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

