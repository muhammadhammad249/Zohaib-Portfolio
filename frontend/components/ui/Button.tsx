import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "gold";
  size?: "sm" | "md" | "lg";
  href?: string;
  download?: boolean | string;
  external?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

export function Button({
  children,
  variant = "primary",
  size = "md",
  href,
  download,
  external,
  leftIcon,
  rightIcon,
  className,
  disabled,
  ...props
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center font-medium rounded-full transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-burgundy-500 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none select-none";

  const variantStyles = {
    primary:
      "bg-burgundy-600 hover:bg-burgundy-700 text-white shadow-md hover:shadow-lg motion-safe:hover:-translate-y-0.5 active:translate-y-0 border border-burgundy-500/40",
    secondary:
      "bg-burgundy-900 hover:bg-burgundy-950 text-white dark:bg-burgundy-800/80 dark:hover:bg-burgundy-700 border border-burgundy-700/60 shadow-sm motion-safe:hover:-translate-y-0.5",
    outline:
      "bg-transparent hover:bg-burgundy-100/60 dark:hover:bg-burgundy-900/60 text-burgundy-900 dark:text-rose-soft border border-burgundy-400 dark:border-burgundy-700 motion-safe:hover:-translate-y-0.5",
    ghost:
      "bg-transparent hover:bg-burgundy-200/40 dark:hover:bg-burgundy-900/40 text-burgundy-900 dark:text-burgundy-100",
    gold:
      "bg-gradient-to-r from-champagne to-champagne-light hover:from-champagne-dark hover:to-champagne text-burgundy-950 font-semibold shadow-md motion-safe:hover:-translate-y-0.5",
  };

  const sizeStyles = {
    sm: "text-xs px-4 py-2 gap-1.5",
    md: "text-sm px-6 py-2.5 gap-2",
    lg: "text-base px-7 py-3 gap-2.5",
  };

  const combinedClass = cn(
    baseStyles,
    variantStyles[variant],
    sizeStyles[size],
    className
  );

  if (href) {
    if (external) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={combinedClass}
          download={download}
        >
          {leftIcon && <span className="shrink-0">{leftIcon}</span>}
          <span>{children}</span>
          {rightIcon && <span className="shrink-0">{rightIcon}</span>}
        </a>
      );
    }
    return (
      <Link href={href} className={combinedClass} download={download}>
        {leftIcon && <span className="shrink-0">{leftIcon}</span>}
        <span>{children}</span>
        {rightIcon && <span className="shrink-0">{rightIcon}</span>}
      </Link>
    );
  }

  return (
    <button className={combinedClass} disabled={disabled} {...props}>
      {leftIcon && <span className="shrink-0">{leftIcon}</span>}
      <span>{children}</span>
      {rightIcon && <span className="shrink-0">{rightIcon}</span>}
    </button>
  );
}

