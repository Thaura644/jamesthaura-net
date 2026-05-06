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
    id: 'rntpuls',
    title: 'RntPuls',
    subtitle: 'Rent Collection Platform',
    description:
      'Production-oriented rent collection platform with Go backend, React frontend, PostgreSQL, Docker Compose, and GitHub Actions CI.',
    longDescription:
      'Based on the repository README, RntPuls includes authentication, tenant and payment workflows, CSV/XLSX import-export, monthly Excel reporting, and optional M-Pesa verification and Twilio SMS reminders. It is a full-stack implementation with API + web + database services.',
    image: '/projects/nasa-apod-hero.png',
    tags: ['Full-Stack', 'Go', 'Property Ops'],
    category: ['full-stack', 'backend', 'saas'],
    tech: ['Go', 'React', 'PostgreSQL', 'Docker Compose', 'GitHub Actions', 'M-Pesa Daraja', 'Twilio'],
    features: [
      'Role-based auth and dashboard flows',
      'Tenant import via CSV/XLSX and export tooling',
      'Payment confirmation workflow',
      'Tenant portal for payment evidence uploads',
      'Monthly Excel report generation',
      'Optional SMS reminders (Twilio)'
    ],
    impact: [
      { metric: 'Repository visibility', value: 'Public' },
      { metric: 'Primary language', value: 'Go' },
      { metric: 'Last push', value: 'April 21, 2026' }
    ],
    links: {
      code: 'https://github.com/Thaura644/RntPuls'
    },
    status: 'development',
    featured: true,
    year: '2026',
    architecture: {
      type: 'hybrid',
      description: 'Go API + React frontend + PostgreSQL, orchestrated with Docker Compose.'
    }
  },
  {
    id: 'llm-conduit',
    title: 'LLM Conduit',
    subtitle: 'Multi-Model AI Execution Board',
    description:
      'Next.js + Tauri + Docker project for orchestrating multi-model AI workflows with provider integrations and real-time telemetry.',
    longDescription:
      'Per the README, LLM Conduit supports multi-provider API integration (including OpenAI, Anthropic, Google, and xAI), Brave Search integration, autonomous governance flows, persistent memory, and both native desktop (Tauri) and containerized run modes.',
    image: '/projects/careerleap-hero.png',
    tags: ['AI', 'Next.js', 'Tauri'],
    category: ['full-stack', 'ai-ml', 'saas'],
    tech: ['Next.js', 'TypeScript', 'Tauri (Rust)', 'Docker', 'SQLite'],
    features: [
      'Multi-provider key vault workflows',
      'Brave Search integration for real-time web search',
      'Autonomous and governance-oriented operation modes',
      'Streaming telemetry for agent processes',
      'Desktop and container deployment paths'
    ],
    impact: [
      { metric: 'Repository visibility', value: 'Public' },
      { metric: 'Primary language', value: 'TypeScript' },
      { metric: 'Last push', value: 'January 21, 2026' }
    ],
    links: {
      code: 'https://github.com/Thaura644/llm-conduit'
    },
    status: 'development',
    featured: true,
    year: '2026',
    architecture: {
      type: 'hybrid',
      description: 'Next.js UI with Tauri sidecar and Docker deployment option, backed by SQLite.'
    }
  },
  {
    id: 'kenya-school-bus-app',
    title: 'Kenya School Bus App',
    subtitle: 'School Transport Management and Tracking',
    description:
      'School bus management app with route handling, real-time tracking, attendance, and admin tooling via Odoo integration.',
    longDescription:
      'The repository README documents driver and parent flows, JWT auth, real-time tracking, route visualization, notification support, and backend services in FastAPI with PostgreSQL and Odoo-based administration.',
    image: '/projects/budgetwise-hero.jpeg',
    tags: ['Mobility', 'Tracking', 'EdTech Ops'],
    category: ['mobile', 'full-stack'],
    tech: ['React Native', 'FastAPI', 'PostgreSQL', 'Odoo', 'Firebase Cloud Messaging', 'WebSockets'],
    features: [
      'Driver and parent login flows',
      'Assigned route visibility',
      'Real-time bus location tracking',
      'Route and attendance administration in Odoo',
      'Push-notification support via FCM'
    ],
    impact: [
      { metric: 'Repository visibility', value: 'Public' },
      { metric: 'Primary language', value: 'JavaScript' },
      { metric: 'Last push', value: 'August 5, 2025' }
    ],
    links: {
      code: 'https://github.com/Thaura644/kenya_school_bus_app'
    },
    status: 'maintenance',
    featured: false,
    year: '2025',
    architecture: {
      type: 'hybrid',
      description: 'Mobile client + FastAPI backend with PostgreSQL and Odoo admin module.'
    }
  },
  {
    id: 'autopay-reconcile',
    title: 'autopay_reconcile',
    subtitle: 'Private Reconciliation Project',
    description:
      'Private Python repository currently under active development.',
    longDescription:
      'Public metadata confirms this is a private Python codebase. Detailed implementation notes are intentionally omitted in the portfolio because the repository is private.',
    image: '/projects/payday-hero.png',
    tags: ['Private', 'Python'],
    category: ['backend', 'fintech'],
    tech: ['Python'],
    features: [
      'Private repository',
      'Actively maintained'
    ],
    impact: [
      { metric: 'Repository visibility', value: 'Private' },
      { metric: 'Primary language', value: 'Python' },
      { metric: 'Last push', value: 'May 6, 2026' }
    ],
    links: {},
    status: 'development',
    featured: true,
    year: '2026',
    architecture: {
      type: 'monolithic',
      description: 'Private implementation details.'
    }
  },
  {
    id: 'corridor',
    title: 'Corridor',
    subtitle: 'Private TypeScript Product Repo',
    description:
      'Private TypeScript repository with active commits and a configured homepage.',
    longDescription:
      'Public metadata confirms this repository is private, TypeScript-based, and actively pushed. The configured homepage is paydaymoney.net. Product internals are not exposed in the portfolio for accuracy and confidentiality.',
    image: '/projects/barazer-hero.png',
    tags: ['Private', 'TypeScript'],
    category: ['full-stack', 'saas'],
    tech: ['TypeScript'],
    features: [
      'Private repository',
      'Active maintenance',
      'Homepage configured (paydaymoney.net)'
    ],
    impact: [
      { metric: 'Repository visibility', value: 'Private' },
      { metric: 'Primary language', value: 'TypeScript' },
      { metric: 'Last push', value: 'May 5, 2026' }
    ],
    links: {
      web: 'https://paydaymoney.net'
    },
    status: 'development',
    featured: false,
    year: '2026',
    architecture: {
      type: 'monolithic',
      description: 'Private implementation details.'
    }
  }
]

export const featuredProjects = projects.filter((p) => p.featured)
export const allCategories = ['all', ...new Set(projects.flatMap((p) => p.category))]
