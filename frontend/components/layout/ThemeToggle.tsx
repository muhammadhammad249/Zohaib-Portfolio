"use client";

import React, { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

export function ThemeToggle() {
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Check initial theme from localStorage or default to dark
    const savedTheme = localStorage.getItem("portfolio-theme") as "dark" | "light" | null;
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.classList.toggle("dark", savedTheme === "dark");
    } else {
      // Default to dark as per prompt requirements
      document.documentElement.classList.add("dark");
      setTheme("dark");
    }
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === "dark" ? "light" : "dark";
    setTheme(nextTheme);
    localStorage.setItem("portfolio-theme", nextTheme);

    if (nextTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  if (!mounted) {
    return (
      <div className="w-9 h-9 rounded-full bg-burgundy-900/20 dark:bg-burgundy-800/40 border border-burgundy-400/20 animate-pulse" />
    );
  }

  return (
    <button
      onClick={toggleTheme}
      type="button"
      className="p-2 rounded-full text-burgundy-900 dark:text-champagne-light hover:bg-burgundy-200/50 dark:hover:bg-burgundy-800/50 border border-burgundy-300/40 dark:border-burgundy-700/50 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-burgundy-500"
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
      title={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
    >
      {theme === "dark" ? (
        <Sun className="w-4 h-4 text-champagne" />
      ) : (
        <Moon className="w-4 h-4 text-burgundy-800" />
      )}
    </button>
  );
}

