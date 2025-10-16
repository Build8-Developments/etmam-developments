'use client';

import { CardProps } from './types';
import Image from 'next/image';
import Link from 'next/link';

export function Card({ 
  title, 
  description, 
  image, 
  href, 
  className = '',
  children 
}: CardProps) {
  const cardContent = (
    <div className={`bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 ${className}`}>
      {image && (
        <div className="relative w-full h-48 overflow-hidden rounded-t-xl">
          <Image
            src={image.url}
            alt={image.alternativeText}
            fill
            className="object-cover"
          />
        </div>
      )}
      
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-800 mb-3" style={{ fontFamily: 'var(--font-almarai)' }}>
          {title}
        </h3>
        
        <p className="text-gray-600 mb-4" style={{ fontFamily: 'var(--font-almarai)' }}>
          {description}
        </p>
        
        {children}
      </div>
    </div>
  );
  
  if (href) {
    return (
      <Link href={href} className="block">
        {cardContent}
      </Link>
    );
  }
  
  return cardContent;
}
