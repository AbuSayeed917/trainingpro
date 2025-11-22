"use client";

import { ReactNode } from 'react';

interface GradientTextProps {
  children: ReactNode;
  className?: string;
  gradient?: string;
  animate?: boolean;
}

export function GradientText({
  children,
  className = '',
  gradient = 'from-blue-600 via-purple-600 to-blue-600',
  animate = false,
}: GradientTextProps) {
  return (
    <span
      className={`inline-block text-transparent bg-clip-text bg-gradient-to-r ${gradient} ${
        animate ? 'bg-[length:200%_auto] animate-gradient' : ''
      } ${className}`}
    >
      {children}
    </span>
  );
}
