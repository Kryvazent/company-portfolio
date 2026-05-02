export function Features() {
  const stack = [
    { name: 'React', category: 'Frontend' },
    { name: 'Node.js', category: 'Backend' },
    { name: 'Python', category: 'Backend' },
    { name: 'PostgreSQL', category: 'Database' },
    { name: 'AWS', category: 'Cloud' },
    { name: 'Docker', category: 'DevOps' },
    { name: 'TypeScript', category: 'Language' },
    { name: 'Next.js', category: 'Framework' },
    { name: 'React Native', category: 'Mobile' },
    { name: 'GraphQL', category: 'API' },
    { name: 'Redis', category: 'Cache' },
    { name: 'Kubernetes', category: 'DevOps' }
  ];

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-4" style={{ fontWeight: 600 }}>
            We speak your stack
          </h2>
          <p className="text-xl text-muted-foreground" style={{ fontWeight: 400 }}>
            Modern tech, battle-tested practices
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-20">
          {stack.map((tech, index) => (
            <div
              key={index}
              className="px-4 py-2 bg-card/50 border border-border rounded-lg hover:border-primary/50 transition-all hover:scale-105 hover:shadow-lg hover:shadow-primary/10 duration-200 cursor-default"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <span style={{ fontWeight: 500 }}>{tech.name}</span>
              <span className="ml-2 text-sm text-muted-foreground" style={{ fontWeight: 400 }}>· {tech.category}</span>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-primary/10 border border-primary/20 rounded-xl flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="mb-2" style={{ fontWeight: 600 }}>Ship fast</h3>
            <p className="text-muted-foreground" style={{ fontWeight: 400 }}>
              First working version in weeks, not months
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-primary/10 border border-primary/20 rounded-xl flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="mb-2" style={{ fontWeight: 600 }}>Own your code</h3>
            <p className="text-muted-foreground" style={{ fontWeight: 400 }}>
              Full access to repo. No proprietary frameworks
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-primary/10 border border-primary/20 rounded-xl flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
            <h3 className="mb-2" style={{ fontWeight: 600 }}>Built secure</h3>
            <p className="text-muted-foreground" style={{ fontWeight: 400 }}>
              Security audit included in every project
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
