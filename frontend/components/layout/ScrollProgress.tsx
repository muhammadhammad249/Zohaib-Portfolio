"use client";

import React, { useEffect, useState } from "react";

export function ScrollProgress() {
  const [scrollPercentage, setScrollPercentage] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollTop;
      const windowHeight =
        document.documentElement.scrollHeight - document.documentElement.clientHeight;
      if (windowHeight > 0) {
        setScrollPercentage((totalScroll / windowHeight) * 100);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className="absolute bottom-0 left-0 h-[2.5px] bg-gradient-to-r from-burgundy-500 via-rose-soft to-champagne transition-all duration-75 ease-out z-50"
      style={{ width: `${scrollPercentage}%` }}
      role="progressbar"
      aria-label="Page reading progress"
      aria-valuenow={Math.round(scrollPercentage)}
      aria-valuemin={0}
      aria-valuemax={100}
    />
  );
}

