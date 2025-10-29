'use client';

import { useEffect, useRef, useState, ReactNode } from 'react';

interface AnimatedSectionProps {
  children: ReactNode;
  animation?: 'fadeInUp' | 'fadeIn' | 'fadeInLeft' | 'fadeInRight' | 'scaleIn' | 'slideInUp' | 'entranceBlur';
  delay?: number;
  className?: string;
  threshold?: number;
  once?: boolean; // Only animate once
}

export const AnimatedSection = ({
  children,
  animation = 'fadeInUp',
  delay = 0,
  className = '',
  threshold = 0.1,
  once = true,
}: AnimatedSectionProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry && entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true);
          }, delay);
          
          // If once is true, stop observing after first animation
          if (once && ref.current) {
            observer.unobserve(ref.current);
          }
        } else if (entry && !once) {
          // Re-animate when leaving viewport if once is false
          setIsVisible(false);
        }
      },
      { 
        threshold,
        rootMargin: '0px 0px -50px 0px' // Start animation slightly before element enters viewport
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [delay, threshold, once]);

  const animationClasses = {
    fadeInUp: 'animate-fade-in-up',
    fadeIn: 'animate-fade-in',
    fadeInLeft: 'animate-fade-in-left',
    fadeInRight: 'animate-fade-in-right',
    scaleIn: 'animate-scale-in',
    slideInUp: 'animate-slide-in-up',
    entranceBlur: 'entrance-blur',
  };

  return (
    <div
      ref={ref}
      className={`${isVisible ? animationClasses[animation] : 'opacity-0'} ${className}`}
      style={{
        transition: 'opacity 0.3s ease-out',
      }}
    >
      {children}
    </div>
  );
};

