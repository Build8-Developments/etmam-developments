// Responsive breakpoints
export const BREAKPOINTS = {
  xs: '0px',
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px',
} as const;

// Device types based on breakpoints
export const DEVICE_TYPES = {
  mobile: `(max-width: ${BREAKPOINTS.md})`,
  tablet: `(min-width: ${BREAKPOINTS.md}) and (max-width: ${BREAKPOINTS.lg})`,
  desktop: `(min-width: ${BREAKPOINTS.lg})`,
} as const;

// Container max widths
export const CONTAINER_WIDTHS = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px',
  full: '100%',
} as const;

// Grid configurations
export const GRID_CONFIG = {
  columns: {
    mobile: 1,
    tablet: 2,
    desktop: 3,
    wide: 4,
  },
  gaps: {
    sm: '0.5rem',
    md: '1rem',
    lg: '1.5rem',
    xl: '2rem',
  },
} as const;

// Spacing scale
export const SPACING = {
  0: '0px',
  1: '0.25rem',
  2: '0.5rem',
  3: '0.75rem',
  4: '1rem',
  5: '1.25rem',
  6: '1.5rem',
  8: '2rem',
  10: '2.5rem',
  12: '3rem',
  16: '4rem',
  20: '5rem',
  24: '6rem',
  32: '8rem',
  40: '10rem',
  48: '12rem',
  56: '14rem',
  64: '16rem',
} as const;
