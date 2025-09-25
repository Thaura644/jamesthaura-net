'use client'

import { motion } from 'framer-motion'
import { Server, Code, Smartphone, Cloud, Link, Layout } from 'lucide-react'
import { skills } from '@/data/content'

const iconMap = {
  server: Server,
  code: Code,
  smartphone: Smartphone,
  cloud: Cloud,
  link: Link,
  layout: Layout
}

export default function Skills() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="section-padding">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center space-y-6 mb-16"
          >
            <h1 className="text-4xl lg:text-6xl font-bold">
              Technical Skills
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              My expertise spans across the full technology stack, from backend development 
              to mobile applications, with a focus on modern, scalable solutions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Skills Grid */}
      <section className="section-padding">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {Object.entries(skills).map(([category, categoryData], index) => {
              const Icon = iconMap[categoryData.icon as keyof typeof iconMap]
              
              return (
                <motion.div
                  key={category}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-card border border-border rounded-lg p-8"
                >
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h2 className="text-xl font-bold">{category}</h2>
                    </div>
                  </div>

                  <div className="space-y-4">
                    {categoryData.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: skillIndex * 0.05 }}
                        viewport={{ once: true }}
                        className="space-y-2"
                      >
                        <div className="flex justify-between items-center">
                          <span className="font-medium">{skill.name}</span>
                          <div className="flex items-center gap-2">
                            <span className="text-sm text-muted-foreground">
                              {skill.experience}
                            </span>
                            <span className="text-sm font-medium text-primary">
                              {skill.level}%
                            </span>
                          </div>
                        </div>
                        <div className="w-full bg-muted rounded-full h-2">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            transition={{ duration: 1, delay: skillIndex * 0.1 }}
                            viewport={{ once: true }}
                            className="h-2 bg-gradient-to-r from-primary to-blue-600 rounded-full"
                          />
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Key Technologies */}
      <section className="section-padding bg-muted/30">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center space-y-6 mb-12"
          >
            <h2 className="text-3xl lg:text-4xl font-bold">Key Technologies</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Technologies I work with regularly and have extensive experience in
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {[
              'Python', 'FastAPI', 'Flutter', 'Next.js', 'React', 'TypeScript',
              'PostgreSQL', 'Docker', 'Kubernetes', 'Odoo Development', 'React Native', 'Tailwind CSS'
            ].map((tech, index) => (
              <motion.div
                key={tech}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="bg-card border border-border rounded-lg p-4 text-center hover:border-primary/50 transition-colors"
              >
                <span className="font-medium text-sm">{tech}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Architecture & Specializations */}
      <section className="section-padding">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center space-y-6 mb-12"
          >
            <h2 className="text-3xl lg:text-4xl font-bold">Specializations</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Areas where I have deep expertise and passion
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Full-Stack Development',
                description: 'End-to-end application development from concept to deployment',
                icon: Code
              },
              {
                title: 'Mobile Development',
                description: 'Cross-platform mobile applications with Flutter and React Native',
                icon: Smartphone
              },
              {
                title: 'API Development',
                description: 'RESTful APIs, microservices, and system integrations',
                icon: Link
              },
              {
                title: 'DevOps & CI/CD',
                description: 'Automated deployment pipelines and infrastructure management',
                icon: Cloud
              },
              {
                title: 'System Architecture',
                description: 'Scalable system design and architectural decision making',
                icon: Layout
              },
              {
                title: 'Enterprise Solutions',
                description: 'Business process automation and ERP customization (Odoo)',
                icon: Server
              }
            ].map((spec, index) => (
              <motion.div
                key={spec.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-card border border-border rounded-lg p-6 text-center"
              >
                <div className="p-3 bg-primary/10 rounded-lg w-fit mx-auto mb-4">
                  <spec.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-bold text-lg mb-2">{spec.title}</h3>
                <p className="text-muted-foreground text-sm">{spec.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}