// ========================================
// COMMON COMPONENTS (Reusable)
// ========================================
export * from './common';

// ========================================
// UI COMPONENTS (Basic UI Elements)
// ========================================
export { LoadingSpinner, Modal, Toast } from './ui';

// ========================================
// LAYOUT COMPONENTS
// ========================================
export { default as Header } from './layout/Header';
export { default as Footer } from './layout/Footer';

// ========================================
// SECTION COMPONENTS (Large Components)
// ========================================
export { FAQSection } from './sections/FAQSection';
export { ConsultationSection } from './sections/ConsultationSection';

// ========================================
// PAGE-SPECIFIC COMPONENTS
// ========================================

// Home Page Components
export { default as HeroSection } from './home/HeroSection';
export { default as AboutSection } from './home/AboutSection';
export { default as CTASection } from './home/CTASection';
export { default as StatisticsSection } from './home/StatisticsSection';
export { default as PartnersSection } from './home/PartnersSection';
export { default as ReviewsSection } from './home/ReviewsSection';

// Services Components
export { default as ServicesSection } from './services/ServicesSection';
export { default as ServicesCarouselSection } from './services/ServicesCarouselSection';
export { default as HowItWorksSection } from './services/HowItWorksSection';
export { ServiceCard } from './services/ServiceCard';
export { default as ServiceDetailPage } from './services/ServiceDetailPage';
export { ServicesGrid } from './services/ServicesGrid';

// About Page Components
export { default as LeadershipSection } from './about/LeadershipSection';
export { default as SuccessFoundationSection } from './about/SuccessFoundationSection';
export { default as WhyChooseSection } from './about/WhyChooseSection';

// Blog Components
export { default as BlogSection } from './blog/BlogSection';

// ========================================
// PROVIDERS
// ========================================
export { default as ApolloWrapper } from './providers/ApolloWrapper';
