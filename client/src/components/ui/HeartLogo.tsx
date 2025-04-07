import React from 'react';

export const HeartLogo: React.FC<{ className?: string }> = ({ className = 'h-10 w-10' }) => {
  return (
    <svg
      className={className}
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="heartGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#FF9155" />
          <stop offset="100%" stopColor="#E23B3B" />
        </linearGradient>
      </defs>
      <path
        d="M50 90C49.2 90 48.5 89.8 47.8 89.4C46.1 88.4 15 68.5 15 40C15 28.4 24.5 19 36 19C41.5 19 46.6 21.1 50 24.8C53.4 21.1 58.5 19 64 19C75.5 19 85 28.4 85 40C85 68.5 53.9 88.4 52.2 89.4C51.5 89.8 50.8 90 50 90Z"
        fill="url(#heartGradient)"
      />
      <path
        d="M30 45L40 45L45 30L50 60L55 45L60 45L70 45"
        stroke="white"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  );
};