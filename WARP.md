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

# Clean install dependencies
npm ci
```

## Project Architecture

This is a **Next.js 15** portfolio application using the **App Router** with **TypeScript strict mode** and **Tailwind CSS v4**.

### Directory Structure
```
src/
├── app/              # App Router pages and layout
│   ├── layout.tsx    # Root layout with metadata, fonts, and Cal.com scripts
│   ├── page.tsx      # Homepage (client component)
│   ├── about/        # About page
│   ├── contact/      # Contact page with Cal.com integration
│   ├── experience/   # Experience/work history page
│   ├── projects/     # Projects showcase page
│   ├── resume/       # Resume page with Google Drive embed
│   ├── skills/       # Skills/expertise page
│   └── globals.css   # Global CSS with design system tokens
├── components/
│   ├── layout/       # Navigation, header, footer components
│   │   ├── header.tsx     # Navigation with theme toggle
│   │   ├── footer.tsx     # Site footer
│   │   ├── layout.tsx     # Main layout wrapper
│   │   └── cta-banner.tsx # Call-to-action banner
│   └── ui/           # Reusable UI components
│       ├── cal-integration.tsx      # Cal.com floating button
│       ├── cal-click-integration.tsx # Cal.com element-click embed
│       ├── payment-block.tsx        # Premium project paywall
│       └── social-icons.tsx         # Social media icons
├── data/             # Static content and configuration (TypeScript CMS)
│   ├── content.ts    # Personal info, bio, experience, skills, SEO metadata
│   ├── projects.ts   # Project portfolio data with detailed metadata
│   └── navigation.ts # Site navigation, social links, project categories
└── lib/
    └── utils.ts      # Utility functions (cn, formatting, etc.)
```

### Key Architectural Patterns

- **Path Aliases**: `@/*` maps to `./src/*` (configured in `tsconfig.json`)
- **Client Components**: Most components use `'use client'` for interactivity
- **Design System**: CSS custom properties + Tailwind for consistent theming
- **Content Management**: TypeScript files in `/data` act as type-safe CMS
- **Animation**: Framer Motion for page transitions and scroll-triggered animations
- **Theming**: next-themes for light/dark mode with system preference detection
- **External Integrations**: Cal.com for scheduling, Google Drive for resume embedding

## Key Dependencies & Their Purpose

- **@headlessui/react** + **@heroicons/react**: Accessible UI primitives and icon library
- **framer-motion**: Page animations, transitions, and micro-interactions  
- **lucide-react**: Primary icon set (complementing Heroicons)
- **next-seo**: SEO metadata management
- **next-themes**: Dark/light theme switching with system detection
- **react-hook-form** + **@hookform/resolvers**: Form handling with validation
- **zod**: Schema validation for forms and data structures
- **clsx** + **tailwind-merge**: Dynamic className handling via `cn()` utility
- **@vercel/analytics**: Analytics integration

## Design System Architecture

### Color System & Theming
Uses CSS custom properties with HSL values for precise theme control:
```css
:root {
  --background: 0 0% 100%;
  --primary: 240 5.9% 10%;
  --muted-foreground: 240 3.8% 46.1%;
  /* ... Complete HSL color palette */
}

.dark {
  --background: 240 10% 3.9%;
  --primary: 0 0% 98%;
  --muted-foreground: 240 5% 64.9%;
  /* ... Dark mode overrides */
}
```

**Known Issue Fix**: The "View My Work" button text visibility issue in both light and dark modes can be resolved by ensuring proper contrast in the button classes. The current implementation uses `text-white dark:text-black` which should provide adequate contrast.

### Typography & Layout
- **Fonts**: Geist Sans & Geist Mono loaded via `next/font/google` with variable font support
- **Type Scale**: Responsive headings with letter-spacing adjustments (-0.025em)
- **Container**: Max-width 1200px with responsive padding (1rem mobile, 2rem desktop)
- **Section Padding**: `.section-padding` class provides 4rem mobile, 6rem desktop spacing

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

## Cal.com Integration Architecture

The portfolio implements multiple Cal.com integration patterns for scheduling consultations and demos.

### Cal.com Configuration
- **Cal.com Username**: `james-mweni-mrwrhm`
- **Event Type**: `kyc` (Know Your Client/Customer)
- **Default Layout**: `month_view`
- **Namespace**: `kyc` for organized event handling

### Integration Types

#### 1. Floating Button (Global)
Implemented in `src/app/layout.tsx` as a global script:
```javascript
// Floating button appears on all pages
Cal.ns.kyc("floatingButton", {
  "calLink":"james-mweni-mrwrhm/kyc",
  "config":{"layout":"month_view"}
});
```
- **Usage**: Appears as a floating action button on Home and Projects pages
- **Component**: Script injected directly in root layout
- **Purpose**: Always-available scheduling for interested prospects

#### 2. Element-Click Embed (Contact Page)
Implemented via `CalClickIntegration` component:
```html
<button
  data-cal-link="james-mweni-mrwrhm/kyc"
  data-cal-namespace="kyc"
  data-cal-config='{"layout":"month_view"}'
  className="..."
>
  Schedule a Call
</button>
```
- **Component**: `src/components/ui/cal-click-integration.tsx`
- **Usage**: Contact page "Schedule a Meeting" section
- **Behavior**: Opens Cal.com modal when button is clicked

### Cal.com Script Loading Strategy
- **Script Location**: Injected in `<head>` via Next.js `<Script>` component
- **Loading Strategy**: `afterInteractive` for optimal performance
- **Namespace Management**: Uses `kyc` namespace to avoid conflicts
- **Error Handling**: Graceful degradation if Cal.com is unavailable

## Contact Page Architecture

The Contact page (`/contact`) provides exactly three contact methods as specified:

### 1. Email Contact
```typescript
{
  icon: Mail,
  title: 'Send an Email',
  href: `mailto:${personalInfo.email}`,
  // Automatically opens default email client
}
```

### 2. WhatsApp Integration
```typescript
{
  icon: MessageCircle,
  title: 'WhatsApp Me',
  href: 'https://wa.link/354bhq',
  // Direct WhatsApp link for immediate messaging
}
```

### 3. Phone Call Integration
```typescript
{
  icon: Phone,
  title: 'Call Me',
  href: `tel:${personalInfo.phone}`,
  // Click-to-call functionality
}
```

### Contact Page Components
- **Contact Options Grid**: Three equal-width cards with hover effects
- **Schedule Meeting Section**: Cal.com integration with gradient background
- **Quick Info Section**: Contact details and availability status
- **FAQ Section**: Common questions about engagement and availability

## Resume Page Implementation

The Resume page (`/resume`) embeds a Google Drive PDF with fallback options.

### Google Drive Resume Integration
```typescript
// In src/data/content.ts
export const personalInfo = {
  // ...
  resumeUrl: 'https://drive.google.com/file/d/1RVnSLFn0Huk1SxIgp0QgAmLNFh37B-po/view?usp=sharing'
}

// In resume page component
const embedUrl = personalInfo.resumeUrl.replace('/view?usp=sharing', '/preview')
```

### Resume Embed Strategy
- **Primary Display**: iframe embed with 8.5:11 aspect ratio (standard document)
- **Fallback Options**: Download PDF and "Open in Google Drive" buttons
- **Error Handling**: Fallback message section for loading issues
- **Responsive Design**: Full-width container with proper mobile scaling

### Resume Page Features
- **Navigation**: Back to About page link
- **Download Options**: Direct PDF download and Google Drive access
- **Responsive Embed**: iframe scales properly on all devices
- **Contact CTA**: Bottom section linking to contact and projects

## Projects Page Architecture

The Projects page (`/projects`) showcases the portfolio with advanced filtering and monetization features.

### Project Filtering System
```typescript
// State management for filters
const [activeFilter, setActiveFilter] = useState('all')

// Filter logic
const filteredProjects = activeFilter === 'all' 
  ? projects 
  : projects.filter(project => project.category.includes(activeFilter))
```

### Project Categories
Defined in `src/data/navigation.ts`:
- **All Projects**: Shows complete portfolio
- **Full-Stack**: End-to-end web applications
- **Mobile**: Flutter and React Native apps
- **Backend**: API and server-side projects
- **SaaS**: Software-as-a-Service platforms
- **Fintech**: Financial technology solutions
- **Civic Tech**: Government and community solutions
- **AI/ML**: Machine learning and AI integrations

### Premium Content System

#### Payment Block Component
Location: `src/components/ui/payment-block.tsx`

Features:
- **Two-Tier Pricing**: Source Code Access ($1999) vs Complete Package ($7999)
- **Feature Comparison**: Different offerings for each tier
- **Payment Integration**: Contact-based payment flow (PayPal, M-Pesa, Bank Transfer)
- **Modal Interface**: Overlay modal with proper accessibility

#### Code Access Control
```typescript
const handleCodeClick = (project: typeof projects[0]) => {
  // NASA APOD app is free, others require payment
  if (project.id === 'nasa-apod-app') {
    window.open(project.links.code, '_blank')
  } else {
    setPaymentBlock({ show: true, projectTitle: project.title, projectId: project.id })
  }
}
```

### Projects Page Features
- **Hero Section**: Page introduction with Cal.com "Schedule a Demo" button
- **Filter Tabs**: Category-based project filtering
- **Project Cards**: Status badges, tech stack tags, featured indicators
- **Premium Paywall**: Payment requirement for most source code access
- **Responsive Grid**: 1-column mobile, 2-column tablet, 3-column desktop

## TypeScript Content Management

The portfolio uses strongly-typed TypeScript files as a Content Management System.

### Project Data Structure
```typescript
export interface Project {
  id: string
  title: string
  subtitle: string
  description: string
  longDescription: string
  image: string
  gallery?: string[]
  tags: string[]
  category: string[]
  tech: string[]
  features: string[]
  challenges?: string[]
  impact?: { metric: string; value: string }[]
  links: { demo?: string; code?: string; case?: string; web?: string }
  status: 'live' | 'development' | 'maintenance' | 'archived'
  featured: boolean
  year: string
  architecture?: {
    type: 'monolithic' | 'microservices' | 'hybrid'
    description: string
  }
}
```

### Content Management Benefits
- **Type Safety**: TypeScript interfaces prevent data structure errors
- **IntelliSense**: Full IDE support for content editing
- **Build-Time Validation**: Errors caught during compilation
- **Version Control**: Content changes tracked in Git
- **No Database**: Static generation with dynamic-feeling content

### Adding New Projects
1. Add project object to `projects` array in `src/data/projects.ts`
2. Ensure all required fields are populated according to `Project` interface
3. Add appropriate categories to `category` array for filtering
4. Mark as `featured: true` to show on homepage
5. TypeScript compiler will validate structure automatically

## Technical Debt & Cleanup Items

Legacy files that should be considered for removal:
- `app.js` - Legacy JavaScript file, likely from pre-Next.js implementation
- `index.html` - Static HTML file, superseded by Next.js App Router
- `style.css` - Legacy CSS file, functionality moved to `globals.css` and Tailwind
- `static.json` - Heroku configuration, may be obsolete depending on deployment target
