// Utility CSS classes
export const UTILITY_CLASSES = {
  // Display
  hidden: 'hidden',
  block: 'block',
  inline: 'inline',
  inlineBlock: 'inline-block',
  flex: 'flex',
  inlineFlex: 'inline-flex',
  grid: 'grid',
  inlineGrid: 'inline-grid',
  
  // Position
  static: 'static',
  relative: 'relative',
  absolute: 'absolute',
  fixed: 'fixed',
  sticky: 'sticky',
  
  // Overflow
  overflowHidden: 'overflow-hidden',
  overflowVisible: 'overflow-visible',
  overflowScroll: 'overflow-scroll',
  overflowAuto: 'overflow-auto',
  
  // Text alignment
  textLeft: 'text-left',
  textCenter: 'text-center',
  textRight: 'text-right',
  textJustify: 'text-justify',
  
  // Text decoration
  underline: 'underline',
  noUnderline: 'no-underline',
  lineThrough: 'line-through',
  
  // Font weight
  fontThin: 'font-thin',
  fontLight: 'font-light',
  fontNormal: 'font-normal',
  fontMedium: 'font-medium',
  fontSemibold: 'font-semibold',
  fontBold: 'font-bold',
  fontExtrabold: 'font-extrabold',
  fontBlack: 'font-black',
  
  // Font size
  textXs: 'text-xs',
  textSm: 'text-sm',
  textBase: 'text-base',
  textLg: 'text-lg',
  textXl: 'text-xl',
  text2xl: 'text-2xl',
  text3xl: 'text-3xl',
  text4xl: 'text-4xl',
  text5xl: 'text-5xl',
  text6xl: 'text-6xl',
  
  // Line height
  leadingNone: 'leading-none',
  leadingTight: 'leading-tight',
  leadingSnug: 'leading-snug',
  leadingNormal: 'leading-normal',
  leadingRelaxed: 'leading-relaxed',
  leadingLoose: 'leading-loose',
  
  // Letter spacing
  trackingTighter: 'tracking-tighter',
  trackingTight: 'tracking-tight',
  trackingNormal: 'tracking-normal',
  trackingWide: 'tracking-wide',
  trackingWider: 'tracking-wider',
  trackingWidest: 'tracking-widest',
  
  // Colors
  textPrimary: 'text-primary',
  textSecondary: 'text-secondary',
  textAccent: 'text-accent',
  textGray: 'text-gray-600',
  textWhite: 'text-white',
  textBlack: 'text-black',
  
  // Background colors
  bgPrimary: 'bg-primary',
  bgSecondary: 'bg-secondary',
  bgAccent: 'bg-accent',
  bgWhite: 'bg-white',
  bgBlack: 'bg-black',
  bgGray: 'bg-gray-100',
  
  // Border
  border: 'border',
  borderT: 'border-t',
  borderR: 'border-r',
  borderB: 'border-b',
  borderL: 'border-l',
  borderPrimary: 'border-primary',
  borderSecondary: 'border-secondary',
  borderGray: 'border-gray-300',
  
  // Border radius
  rounded: 'rounded',
  roundedSm: 'rounded-sm',
  roundedMd: 'rounded-md',
  roundedLg: 'rounded-lg',
  roundedXl: 'rounded-xl',
  rounded2xl: 'rounded-2xl',
  rounded3xl: 'rounded-3xl',
  roundedFull: 'rounded-full',
  
  // Shadow
  shadowSm: 'shadow-sm',
  shadow: 'shadow',
  shadowMd: 'shadow-md',
  shadowLg: 'shadow-lg',
  shadowXl: 'shadow-xl',
  shadow2xl: 'shadow-2xl',
  shadowNone: 'shadow-none',
  
  // Opacity
  opacity0: 'opacity-0',
  opacity25: 'opacity-25',
  opacity50: 'opacity-50',
  opacity75: 'opacity-75',
  opacity100: 'opacity-100',
  
  // Transform
  transform: 'transform',
  scale0: 'scale-0',
  scale50: 'scale-50',
  scale75: 'scale-75',
  scale90: 'scale-90',
  scale95: 'scale-95',
  scale100: 'scale-100',
  scale105: 'scale-105',
  scale110: 'scale-110',
  scale125: 'scale-125',
  scale150: 'scale-150',
  
  // Transition
  transition: 'transition',
  transitionAll: 'transition-all',
  transitionColors: 'transition-colors',
  transitionOpacity: 'transition-opacity',
  transitionTransform: 'transition-transform',
  
  // Duration
  duration75: 'duration-75',
  duration100: 'duration-100',
  duration150: 'duration-150',
  duration200: 'duration-200',
  duration300: 'duration-300',
  duration500: 'duration-500',
  duration700: 'duration-700',
  duration1000: 'duration-1000',
  
  // Easing
  easeLinear: 'ease-linear',
  easeIn: 'ease-in',
  easeOut: 'ease-out',
  easeInOut: 'ease-in-out',
} as const;

// Responsive utility classes
export const RESPONSIVE_CLASSES = {
  // Breakpoint prefixes
  sm: 'sm:',
  md: 'md:',
  lg: 'lg:',
  xl: 'xl:',
  '2xl': '2xl:',
  
  // Common responsive patterns
  responsiveText: {
    sm: 'text-sm sm:text-base lg:text-lg',
    md: 'text-base sm:text-lg lg:text-xl',
    lg: 'text-lg sm:text-xl lg:text-2xl',
    xl: 'text-xl sm:text-2xl lg:text-3xl',
  },
  
  responsiveSpacing: {
    sm: 'p-4 sm:p-6 lg:p-8',
    md: 'p-6 sm:p-8 lg:p-12',
    lg: 'p-8 sm:p-12 lg:p-16',
  },
  
  responsiveGrid: {
    cols1: 'grid-cols-1',
    cols2: 'grid-cols-1 sm:grid-cols-2',
    cols3: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3',
    cols4: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4',
  },
} as const;
