'use client'

import { use } from 'react'
import { notFound } from 'next/navigation'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, ExternalLink, Github, Calendar, MessageCircle, ArrowRight, CheckCircle, Target, Zap } from 'lucide-react'
import { projects } from '@/data/projects'
import { CalClickIntegration } from '@/components/ui/cal-click-integration'
import { ValueProposition } from '@/components/ui/value-proposition'

interface ProjectPageProps {
  params: Promise<{
    id: string
  }>
}

export default function ProjectPage({ params }: ProjectPageProps) {
  const { id } = use(params)
  const project = projects.find(p => p.id === id)
  
  if (!project) {
    notFound()
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="section-padding">
        <div className="container">
          {/* Back Button */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <Link 
              href="/projects"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Projects
            </Link>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Project Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="space-y-6"
            >
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 text-sm bg-primary/10 text-primary rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              
              <div className="space-y-4">
                <h1 className="text-4xl lg:text-6xl font-bold tracking-tight">
                  {project.title}
                </h1>
                <p className="text-xl lg:text-2xl text-muted-foreground">
                  {project.subtitle}
                </p>
              </div>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                {project.description}
              </p>

              {/* Status and Year */}
              <div className="flex items-center gap-6 text-sm">
                <div className="flex items-center gap-2">
                  <div className={`w-2 h-2 rounded-full ${
                    project.status === 'live' ? 'bg-green-500' : 
                    project.status === 'development' ? 'bg-yellow-500' : 
                    'bg-gray-500'
                  }`} />
                  <span className="capitalize">{project.status}</span>
                </div>
                <span className="text-muted-foreground">•</span>
                <span>{project.year}</span>
              </div>
              
              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                {project.links.demo && (
                  <Link
                    href={project.links.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 bg-primary text-white dark:text-black hover:bg-primary/90 px-6 py-3 rounded-lg font-medium transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                    View Live Demo
                  </Link>
                )}
                
                {project.links.code && (
                  <Link
                    href={project.links.code}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 border border-border hover:bg-accent hover:text-accent-foreground px-6 py-3 rounded-lg font-medium transition-colors"
                  >
                    <Github className="w-4 h-4" />
                    View Code
                  </Link>
                )}

                {/* Interest Buttons */}
                <button
                  data-cal-link="james-mweni-mrwrhm/kyc"
                  data-cal-namespace="kyc"
                  data-cal-config='{"layout":"month_view"}'
                  className="inline-flex items-center justify-center gap-2 border border-border hover:bg-accent hover:text-accent-foreground px-6 py-3 rounded-lg font-medium transition-colors"
                >
                  <Calendar className="w-4 h-4" />
                  Schedule Call
                </button>
                
                <Link
                  href="https://wa.link/354bhq"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 border border-green-500 hover:bg-green-50 text-green-600 px-6 py-3 rounded-lg font-medium transition-colors"
                >
                  <MessageCircle className="w-4 h-4" />
                  WhatsApp
                </Link>
              </div>
            </motion.div>
            
            {/* Project Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex justify-center lg:justify-end"
            >
              <div className="relative w-full max-w-md lg:max-w-lg">
                <div className="aspect-[4/3] relative rounded-lg overflow-hidden border border-border bg-card">
                  <Image
                    src={project.image}
                    alt={project.title}
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

      {/* Value Proposition Section */}
      <section className="section-padding bg-muted/30">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center space-y-4 mb-12"
          >
            <h2 className="text-3xl lg:text-4xl font-bold">Value Proposition</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Here's how this project creates value and solves real-world problems
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <ValueProposition content={project.longDescription} />
            </motion.div>
          </div>

          {/* Impact Metrics */}
          {project.impact && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="mt-16"
            >
              <h3 className="text-2xl font-bold text-center mb-8">Project Impact</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {project.impact.map((metric, index) => (
                  <div
                    key={index}
                    className="bg-card border border-border rounded-lg p-6 text-center"
                  >
                    <Target className="w-8 h-8 text-primary mx-auto mb-3" />
                    <h4 className="font-semibold mb-2">{metric.metric}</h4>
                    <p className="text-sm text-muted-foreground">{metric.value}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </div>
      </section>

      {/* Technical Details */}
      <section className="section-padding">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Features */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <CheckCircle className="w-6 h-6 text-green-500" />
                Key Features
              </h3>
              <ul className="space-y-3">
                {project.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Technology Stack */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <Zap className="w-6 h-6 text-blue-500" />
                Technology Stack
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-2 text-sm bg-accent text-accent-foreground rounded-md border border-border"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Challenges */}
          {project.challenges && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="mt-16"
            >
              <h3 className="text-2xl font-bold mb-6">Technical Challenges Solved</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {project.challenges.map((challenge, index) => (
                  <div
                    key={index}
                    className="bg-card border border-border rounded-lg p-6"
                  >
                    <p className="text-muted-foreground">{challenge}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {/* Architecture */}
          {project.architecture && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="mt-16"
            >
              <h3 className="text-2xl font-bold mb-6">Architecture</h3>
              <div className="bg-card border border-border rounded-lg p-8">
                <div className="flex items-center gap-3 mb-4">
                  <span className="px-3 py-1 text-sm bg-primary/10 text-primary rounded-full capitalize">
                    {project.architecture.type}
                  </span>
                </div>
                <p className="text-muted-foreground">{project.architecture.description}</p>
              </div>
            </motion.div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-primary/10 to-blue-600/10">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center space-y-6"
          >
            <h2 className="text-3xl lg:text-4xl font-bold">
              Interested in Similar Work?
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              I'd love to discuss how I can help bring your project ideas to life. 
              Let's schedule a call to explore the possibilities.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                data-cal-link="james-mweni-mrwrhm/kyc"
                data-cal-namespace="kyc"
                data-cal-config='{"layout":"month_view"}'
                className="inline-flex items-center gap-2 bg-primary text-white dark:text-black hover:bg-primary/90 px-8 py-4 rounded-lg font-medium transition-colors text-lg"
              >
                <Calendar className="w-5 h-5" />
                Schedule a Discovery Call
              </button>
              
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 border border-border hover:bg-accent hover:text-accent-foreground px-8 py-4 rounded-lg font-medium transition-colors text-lg"
              >
                View More Projects
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
      <CalClickIntegration />
    </div>
  )
}

