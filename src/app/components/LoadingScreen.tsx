import { useEffect, useState } from 'react';
import { Logo } from './Logo';

interface LoadingScreenProps {
  onLoadingComplete: () => void;
}

export function LoadingScreen({ onLoadingComplete }: LoadingScreenProps) {
  const [progress, setProgress] = useState(0);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    // Simulate loading progress
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + Math.random() * 15;
      });
    }, 150);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (progress >= 100) {
      // Start exit animation
      setTimeout(() => {
        setIsExiting(true);
      }, 300);

      // Complete loading
      setTimeout(() => {
        onLoadingComplete();
      }, 1000);
    }
  }, [progress, onLoadingComplete]);

  return (
    <div
      className={`fixed inset-0 z-50 bg-background flex items-center justify-center transition-opacity duration-700 ${
        isExiting ? 'opacity-0' : 'opacity-100'
      }`}
    >
      {/* Animated background particles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-float-delayed"></div>
      </div>

      <div className="relative z-10 flex flex-col items-center gap-8">
        {/* Logo with pulsing animation */}
        <div className="relative">
          <div className="absolute inset-0 bg-primary/20 rounded-full blur-2xl animate-pulse-slow"></div>
          <Logo size="xl" className="relative" />
        </div>

        {/* Company name */}
        <div className="text-center">
          <h1 className="text-4xl mb-2 animate-fade-in" style={{ fontWeight: 600 }}>
            <span className="text-primary">Kryvazent</span>
          </h1>
          <p className="text-muted-foreground animate-fade-in" style={{ fontWeight: 400, animationDelay: '200ms' }}>
            Software that actually works
          </p>
        </div>

        {/* Progress bar */}
        <div className="w-64 h-1 bg-border rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-primary to-purple-600 transition-all duration-300 ease-out"
            style={{ width: `${Math.min(progress, 100)}%` }}
          ></div>
        </div>

        {/* Loading text */}
        <div className="flex items-center gap-2 text-sm text-muted-foreground animate-pulse">
          <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
          <span style={{ fontWeight: 400 }}>Loading experience...</span>
        </div>
      </div>
    </div>
  );
}
