import { LogoText } from './Logo';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <LogoText />
            <p className="mt-2 text-muted-foreground" style={{ fontWeight: 400 }}>
              Software that actually works.
            </p>
          </div>

          <div className="flex gap-8">
            <button
              onClick={() => document.getElementById('how')?.scrollIntoView({ behavior: 'smooth' })}
              className="text-muted-foreground hover:text-foreground transition-colors"
              style={{ fontWeight: 400 }}
            >
              How it works
            </button>
            <button
              onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
              className="text-muted-foreground hover:text-foreground transition-colors"
              style={{ fontWeight: 400 }}
            >
              Pricing
            </button>
            <a
              href="mailto:kryvazent@gmail.com"
              className="text-muted-foreground hover:text-foreground transition-colors"
              style={{ fontWeight: 400 }}
            >
              Contact
            </a>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border text-center text-sm text-muted-foreground" style={{ fontWeight: 400 }}>
          <p>&copy; {currentYear} Kryvazent. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
