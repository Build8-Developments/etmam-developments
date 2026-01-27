// Common components exports
export { Button } from "./Button";
export { Icon } from "./Icon";
export { Card } from "./Card";
export { Section } from "./Section";
export { ContactForm } from "./ContactForm";
export { ErrorBoundary, useErrorHandler } from "./ErrorBoundary";
export { LoadingSpinner, PageLoader, SkeletonLoader } from "./LoadingSpinner";
export { default as WhatsAppFloat } from "./WhatsAppFloat";
export { AnimatedSection } from "./AnimatedSection";
export { StaggerChildren } from "./StaggerChildren";
export { Breadcrumb } from "./Breadcrumb";

// Skeleton components
export {
  Skeleton,
  HeroSkeleton,
  CardSkeleton,
  CardsGridSkeleton,
  BlogCardSkeleton,
  FeaturedBlogSkeleton,
  BlogDetailSkeleton,
  ServiceDetailSkeleton,
  LegalCategorySkeleton,
  PackageCardSkeleton,
  OfferCardSkeleton,
  TeamMemberSkeleton,
  StatsSkeleton,
  SectionSkeleton,
  FAQSkeleton,
  PartnersSkeleton,
  ContactFormSkeleton,
  ContactInfoSkeleton,
  SearchBarSkeleton,
  FilterPillsSkeleton,
} from "./Skeletons";

// Types exports
export type {
  BaseComponentProps,
  LanguageProps,
  ImageAsset,
  ButtonProps,
  SectionProps,
  CardProps,
  IconProps,
} from "./types";
