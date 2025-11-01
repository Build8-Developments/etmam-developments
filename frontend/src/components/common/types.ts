// Common types used across components
export interface BaseComponentProps {
  className?: string;
  children?: React.ReactNode;
}

export interface LanguageProps {
  language: "ar" | "en";
  isRTL: boolean;
}

export interface ImageAsset {
  url: string;
  alternativeText: string;
}

export interface ButtonProps {
  label?: string;
  href?: string;
  variant?: "primary" | "secondary" | "outlined" | "ghost";
  size?: "sm" | "md" | "lg" | "xl";
  icon?: {
    url?: string;
    name?: string;
  };
  openInNewTab?: boolean;
}

export interface SectionProps extends BaseComponentProps {
  title?: string;
  description?: string;
  id?: string;
}

export interface CardProps extends BaseComponentProps {
  title: string;
  description: string;
  image?: ImageAsset;
  href?: string;
}

export interface IconProps {
  name: string;
  size?: "sm" | "md" | "lg";
  color?: string;
  className?: string;
}
