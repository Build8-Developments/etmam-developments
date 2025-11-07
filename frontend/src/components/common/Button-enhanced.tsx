/**
 * Enhanced Button component with better accessibility and loading states
 */

import React from 'react';
import { clsx } from 'clsx';
import { LoadingSpinner } from './LoadingSpinner';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger';
  size?: 'sm' | 'md' | 'lg';
  loading?: boolean;
  loadingText?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  fullWidth?: boolean;
  children: React.ReactNode;
}

/**
 * Enhanced Button component with accessibility features and loading states
 * @param variant - Button style variant
 * @param size - Button size
 * @param loading - Whether button is in loading state
 * @param loadingText - Text to show during loading
 * @param leftIcon - Icon to display on the left
 * @param rightIcon - Icon to display on the right
 * @param fullWidth - Whether button should take full width
 * @param children - Button content
 */
export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  loading = false,
  loadingText,
  leftIcon,
  rightIcon,
  fullWidth = false,
  className,
  disabled,
  children,
  ...props
}) => {
  const baseClasses = 'inline-flex items-center justify-center font-medium rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed';
  
  const variantClasses = {
    primary: 'bg-[#026838] text-white hover:bg-[#014d29] focus:ring-[#026838]',
    secondary: 'bg-[#aad83a] text-[#026838] hover:bg-[#8fb830] focus:ring-[#aad83a]',
    outline: 'border-2 border-[#026838] text-[#026838] hover:bg-[#026838] hover:text-white focus:ring-[#026838]',
    ghost: 'text-[#026838] hover:bg-[#dff4d8] focus:ring-[#026838]',
    danger: 'bg-red-600 text-white hover:bg-red-700 focus:ring-red-500',
  };
  
  const sizeClasses = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg',
  };

  const isDisabled = disabled || loading;

  return (
    <button
      className={clsx(
        baseClasses,
        variantClasses[variant],
        sizeClasses[size],
        fullWidth && 'w-full',
        className
      )}
      disabled={isDisabled}
      aria-disabled={isDisabled}
      {...props}
    >
      {loading ? (
        <>
          <LoadingSpinner size="sm" color="white" className="mr-2" />
          {loadingText || 'جاري التحميل...'}
        </>
      ) : (
        <>
          {leftIcon && <span className="mr-2">{leftIcon}</span>}
          {children}
          {rightIcon && <span className="ml-2">{rightIcon}</span>}
        </>
      )}
    </button>
  );
};
