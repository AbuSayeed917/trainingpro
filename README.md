# Training Programme Platform

A world-class Next.js website for professional training programmes in payroll, bookkeeping, accounting, and business management.

## Features

- 🎨 Modern, responsive design with Tailwind CSS
- ⚡ Built with Next.js 14 App Router
- 🎯 TypeScript for type safety
- 🧩 Reusable UI component library
- 📱 Mobile-first responsive design
- ♿ Accessibility-focused
- 🎭 Smooth animations with Framer Motion
- 🔍 SEO optimized

## Tech Stack

- **Framework:** Next.js 14
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **UI Components:** Custom component library with class-variance-authority
- **Icons:** Lucide React
- **Animations:** Framer Motion

## Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── layout.tsx         # Root layout with header/footer
│   ├── page.tsx           # Homepage
│   ├── programmes/        # Training programmes pages
│   ├── work-experience/   # Work experience pages
│   ├── about/            # About page
│   └── contact/          # Contact page
├── components/
│   ├── ui/               # Reusable UI components
│   │   ├── Button.tsx
│   │   ├── Card.tsx
│   │   ├── Input.tsx
│   │   ├── Badge.tsx
│   │   └── Container.tsx
│   ├── layout/           # Layout components
│   │   ├── Header.tsx
│   │   └── Footer.tsx
│   ├── sections/         # Page sections
│   │   ├── Hero.tsx
│   │   └── FeaturedProgrammes.tsx
│   └── forms/           # Form components
├── features/            # Feature-specific modules
│   ├── courses/
│   ├── programmes/
│   ├── about/
│   └── contact/
├── lib/                 # Utility libraries
│   └── utils.ts        # Helper functions
├── types/              # TypeScript type definitions
│   └── index.ts
├── styles/             # Global styles
│   └── globals.css
├── hooks/              # Custom React hooks
└── utils/              # Utility functions
```

## Getting Started

### Prerequisites

- Node.js 18+
- npm, yarn, or pnpm

### Installation

1. Install dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
```

2. Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run type-check` - Run TypeScript type checking

### Component Development

All UI components are located in `src/components/ui/` and follow these principles:

- Built with TypeScript for type safety
- Styled with Tailwind CSS
- Support variant props using class-variance-authority
- Forward refs for better composability
- Accessible by default

Example usage:

```tsx
import { Button, Card, Badge } from "@/components/ui";

<Button variant="primary" size="lg">
  Click me
</Button>

<Card hover>
  <CardHeader>
    <CardTitle>Title</CardTitle>
  </CardHeader>
  <CardContent>Content</CardContent>
</Card>
```

## Customization

### Colors

Edit the color palette in [tailwind.config.ts](tailwind.config.ts):

```typescript
colors: {
  primary: { ... },
  secondary: { ... },
  accent: { ... },
}
```

### Typography

Fonts are configured in [src/app/layout.tsx](src/app/layout.tsx).

### Design Tokens

Global CSS variables and utilities are in [src/styles/globals.css](src/styles/globals.css).

## Deployment

### Vercel (Recommended)

```bash
npm run build
vercel deploy
```

### Other Platforms

Build the application:

```bash
npm run build
npm run start
```

## License

All rights reserved.
