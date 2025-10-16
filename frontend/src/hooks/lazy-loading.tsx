import React, { lazy, Suspense } from 'react';
import { LoadingSpinner } from '@/components/common';

/**
 * Lazy load components with loading fallback
 * @param importFunc - Function that returns a promise resolving to a component
 * @param fallback - Loading component to show while loading
 */
export function lazyLoadComponent<T extends React.ComponentType<any>>(
  importFunc: () => Promise<{ default: T }>,
  fallback?: React.ReactNode
) {
  const LazyComponent = lazy(importFunc);
  
  return function WrappedComponent(props: React.ComponentProps<T>) {
    return (
      <Suspense fallback={fallback || <LoadingSpinner size="lg" text="جاري التحميل..." />}>
        <LazyComponent {...props} />
      </Suspense>
    );
  };
}

/**
 * Pre-configured lazy components for common use cases
 */
export const LazyComponents = {
  // Lazy load heavy sections
  BlogSection: lazyLoadComponent(() => import('@/components/blog/BlogSection')),
  ServicesSection: lazyLoadComponent(() => import('@/components/services/ServicesSection')),
  StatisticsSection: lazyLoadComponent(() => import('@/components/home/StatisticsSection')),
};

/**
 * Hook for lazy loading with intersection observer
 * @param threshold - Intersection threshold (0-1)
 * @param rootMargin - Root margin for intersection observer
 */
export function useLazyLoad(threshold = 0.1, rootMargin = '50px') {
  const [isVisible, setIsVisible] = React.useState(false);
  const [hasLoaded, setHasLoaded] = React.useState(false);
  const ref = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry && entry.isIntersecting && !hasLoaded) {
          setIsVisible(true);
          setHasLoaded(true);
        }
      },
      { threshold, rootMargin }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [threshold, rootMargin, hasLoaded]);

  return { ref, isVisible, hasLoaded };
}
