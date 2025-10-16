/**
 * Checks if the current device is mobile
 */
export const isMobile = (): boolean => {
  if (typeof window === 'undefined') return false;
  return window.innerWidth < 768;
};

/**
 * Checks if the current device is tablet
 */
export const isTablet = (): boolean => {
  if (typeof window === 'undefined') return false;
  return window.innerWidth >= 768 && window.innerWidth < 1024;
};

/**
 * Checks if the current device is desktop
 */
export const isDesktop = (): boolean => {
  if (typeof window === 'undefined') return false;
  return window.innerWidth >= 1024;
};

/**
 * Gets device type based on screen width
 */
export const getDeviceType = (): 'mobile' | 'tablet' | 'desktop' => {
  if (isMobile()) return 'mobile';
  if (isTablet()) return 'tablet';
  return 'desktop';
};

/**
 * Checks if device supports touch
 */
export const isTouchDevice = (): boolean => {
  if (typeof window === 'undefined') return false;
  return 'ontouchstart' in window || navigator.maxTouchPoints > 0;
};

/**
 * Gets user agent information
 */
export const getUserAgent = (): string => {
  if (typeof window === 'undefined') return '';
  return navigator.userAgent;
};

/**
 * Checks if browser is Safari
 */
export const isSafari = (): boolean => {
  if (typeof window === 'undefined') return false;
  return /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
};

/**
 * Checks if browser is Chrome
 */
export const isChrome = (): boolean => {
  if (typeof window === 'undefined') return false;
  return /chrome/i.test(navigator.userAgent) && !/edge/i.test(navigator.userAgent);
};
