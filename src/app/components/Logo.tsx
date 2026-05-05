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
      {/* Modern circular background */}
      <circle
        cx="50"
        cy="50"
        r="45"
        fill="url(#bgGradient)"
      />

      {/* K Letter */}
      <g transform="translate(50, 50)">
        {/* Vertical line of K */}
        <rect
          x="-18"
          y="-28"
          width="6"
          height="56"
          fill="white"
          rx="3"
        />

        {/* Upper diagonal */}
        <path
          d="M -12 -6 L 20 -28 L 24 -24 L -8 -2 Z"
          fill="white"
        />

        {/* Lower diagonal */}
        <path
          d="M -8 2 L 24 24 L 20 28 L -12 6 Z"
          fill="white"
        />
      </g>

      <defs>
        <linearGradient id="bgGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#2563eb" />
          <stop offset="100%" stopColor="#3b82f6" />
        </linearGradient>
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
