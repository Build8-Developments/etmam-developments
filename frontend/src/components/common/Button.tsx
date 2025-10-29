'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import { ButtonProps } from './types';
import Link from 'next/link';

interface ButtonComponentProps extends ButtonProps {
  onClick?: () => void;
  disabled?: boolean;
  loading?: boolean;
  className?: string;
}

export function Button({ 
  label, 
  href, 
  variant = 'primary', 
  size = 'md',
  onClick,
  disabled = false,
  loading = false,
  className = ''
}: ButtonComponentProps) {
  const { language } = useLanguage();
  
  const baseClasses = 'inline-flex items-center justify-center font-semibold transition-smooth focus:outline-none focus:ring-2 focus:ring-offset-2 transform';
  
  const variantClasses = {
    primary: 'bg-primary hover:bg-green-600 text-white shadow-lg hover:shadow-xl hover-lift',
    secondary: 'bg-green-700 hover:bg-green-800 text-white shadow-lg hover:shadow-xl hover-lift',
    outline: 'bg-transparent text-white border-2 border-white hover:bg-white hover:text-gray-800 hover-scale'
  };
  
  const sizeClasses = {
    sm: 'px-4 py-2 text-sm rounded-lg',
    md: 'px-6 py-3 text-base rounded-lg',
    lg: 'px-8 py-4 text-lg rounded-xl'
  };
  
  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;
  
  if (href) {
    return (
      <Link href={href} className={classes} dir={language === 'ar' ? 'rtl' : 'ltr'}>
        {loading ? '...' : label}
      </Link>
    );
  }
  
  return (
    <button 
      onClick={onClick} 
      disabled={disabled || loading}
      className={classes}
      dir={language === 'ar' ? 'rtl' : 'ltr'}
    >
      {loading ? '...' : label}
    </button>
  );
}
