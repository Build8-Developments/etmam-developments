// Theme configuration - Based on Brand Identity
export const THEME_CONFIG = {
  light: {
    colors: {
      primary: '#026838',        // Main brand green
      primaryDark: '#014d29',    // Darker green
      primaryLight: '#03885a',   // Lighter green
      secondary: '#aad83a',      // Lime green accent
      secondaryDark: '#8fb830',  // Darker lime
      secondaryLight: '#c5e674', // Lighter lime
      accent: '#aad83a',         // Lime green for CTAs
      background: '#FFFFFF',
      surface: '#dff4d8',        // Light mint background
      surfaceLight: '#f0f9ec',   // Very light mint
      text: '#171717',
      textSecondary: '#616764',  // Brand gray
      border: '#c0e6d1',
      error: '#EF4444',
      success: '#026838',        // Use brand green for success
      warning: '#F59E0B',
      info: '#03885a',
    },
    shadows: {
      sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
      md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
      lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
      xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
    },
  },
  dark: {
    colors: {
      primary: '#03885a',        // Lighter brand green for dark mode
      primaryDark: '#026838',    // Main green
      primaryLight: '#4cbb7d',   // Even lighter
      secondary: '#c3ec60',      // Brighter lime for dark mode
      secondaryDark: '#aad83a',  // Main lime
      secondaryLight: '#ddf4a4', // Lighter lime
      accent: '#c3ec60',         // Bright lime for CTAs in dark mode
      background: '#111827',
      surface: '#1F2937',
      surfaceLight: '#374151',
      text: '#F9FAFB',
      textSecondary: '#8a8f8c',  // Lighter brand gray
      border: '#4a4f4c',         // Dark brand gray
      error: '#EF4444',
      success: '#4cbb7d',        // Lighter brand green for success
      warning: '#F59E0B',
      info: '#73c999',
    },
    shadows: {
      sm: '0 1px 2px 0 rgba(0, 0, 0, 0.3)',
      md: '0 4px 6px -1px rgba(0, 0, 0, 0.4), 0 2px 4px -1px rgba(0, 0, 0, 0.3)',
      lg: '0 10px 15px -3px rgba(0, 0, 0, 0.4), 0 4px 6px -2px rgba(0, 0, 0, 0.3)',
      xl: '0 20px 25px -5px rgba(0, 0, 0, 0.4), 0 10px 10px -5px rgba(0, 0, 0, 0.2)',
    },
  },
} as const;

// CSS Custom Properties generator
export const generateCSSVariables = (theme: keyof typeof THEME_CONFIG) => {
  const themeConfig = THEME_CONFIG[theme];
  
  return {
    '--color-primary': themeConfig.colors.primary,
    '--color-primary-dark': themeConfig.colors.primaryDark,
    '--color-primary-light': themeConfig.colors.primaryLight,
    '--color-secondary': themeConfig.colors.secondary,
    '--color-secondary-dark': themeConfig.colors.secondaryDark,
    '--color-secondary-light': themeConfig.colors.secondaryLight,
    '--color-accent': themeConfig.colors.accent,
    '--color-background': themeConfig.colors.background,
    '--color-surface': themeConfig.colors.surface,
    '--color-surface-light': themeConfig.colors.surfaceLight,
    '--color-text': themeConfig.colors.text,
    '--color-text-secondary': themeConfig.colors.textSecondary,
    '--color-border': themeConfig.colors.border,
    '--color-error': themeConfig.colors.error,
    '--color-success': themeConfig.colors.success,
    '--color-warning': themeConfig.colors.warning,
    '--color-info': themeConfig.colors.info,
    '--shadow-sm': themeConfig.shadows.sm,
    '--shadow-md': themeConfig.shadows.md,
    '--shadow-lg': themeConfig.shadows.lg,
    '--shadow-xl': themeConfig.shadows.xl,
  };
};

// Font configuration
export const FONT_CONFIG = {
  primary: 'var(--font-almarai), system-ui, sans-serif',
  secondary: 'var(--font-outfit), system-ui, sans-serif',
  mono: 'ui-monospace, SFMono-Regular, "SF Mono", Consolas, "Liberation Mono", Menlo, monospace',
} as const;

// Spacing scale
export const SPACING_SCALE = {
  xs: '0.25rem',
  sm: '0.5rem',
  md: '1rem',
  lg: '1.5rem',
  xl: '2rem',
  '2xl': '3rem',
  '3xl': '4rem',
  '4xl': '6rem',
  '5xl': '8rem',
} as const;

// Border radius scale
export const BORDER_RADIUS_SCALE = {
  none: '0',
  sm: '0.125rem',
  md: '0.375rem',
  lg: '0.5rem',
  xl: '0.75rem',
  '2xl': '1rem',
  '3xl': '1.5rem',
  full: '9999px',
} as const;

// Transition configuration
export const TRANSITION_CONFIG = {
  fast: '150ms ease-in-out',
  normal: '300ms ease-in-out',
  slow: '500ms ease-in-out',
} as const;
