import { useState } from 'react';
import { LogoText } from './Logo';

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-md border-b border-border z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <LogoText />
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection('how')} className="text-muted-foreground hover:text-foreground transition-colors" style={{ fontWeight: 400 }}>
              How it works
            </button>
            <button onClick={() => scrollToSection('pricing')} className="text-muted-foreground hover:text-foreground transition-colors" style={{ fontWeight: 400 }}>
              Pricing
            </button>
            <button onClick={() => scrollToSection('contact')} className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-all" style={{ fontWeight: 500 }}>
              Start project
            </button>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden border-t border-border bg-background/95">
          <div className="px-4 pt-2 pb-3 space-y-1">
            <button onClick={() => scrollToSection('how')} className="block w-full text-left px-3 py-2 hover:bg-accent rounded-md">
              How it works
            </button>
            <button onClick={() => scrollToSection('pricing')} className="block w-full text-left px-3 py-2 hover:bg-accent rounded-md">
              Pricing
            </button>
            <button onClick={() => scrollToSection('contact')} className="block w-full text-left px-3 py-2 bg-primary text-white rounded-md">
              Start project
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
