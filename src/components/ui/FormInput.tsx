"use client";

import { InputHTMLAttributes, TextareaHTMLAttributes, useState } from 'react';
import { Eye, EyeOff, Check, X } from 'lucide-react';

interface FormInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  success?: boolean;
  helperText?: string;
  icon?: React.ReactNode;
}

interface FormTextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
  success?: boolean;
  helperText?: string;
}

export function FormInput({
  label,
  error,
  success,
  helperText,
  icon,
  type = 'text',
  className = '',
  ...props
}: FormInputProps) {
  const [isFocused, setIsFocused] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const isPassword = type === 'password';
  const inputType = isPassword && showPassword ? 'text' : type;

  return (
    <div className="space-y-2">
      {label && (
        <label
          htmlFor={props.id}
          className={`block text-sm font-semibold transition-colors duration-300 ${
            error ? 'text-red-600' : isFocused ? 'text-primary-600' : 'text-gray-900'
          }`}
        >
          {label}
          {props.required && <span className="text-red-600 ml-1">*</span>}
        </label>
      )}

      <div className="relative group">
        {/* Icon */}
        {icon && (
          <div className={`absolute left-3 top-1/2 -translate-y-1/2 transition-colors duration-300 ${
            error ? 'text-red-500' : isFocused ? 'text-primary-600' : 'text-gray-400'
          }`}>
            {icon}
          </div>
        )}

        {/* Input */}
        <input
          type={inputType}
          className={`
            w-full px-4 py-3 rounded-xl border-2 bg-white
            transition-all duration-300
            ${icon ? 'pl-11' : ''}
            ${isPassword ? 'pr-11' : ''}
            ${
              error
                ? 'border-red-300 focus:border-red-500 focus:ring-4 focus:ring-red-100'
                : success
                ? 'border-green-300 focus:border-green-500 focus:ring-4 focus:ring-green-100'
                : 'border-gray-300 focus:border-primary-500 focus:ring-4 focus:ring-primary-100'
            }
            hover:border-gray-400
            focus:outline-none
            disabled:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-60
            placeholder:text-gray-400
            ${className}
          `}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          {...props}
        />

        {/* Password Toggle */}
        {isPassword && (
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors p-1"
            tabIndex={-1}
          >
            {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
          </button>
        )}

        {/* Success/Error Icon */}
        {(success || error) && !isPassword && (
          <div className="absolute right-3 top-1/2 -translate-y-1/2">
            {success && <Check className="w-5 h-5 text-green-600" />}
            {error && <X className="w-5 h-5 text-red-600" />}
          </div>
        )}

        {/* Animated Border Bottom */}
        <div className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-primary-600 to-blue-600 transition-all duration-300 ${
          isFocused ? 'w-full' : 'w-0'
        }`} />
      </div>

      {/* Helper Text / Error */}
      {(helperText || error) && (
        <p className={`text-sm flex items-start gap-1.5 transition-all duration-300 ${
          error ? 'text-red-600' : 'text-gray-600'
        }`}>
          {error ? (
            <>
              <X className="w-4 h-4 flex-shrink-0 mt-0.5" />
              {error}
            </>
          ) : (
            helperText
          )}
        </p>
      )}
    </div>
  );
}

export function FormTextarea({
  label,
  error,
  success,
  helperText,
  className = '',
  ...props
}: FormTextareaProps) {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div className="space-y-2">
      {label && (
        <label
          htmlFor={props.id}
          className={`block text-sm font-semibold transition-colors duration-300 ${
            error ? 'text-red-600' : isFocused ? 'text-primary-600' : 'text-gray-900'
          }`}
        >
          {label}
          {props.required && <span className="text-red-600 ml-1">*</span>}
        </label>
      )}

      <div className="relative group">
        {/* Textarea */}
        <textarea
          className={`
            w-full px-4 py-3 rounded-xl border-2 bg-white
            transition-all duration-300 resize-none
            ${
              error
                ? 'border-red-300 focus:border-red-500 focus:ring-4 focus:ring-red-100'
                : success
                ? 'border-green-300 focus:border-green-500 focus:ring-4 focus:ring-green-100'
                : 'border-gray-300 focus:border-primary-500 focus:ring-4 focus:ring-primary-100'
            }
            hover:border-gray-400
            focus:outline-none
            disabled:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-60
            placeholder:text-gray-400
            ${className}
          `}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          {...props}
        />

        {/* Animated Border Bottom */}
        <div className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-primary-600 to-blue-600 transition-all duration-300 ${
          isFocused ? 'w-full' : 'w-0'
        }`} />
      </div>

      {/* Helper Text / Error */}
      {(helperText || error) && (
        <p className={`text-sm flex items-start gap-1.5 transition-all duration-300 ${
          error ? 'text-red-600' : 'text-gray-600'
        }`}>
          {error ? (
            <>
              <X className="w-4 h-4 flex-shrink-0 mt-0.5" />
              {error}
            </>
          ) : (
            helperText
          )}
        </p>
      )}
    </div>
  );
}
