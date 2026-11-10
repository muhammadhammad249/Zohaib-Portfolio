import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Home } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-4">
      <div className="w-20 h-20 rounded-full bg-burgundy-600/20 text-burgundy-600 dark:text-champagne flex items-center justify-center font-heading font-black text-3xl mb-6 border border-burgundy-400/30">
        404
      </div>
      <h1 className="text-3xl sm:text-4xl font-heading font-bold text-burgundy-950 dark:text-champagne-light">
        Page Not Found
      </h1>
      <p className="mt-3 text-base text-burgundy-800/80 dark:text-burgundy-200/80 max-w-md">
        The requested URL could not be found. Let&apos;s return back to the portfolio homepage.
      </p>
      <div className="mt-8">
        <Button href="/" variant="primary" leftIcon={<Home className="w-4 h-4" />}>
          Back to Homepage
        </Button>
      </div>
    </div>
  );
}

