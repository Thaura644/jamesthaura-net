export const personalInfo = {
  name: 'James Thaura Mweni',
  title: 'Software Engineer',
  tagline: 'I build and ship production systems across backend, web, mobile, and AI workflows.',
  coffeeUrl: 'https://buymeacoffee.com/thaura',
  location: 'Kenya | Remote Global',
  availability: 'Open to remote software engineering and product engineering roles',
  email: 'jamesmweni52@gmail.com',
  phone: '+254111403346',
  dateOfBirth: '18/06/2002',
  nationality: 'Kenyan',
  resumeUrl: 'https://drive.google.com/file/d/1CCIcZRBBibm2mGzXZtvuaV9ujlDLRpfb/view?usp=sharing'
}

export const bio = {
  short: `I design and ship software used in real operations, not just demos.
  My current focus is backend-heavy products with Python/FastAPI, TypeScript/Next.js interfaces, and automation or AI integrations where they add clear value.`,
  
  long: `I'm James Thaura, a software engineer focused on delivering dependable software for operational teams, product teams, and end users.
  I work across the full lifecycle: discovery, architecture, implementation, deployment, and iterative improvements after release.

  Recently, my work has centered on Python and TypeScript systems, API integrations, payment and reconciliation workflows, and product delivery across web and mobile.
  I prioritize maintainability, clear system boundaries, and shipping outcomes that teams can measure.

  I hold a BSc in Computer Science from Kabarak University and I work from Kenya with distributed teams and clients.
  I enjoy complex workflow problems, integration-heavy environments, and products with clear business impact.`,

  values: [
    'Pragmatic execution over unnecessary complexity',
    'Maintainable systems with explicit boundaries',
    'Fast delivery with quality guardrails',
    'Business outcomes and user trust first',
    'Ownership from architecture to production support'
  ]
}

export const experience = [
  {
    role: 'Software Engineer',
    company: 'Metro ICT Limited',
    period: 'February 2025 - Present',
    location: 'Nairobi, Kenya',
    type: 'Full-time',
    description: `Build and maintain production systems across backend services, integrations, and internal business tooling.`,
    achievements: [
      'Delivered backend and integration-heavy services using Python and FastAPI',
      'Built and maintained Odoo custom modules for operations, reporting, and process automation',
      'Implemented reconciliation tooling that reduced manual effort and improved auditability',
      'Worked with product and operations stakeholders to ship incremental production releases'
    ]
  },
  {
    role: 'Founder & Product Engineer',
    company: 'Independent Projects',
    period: 'September 2024 - Present',
    location: 'Nairobi, Kenya',
    type: 'Part-time',
    description: `Design, build, and operate product experiments and client systems from concept through production support.`,
    achievements: [
      'Built and iterated products in fintech, civic, and operations-focused domains',
      'Shipped full-stack systems with deployment pipelines, observability, and maintenance workflows',
      'Executed API and messaging integrations including payment and notification flows',
      'Owned architecture, coding, deployment, and post-launch iteration end-to-end'
    ]
  },
  {
    role: 'Software Engineer Intern',
    company: 'Kenyatta International Convention Center (Presidential Digitalent Programme)',
    period: 'January 2025 - March 2025',
    location: 'Nairobi, Kenya',
    type: 'Internship',
    description: `Participated in the Presidential Digitalent Programme under ICT Authority, focusing on developing helpdesk solutions and providing technical support.`,
    achievements: [
      'Assisted in developing a helpdesk web application',
      'Tackled software and technical support challenges',
      'Gained experience in enterprise-level software development',
      'Collaborated with senior developers and technical teams in government-adjacent delivery'
    ]
  },
  {
    role: 'Software Developer Intern',
    company: 'Metro ICT Limited',
    period: 'May 2023 - August 2023',
    location: 'Nakuru, Kenya',
    type: 'Internship',
    description: `University-required internship focusing on software development lifecycle, project management, and collaborative development practices.`,
    achievements: [
      'Defined project scopes with product managers using agile/scrum methodologies',
      'Tackled software challenges and enhanced team productivity',
      'Coded updates to add features, improve security, and resolve bugs',
      'Gained hands-on experience with enterprise software development practices'
    ]
  }
]

export const education = [
  {
    degree: 'Bachelor of Science in Computer Science',
    institution: 'Kabarak University',
    period: 'September 2020 - December 2024',
    location: 'Nakuru, Kenya',
    grade: 'Second Class Upper Division',
    website: 'www.kabarak.ac.ke',
    description: 'Comprehensive computer science education with focus on software development, algorithms, and system design. Graduated with Second Class Upper Division.'
  }
]

export const skills = {
  'Backend Development': {
    icon: 'server',
    skills: [
      { name: 'Python', level: 94, experience: '4+ years' },
      { name: 'FastAPI', level: 91, experience: '3+ years' },
      { name: 'PostgreSQL', level: 90, experience: '3+ years' },
      { name: 'SQLAlchemy', level: 87, experience: '2+ years' },
      { name: 'Odoo Development', level: 89, experience: '2+ years' },
      { name: 'Go', level: 74, experience: '1+ year' },
      { name: 'Redis', level: 78, experience: '1+ year' },
      { name: 'REST APIs', level: 92, experience: '4+ years' }
    ]
  },
  'Frontend Development': {
    icon: 'code', 
    skills: [
      { name: 'Next.js', level: 90, experience: '2+ years' },
      { name: 'React', level: 88, experience: '3+ years' },
      { name: 'TypeScript', level: 89, experience: '2+ years' },
      { name: 'JavaScript', level: 90, experience: '4+ years' },
      { name: 'Tailwind CSS', level: 92, experience: '2+ years' },
      { name: 'Payload CMS', level: 80, experience: '1+ year' },
      { name: 'HTML/CSS', level: 95, experience: '4+ years' }
    ]
  },
  'Mobile Development': {
    icon: 'smartphone',
    skills: [
      { name: 'Flutter', level: 92, experience: '3+ years' },
      { name: 'Dart', level: 90, experience: '3+ years' },
      { name: 'React Native', level: 79, experience: '1+ year' },
      { name: 'Mobile UI/UX', level: 85, experience: '3+ years' },
      { name: 'State Management', level: 88, experience: '3+ years' }
    ]
  },
  'DevOps & Infrastructure': {
    icon: 'cloud',
    skills: [
      { name: 'Docker', level: 86, experience: '2+ years' },
      { name: 'GitHub Actions', level: 86, experience: '2+ years' },
      { name: 'CI/CD', level: 82, experience: '2+ years' },
      { name: 'Linux/SSH', level: 90, experience: '4+ years' },
      { name: 'VPS Management', level: 88, experience: '3+ years' },
      { name: 'Vercel/Netlify', level: 85, experience: '2+ years' },
      { name: 'Docker Compose', level: 84, experience: '2+ years' }
    ]
  },
  'APIs & Integrations': {
    icon: 'link',
    skills: [
      { name: 'M-Pesa Daraja API', level: 92, experience: '2+ years' },
      { name: 'Stripe Integration', level: 86, experience: '2+ years' },
      { name: 'WhatsApp Business API', level: 88, experience: '1+ year' },
      { name: 'Supabase', level: 85, experience: '1+ year' },
      { name: 'Webhook Design', level: 88, experience: '2+ years' },
      { name: 'OpenAI API', level: 83, experience: '1+ year' },
      { name: 'Payment Gateway Integration', level: 89, experience: '2+ years' }
    ]
  },
  'Architecture & Design': {
    icon: 'layout',
    skills: [
      { name: 'System Architecture', level: 87, experience: '3+ years' },
      { name: 'Microservices', level: 80, experience: '2+ years' },
      { name: 'Modular Monoliths', level: 90, experience: '3+ years' },
      { name: 'Database Design', level: 85, experience: '3+ years' },
      { name: 'API Design', level: 88, experience: '3+ years' },
      { name: 'Security Patterns', level: 82, experience: '2+ years' }
    ]
  }
}

export const seoMetadata = {
  home: {
    title: 'James Thaura - Software Engineer | Python, Flutter, Next.js Developer',
    description: 'James Thaura is a Software Engineer building innovative solutions with Python, Flutter, and Next.js. Specialized in full-stack development, mobile apps, and SaaS platforms. Open to global opportunities.',
    keywords: 'James Thaura, Software Engineer, Python Developer, Flutter Developer, Next.js, Full-stack Developer, Kenya Developer, Remote Software Engineer'
  },
  about: {
    title: 'About James Thaura - Software Engineer & Full-Stack Developer',
    description: 'Learn about James Thaura\'s journey as a Software Engineer with expertise in Python, Flutter, and Next.js. From Kenya to global opportunities.',
    keywords: 'James Thaura About, Software Engineer Background, Computer Science Kabarak, Kenya Developer'
  },
  projects: {
    title: 'Projects by James Thaura - Portfolio of Full-Stack Applications',
    description: 'Explore James Thaura\'s portfolio showcasing innovative projects including civic tech platforms, fintech apps, and SaaS solutions built with modern technologies.',
    keywords: 'James Thaura Projects, Flutter Apps, Python Projects, Next.js Applications, Full-stack Portfolio'
  },
  skills: {
    title: 'Technical Skills - James Thaura | Python, Flutter, DevOps Expertise',
    description: 'James Thaura\'s technical expertise spanning backend development with Python/FastAPI, mobile development with Flutter, frontend with Next.js, and DevOps practices.',
    keywords: 'Python Skills, Flutter Skills, Next.js Skills, FastAPI, DevOps, Technical Expertise, Full-stack Skills'
  },
  experience: {
    title: 'Experience - James Thaura Software Engineer | Work History & Achievements',
    description: 'James Thaura\'s professional experience as a Software Engineer, including freelance projects, healthcare systems, and innovative technology solutions.',
    keywords: 'James Thaura Experience, Software Engineer Jobs, Freelance Developer, Healthcare Tech, Kenya Software Jobs'
  },
  contact: {
    title: 'Contact James Thaura - Hire Software Engineer for Your Next Project',
    description: 'Get in touch with James Thaura for software engineering opportunities. Available for global remote work and innovative project collaborations.',
    keywords: 'Hire James Thaura, Contact Software Engineer, Remote Developer Kenya, Freelance Software Engineer'
  }
}
