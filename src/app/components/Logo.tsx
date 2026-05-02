interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

export function Logo({ className = '', size = 'md' }: LogoProps) {
  const sizes = {
    sm: 'w-8 h-8',
    md: 'w-12 h-12',
    lg: 'w-24 h-24',
    xl: 'w-32 h-32'
  };

  return (
    <svg
      className={`${sizes[size]} ${className}`}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Outer rotating ring */}
      <circle
        cx="50"
        cy="50"
        r="45"
        stroke="url(#gradient1)"
        strokeWidth="2"
        strokeDasharray="4 4"
        className="animate-spin"
        style={{ transformOrigin: 'center', animationDuration: '20s' }}
      />

      {/* Inner hexagon frame */}
      <path
        d="M50 10 L80 30 L80 70 L50 90 L20 70 L20 30 Z"
        stroke="url(#gradient2)"
        strokeWidth="2"
        fill="none"
        className="opacity-60"
      />

      {/* Center K shape with geometric design */}
      <g transform="translate(50, 50)">
        {/* Vertical line of K */}
        <rect
          x="-15"
          y="-25"
          width="4"
          height="50"
          fill="url(#gradient3)"
        />

        {/* Upper diagonal */}
        <path
          d="M -11 -5 L 15 -25 L 18 -22 L -8 -2 Z"
          fill="url(#gradient3)"
        />

        {/* Lower diagonal */}
        <path
          d="M -8 2 L 18 22 L 15 25 L -11 5 Z"
          fill="url(#gradient3)"
        />

        {/* Center dot accent */}
        <circle
          cx="0"
          cy="0"
          r="3"
          fill="url(#gradient4)"
          className="animate-pulse-slow"
        />
      </g>

      {/* Orbiting particles */}
      <circle
        cx="50"
        cy="10"
        r="2"
        fill="currentColor"
        className="text-primary animate-orbit"
      />

      <defs>
        <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#6366f1" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.4" />
        </linearGradient>

        <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#6366f1" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.3" />
        </linearGradient>

        <linearGradient id="gradient3" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#6366f1" />
          <stop offset="50%" stopColor="#8b5cf6" />
          <stop offset="100%" stopColor="#06b6d4" />
        </linearGradient>

        <radialGradient id="gradient4">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="100%" stopColor="#6366f1" />
        </radialGradient>
      </defs>
    </svg>
  );
}

export function LogoText({ className = '' }: { className?: string }) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <Logo size="md" />
      <span className="text-2xl text-primary" style={{ fontWeight: 600 }}>
        Kryvazent
      </span>
    </div>
  );
}
