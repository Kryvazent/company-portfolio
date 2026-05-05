import { useState } from 'react';

export function Pricing() {
  const [billingType, setBillingType] = useState<'project' | 'subscription'>('project');

  return (
    <section id="pricing" className="py-24 px-4 sm:px-6 lg:px-8 bg-card/20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-4" style={{ fontWeight: 600 }}>
            Simple, honest pricing
          </h2>
          <p className="text-xl text-muted-foreground mb-2" style={{ fontWeight: 400 }}>
            Clear pricing, no surprises. Pay as you go.
          </p>
          <p className="text-lg text-muted-foreground" style={{ fontWeight: 400 }}>
            Flexible payment plans available • Start small, scale up anytime
          </p>

          <div className="mt-8 inline-flex items-center gap-2 p-1 bg-background/50 border border-border rounded-lg">
            <button
              onClick={() => setBillingType('project')}
              className={`px-6 py-2 rounded-md transition-all ${
                billingType === 'project'
                  ? 'bg-primary text-white'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
              style={{ fontWeight: 500 }}
            >
              One-time projects
            </button>
            <button
              onClick={() => setBillingType('subscription')}
              className={`px-6 py-2 rounded-md transition-all ${
                billingType === 'subscription'
                  ? 'bg-primary text-white'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
              style={{ fontWeight: 500 }}
            >
              Ongoing teams
            </button>
          </div>
        </div>

        {billingType === 'project' ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative p-8 bg-card/50 border border-border rounded-2xl hover:border-primary/50 transition-all h-full flex flex-col hover:-translate-y-2 duration-300">
                <div className="mb-6">
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 border border-primary/20 rounded-full mb-4">
                    <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                    <span className="text-xs text-primary" style={{ fontWeight: 600 }}>STARTER</span>
                  </div>
                  <h3 className="text-2xl mb-3" style={{ fontWeight: 600 }}>Quick Start</h3>
                  <p className="text-muted-foreground mb-4" style={{ fontWeight: 400 }}>
                    Landing pages, admin panels, MVP tools
                  </p>
                </div>

                <div className="mb-6">
                  <div className="flex items-baseline gap-1 mb-2">
                    <span className="text-lg text-muted-foreground" style={{ fontWeight: 400 }}>Starting at</span>
                  </div>
                  <div className="flex items-baseline gap-1 mb-2">
                    <span className="text-4xl" style={{ fontWeight: 600 }}>$12k</span>
                  </div>
                  <p className="text-sm text-muted-foreground" style={{ fontWeight: 400 }}>Or $2k/month over 6 months</p>
                </div>

                <div className="space-y-3 mb-6 flex-1">
                  <div className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                    <span className="text-sm" style={{ fontWeight: 400 }}>4-8 weeks delivery</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                    <span className="text-sm" style={{ fontWeight: 400 }}>1-2 senior engineers</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                    <span className="text-sm" style={{ fontWeight: 400 }}>Source code included</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                    <span className="text-sm" style={{ fontWeight: 400 }}>2 weeks support</span>
                  </div>
                </div>

                <button
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="w-full py-3 border border-border bg-card/50 rounded-lg hover:bg-accent transition-all"
                  style={{ fontWeight: 500 }}
                >
                  Let's chat
                </button>
              </div>
            </div>

            <div className="group relative md:-mt-4">
              <div className="absolute -inset-1 bg-gradient-to-br from-primary/20 to-primary/5 rounded-2xl blur-xl opacity-50 group-hover:opacity-100 transition-opacity duration-500 animate-pulse-slow"></div>
              <div className="relative p-8 bg-card border-2 border-primary rounded-2xl h-full flex flex-col hover:-translate-y-2 duration-300">
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-primary text-white rounded-full text-xs" style={{ fontWeight: 600 }}>
                  MOST POPULAR
                </div>

                <div className="mb-6 mt-2">
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 border border-primary/30 rounded-full mb-4">
                    <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                    </svg>
                    <span className="text-xs text-primary" style={{ fontWeight: 600 }}>PROFESSIONAL</span>
                  </div>
                  <h3 className="text-2xl mb-3" style={{ fontWeight: 600 }}>Growth</h3>
                  <p className="text-muted-foreground mb-4" style={{ fontWeight: 400 }}>
                    Full SaaS products, mobile apps, integrations
                  </p>
                </div>

                <div className="mb-6">
                  <div className="flex items-baseline gap-1 mb-2">
                    <span className="text-lg text-muted-foreground" style={{ fontWeight: 400 }}>Starting at</span>
                  </div>
                  <div className="flex items-baseline gap-1 mb-2">
                    <span className="text-4xl text-primary" style={{ fontWeight: 600 }}>$30k</span>
                  </div>
                  <p className="text-sm text-muted-foreground" style={{ fontWeight: 400 }}>Or $5k/month over 6 months</p>
                </div>

                <div className="space-y-3 mb-6 flex-1">
                  <div className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-primary flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-sm" style={{ fontWeight: 400 }}>2-4 months delivery</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-primary flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-sm" style={{ fontWeight: 400 }}>2-3 senior engineers</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-primary flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-sm" style={{ fontWeight: 400 }}>Source code + documentation</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-primary flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-sm" style={{ fontWeight: 400 }}>1 month support</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-primary flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-sm" style={{ fontWeight: 400 }}>Security audit</span>
                  </div>
                </div>

                <button
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="w-full py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-all shadow-lg shadow-primary/25"
                  style={{ fontWeight: 500 }}
                >
                  Start your project
                </button>
              </div>
            </div>

            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative p-8 bg-card/50 border border-border rounded-2xl hover:border-primary/50 transition-all h-full flex flex-col hover:-translate-y-2 duration-300">
                <div className="mb-6">
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 border border-primary/20 rounded-full mb-4">
                    <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                    <span className="text-xs text-primary" style={{ fontWeight: 600 }}>ENTERPRISE</span>
                  </div>
                  <h3 className="text-2xl mb-3" style={{ fontWeight: 600 }}>Scale</h3>
                  <p className="text-muted-foreground mb-4" style={{ fontWeight: 400 }}>
                    Complex platforms, marketplaces, enterprise systems
                  </p>
                </div>

                <div className="mb-6">
                  <div className="flex items-baseline gap-1 mb-2">
                    <span className="text-lg text-muted-foreground" style={{ fontWeight: 400 }}>Starting at</span>
                  </div>
                  <div className="flex items-baseline gap-1 mb-2">
                    <span className="text-4xl" style={{ fontWeight: 600 }}>$80k</span>
                  </div>
                  <p className="text-sm text-muted-foreground" style={{ fontWeight: 400 }}>Custom payment plans available</p>
                </div>

                <div className="space-y-3 mb-6 flex-1">
                  <div className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                    <span className="text-sm" style={{ fontWeight: 400 }}>4-8 months delivery</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                    <span className="text-sm" style={{ fontWeight: 400 }}>3-5 senior engineers</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                    <span className="text-sm" style={{ fontWeight: 400 }}>Full documentation</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                    <span className="text-sm" style={{ fontWeight: 400 }}>3 months support</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                    <span className="text-sm" style={{ fontWeight: 400 }}>Dedicated manager</span>
                  </div>
                </div>

                <button
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="w-full py-3 border border-border bg-card/50 rounded-lg hover:bg-accent transition-all"
                  style={{ fontWeight: 500 }}
                >
                  Let's chat
                </button>
              </div>
            </div>

            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative p-8 bg-card/50 border border-border rounded-2xl hover:border-primary/50 transition-all h-full flex flex-col hover:-translate-y-2 duration-300">
                <div className="mb-6">
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 border border-primary/20 rounded-full mb-4">
                    <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                    </svg>
                    <span className="text-xs text-primary" style={{ fontWeight: 600 }}>CUSTOM</span>
                  </div>
                  <h3 className="text-2xl mb-3" style={{ fontWeight: 600 }}>Custom</h3>
                  <p className="text-muted-foreground mb-4" style={{ fontWeight: 400 }}>
                    Something unique? We'll build it together.
                  </p>
                </div>

                <div className="mb-6">
                  <div className="flex items-baseline gap-1 mb-2">
                    <span className="text-4xl" style={{ fontWeight: 600 }}>Let's talk</span>
                  </div>
                  <p className="text-sm text-muted-foreground" style={{ fontWeight: 400 }}>Custom quote</p>
                </div>

                <div className="space-y-3 mb-6 flex-1">
                  <div className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                    <span className="text-sm" style={{ fontWeight: 400 }}>Custom timeline</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                    <span className="text-sm" style={{ fontWeight: 400 }}>Flexible team size</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                    <span className="text-sm" style={{ fontWeight: 400 }}>Specialized expertise</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                    <span className="text-sm" style={{ fontWeight: 400 }}>White-label options</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                    <span className="text-sm" style={{ fontWeight: 400 }}>Enterprise support</span>
                  </div>
                </div>

                <button
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="w-full py-3 border border-border bg-card/50 rounded-lg hover:bg-accent transition-all"
                  style={{ fontWeight: 500 }}
                >
                  Let's talk
                </button>
              </div>
            </div>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-8 bg-card/50 border border-border rounded-2xl">
              <div className="mb-6">
                <h3 className="text-2xl mb-2" style={{ fontWeight: 600 }}>Part-time developer</h3>
                <p className="text-lg text-muted-foreground" style={{ fontWeight: 400 }}>
                  Perfect for ongoing maintenance & features
                </p>
              </div>
              <div className="mb-6">
                <p className="text-sm text-muted-foreground mb-1" style={{ fontWeight: 400 }}>Starting at</p>
                <div className="text-5xl mb-2" style={{ fontWeight: 600 }}>$8k<span className="text-2xl text-muted-foreground">/mo</span></div>
                <p className="text-muted-foreground" style={{ fontWeight: 400 }}>~80 hours • 1 senior engineer</p>
              </div>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span style={{ fontWeight: 400 }}>New features every sprint</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span style={{ fontWeight: 400 }}>Bug fixes included</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span style={{ fontWeight: 400 }}>Cancel anytime</span>
                </li>
              </ul>
              <button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="w-full py-3 bg-card border border-border rounded-lg hover:bg-accent transition-all"
                style={{ fontWeight: 500 }}
              >
                Get started
              </button>
            </div>

            <div className="p-8 bg-card/50 border-2 border-primary rounded-2xl">
              <div className="mb-6">
                <h3 className="text-2xl mb-2" style={{ fontWeight: 600 }}>Full-time team</h3>
                <p className="text-lg text-muted-foreground" style={{ fontWeight: 400 }}>
                  Your dedicated team, working exclusively for you
                </p>
              </div>
              <div className="mb-6">
                <p className="text-sm text-muted-foreground mb-1" style={{ fontWeight: 400 }}>Starting at</p>
                <div className="text-5xl mb-2" style={{ fontWeight: 600 }}>$18k<span className="text-2xl text-muted-foreground">/mo</span></div>
                <p className="text-muted-foreground" style={{ fontWeight: 400 }}>~320 hours • 2-3 senior engineers</p>
              </div>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span style={{ fontWeight: 400 }}>Full-stack development</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span style={{ fontWeight: 400 }}>Priority support</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span style={{ fontWeight: 400 }}>Cancel anytime</span>
                </li>
              </ul>
              <button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="w-full py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-all"
                style={{ fontWeight: 500 }}
              >
                Get started
              </button>
            </div>

            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative p-8 bg-card/50 border border-border rounded-2xl hover:border-primary/50 transition-all h-full flex flex-col hover:-translate-y-2 duration-300">
                <div className="mb-6">
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 border border-primary/20 rounded-full mb-4">
                    <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                    </svg>
                    <span className="text-xs text-primary" style={{ fontWeight: 600 }}>CUSTOM</span>
                  </div>
                  <h3 className="text-2xl mb-3" style={{ fontWeight: 600 }}>Custom Plan</h3>
                  <p className="text-muted-foreground mb-4" style={{ fontWeight: 400 }}>
                    Need something different? Let's work it out.
                  </p>
                </div>

                <div className="mb-6">
                  <div className="flex items-baseline gap-1 mb-2">
                    <span className="text-4xl" style={{ fontWeight: 600 }}>Let's talk</span>
                  </div>
                  <p className="text-sm text-muted-foreground" style={{ fontWeight: 400 }}>Custom pricing</p>
                </div>

                <div className="space-y-3 mb-6 flex-1">
                  <div className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-primary flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-sm" style={{ fontWeight: 400 }}>Custom hours/scope</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-primary flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-sm" style={{ fontWeight: 400 }}>Multiple teams</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-primary flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-sm" style={{ fontWeight: 400 }}>Custom SLAs</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-primary flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-sm" style={{ fontWeight: 400 }}>Dedicated account manager</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-primary flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-sm" style={{ fontWeight: 400 }}>Volume discounts</span>
                  </div>
                </div>

                <button
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="w-full py-3 border border-border bg-card/50 rounded-lg hover:bg-accent transition-all"
                  style={{ fontWeight: 500 }}
                >
                  Let's talk
                </button>
              </div>
            </div>
          </div>
        )}

        <div className="mt-12 p-6 bg-primary/5 border border-primary/20 rounded-xl">
          <div className="text-center">
            <p className="text-lg mb-3" style={{ fontWeight: 500 }}>
              💙 What's included in every project
            </p>
            <p className="text-muted-foreground mb-2" style={{ fontWeight: 400 }}>
              Code reviews • Testing • Deployment • Full documentation • Bug fixes
            </p>
            <p className="text-sm text-muted-foreground" style={{ fontWeight: 400 }}>
              Flexible payment plans • No hidden fees • Cancel anytime on subscriptions
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
