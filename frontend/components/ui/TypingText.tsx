"use client";

import React, { useState, useEffect } from "react";
import { useReducedMotion } from "@/hooks/useReducedMotion";

interface TypingTextProps {
  roles: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseDuration?: number;
  className?: string;
}

export function TypingText({
  roles,
  typingSpeed = 80,
  deletingSpeed = 40,
  pauseDuration = 2000,
  className,
}: TypingTextProps) {
  const reducedMotion = useReducedMotion();
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    if (reducedMotion) {
      setDisplayedText(roles[0] || "");
      return;
    }

    const currentRole = roles[roleIndex];
    let timeout: NodeJS.Timeout;

    if (!isDeleting && displayedText.length < currentRole.length) {
      // Typing forward
      timeout = setTimeout(() => {
        setDisplayedText(currentRole.slice(0, displayedText.length + 1));
      }, typingSpeed);
    } else if (!isDeleting && displayedText.length === currentRole.length) {
      // Pause at full word
      timeout = setTimeout(() => {
        setIsDeleting(true);
      }, pauseDuration);
    } else if (isDeleting && displayedText.length > 0) {
      // Deleting backwards
      timeout = setTimeout(() => {
        setDisplayedText(currentRole.slice(0, displayedText.length - 1));
      }, deletingSpeed);
    } else if (isDeleting && displayedText.length === 0) {
      // Move to next word
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }

    return () => clearTimeout(timeout);
  }, [displayedText, isDeleting, roleIndex, roles, typingSpeed, deletingSpeed, pauseDuration, reducedMotion]);

  if (reducedMotion) {
    return <span className={className}>{roles[0]}</span>;
  }

  return (
    <span className={className}>
      <span>{displayedText}</span>
      <span className="inline-block w-[3px] h-[1.1em] ml-1 bg-burgundy-500 dark:bg-champagne align-middle animate-pulse" />
    </span>
  );
}

