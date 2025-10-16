// Global CSS variables and base styles
export const GLOBAL_STYLES = {
  // CSS Custom Properties
  colors: {
    primary: 'var(--color-primary)',
    secondary: 'var(--color-secondary)',
    accent: 'var(--color-accent)',
    background: 'var(--color-background)',
    surface: 'var(--color-surface)',
    text: 'var(--color-text)',
    textSecondary: 'var(--color-text-secondary)',
    border: 'var(--color-border)',
    error: 'var(--color-error)',
    success: 'var(--color-success)',
    warning: 'var(--color-warning)',
    info: 'var(--color-info)',
  },
  
  // Typography
  fonts: {
    primary: 'var(--font-primary)',
    secondary: 'var(--font-secondary)',
    mono: 'var(--font-mono)',
  },
  
  // Spacing
  spacing: {
    xs: 'var(--spacing-xs)',
    sm: 'var(--spacing-sm)',
    md: 'var(--spacing-md)',
    lg: 'var(--spacing-lg)',
    xl: 'var(--spacing-xl)',
    '2xl': 'var(--spacing-2xl)',
  },
  
  // Border radius
  borderRadius: {
    sm: 'var(--border-radius-sm)',
    md: 'var(--border-radius-md)',
    lg: 'var(--border-radius-lg)',
    xl: 'var(--border-radius-xl)',
    full: 'var(--border-radius-full)',
  },
  
  // Shadows
  shadows: {
    sm: 'var(--shadow-sm)',
    md: 'var(--shadow-md)',
    lg: 'var(--shadow-lg)',
    xl: 'var(--shadow-xl)',
  },
  
  // Transitions
  transitions: {
    fast: 'var(--transition-fast)',
    normal: 'var(--transition-normal)',
    slow: 'var(--transition-slow)',
  },
} as const;

// Common CSS classes
export const COMMON_CLASSES = {
  // Layout
  container: 'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8',
  section: 'py-16 lg:py-24',
  grid: 'grid gap-6 lg:gap-8',
  
  // Typography
  heading: 'text-3xl lg:text-4xl font-bold',
  subheading: 'text-xl lg:text-2xl font-semibold',
  body: 'text-base lg:text-lg',
  caption: 'text-sm lg:text-base',
  
  // Buttons
  button: 'inline-flex items-center justify-center px-6 py-3 rounded-lg font-semibold transition-all duration-300',
  buttonPrimary: 'bg-primary text-white hover:bg-primary-dark shadow-lg hover:shadow-xl',
  buttonSecondary: 'bg-secondary text-white hover:bg-secondary-dark shadow-lg hover:shadow-xl',
  buttonOutline: 'border-2 border-primary text-primary hover:bg-primary hover:text-white',
  
  // Cards
  card: 'bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300',
  cardBody: 'p-6',
  
  // Forms
  input: 'w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent',
  label: 'block text-sm font-semibold text-gray-700 mb-2',
  
  // Utilities
  srOnly: 'sr-only',
  focusVisible: 'focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2',
} as const;
