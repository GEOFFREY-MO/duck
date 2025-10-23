import React from 'react';

interface DuckWatermarkProps {
  className?: string;
  variant?: 'light' | 'dark';
}

export const DuckWatermark: React.FC<DuckWatermarkProps> = ({ 
  className = '', 
  variant = 'light' 
}) => {
  return (
    <div 
      className={`absolute inset-0 pointer-events-none opacity-5 ${className}`}
      style={{
        backgroundImage: variant === 'light' 
          ? 'radial-gradient(circle at 20% 80%, #47E2C1 0%, #4CB4F9 50%, #FFD44F 100%)'
          : 'radial-gradient(circle at 20% 80%, #47E2C1 0%, #4CB4F9 50%, #FFD44F 100%)',
        backgroundSize: '400px 400px',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Duck SVG Watermark */}
      <svg
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64"
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Duck Body */}
        <ellipse
          cx="50"
          cy="60"
          rx="25"
          ry="20"
          fill="currentColor"
          className="text-primary-500"
        />
        {/* Duck Head */}
        <circle
          cx="50"
          cy="40"
          r="18"
          fill="currentColor"
          className="text-primary-500"
        />
        {/* Duck Beak */}
        <ellipse
          cx="50"
          cy="35"
          rx="8"
          ry="4"
          fill="currentColor"
          className="text-accent-yellow"
        />
        {/* Duck Eye */}
        <circle
          cx="45"
          cy="35"
          r="3"
          fill="currentColor"
          className="text-text-primary"
        />
        {/* Duck Tail */}
        <path
          d="M25 60 Q15 50 20 40 Q25 45 30 50 Z"
          fill="currentColor"
          className="text-primary-600"
        />
      </svg>
    </div>
  );
};
