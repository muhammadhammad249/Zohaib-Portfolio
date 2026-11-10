export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-burgundy-950">
      <div className="flex flex-col items-center gap-4">
        <div className="w-12 h-12 rounded-full border-4 border-burgundy-700 border-t-champagne animate-spin" />
        <span className="text-xs uppercase tracking-widest text-champagne font-semibold font-mono">
          Loading Portfolio...
        </span>
      </div>
    </div>
  );
}

