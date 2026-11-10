"use client";

import { useEffect } from "react";
import { Button } from "@/components/ui/Button";
import { AlertTriangle, RotateCcw } from "lucide-react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Application error:", error);
  }, [error]);

  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-4">
      <div className="w-16 h-16 rounded-full bg-rose-500/20 text-rose-500 flex items-center justify-center mb-6">
        <AlertTriangle className="w-8 h-8" />
      </div>
      <h2 className="text-2xl sm:text-3xl font-heading font-bold text-burgundy-950 dark:text-champagne-light">
        Something went wrong
      </h2>
      <p className="mt-2 text-sm text-burgundy-800/80 dark:text-burgundy-200/80 max-w-md">
        An unexpected error occurred while loading this section.
      </p>
      <div className="mt-6">
        <Button
          onClick={() => reset()}
          variant="primary"
          leftIcon={<RotateCcw className="w-4 h-4" />}
        >
          Try Again
        </Button>
      </div>
    </div>
  );
}

