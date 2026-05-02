export function Services() {
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
  );
}
