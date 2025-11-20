# Project Structure Documentation

## Overview

This is a professional Next.js 14 application for a training programme platform, built with TypeScript, Tailwind CSS, and modern web development best practices.

## Directory Structure

### `/src/app` - Next.js App Router

The app directory uses Next.js 14's App Router for file-based routing:

- `layout.tsx` - Root layout with header, footer, and global metadata
- `page.tsx` - Homepage with Hero and Featured Programmes sections
- `/programmes` - Training programmes listing and detail pages
- `/work-experience` - Work experience opportunities
- `/about` - About the platform and team
- `/contact` - Contact form and information
- `/enroll` - Enrollment form
- `/login` - User authentication

### `/src/components` - React Components

#### `/ui` - Reusable UI Components
Base components following atomic design principles:

- `Button.tsx` - Button with variants (primary, secondary, outline, ghost, gradient)
- `Card.tsx` - Card container with header, content, footer subcomponents
- `Input.tsx` - Form input with label and error handling
- `Badge.tsx` - Badge for tags and status indicators
- `Container.tsx` - Responsive container with size variants

All UI components use:
- TypeScript for type safety
- class-variance-authority for variant management
- Tailwind CSS for styling
- Forward refs for composability

#### `/layout` - Layout Components
- `Header.tsx` - Site navigation with desktop/mobile menus and dropdowns
- `Footer.tsx` - Footer with links, contact info, and social media

#### `/sections` - Page Sections
- `Hero.tsx` - Homepage hero section with CTA and stats
- `FeaturedProgrammes.tsx` - Featured training programmes grid

#### `/forms` - Form Components
Reserved for form components like ContactForm, EnrollmentForm, etc.

### `/src/features` - Feature Modules

Feature-based organization for larger functionality:
- `/courses` - Course-related components and logic
- `/programmes` - Programme-specific features
- `/about` - About page components
- `/contact` - Contact form and related components

### `/src/lib` - Utility Libraries

- `utils.ts` - Common utility functions (cn, formatCurrency, formatDate, etc.)
- `constants.ts` - Application constants and configuration

### `/src/types` - TypeScript Types

- `index.ts` - Shared TypeScript interfaces and types:
  - Programme
  - Instructor
  - Testimonial
  - Enrollment
  - User
  - Form data types

### `/src/styles` - Global Styles

- `globals.css` - Global CSS with Tailwind directives, custom utilities, and CSS variables

### `/src/hooks` - Custom React Hooks

Reserved for custom hooks like useMediaQuery, useDebounce, etc.

### `/src/utils` - Utility Functions

Reserved for additional utility functions and helpers.

### `/public` - Static Assets

- `/images` - Images and graphics
- `/fonts` - Custom fonts

## Key Technologies

### Next.js 14
- App Router for improved routing and layouts
- Server Components by default
- Built-in SEO optimization
- Image optimization

### TypeScript
- Strict type checking enabled
- Comprehensive type definitions
- Path aliases configured (@/components, @/lib, etc.)

### Tailwind CSS
- Custom color palette (primary, secondary, accent)
- Custom utilities (container-custom, section-padding, gradients)
- Responsive design system
- Dark mode support ready
- Custom animations

### UI Component Library
- Built with class-variance-authority for variant management
- Accessible by default
- Fully typed with TypeScript
- Composable and extensible

## Design System

### Colors
- **Primary**: Blue shades for main branding
- **Secondary**: Purple shades for accents
- **Accent**: Orange shades for highlights

### Typography
- Font: Inter (variable font)
- Responsive text sizes
- Text balance utility

### Spacing
- Consistent spacing scale
- Section padding utility (py-16 sm:py-20 lg:py-24)
- Container sizes (sm, md, lg, xl, full)

### Shadows
- soft: Subtle elevation
- medium: Standard elevation
- hard: Strong elevation

## Component Usage Patterns

### Button Component
```tsx
import { Button } from "@/components/ui";

<Button variant="primary" size="lg">
  Click me
</Button>
```

### Card Component
```tsx
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui";

<Card hover>
  <CardHeader>
    <CardTitle>Title</CardTitle>
  </CardHeader>
  <CardContent>Content</CardContent>
</Card>
```

### Input Component
```tsx
import { Input } from "@/components/ui";

<Input
  label="Email"
  type="email"
  required
  error={errors.email}
/>
```

## Routing Structure

- `/` - Homepage
- `/programmes` - All programmes
- `/programmes/[slug]` - Individual programme details
- `/programmes/[category]` - Programmes by category (payroll, bookkeeping, etc.)
- `/work-experience` - Work experience opportunities
- `/about` - About us
- `/contact` - Contact page
- `/enroll` - Enrollment form
- `/login` - User login

## Data Flow

### Static Data
- Programme listings in components or dedicated data files
- Navigation items in constants
- Site configuration in constants

### Dynamic Data (Future)
- API routes for form submissions
- Database integration for programmes, users, enrollments
- CMS integration for content management

## Best Practices

1. **Component Organization**: Use feature-based folders for complex features
2. **Type Safety**: Define TypeScript interfaces for all data structures
3. **Styling**: Use Tailwind utilities with cn() helper for conditional classes
4. **Accessibility**: Include ARIA labels, semantic HTML, keyboard navigation
5. **Performance**: Use Next.js Image component, lazy loading, code splitting
6. **SEO**: Implement proper metadata, structured data, semantic HTML

## Next Steps

### Recommended Additions
1. Add form validation with react-hook-form or zod
2. Implement API routes for contact/enrollment forms
3. Add CMS integration (Contentful, Sanity, etc.)
4. Set up authentication (NextAuth.js)
5. Add analytics (Google Analytics, Plausible)
6. Implement testing (Jest, React Testing Library)
7. Add animation library usage (Framer Motion is already installed)
8. Create additional page sections (testimonials, partners, FAQ)
9. Add blog functionality
10. Implement search functionality

### Content to Add
- High-quality images for programmes
- Instructor profiles
- Student testimonials
- Company partner logos
- Success stories
- Blog articles
- FAQ content

### Features to Build
- Programme search and filtering
- User dashboard
- Progress tracking
- Certificate generation
- Payment integration
- Email notifications
- Live chat support
- Video lessons player
