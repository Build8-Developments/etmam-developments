# Frontend Source Code Structure

This directory contains the organized source code for the Etmam frontend application built with Next.js 15, React 19, and TypeScript.

## 📁 Directory Structure

```
src/
├── app/                    # Next.js App Router pages
├── components/             # React components (organized)
├── hooks/                  # Custom React hooks
├── types/                  # TypeScript type definitions
├── utils/                  # Utility functions
├── lib/                    # External library configurations
├── contexts/               # React context providers
├── constants/              # Application constants
├── mockData/               # Mock data for development
├── styles/                 # CSS modules and styling
└── README.md              # This file
```

## 🎯 Key Features

- **Next.js 15** with App Router
- **React 19** with TypeScript
- **Tailwind CSS 4** for styling
- **Apollo Client** for GraphQL
- **Strapi CMS** integration
- **Internationalization** (Arabic/English)
- **Responsive Design** (Mobile-first)
- **Type Safety** with TypeScript
- **Component Organization** by feature

## 📦 Component Organization

### Components Structure
```
components/
├── common/          # Reusable components
├── ui/              # Basic UI elements
├── layout/          # Layout components
├── sections/        # Large section components
├── home/            # Home page components
├── services/        # Services page components
├── about/           # About page components
├── blog/            # Blog components
├── providers/       # Context providers
└── types/           # Component-specific types
```

### Common Components
- **Button** - Unified button with variants
- **Card** - Flexible card component
- **Icon** - SVG icon component
- **Section** - Section wrapper

### UI Components
- **LoadingSpinner** - Loading indicator
- **Modal** - Modal dialog
- **Toast** - Notification toast

## 🔧 Hooks Organization

### Hooks Structure
```
hooks/
├── ui/              # UI-related hooks
├── forms/           # Form management hooks
├── language/        # Language-related hooks
├── navigation/      # Navigation hooks
└── graphql/         # GraphQL hooks
```

### Available Hooks
- **useScrollPosition** - Track scroll position
- **useWindowSize** - Track window dimensions
- **useIntersectionObserver** - Intersection observer
- **useForm** - Form state management
- **useLanguage** - Language management
- **useMobileMenu** - Mobile menu state
- **useGraphQL** - GraphQL data fetching

## 🎨 Styling System

### Styles Structure
```
styles/
├── components/      # Component-specific styles
├── layout/          # Layout styles
├── global/          # Global styles and variables
├── theme/           # Theme configuration
└── utilities/       # Utility classes
```

### Styling Approach
- **CSS Modules** for component-specific styles
- **Tailwind CSS** for utility classes
- **CSS Custom Properties** for theming
- **Responsive Design** with mobile-first approach

## 🌐 Internationalization

### Language Support
- **Arabic (ar)** - RTL support
- **English (en)** - LTR support
- **Dynamic switching** with persistence
- **Context-based** language management

### Translation System
- **Centralized translations** in constants
- **Type-safe** translation functions
- **Placeholder support** for dynamic content
- **Fallback** to default language

## 📊 Data Management

### GraphQL Integration
- **Apollo Client** configuration
- **Strapi CMS** backend
- **Type-safe** queries and mutations
- **Error handling** and loading states

### Mock Data System
- **Development** mock data
- **Type-safe** mock generators
- **Language-specific** mock data
- **Utility functions** for data generation

## 🛠️ Development Tools

### TypeScript Configuration
- **Strict mode** enabled
- **Path mapping** for clean imports
- **Type definitions** for all components
- **Interface segregation** for maintainability

### Code Organization
- **Barrel exports** for clean imports
- **Consistent naming** conventions
- **Modular architecture** for scalability
- **Separation of concerns** throughout

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn
- Strapi backend running

### Installation
```bash
npm install
```

### Development
```bash
npm run dev
```

### Build
```bash
npm run build
```

## 📝 Coding Standards

### File Naming
- **Components**: PascalCase.tsx
- **Hooks**: camelCase.ts
- **Types**: camelCase.ts
- **Utils**: camelCase.ts
- **Constants**: camelCase.ts

### Import Organization
1. React imports
2. Next.js imports
3. Third-party libraries
4. Internal imports (absolute paths)
5. Relative imports

### Component Structure
1. Imports
2. Types/Interfaces
3. Component definition
4. Default export

## 🔍 Best Practices

### Performance
- **Code splitting** with dynamic imports
- **Image optimization** with Next.js Image
- **Lazy loading** for components
- **Memoization** for expensive operations

### Accessibility
- **Semantic HTML** elements
- **ARIA labels** and roles
- **Keyboard navigation** support
- **Screen reader** compatibility

### SEO
- **Meta tags** management
- **Structured data** markup
- **Open Graph** tags
- **Sitemap** generation

## 📚 Documentation

Each major directory contains its own README.md with detailed documentation:
- [Components README](./components/README.md)
- [Hooks Documentation](./hooks/README.md)
- [Types Documentation](./types/README.md)
- [Utils Documentation](./utils/README.md)

## 🤝 Contributing

1. Follow the established patterns
2. Maintain type safety
3. Add proper documentation
4. Test thoroughly
5. Follow naming conventions

## 📄 License

This project is proprietary to Etmam. All rights reserved.
