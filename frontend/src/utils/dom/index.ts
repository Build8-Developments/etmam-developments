/**
 * Smooth scroll to element
 */
export const scrollToElement = (elementId: string, offset: number = 0): void => {
  const element = document.getElementById(elementId);
  if (element) {
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - offset;
    
    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  }
};

/**
 * Scroll to top of page
 */
export const scrollToTop = (): void => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
};

/**
 * Gets element by ID safely
 */
export const getElementById = (id: string): HTMLElement | null => {
  if (typeof document === 'undefined') return null;
  return document.getElementById(id);
};

/**
 * Gets elements by class name safely
 */
export const getElementsByClassName = (className: string): HTMLCollectionOf<Element> | null => {
  if (typeof document === 'undefined') return null;
  return document.getElementsByClassName(className);
};

/**
 * Adds event listener safely
 */
export const addEventListener = (
  element: Element | Window | Document,
  event: string,
  handler: EventListener,
  options?: boolean | AddEventListenerOptions
): void => {
  if (element && element.addEventListener) {
    element.addEventListener(event, handler, options);
  }
};

/**
 * Removes event listener safely
 */
export const removeEventListener = (
  element: Element | Window | Document,
  event: string,
  handler: EventListener,
  options?: boolean | EventListenerOptions
): void => {
  if (element && element.removeEventListener) {
    element.removeEventListener(event, handler, options);
  }
};

/**
 * Sets CSS custom property
 */
export const setCSSProperty = (property: string, value: string): void => {
  if (typeof document !== 'undefined') {
    document.documentElement.style.setProperty(property, value);
  }
};

/**
 * Gets CSS custom property
 */
export const getCSSProperty = (property: string): string => {
  if (typeof document !== 'undefined') {
    return getComputedStyle(document.documentElement).getPropertyValue(property);
  }
  return '';
};
