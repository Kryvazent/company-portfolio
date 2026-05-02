export function AnimatedBackground() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Animated gradient orbs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float-delayed"></div>

      {/* Particles */}
      <div className="absolute top-1/4 left-1/3 w-2 h-2 bg-primary/30 rounded-full animate-pulse-slow"></div>
      <div className="absolute top-1/3 right-1/4 w-1.5 h-1.5 bg-primary/20 rounded-full animate-pulse-slower"></div>
      <div className="absolute bottom-1/3 left-1/4 w-1 h-1 bg-primary/25 rounded-full animate-pulse-slow"></div>
      <div className="absolute top-2/3 right-1/3 w-2 h-2 bg-primary/15 rounded-full animate-pulse-slower"></div>
      <div className="absolute bottom-1/4 right-1/2 w-1.5 h-1.5 bg-primary/30 rounded-full animate-pulse-slow"></div>

      {/* Grid pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
    </div>
  );
}
