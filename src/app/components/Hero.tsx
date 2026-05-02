export function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-transparent to-transparent pointer-events-none"></div>

      {/* Orbiting particles */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 pointer-events-none">
        <div className="relative w-64 h-64">
          <div className="absolute top-1/2 left-1/2 w-3 h-3 bg-primary/40 rounded-full animate-orbit"></div>
          <div className="absolute top-1/2 left-1/2 w-2 h-2 bg-primary/30 rounded-full animate-orbit" style={{ animationDelay: '5s', animationDuration: '20s' }}></div>
          <div className="absolute top-1/2 left-1/2 w-2.5 h-2.5 bg-primary/35 rounded-full animate-orbit" style={{ animationDelay: '10s', animationDuration: '25s' }}></div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto relative">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full mb-8 animate-glow">
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse"></span>
            <span className="text-sm text-primary" style={{ fontWeight: 500 }}>We ship code, not excuses</span>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl tracking-tight mb-6 animate-fade-in" style={{ fontWeight: 600 }}>
            <span className="sr-only">Kryvazent - </span>Software that
            <br />
            <span className="text-primary animate-pulse-slow">actually works</span>
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-12" style={{ fontWeight: 400 }}>
            Fixed-price projects or dedicated teams. No BS, no bloat.
            <br />
            Just clean code that solves real problems.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-20">
            <button
              onClick={scrollToContact}
              className="px-8 py-4 bg-primary text-white rounded-lg hover:bg-primary/90 transition-all shadow-lg shadow-primary/25 hover:shadow-primary/40 hover:scale-105 hover:-translate-y-0.5 duration-200"
              style={{ fontWeight: 500 }}
            >
              Get a quote in 24h
            </button>
            <button
              onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-4 border border-border bg-card/50 rounded-lg hover:bg-card transition-all hover:border-primary/50 hover:scale-105 hover:-translate-y-0.5 duration-200"
              style={{ fontWeight: 500 }}
            >
              See transparent pricing
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <div className="p-6 bg-card/50 border border-border rounded-xl backdrop-blur-sm hover:border-primary/50 hover:bg-card/70 transition-all duration-300 hover:-translate-y-1 group">
            <div className="text-4xl mb-2 group-hover:text-primary transition-colors" style={{ fontWeight: 600 }}>48h</div>
            <div className="text-muted-foreground" style={{ fontWeight: 400 }}>Kickoff to first commit</div>
          </div>
          <div className="p-6 bg-card/50 border border-border rounded-xl backdrop-blur-sm hover:border-primary/50 hover:bg-card/70 transition-all duration-300 hover:-translate-y-1 group">
            <div className="text-4xl mb-2 group-hover:text-primary transition-colors" style={{ fontWeight: 600 }}>$0</div>
            <div className="text-muted-foreground" style={{ fontWeight: 400 }}>Hidden fees or surprises</div>
          </div>
          <div className="p-6 bg-card/50 border border-border rounded-xl backdrop-blur-sm hover:border-primary/50 hover:bg-card/70 transition-all duration-300 hover:-translate-y-1 group">
            <div className="text-4xl mb-2 group-hover:text-primary transition-colors" style={{ fontWeight: 600 }}>100%</div>
            <div className="text-muted-foreground" style={{ fontWeight: 400 }}>Code ownership</div>
          </div>
        </div>
      </div>
    </section>
  );
}
