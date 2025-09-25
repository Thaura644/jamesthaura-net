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
  impact?: {
    metric: string
    value: string
  }[]
  links: {
    demo?: string
    code?: string
    case?: string
    web?: string
  }
  status: 'live' | 'development' | 'maintenance' | 'archived'
  featured: boolean
  year: string
  architecture?: {
    type: 'monolithic' | 'microservices' | 'hybrid'
    description: string
  }
}

export const projects: Project[] = [
  {
    id: 'barazer-platform',
    title: 'Barazer Platform',
    subtitle: 'Civic Engagement & Government Transparency Platform',
    description: 'A comprehensive civic engagement platform empowering citizens to participate in governance through feedback, petitions, and transparency initiatives.',
    longDescription: `Barazer is my flagship project - a comprehensive civic engagement platform that bridges the gap between citizens and government. The platform consists of a Flutter mobile application and a Next.js web application, both integrated with a robust Supabase backend.

    The platform enables citizens to submit feedback, create and support petitions, access government transparency data, and engage in meaningful civic participation. It features advanced AI-powered analytics, real-time data processing, and seamless payment integration for donations and subscriptions.

    What makes Barazer special is its focus on African governance contexts while maintaining global applicability. The platform includes multi-language support, offline functionality, and integration with local payment systems like M-Pesa.`,
    image: '/projects/barazer-hero.png',
    gallery: [
      '/projects/barazer-mobile.png',
      '/projects/barazer-web.png',
      '/projects/barazer-dashboard.png',
      '/projects/barazer-analytics.png'
    ],
    tags: ['Flagship', 'Civic Tech', 'AI Integration', 'Full-Stack'],
    category: ['full-stack', 'mobile', 'civic-tech', 'ai-ml'],
    tech: [
      'Flutter', 'Dart', 'Next.js', 'TypeScript', 'Supabase', 
      'PostgreSQL', 'PayPal API', 'AI Integration', 'Tailwind CSS',
      'React Hook Form', 'JWT Authentication', 'Push Notifications'
    ],
    features: [
      'Cross-platform mobile app (Flutter)',
      'Modern web application (Next.js)',
      'Real-time feedback system',
      'Petition creation and management',
      'Government data transparency',
      'AI-powered analytics and insights',
      'Multi-tenant architecture',
      'Payment integration (PayPal)',
      'Role-based access control',
      'Offline-first mobile experience',
      'Push notifications',
      'Multi-language support',
      'Advanced admin dashboard',
      'API rate limiting and security',
      '14-day free trial system'
    ],
    challenges: [
      'Implementing complex multi-tenant architecture with role-based access',
      'Synchronizing data between mobile and web applications',
      'Building AI-powered analytics for civic data',
      'Ensuring scalability for high user engagement',
      'Integrating multiple payment systems (PayPal, future M-Pesa)',
      'Designing intuitive UX for diverse user groups (citizens, officials, organizations)'
    ],
    impact: [
      { metric: 'Platform Coverage', value: 'Multi-platform (iOS, Android, Web)' },
      { metric: 'User Roles', value: '4 distinct user types' },
      { metric: 'Features', value: '15+ core features implemented' },
      { metric: 'Architecture', value: 'Scalable multi-tenant system' }
    ],
    links: {
      demo: 'https://barazer.vercel.app',
      code: 'https://github.com/Thaura644/barazer-web',
      case: '/projects/barazer-platform'
    },
    status: 'live',
    featured: true,
    year: '2024',
    architecture: {
      type: 'microservices',
      description: 'Multi-tenant SaaS architecture with separate mobile and web clients connecting to shared Supabase backend, implementing role-based access control and real-time synchronization.'
    }
  },
  {
    id: 'payday-bot',
    title: 'PayDay',
    subtitle: 'AI WhatsApp Invoice & Payment Bot',
    description: 'Production-ready MVP for sending invoices via WhatsApp and accepting payments through Stripe and M-Pesa with automated reminders.',
    longDescription: `PayDay is a sophisticated business automation tool that transforms WhatsApp into a powerful invoicing and payment platform. Built with FastAPI and React, it enables businesses to create customers, generate invoices, and process payments seamlessly through WhatsApp Business API.

    The system features automatic payment reminders, multi-currency support, and integration with both international (Stripe) and local African (M-Pesa) payment systems. It includes a comprehensive admin dashboard for business owners and supports webhook handling for real-time payment confirmations.

    The architecture emphasizes reliability and scalability, with Docker containerization, robust database design, and comprehensive API documentation. The solution is particularly valuable for SMEs in emerging markets who need professional billing systems without complexity.`,
    image: '/projects/payday-hero.png',
    gallery: [
      '/projects/payday-dashboard.png',
      '/projects/payday-whatsapp.png',
      '/projects/payday-payments.png'
    ],
    tags: ['Business Automation', 'WhatsApp API', 'Fintech', 'SME Solutions'],
    category: ['backend', 'full-stack', 'fintech', 'saas'],
    tech: [
      'FastAPI', 'Python', 'React', 'Vite', 'PostgreSQL',
      'SQLAlchemy', 'Alembic', 'WhatsApp Business API',
      'Stripe API', 'M-Pesa Daraja API', 'Docker', 'JWT Authentication',
      'APScheduler', 'TanStack Query'
    ],
    features: [
      'WhatsApp-based invoice delivery',
      'Stripe and M-Pesa payment processing',
      'Automated payment reminders',
      'Customer and invoice management',
      'Real-time webhook handling',
      'Multi-currency support',
      'Admin dashboard with analytics',
      'JWT-based authentication',
      'Scheduled payment reminders',
      'Docker containerization',
      'Comprehensive API documentation',
      'Database migrations with Alembic',
      'Rate limiting and security',
      'Mobile-responsive design'
    ],
    challenges: [
      'Integrating WhatsApp Business API with complex message formatting',
      'Handling webhook synchronization between Stripe and M-Pesa',
      'Building reliable payment reminder scheduling system',
      'Ensuring message delivery reliability and error handling',
      'Managing multi-currency transactions and conversions',
      'Implementing robust error recovery for failed payments'
    ],
    impact: [
      { metric: 'Payment Systems', value: '2 integrated (Stripe + M-Pesa)' },
      { metric: 'Automation', value: 'Fully automated invoicing flow' },
      { metric: 'Target Market', value: 'SMEs in emerging markets' },
      { metric: 'Architecture', value: 'Production-ready MVP' }
    ],
    links: {
      code: 'https://github.com/Thaura644/payday',
      case: '/projects/payday-bot'
    },
    status: 'live',
    featured: true,
    year: '2024',
    architecture: {
      type: 'monolithic',
      description: 'FastAPI backend with React frontend, PostgreSQL database, and external API integrations. Dockerized deployment with scheduled tasks and webhook handling.'
    }
  },
  {
    id: 'budgetwise-app',
    title: 'BudgetWise',
    subtitle: 'Comprehensive Financial Management App',
    description: 'Flutter-based financial management application designed for the Kenyan market with M-Pesa integration, budget tracking, and financial insights.',
    longDescription: `BudgetWise is a comprehensive financial management application specifically designed for the Kenyan market. Built with Flutter, it provides intuitive budgeting tools, expense tracking, and financial insights with seamless M-Pesa integration for transaction history and payments.

    The app follows clean architecture principles with three main layers (Data, Domain, Presentation) and uses Riverpod for state management. It features offline-first functionality, multi-currency support with automatic conversion, and advanced financial reporting with data visualization.

    Key innovations include direct M-Pesa integration for automatic transaction import, goal tracking with progress visualization, bill reminders with local notifications, and comprehensive financial reports. The app is designed to work effectively in low-connectivity environments common in emerging markets.`,
    image: '/projects/budgetwise-hero.png',
    gallery: [
      '/projects/budgetwise-dashboard.png',
      '/projects/budgetwise-budgets.png',
      '/projects/budgetwise-analytics.png'
    ],
    tags: ['Fintech', 'Mobile App', 'M-Pesa', 'Kenya Market'],
    category: ['mobile', 'fintech'],
    tech: [
      'Flutter', 'Dart', 'Riverpod', 'Firebase', 'M-Pesa Daraja API',
      'SQLite', 'Shared Preferences', 'Charts (fl_chart)',
      'Local Notifications', 'HTTP Client', 'Clean Architecture'
    ],
    features: [
      'Multiple account management (bank, mobile money, cash)',
      'Transaction tracking with categories',
      'Budget creation and monitoring',
      'Financial reports and analytics',
      'Direct M-Pesa integration',
      'Multi-currency support with conversion',
      'Financial goal tracking',
      'Bill reminders and notifications',
      'Data export in multiple formats',
      'Offline-first functionality',
      'Clean architecture implementation',
      'State management with Riverpod',
      'Data visualization with charts',
      'Secure local data storage'
    ],
    challenges: [
      'Implementing M-Pesa Daraja API integration in Flutter',
      'Building offline-first architecture with data synchronization',
      'Creating intuitive financial data visualization',
      'Managing multi-currency calculations and conversions',
      'Optimizing app performance for low-end devices',
      'Ensuring data security and privacy compliance'
    ],
    impact: [
      { metric: 'Target Market', value: 'Kenyan financial market' },
      { metric: 'Integration', value: 'Direct M-Pesa connectivity' },
      { metric: 'Architecture', value: 'Clean architecture implementation' },
      { metric: 'Functionality', value: 'Full offline capability' }
    ],
    links: {
      code: 'https://github.com/Thaura644/budgeting_app',
      case: '/projects/budgetwise-app'
    },
    status: 'development',
    featured: true,
    year: '2024',
    architecture: {
      type: 'monolithic',
      description: 'Flutter mobile application with clean architecture (Data/Domain/Presentation layers), Firebase backend, and M-Pesa API integration. Offline-first with local SQLite storage.'
    }
  },
  {
    id: 'careerleap-ai',
    title: 'CareerLeap AI',
    subtitle: 'AI-Powered Career Development Platform',
    description: 'Next.js application leveraging AI to provide personalized career guidance, skill assessments, and professional development recommendations.',
    longDescription: `CareerLeap AI is an innovative career development platform that harnesses artificial intelligence to provide personalized career guidance. Built with Next.js 14 and modern React patterns, it offers comprehensive career assessments, skill gap analysis, and tailored professional development recommendations.

    The platform integrates multiple AI services including OpenAI for natural language processing and career advice generation. It features a responsive design with dark/light mode support, progressive web app capabilities, and seamless user experience across all devices.

    Key features include AI-powered career assessments, personalized learning path recommendations, industry trend analysis, and integration with professional networks. The platform is designed to scale globally while maintaining performance and user engagement.`,
    image: '/projects/careerleap-hero.png',
    gallery: [
      '/projects/careerleap-assessment.png',
      '/projects/careerleap-dashboard.png',
      '/projects/careerleap-recommendations.png'
    ],
    tags: ['AI/ML', 'Career Tech', 'Next.js', 'Professional Development'],
    category: ['full-stack', 'ai-ml', 'saas'],
    tech: [
      'Next.js 14', 'React 18', 'TypeScript', 'Tailwind CSS',
      'Framer Motion', 'OpenAI API', 'Radix UI', 'PWA Support',
      'Email Integration (Resend)', 'Headless UI'
    ],
    features: [
      'AI-powered career assessments',
      'Personalized skill recommendations',
      'Industry trend analysis',
      'Professional development planning',
      'Progressive Web App (PWA)',
      'Dark/light mode toggle',
      'Responsive design',
      'Email integration for notifications',
      'Modern UI with animations',
      'TypeScript for type safety',
      'SEO optimization',
      'Performance optimization'
    ],
    challenges: [
      'Integrating multiple AI services for comprehensive analysis',
      'Creating intuitive user flows for complex career data',
      'Optimizing AI response times and accuracy',
      'Building scalable recommendation algorithms',
      'Ensuring data privacy and security compliance',
      'Designing accessible and inclusive user interfaces'
    ],
    impact: [
      { metric: 'AI Integration', value: 'Multi-service AI implementation' },
      { metric: 'User Experience', value: 'Modern, accessible design' },
      { metric: 'Performance', value: 'PWA with offline capabilities' },
      { metric: 'Scalability', value: 'Built for global deployment' }
    ],
    links: {
      code: 'https://github.com/Thaura644/careerLeap-ai',
      case: '/projects/careerleap-ai'
    },
    status: 'development',
    featured: true,
    year: '2024',
    architecture: {
      type: 'monolithic',
      description: 'Next.js 14 application with App Router, integrating multiple AI APIs, email services, and modern frontend technologies. Optimized for performance and SEO.'
    }
  },
  {
    id: 'seedrail-saas',
    title: 'SeedRail',
    subtitle: 'Laravel SaaS Starter Blueprint',
    description: 'A comprehensive Laravel-first SaaS starter focused on speed-to-value, maintainability, and production readiness.',
    longDescription: `SeedRail is a sophisticated SaaS starter blueprint built with Laravel, designed to accelerate the development of production-ready SaaS applications. The project emphasizes speed-to-value, code maintainability, and enterprise-grade features out of the box.

    The blueprint includes comprehensive user research, architecture specifications, and implementation guidelines. It features multi-tenancy, billing integration with Laravel Cashier, feature flags with Laravel Pennant, and in-app documentation systems.

    What sets SeedRail apart is its focus on the complete SaaS development lifecycle, from initial planning through deployment and scaling. It includes detailed documentation, implementation checklists, and architectural decisions that save months of development time.`,
    image: '/projects/seedrail-hero.png',
    tags: ['SaaS Blueprint', 'Laravel', 'Enterprise', 'Startup Tool'],
    category: ['backend', 'saas'],
    tech: [
      'Laravel', 'PHP', 'Laravel Cashier (Stripe)', 'Laravel Pennant',
      'Multi-tenancy', 'MySQL/PostgreSQL', 'Redis', 'Queue Management',
      'API Documentation', 'Testing Framework'
    ],
    features: [
      'Multi-tenant SaaS architecture',
      'Billing integration with Stripe/Cashier',
      'Feature flags with Laravel Pennant',
      'In-app documentation system',
      'User management and teams',
      'Role-based permissions',
      'API with comprehensive documentation',
      'Queue and job management',
      'Email notifications and templates',
      'Comprehensive testing suite',
      'Deployment configurations',
      'Performance monitoring',
      'Security best practices',
      'Scalable database design'
    ],
    challenges: [
      'Designing flexible multi-tenant architecture',
      'Creating reusable SaaS components and patterns',
      'Building comprehensive documentation system',
      'Optimizing for different scaling scenarios',
      'Ensuring security and compliance standards',
      'Balancing flexibility with opinionated defaults'
    ],
    impact: [
      { metric: 'Development Speed', value: 'Months of work pre-built' },
      { metric: 'Architecture', value: 'Enterprise-grade patterns' },
      { metric: 'Documentation', value: 'Comprehensive guidelines' },
      { metric: 'Market Focus', value: 'SaaS startup acceleration' }
    ],
    links: {
      code: 'https://github.com/Thaura644/seedrail',
      case: '/projects/seedrail-saas'
    },
    status: 'development',
    featured: false,
    year: '2024',
    architecture: {
      type: 'monolithic',
      description: 'Laravel-based SaaS starter with multi-tenant architecture, comprehensive feature modules, and scalable deployment configurations.'
    }
  },
  {
    id: 'nasa-apod-app',
    title: 'NASA APOD App',
    subtitle: 'Astronomy Picture of the Day Viewer',
    description: 'TypeScript web application for exploring NASA\'s Astronomy Picture of the Day with search, gallery, and educational features.',
    longDescription: `A beautiful and intuitive web application that allows users to explore NASA's Astronomy Picture of the Day (APOD). Built with modern TypeScript and responsive design principles, it provides an engaging way to discover space photography and educational content.

    The application features date-based searching, image gallery browsing, and detailed descriptions of astronomical phenomena. It demonstrates clean API integration, responsive design, and user-friendly navigation for educational content.`,
    image: '/projects/nasa-apod-hero.png',
    tags: ['Educational', 'API Integration', 'TypeScript'],
    category: ['frontend'],
    tech: ['TypeScript', 'HTML5', 'CSS3', 'NASA API', 'Responsive Design'],
    features: [
      'Daily astronomy picture viewing',
      'Date-based picture search',
      'Image gallery with thumbnails',
      'Educational descriptions',
      'Responsive design',
      'NASA API integration',
      'Modern TypeScript implementation',
      'Clean, intuitive interface'
    ],
    links: {
      demo: 'https://nasa-apod-app-six.vercel.app/',
      code: 'https://github.com/Thaura644/nasa-apod-app'
    },
    status: 'live',
    featured: false,
    year: '2023',
    architecture: {
      type: 'monolithic',
      description: 'Single-page TypeScript application with NASA API integration and responsive design.'
    }
  }
]

export const featuredProjects = projects.filter(p => p.featured)
export const allCategories = ['all', ...new Set(projects.flatMap(p => p.category))]