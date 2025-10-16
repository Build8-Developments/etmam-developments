# Components Directory Structure

This directory contains all React components organized in a clean, scalable structure.

## 📁 Directory Structure

```
components/
├── common/           # Reusable components
│   ├── Button.tsx   # Unified button component
│   ├── Card.tsx     # Card component
│   ├── Icon.tsx     # Icon component
│   ├── Section.tsx  # Section wrapper
│   ├── types.ts     # Common types
│   └── index.ts     # Common exports
├── ui/              # Basic UI components
│   └── index.tsx    # LoadingSpinner, Modal, Toast
├── layout/          # Layout components
│   ├── Header.tsx   # Navigation header
│   ├── Footer.tsx   # Site footer
│   └── index.ts     # Layout exports
├── sections/        # Large section components
│   ├── FAQSection.tsx
│   ├── ConsultationSection.tsx
│   └── index.ts
├── home/            # Home page components
│   ├── HeroSection.tsx
│   ├── AboutSection.tsx
│   ├── CTASection.tsx
│   ├── StatisticsSection.tsx
│   ├── PartnersSection.tsx
│   └── index.ts
├── services/        # Services page components
│   ├── ServicesSection.tsx
│   ├── ServiceCard.tsx
│   ├── ServicesGrid.tsx
│   ├── ServicesCarouselSection.tsx
│   ├── HowItWorksSection.tsx
│   ├── ServiceDetailPage.tsx
│   └── index.ts
├── about/           # About page components
│   ├── LeadershipSection.tsx
│   ├── SuccessFoundationSection.tsx
│   ├── WhyChooseSection.tsx
│   └── index.ts
├── blog/            # Blog components
│   ├── BlogSection.tsx
│   └── index.ts
├── providers/       # Context providers
│   ├── ApolloWrapper.tsx
│   └── index.ts
├── types/           # TypeScript definitions
│   └── index.ts
└── index.ts         # Main exports
```

## 🎯 Component Categories

### Common Components
Reusable components used across the application:
- **Button**: Unified button with variants (primary, secondary, outline)
- **Card**: Flexible card component with optional image and link
- **Icon**: SVG icon component with predefined icon set
- **Section**: Section wrapper with title and description

### UI Components
Basic UI elements:
- **LoadingSpinner**: Loading indicator
- **Modal**: Modal dialog component
- **Toast**: Notification toast

### Layout Components
Site-wide layout components:
- **Header**: Navigation header with mobile menu
- **Footer**: Site footer

### Section Components
Large, self-contained sections:
- **FAQSection**: Frequently asked questions
- **ConsultationSection**: Contact form section

### Page-Specific Components
Components specific to certain pages:
- **Home**: Hero, About, CTA, Statistics, Partners
- **Services**: Services grid, carousel, how it works
- **About**: Leadership, success stories, why choose us
- **Blog**: Blog posts and related components

## 🔧 Usage Examples

### Using Common Components
```tsx
import { Button, Card, Icon, Section } from '@/components';

// Button with different variants
<Button label="Click me" variant="primary" size="lg" />
<Button label="Learn more" variant="outline" href="/about" />

// Card component
<Card 
  title="Service Title"
  description="Service description"
  image={{ url: '/image.jpg', alternativeText: 'Service' }}
  href="/service"
/>

// Icon component
<Icon name="building" size="lg" color="#90C054" />

// Section wrapper
<Section title="Our Services" description="What we offer">
  <div>Section content</div>
</Section>
```

### Using UI Components
```tsx
import { LoadingSpinner, Modal, Toast } from '@/components';

// Loading spinner
<LoadingSpinner size="lg" />

// Modal
<Modal isOpen={isOpen} onClose={onClose} title="Modal Title">
  <p>Modal content</p>
</Modal>

// Toast notification
<Toast message="Success!" type="success" duration={3000} />
```

## 📝 Coding Standards

### Component Structure
1. **Props Interface**: Define clear TypeScript interfaces
2. **Default Props**: Provide sensible defaults
3. **Language Support**: Use `useLanguage` hook for i18n
4. **Responsive Design**: Use Tailwind responsive classes
5. **Accessibility**: Include ARIA labels and semantic HTML

### File Naming
- Components: `PascalCase.tsx`
- Types: `camelCase.ts`
- Index files: `index.ts`

### Import/Export Pattern
```tsx
// Component file
export default function ComponentName() { ... }

// Index file
export { default as ComponentName } from './ComponentName';
```

## 🌐 Internationalization

All components support Arabic and English:
- Use `useLanguage()` hook to get current language
- Support RTL/LTR text direction
- Use `getTranslation()` helper for text content

## 🎨 Styling

- **Tailwind CSS**: Primary styling framework
- **CSS Variables**: For theme colors and fonts
- **Responsive Design**: Mobile-first approach
- **Font Families**: Almarai for Arabic, Outfit for English

## 🔄 State Management

- **Local State**: useState for component-specific state
- **Context**: LanguageContext for global language state
- **Apollo Client**: For GraphQL data fetching

## 📱 Responsive Breakpoints

- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px

## 🚀 Performance

- **Lazy Loading**: Components loaded on demand
- **Image Optimization**: Next.js Image component
- **Code Splitting**: Automatic with Next.js
- **Memoization**: React.memo for expensive components
