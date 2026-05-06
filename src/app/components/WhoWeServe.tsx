export function WhoWeServe() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-card/20">
      <div className="max-w-6xl mx-auto">
        {/* Who We Serve */}
        <div className="mb-20">
          <h3 className="text-3xl md:text-4xl text-center mb-12" style={{ fontWeight: 600 }}>
            Who we work with
          </h3>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 bg-card/50 border border-border rounded-2xl hover:border-primary/50 transition-all">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h4 className="text-xl mb-3" style={{ fontWeight: 600 }}>Startups & Founders</h4>
              <p className="text-muted-foreground mb-4" style={{ fontWeight: 400 }}>
                Early-stage companies (pre-seed to Series A) who need to ship an MVP, validate product-market fit, or scale from 0 to 1.
              </p>
              <p className="text-sm text-muted-foreground" style={{ fontWeight: 400 }}>
                Typical budget: $30k-$100k projects or $8k-$18k/month teams
              </p>
            </div>

            <div className="p-8 bg-card/50 border border-border rounded-2xl hover:border-primary/50 transition-all">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h4 className="text-xl mb-3" style={{ fontWeight: 600 }}>Growing Companies</h4>
              <p className="text-muted-foreground mb-4" style={{ fontWeight: 400 }}>
                Series A-C companies (50-500 employees) who need to add features fast, rebuild legacy systems, or staff up technical teams temporarily.
              </p>
              <p className="text-sm text-muted-foreground" style={{ fontWeight: 400 }}>
                Typical budget: $50k-$200k projects or dedicated teams
              </p>
            </div>

            <div className="p-8 bg-card/50 border border-border rounded-2xl hover:border-primary/50 transition-all">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h4 className="text-xl mb-3" style={{ fontWeight: 600 }}>Enterprise & Agencies</h4>
              <p className="text-muted-foreground mb-4" style={{ fontWeight: 400 }}>
                Established businesses and digital agencies who need white-label development, overflow capacity, or specialized expertise.
              </p>
              <p className="text-sm text-muted-foreground" style={{ fontWeight: 400 }}>
                Typical budget: $100k+ projects or long-term partnerships
              </p>
            </div>
          </div>
        </div>

        {/* Problems We Solve */}
        <div>
          <h3 className="text-3xl md:text-4xl text-center mb-12" style={{ fontWeight: 600 }}>
            Problems we solve
          </h3>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 bg-card/30 border border-border rounded-xl hover:border-primary/50 transition-all">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg mb-2" style={{ fontWeight: 600 }}>You need to ship fast, but can't hire fast enough</h4>
                  <p className="text-muted-foreground" style={{ fontWeight: 400 }}>
                    We start in 48 hours with senior engineers. No 3-month hiring process, no ramp-up time.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-6 bg-card/30 border border-border rounded-xl hover:border-primary/50 transition-all">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg mb-2" style={{ fontWeight: 600 }}>You don't know what development should cost</h4>
                  <p className="text-muted-foreground" style={{ fontWeight: 400 }}>
                    We give you a fixed price upfront. No hourly rates, no scope creep, no surprises.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-6 bg-card/30 border border-border rounded-xl hover:border-primary/50 transition-all">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg mb-2" style={{ fontWeight: 600 }}>Your last agency delivered garbage code</h4>
                  <p className="text-muted-foreground" style={{ fontWeight: 400 }}>
                    We write production-grade code with tests, documentation, and code reviews. You own everything.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-6 bg-card/30 border border-border rounded-xl hover:border-primary/50 transition-all">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg mb-2" style={{ fontWeight: 600 }}>You need technical expertise you don't have in-house</h4>
                  <p className="text-muted-foreground" style={{ fontWeight: 400 }}>
                    Senior full-stack engineers who've built at scale. React, Node, Python, mobile, cloud—we've done it.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
