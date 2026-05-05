export function Services() {
  const services = [
    {
      title: 'Web Development',
      description: 'Custom websites and web applications built with modern technologies. Responsive, fast, and user-friendly designs that convert visitors into customers.',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <rect x="2" y="3" width="20" height="14" rx="2" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M8 21h8M12 17v4" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    {
      title: 'SEO Optimization',
      description: 'Boost your online visibility and organic traffic. We optimize your website to rank higher in search engines and attract your target audience.',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <circle cx="11" cy="11" r="8" strokeWidth={2}/>
          <path d="M21 21l-4.35-4.35" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    {
      title: 'Custom Software',
      description: 'Tailored software solutions to streamline your business processes. From automation tools to complex enterprise systems.',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path d="M16 18L22 12L16 6M8 6L2 12L8 18" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    {
      title: 'Mobile Apps',
      description: 'Native and cross-platform mobile applications that deliver exceptional user experiences on iOS and Android devices.',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <rect x="5" y="2" width="14" height="20" rx="2" strokeWidth={2}/>
          <path d="M12 18h.01" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    {
      title: 'Cloud Solutions',
      description: 'Scalable cloud infrastructure and deployment strategies. Migrate, host, and manage your applications with confidence.',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    {
      title: 'Performance Optimization',
      description: 'Speed up your digital products and improve user satisfaction. Technical audits and optimization for maximum performance.',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    }
  ];

  const steps = [
    {
      number: '01',
      title: 'You brief, we scope',
      description: 'Tell us what you need. We turn it into a fixed-price quote or team structure within 24 hours.',
      detail: 'No sales calls, no discovery phases. Just send requirements.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      )
    },
    {
      number: '02',
      title: 'Contract + kickoff',
      description: 'Sign the agreement, make the payment. Development starts within 48 hours.',
      detail: 'Real engineers, not account managers.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
        </svg>
      )
    },
    {
      number: '03',
      title: 'Build in sprints',
      description: 'Weekly demos. Daily updates. No status meetings unless you want them.',
      detail: 'You see progress, not PowerPoints.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      )
    },
    {
      number: '04',
      title: 'Ship + iterate',
      description: 'Launch, gather feedback, improve. Continue with subscription or wrap up.',
      detail: 'Code is yours. No vendor lock-in.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
        </svg>
      )
    }
  ];

  return (
    <>
      {/* Services Grid */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl mb-4" style={{ fontWeight: 600 }}>
              What we do
            </h2>
            <p className="text-xl text-muted-foreground" style={{ fontWeight: 400 }}>
              End-to-end development services for your digital products
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="group p-8 bg-card/30 border border-border rounded-2xl hover:border-primary/50 transition-all hover:shadow-lg hover:shadow-primary/10 hover:-translate-y-1 duration-300"
              >
                <div className="w-16 h-16 mb-6 text-primary group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl mb-3" style={{ fontWeight: 600 }}>
                  {service.title}
                </h3>
                <p className="text-muted-foreground" style={{ fontWeight: 400 }}>
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How We Work */}
      <section id="how" className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent pointer-events-none"></div>

        <div className="max-w-6xl mx-auto relative">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl mb-4" style={{ fontWeight: 600 }}>
              How we work
            </h2>
            <p className="text-xl text-muted-foreground" style={{ fontWeight: 400 }}>
              No fluff. No waste. Just results.
            </p>
          </div>

        <div className="grid md:grid-cols-2 gap-6 relative">
          {/* Connection line for desktop */}
          <div className="hidden md:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-px h-full bg-gradient-to-b from-transparent via-primary/20 to-transparent"></div>
          <div className="hidden md:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-px w-full bg-gradient-to-r from-transparent via-primary/20 to-transparent"></div>

          {steps.map((step, index) => (
            <div
              key={index}
              className="relative group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="p-8 bg-card/50 border border-border rounded-2xl hover:border-primary/50 transition-all hover:shadow-lg hover:shadow-primary/10 hover:-translate-y-1 duration-300">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-primary/10 border border-primary/30 rounded-xl flex items-center justify-center text-primary flex-shrink-0 group-hover:bg-primary/20 transition-all">
                    {step.icon}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-sm text-primary/60" style={{ fontWeight: 600 }}>{step.number}</span>
                      <div className="h-px flex-1 bg-gradient-to-r from-primary/20 to-transparent"></div>
                    </div>
                    <h3 className="text-xl mb-2" style={{ fontWeight: 600 }}>{step.title}</h3>
                  </div>
                </div>
                <p className="text-foreground mb-2" style={{ fontWeight: 400 }}>{step.description}</p>
                <p className="text-sm text-muted-foreground" style={{ fontWeight: 400 }}>{step.detail}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-primary/5 border border-primary/20 rounded-full">
            <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            <span className="text-sm text-foreground" style={{ fontWeight: 500 }}>
              Average timeline: 4-12 weeks from brief to launch
            </span>
          </div>
        </div>
      </div>
    </section>
    </>
  );
}
