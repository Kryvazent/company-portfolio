import { useState, useEffect } from 'react';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { Pricing } from './components/Pricing';
import { Features } from './components/Features';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { AnimatedBackground } from './components/AnimatedBackground';
import { LoadingScreen } from './components/LoadingScreen';
import { SEOHead } from './components/SEOHead';
import { ThemeProvider } from './components/ThemeProvider';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Minimum loading time to show the animation
    const minLoadTime = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(minLoadTime);
  }, []);

  if (isLoading) {
    return <LoadingScreen onLoadingComplete={() => setIsLoading(false)} />;
  }

  return (
    <ThemeProvider>
      <SEOHead />
      <div className="min-h-screen bg-background text-foreground relative">
        <AnimatedBackground />
        <div className="relative z-10">
          <Navigation />
          <Hero />
          <Services />
          <Features />
          <Pricing />
          <Contact />
          <Footer />
        </div>
      </div>
    </ThemeProvider>
  );
}