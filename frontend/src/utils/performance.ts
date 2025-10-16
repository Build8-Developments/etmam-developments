/**
 * Utility functions for performance optimization
 */

/**
 * Debounce function to limit the rate of function execution
 * @param func - Function to debounce
 * @param wait - Delay in milliseconds
 * @param immediate - Execute immediately on first call
 */
export function debounce<T extends (...args: any[]) => any>(
  func: T,
  wait: number,
  immediate = false
): (...args: Parameters<T>) => void {
  let timeout: NodeJS.Timeout | null = null;
  
  return function executedFunction(...args: Parameters<T>) {
    const later = () => {
      timeout = null;
      if (!immediate) func(...args);
    };
    
    const callNow = immediate && !timeout;
    
    if (timeout) clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    
    if (callNow) func(...args);
  };
}

/**
 * Throttle function to limit function execution to once per interval
 * @param func - Function to throttle
 * @param limit - Time limit in milliseconds
 */
export function throttle<T extends (...args: any[]) => any>(
  func: T,
  limit: number
): (...args: Parameters<T>) => void {
  let inThrottle: boolean;
  
  return function executedFunction(this: any, ...args: Parameters<T>) {
    if (!inThrottle) {
      func.apply(this, args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
}

/**
 * Check if element is in viewport
 * @param element - DOM element to check
 * @param threshold - Visibility threshold (0-1)
 */
export function isInViewport(element: Element, threshold = 0): boolean {
  const rect = element.getBoundingClientRect();
  const windowHeight = window.innerHeight || document.documentElement.clientHeight;
  const windowWidth = window.innerWidth || document.documentElement.clientWidth;
  
  return (
    rect.top <= windowHeight * (1 - threshold) &&
    rect.bottom >= windowHeight * threshold &&
    rect.left <= windowWidth &&
    rect.right >= 0
  );
}

/**
 * Preload image for better performance
 * @param src - Image source URL
 * @returns Promise that resolves when image is loaded
 */
export function preloadImage(src: string): Promise<HTMLImageElement> {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve(img);
    img.onerror = reject;
    img.src = src;
  });
}

/**
 * Batch DOM updates for better performance
 * @param updates - Array of update functions
 */
export function batchUpdates(updates: (() => void)[]): void {
  // Use requestAnimationFrame for smooth updates
  requestAnimationFrame(() => {
    updates.forEach(update => update());
  });
}

/**
 * Measure performance of a function
 * @param func - Function to measure
 * @param label - Performance label
 * @returns Function result and performance metrics
 */
export async function measurePerformance<T>(
  func: () => T | Promise<T>,
  label = 'Performance'
): Promise<{ result: T; duration: number }> {
  const start = performance.now();
  const result = await func();
  const end = performance.now();
  const duration = end - start;
  
  console.log(`${label}: ${duration.toFixed(2)}ms`);
  
  return { result, duration };
}
