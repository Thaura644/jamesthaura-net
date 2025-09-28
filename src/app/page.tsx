'use client'

import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Download, MapPin } from 'lucide-react'
import { motion } from 'framer-motion'
import { personalInfo, bio } from '@/data/content'
import { featuredProjects } from '@/data/projects'

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="section-padding">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-6"
            >
              <div className="space-y-2">
                <p className="text-primary font-medium">Hello, I&apos;m</p>
                <h1 className="text-4xl lg:text-6xl font-bold tracking-tight">
                  {personalInfo.name}
                </h1>
                <p className="text-xl lg:text-2xl text-muted-foreground">
                  {personalInfo.title}
                </p>
              </div>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                {personalInfo.tagline}
              </p>
              
              <p className="text-muted-foreground">
                {bio.short}
              </p>
              
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin className="w-4 h-4" />
                <span>{personalInfo.location}</span>
                <span className="mx-2">•</span>
                <span className="text-green-600 dark:text-green-400">
                  {personalInfo.availability}
                </span>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/projects"
                  className="inline-flex items-center justify-center gap-2 border border-border hover:bg-accent hover:text-accent-foreground px-6 py-3 rounded-lg font-medium transition-colors"
                >
                  View My Work
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 border border-border hover:bg-accent hover:text-accent-foreground px-6 py-3 rounded-lg font-medium transition-colors"
                >
                  Get In Touch
                </Link>
                <Link
                  href={personalInfo.resumeUrl}
                  className="inline-flex items-center justify-center gap-2 border border-border hover:bg-accent hover:text-accent-foreground px-6 py-3 rounded-lg font-medium transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Download className="w-4 h-4" />
                  Resume
                </Link>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex justify-center lg:justify-end"
            >
              <div className="relative">
                <div className="w-64 h-64 lg:w-80 lg:h-80 rounded-full bg-gradient-to-br from-primary to-blue-600 opacity-20 absolute inset-0 blur-3xl" />
                <div className="relative w-64 h-64 lg:w-80 lg:h-80 rounded-full overflow-hidden border-4 border-border/50 bg-card">
                  <Image
                    src="/me-hero.jpeg"
                    alt={`${personalInfo.name} - Profile Picture`}
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Featured Projects Preview */}
      <section className="section-padding bg-muted/30">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center space-y-4 mb-12"
          >
            <h2 className="text-3xl lg:text-4xl font-bold">Featured Projects</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Here are some of my recent projects that showcase my skills in full-stack development, 
              mobile applications, and innovative solutions.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.slice(0, 3).map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group cursor-pointer"
              >
                <Link href={`/projects/${project.id}`} className="block">
                  <div className="bg-card border border-border rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300">
                    <div className="h-48 relative bg-muted">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                    <div className="p-6 space-y-3">
                      <h3 className="font-semibold text-lg group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {project.subtitle}
                      </p>
                      <div className="flex flex-wrap gap-1">
                        {project.tech.slice(0, 3).map((tech) => (
                          <span
                            key={tech}
                            className="px-2 py-1 text-xs bg-primary/10 text-primary rounded-full"
                          >
                            {tech}
                          </span>
                        ))}
                        {project.tech.length > 3 && (
                          <span className="px-2 py-1 text-xs bg-muted text-muted-foreground rounded-full">
                            +{project.tech.length - 3}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 text-primary hover:underline font-medium"
            >
              View All Projects
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
