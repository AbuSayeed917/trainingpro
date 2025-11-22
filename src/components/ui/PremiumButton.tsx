"use client";

import { ButtonHTMLAttributes, ReactNode } from 'react';
import { Loader2 } from 'lucide-react';

interface PremiumButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'gradient';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  isLoading?: boolean;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  fullWidth?: boolean;
}

export function PremiumButton({
  children,
  variant = 'primary',
  size = 'md',
  isLoading = false,
  leftIcon,
  rightIcon,
  fullWidth = false,
  className = '',
  disabled,
  ...props
}: PremiumButtonProps) {
  const baseStyles = `
    relative inline-flex items-center justify-center gap-2 font-semibold
    transition-all duration-300 rounded-xl overflow-hidden
    focus:outline-none focus:ring-4 focus:ring-offset-2
    disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100
    group
  `;

  const sizeStyles = {
    sm: 'px-4 py-2 text-sm min-h-[36px]',
    md: 'px-6 py-3 text-base min-h-[44px]',
    lg: 'px-8 py-4 text-lg min-h-[52px]',
    xl: 'px-10 py-5 text-xl min-h-[60px]',
  };

  const variantStyles = {
    primary: `
      bg-gradient-to-r from-primary-600 to-blue-600 text-white
      hover:from-primary-700 hover:to-blue-700
      hover:scale-105 hover:shadow-elegant
      focus:ring-primary-300
      active:scale-95
    `,
    secondary: `
      bg-gray-100 text-gray-900 border-2 border-gray-200
      hover:bg-gray-200 hover:border-gray-300
      hover:scale-105 hover:shadow-md
      focus:ring-gray-300
      active:scale-95
    `,
    outline: `
      bg-transparent text-primary-600 border-2 border-primary-600
      hover:bg-primary-50 hover:border-primary-700
      hover:scale-105 hover:shadow-md
      focus:ring-primary-300
      active:scale-95
    `,
    ghost: `
      bg-transparent text-gray-700 hover:bg-gray-100
      hover:scale-105
      focus:ring-gray-300
      active:scale-95
    `,
    gradient: `
      bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600
      text-white bg-size-200 bg-pos-0 hover:bg-pos-100
      hover:scale-105 hover:shadow-elegant
      focus:ring-purple-300
      active:scale-95
    `,
  };

  return (
    <button
      className={`
        ${baseStyles}
        ${sizeStyles[size]}
        ${variantStyles[variant]}
        ${fullWidth ? 'w-full' : ''}
        ${className}
      `}
      disabled={disabled || isLoading}
      {...props}
    >
      {/* Ripple Effect Layer */}
      <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300" />

      {/* Shimmer Effect */}
      <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent" />

      {/* Content */}
      <span className="relative flex items-center justify-center gap-2">
        {isLoading ? (
          <Loader2 className="w-5 h-5 animate-spin" />
        ) : (
          leftIcon && <span className="transition-transform group-hover:scale-110 duration-300">{leftIcon}</span>
        )}

        <span>{children}</span>

        {!isLoading && rightIcon && (
          <span className="transition-transform group-hover:translate-x-1 duration-300">{rightIcon}</span>
        )}
      </span>
    </button>
  );
}
