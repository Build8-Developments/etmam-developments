// Theme configuration
export const THEME_CONFIG = {
  light: {
    colors: {
      primary: '#90C054',
      primaryDark: '#7BA047',
      secondary: '#11613A',
      secondaryDark: '#0A3A22',
      accent: '#F59E0B',
      background: '#FFFFFF',
      surface: '#F9FAFB',
      text: '#111827',
      textSecondary: '#6B7280',
      border: '#E5E7EB',
      error: '#EF4444',
      success: '#10B981',
      warning: '#F59E0B',
      info: '#3B82F6',
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
      primary: '#90C054',
      primaryDark: '#7BA047',
      secondary: '#11613A',
      secondaryDark: '#0A3A22',
      accent: '#F59E0B',
      background: '#111827',
      surface: '#1F2937',
      text: '#F9FAFB',
      textSecondary: '#D1D5DB',
      border: '#374151',
      error: '#EF4444',
      success: '#10B981',
      warning: '#F59E0B',
      info: '#3B82F6',
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
    '--color-secondary': themeConfig.colors.secondary,
    '--color-secondary-dark': themeConfig.colors.secondaryDark,
    '--color-accent': themeConfig.colors.accent,
    '--color-background': themeConfig.colors.background,
    '--color-surface': themeConfig.colors.surface,
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
