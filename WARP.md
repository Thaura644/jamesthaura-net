# WARP.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Common Development Commands

```bash
# Development server with Turbopack
npm run dev

# Production build with Turbopack
npm run build

# Start production server
npm start

# Lint code (ESLint with Next.js config)
npm run lint

# Type checking (runs automatically in dev, but can check manually)
npx tsc --noEmit
```

## Project Architecture

This is a **Next.js 15** portfolio application using the **App Router** with **TypeScript strict mode** and **Tailwind CSS v4**.

### Directory Structure
```
src/
├── app/              # App Router pages and layout
│   ├── layout.tsx    # Root layout with metadata and fonts
│   ├── page.tsx      # Homepage (client component)
│   └── globals.css   # Global CSS with design system tokens
├── components/
│   ├── layout/       # Navigation, header, footer components
│   └── ui/           # Reusable UI components
├── data/             # Static content and configuration
│   ├── content.ts    # Personal info, bio, experience, skills
│   ├── projects.ts   # Project portfolio data with detailed metadata
│   └── navigation.ts # Site navigation and social links
└── lib/
    └── utils.ts      # Utility functions (cn, formatting, etc.)
```

### Key Architectural Patterns

- **Path Aliases**: `@/*` maps to `./src/*` (configured in `tsconfig.json`)
- **Client Components**: Most components use `'use client'` for interactivity
- **Design System**: CSS variables + Tailwind for consistent theming
- **Content Management**: TypeScript files in `/data` act as CMS
- **Animation**: Framer Motion for page transitions and interactions
- **Theming**: next-themes for light/dark mode with system preference

## Key Dependencies & Their Purpose

- **@headlessui/react** + **@heroicons/react**: Accessible UI primitives and icon library
- **framer-motion**: Page animations, transitions, and micro-interactions  
- **lucide-react**: Additional icon set (used alongside Heroicons)
- **next-seo**: SEO metadata management (though metadata is in `content.ts`)
- **next-themes**: Dark/light theme switching with system detection
- **react-hook-form** + **@hookform/resolvers**: Form handling with validation
- **zod**: Schema validation for forms and data structures
- **clsx** + **tailwind-merge**: Dynamic className handling via `cn()` utility

## Design System Architecture

### Color System
Uses CSS custom properties for theming:
```css
:root {
  --background: 0 0% 100%;
  --primary: 240 5.9% 10%;
  /* ... HSL color values for light mode */
}

.dark {
  --background: 240 10% 3.9%;
  --primary: 0 0% 98%;
  /* ... Dark mode overrides */
}
```

### Typography & Layout
- **Fonts**: Geist Sans & Geist Mono loaded via `next/font/google`
- **Type Scale**: Responsive headings with letter-spacing adjustments
- **Container**: Max-width 1200px with responsive padding
- **Section Padding**: 4rem mobile, 6rem desktop (`.section-padding`)

### Custom Animations
Tailwind config includes custom keyframes:
- `fade-in-up`, `slide-in-left/right`, `bounce-in`
- `pulse-slow` for subtle loading states

## Content Management Strategy

All content is managed through TypeScript files in `src/data/`:

### `content.ts`
- `personalInfo`: Name, title, contact info, availability status
- `bio`: Short/long descriptions, values, professional story
- `experience`: Work history with achievements arrays
- `skills`: Categorized technical skills with proficiency levels
- `seoMetadata`: Page-specific SEO titles, descriptions, keywords

### `projects.ts`
- `Project` interface defines structure for portfolio items
- Each project includes: tech stack, features, challenges, impact metrics, links
- `featured: boolean` flag determines homepage display
- Architecture type (`monolithic` | `microservices` | `hybrid`)
- Status tracking (`live` | `development` | `maintenance` | `archived`)

### `navigation.ts`
- Site navigation structure with descriptions
- Social links with external indicators
- Project categories for filtering
- CTA banner content

## Site Structure & Routing

### Main Pages
- `/` - Homepage with hero section and featured projects preview
- `/about` - Professional background and story
- `/projects` - Full portfolio with category filtering
- `/skills` - Technical expertise organized by domains
- `/experience` - Work history and achievements
- `/contact` - Contact form and availability

### Dynamic Routes
- `/projects/[slug]` - Individual project detail pages (planned)

### Responsive Design
- Mobile-first approach with `md:` and `lg:` breakpoints
- Mobile navigation with AnimatePresence for smooth transitions
- Touch-friendly interfaces with proper spacing

## Development Notes

### Type Safety
- Strict TypeScript configuration with `noEmit: true`
- Interfaces defined for all data structures (Project, NavigationItem, etc.)
- Path aliases prevent relative import chaos

### Performance Optimizations
- **Turbopack**: Enabled for faster dev builds (`--turbopack` flag)
- **next/font**: Optimized font loading with variable fonts
- **Framer Motion**: Lazy loading with `whileInView` for scroll animations
- **Image Optimization**: Ready for Next.js Image component usage

### Styling Patterns
- `cn()` utility for conditional className merging
- Component-specific styles via Tailwind classes
- Global styles in `globals.css` for typography and base elements
- CSS variables enable seamless theme switching

### Content Updates
When updating content, modify the appropriate file in `src/data/`:
- Personal information → `content.ts`
- Portfolio additions → `projects.ts` 
- Navigation changes → `navigation.ts`

The TypeScript compiler will catch any structure mismatches, ensuring data integrity across the application.