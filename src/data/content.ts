export const personalInfo = {
  name: 'James Thaura Mweni',
  title: 'Software Engineer',
  tagline: 'I build stuff.',
  location: 'Kenya | Remote Global',
  availability: 'Available for new opportunities',
  email: 'jamesmweni52@gmail.com',
  phone: '+254111403346',
  dateOfBirth: '18/06/2002',
  nationality: 'Kenyan',
  resumeUrl: 'https://drive.google.com/file/d/1RVnSLFn0Huk1SxIgp0QgAmLNFh37B-po/view?usp=sharing'
}

export const bio = {
  short: `A Software Engineer passionate about building innovative solutions across sectors. 
  I specialize in full-stack development with expertise in Python, Flutter, and Next.js, 
  creating impactful applications from mobile apps to SaaS platforms.`,
  
  long: `I'm James Thaura, a Software Engineer with a passion for building innovative solutions 
  that make a real difference. With a Computer Science background from Kabarak University in Kenya, 
  I've evolved into a full-stack developer who thrives on turning complex problems into elegant, 
  scalable solutions.

  My expertise spans the entire development stack - from mobile applications built with Flutter 
  to robust backend systems using Python and FastAPI, and modern web applications with Next.js. 
  I have extensive experience in DevOps, API integrations, and both monolithic and microservices 
  architectures.

  What sets me apart is my focus on building solutions that matter. Whether it's a civic engagement 
  platform empowering citizens, a fintech app simplifying financial management, or a SaaS platform 
  streamlining business operations, I believe technology should solve real problems and create value.

  Currently open to global opportunities while maintaining strong expertise in the Kenyan and African 
  market. I'm particularly interested in projects involving innovative technology stacks, complex 
  integrations, and meaningful impact.`,

  values: [
    'Innovation through simplicity',
    'Code quality and maintainability', 
    'User-centered design',
    'Continuous learning and growth',
    'Building for global scale'
  ]
}

export const experience = [
  {
    role: 'Founder and Software Engineer',
    company: 'Kulture, Inc.',
    period: 'September 2024 - Present',
    location: 'Nairobi, Kenya',
    type: 'Part-time',
    description: `At self-employed, yet not earning, i build these personal projects to solve problems i encounter in my daily life. as well as what the pain points that i can reach`,
    achievements: [
      'Built and yet to deploy Barazer - A civic tech platform for citizen engagement and government transparency',
      'built and deployed Budgy(BudgetWise) - A personal finance management app with budgeting and expense tracking',
      'Built and deployed PayDay - A production ready mvp for sending invoices via whatsapp and email with payment links, and integrated your workflow with payment gateways of your choice',
      'Built and deployed Collaborated with cross-functional teams to deliver scalable solutions'
    ]
  },
  {
    role: 'Software Engineer (Technical Consultant & Functional Assistant)',
    company: 'Metro ICT Limited',
    period: 'February 2025 - Present',
    location: 'Nairobi, Kenya',
    type: 'Full-time',
    description: `Developing and maintaining applications using modern technologies including React Native, Flutter, and FastAPI for backend services. Re-architecting Odoo modules for enhanced business interactivity.`,
    achievements: [
      'Developed and maintained apps in React Native, Flutter and FastAPI for backend services',
      'Re-architected Odoo modules for enhanced business interactivity',
      'Improved system performance and user experience across multiple platforms',
      'Collaborated with cross-functional teams to deliver scalable solutions'
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
      'Collaborated with senior developers and technical teams'
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
      { name: 'Python', level: 95, experience: '4+ years' },
      { name: 'FastAPI', level: 90, experience: '3+ years' },
      { name: 'Django', level: 85, experience: '3+ years' },
      { name: 'PostgreSQL', level: 88, experience: '3+ years' },
      { name: 'SQLAlchemy', level: 85, experience: '2+ years' },
      { name: 'Odoo Development', level: 85, experience: '2+ years' },
      { name: 'RESTful APIs', level: 92, experience: '4+ years' }
    ]
  },
  'Frontend Development': {
    icon: 'code', 
    skills: [
      { name: 'Next.js', level: 90, experience: '2+ years' },
      { name: 'React', level: 88, experience: '3+ years' },
      { name: 'TypeScript', level: 85, experience: '2+ years' },
      { name: 'JavaScript', level: 90, experience: '4+ years' },
      { name: 'Tailwind CSS', level: 92, experience: '2+ years' },
      { name: 'HTML/CSS', level: 95, experience: '4+ years' }
    ]
  },
  'Mobile Development': {
    icon: 'smartphone',
    skills: [
      { name: 'Flutter', level: 92, experience: '3+ years' },
      { name: 'Dart', level: 90, experience: '3+ years' },
      { name: 'React Native', level: 75, experience: '1+ year' },
      { name: 'Mobile UI/UX', level: 85, experience: '3+ years' },
      { name: 'State Management', level: 88, experience: '3+ years' }
    ]
  },
  'DevOps & Infrastructure': {
    icon: 'cloud',
    skills: [
      { name: 'Docker', level: 85, experience: '2+ years' },
      { name: 'Kubernetes', level: 75, experience: '1+ year' },
      { name: 'CI/CD', level: 82, experience: '2+ years' },
      { name: 'GitHub Actions', level: 82, experience: '2+ years' },
      { name: 'VPS Management', level: 88, experience: '3+ years' },
      { name: 'SSH/Linux', level: 90, experience: '4+ years' },
      { name: 'Vercel/Netlify', level: 85, experience: '2+ years' },
      { name: 'Database Admin', level: 80, experience: '2+ years' }
    ]
  },
  'APIs & Integrations': {
    icon: 'link',
    skills: [
      { name: 'Stripe Integration', level: 90, experience: '2+ years' },
      { name: 'M-Pesa Daraja API', level: 92, experience: '2+ years' },
      { name: 'WhatsApp Business API', level: 88, experience: '1+ year' },
      { name: 'Supabase', level: 85, experience: '1+ year' },
      { name: 'PayPal Integration', level: 80, experience: '1+ year' },
      { name: 'AI/ML APIs', level: 75, experience: '1+ year' }
    ]
  },
  'Architecture & Design': {
    icon: 'layout',
    skills: [
      { name: 'System Architecture', level: 85, experience: '3+ years' },
      { name: 'Microservices', level: 80, experience: '2+ years' },
      { name: 'Monolithic Apps', level: 90, experience: '3+ years' },
      { name: 'Database Design', level: 85, experience: '3+ years' },
      { name: 'API Design', level: 88, experience: '3+ years' },
      { name: 'Security Patterns', level: 80, experience: '2+ years' }
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