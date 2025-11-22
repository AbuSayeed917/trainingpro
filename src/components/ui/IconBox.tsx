"use client";

import { LucideIcon } from 'lucide-react';
import { ReactNode } from 'react';

interface IconBoxProps {
  icon: LucideIcon;
  variant?: 'primary' | 'secondary' | 'success' | 'warning' | 'info' | 'gradient';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  animated?: boolean;
  className?: string;
}

export function IconBox({
  icon: Icon,
  variant = 'primary',
  size = 'md',
  animated = true,
  className = '',
}: IconBoxProps) {
  const sizeClasses = {
    sm: 'w-10 h-10',
    md: 'w-14 h-14',
    lg: 'w-16 h-16',
    xl: 'w-20 h-20',
  };

  const iconSizes = {
    sm: 'h-5 w-5',
    md: 'h-7 w-7',
    lg: 'h-8 w-8',
    xl: 'h-10 w-10',
  };

  const variantClasses = {
    primary: 'bg-gradient-to-br from-blue-500 to-indigo-600 text-white shadow-lg shadow-blue-500/30',
    secondary: 'bg-gradient-to-br from-gray-500 to-gray-700 text-white shadow-lg shadow-gray-500/30',
    success: 'bg-gradient-to-br from-green-500 to-emerald-600 text-white shadow-lg shadow-green-500/30',
    warning: 'bg-gradient-to-br from-amber-500 to-orange-600 text-white shadow-lg shadow-amber-500/30',
    info: 'bg-gradient-to-br from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/30',
    gradient: 'bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 text-white shadow-lg shadow-purple-500/40',
  };

  return (
    <div className="group relative inline-flex items-center justify-center">
      {/* Ambient Glow */}
      {animated && (
        <div className={`absolute -inset-2 ${variantClasses[variant]} opacity-0 group-hover:opacity-30 blur-2xl transition-opacity duration-500 rounded-2xl`} />
      )}

      {/* Icon Container */}
      <div
        className={`
          relative inline-flex items-center justify-center rounded-2xl
          ${sizeClasses[size]}
          ${variantClasses[variant]}
          ${animated ? 'transition-all duration-500 group-hover:scale-110 group-hover:rotate-3' : ''}
          ${className}
        `}
      >
        <Icon className={`${iconSizes[size]} ${animated ? 'transition-transform duration-500 group-hover:scale-110' : ''}`} />
      </div>
    </div>
  );
}

interface IconFeatureProps {
  icon: LucideIcon;
  title: string;
  description: string;
  variant?: 'primary' | 'secondary' | 'success' | 'warning' | 'info' | 'gradient';
  image?: string;
}

export function IconFeature({
  icon: Icon,
  title,
  description,
  variant = 'primary',
  image,
}: IconFeatureProps) {
  const variantColors = {
    primary: 'from-blue-500 to-indigo-500',
    secondary: 'from-gray-500 to-gray-700',
    success: 'from-green-500 to-emerald-500',
    warning: 'from-amber-500 to-orange-500',
    info: 'from-cyan-500 to-blue-500',
    gradient: 'from-blue-600 via-purple-600 to-pink-600',
  };

  return (
    <div className="group relative">
      {/* Ambient Glow */}
      <div className={`absolute -inset-px rounded-2xl bg-gradient-to-br ${variantColors[variant]} opacity-0 group-hover:opacity-10 blur-xl transition-opacity duration-500`} />

      <div className="relative bg-white rounded-2xl p-8 border border-gray-200 shadow-elegant group-hover:shadow-hover-elegant transition-all duration-500">
        {/* Icon */}
        <div className={`inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br ${variantColors[variant]} text-white mb-6 shadow-md group-hover:scale-110 group-hover:rotate-3 transition-all duration-500`}>
          <Icon className="h-7 w-7" />
        </div>

        {/* Content */}
        <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-900 transition-colors">
          {title}
        </h3>
        <p className="text-gray-600 leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
}
