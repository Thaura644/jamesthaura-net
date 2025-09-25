export interface NavigationItem {
  name: string
  href: string
  description?: string
  external?: boolean
}

export interface SocialLink {
  name: string
  href: string
  icon: string
  external: true
}

export const navigation: NavigationItem[] = [
  {
    name: 'Home',
    href: '/',
    description: 'Welcome & introduction'
  },
  {
    name: 'About',
    href: '/about',
    description: 'My story & background'
  },
  {
    name: 'Projects',
    href: '/projects',
    description: 'Portfolio showcase'
  },
  {
    name: 'Skills',
    href: '/skills',
    description: 'Technical expertise'
  },
  {
    name: 'Experience',
    href: '/experience',
    description: 'Work history & achievements'
  },
  {
    name: 'Contact',
    href: '/contact',
    description: 'Get in touch'
  }
]

export const socialLinks: SocialLink[] = [
  {
    name: 'GitHub',
    href: 'https://github.com/Thaura644',
    icon: 'github',
    external: true
  },
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/jamesthaura',
    icon: 'linkedin',
    external: true
  },
  {
    name: 'Twitter',
    href: 'https://twitter.com/thisthaura',
    icon: 'twitter',
    external: true
  },
  {
    name: 'Email',
    href: 'mailto:jamesmweni52@gmail.com',
    icon: 'email',
    external: true
  }
]

export const ctaBanner = {
  text: '🚀 Open to new opportunities - Let\'s build something amazing together!',
  primaryAction: {
    text: 'Contact Me',
    href: '/contact'
  },
  secondaryAction: {
    text: 'View Projects',
    href: '/projects'
  }
}

export const projectCategories = [
  { value: 'all', label: 'All Projects' },
  { value: 'full-stack', label: 'Full-Stack' },
  { value: 'mobile', label: 'Mobile' },
  { value: 'backend', label: 'Backend' },
  { value: 'saas', label: 'SaaS' },
  { value: 'fintech', label: 'Fintech' },
  { value: 'civic-tech', label: 'Civic Tech' },
  { value: 'ai-ml', label: 'AI/ML' }
]

export const skillCategories = [
  {
    title: 'Backend Development',
    icon: 'server',
    description: 'Server-side development & APIs'
  },
  {
    title: 'Frontend Development', 
    icon: 'code',
    description: 'User interfaces & experiences'
  },
  {
    title: 'Mobile Development',
    icon: 'smartphone',
    description: 'Cross-platform mobile apps'
  },
  {
    title: 'DevOps & Infrastructure',
    icon: 'cloud',
    description: 'Deployment & system administration'
  },
  {
    title: 'APIs & Integrations',
    icon: 'link',
    description: 'Third-party integrations'
  },
  {
    title: 'Architecture & Design',
    icon: 'layout',
    description: 'System design & patterns'
  }
]