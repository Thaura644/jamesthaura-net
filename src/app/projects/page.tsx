'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, ExternalLink, Github, Filter, Calendar, Lock } from 'lucide-react'
import { projects } from '@/data/projects'
import { projectCategories } from '@/data/navigation'
import { PaymentBlock } from '@/components/ui/payment-block'
import Link from 'next/link'
import Image from 'next/image'

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('all')
  const [paymentBlock, setPaymentBlock] = useState<{ show: boolean; projectTitle: string; projectId: string }>({ show: false, projectTitle: '', projectId: '' })
  
  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category.includes(activeFilter))

  const handleScheduleDemo = () => {
    // This will be handled by the Cal.com floating button
    console.log('Schedule demo clicked')
  }

  const handleCodeClick = (project: typeof projects[0]) => {
    // NASA APOD app is free, others require payment
    if (project.id === 'nasa-apod-app') {
      window.open(project.links.code, '_blank')
    } else {
      setPaymentBlock({ show: true, projectTitle: project.title, projectId: project.id })
    }
  }

  const closePaymentBlock = () => {
    setPaymentBlock({ show: false, projectTitle: '', projectId: '' })
  }

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
              My Projects
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A showcase of my work in full-stack development, mobile applications, 
              and innovative solutions across various industries.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={handleScheduleDemo}
                data-cal-link="james-mweni-mrwrhm/kyc"
                data-cal-namespace="kyc"
                data-cal-config='{"layout":"month_view"}'
                className="inline-flex items-center gap-2 bg-primary text-white dark:text-black hover:bg-primary/90 px-6 py-3 rounded-lg font-medium transition-colors"
              >
                <Calendar className="w-4 h-4" />
                Schedule a Demo
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="section-padding pt-0">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <div className="flex items-center gap-2 mb-6">
              <Filter className="w-5 h-5 text-primary" />
              <span className="font-medium">Filter by category:</span>
            </div>
            
            <div className="flex flex-wrap gap-3">
              {projectCategories.map((category) => (
                <button
                  key={category.value}
                  onClick={() => setActiveFilter(category.value)}
                  className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                    activeFilter === category.value
                      ? 'bg-primary text-white dark:text-black'
                      : 'bg-muted hover:bg-accent hover:text-accent-foreground'
                  }`}
                >
                  {category.label}
                </button>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="section-padding pt-0">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-card border border-border rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300 hover:border-primary/50"
              >
                {/* Project Image */}
                <div className="h-48 relative bg-muted">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                  
                  {/* Status Badge */}
                  <div className="absolute top-4 right-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      project.status === 'live' 
                        ? 'bg-green-100 text-green-800' 
                        : project.status === 'development'
                        ? 'bg-blue-100 text-blue-800'
                        : 'bg-yellow-100 text-yellow-800'
                    }`}>
                      {project.status}
                    </span>
                  </div>

                  {/* Featured Badge */}
                  {project.featured && (
                    <div className="absolute top-4 left-4">
                      <span className="bg-primary text-white dark:text-black px-3 py-1 rounded-full text-xs font-medium">
                        Featured
                      </span>
                    </div>
                  )}
                </div>

                {/* Project Content */}
                <div className="p-6 space-y-4">
                  <div className="space-y-2">
                    <h3 className="font-bold text-xl">{project.title}</h3>
                    <p className="text-primary font-medium">{project.subtitle}</p>
                    <p className="text-sm text-muted-foreground line-clamp-3">
                      {project.description}
                    </p>
                  </div>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-1">
                    {project.tech.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 text-xs bg-primary/10 text-primary rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.tech.length > 4 && (
                      <span className="px-2 py-1 text-xs bg-muted text-muted-foreground rounded-full">
                        +{project.tech.length - 4}
                      </span>
                    )}
                  </div>

                  {/* Architecture Type */}
                  {project.architecture && (
                    <div className="text-sm text-muted-foreground">
                      <span className="font-medium">Architecture:</span> {project.architecture.type}
                    </div>
                  )}

                  {/* Project Links */}
                  <div className="flex items-center justify-between pt-4 border-t">
                    <div className="flex items-center gap-3">
                      {project.links.demo && (
                        <Link
                          href={project.links.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-sm text-primary hover:underline"
                        >
                          <ExternalLink className="w-3 h-3" />
                          Demo
                        </Link>
                      )}
                      {project.links.code && (
                        <button
                          onClick={() => handleCodeClick(project)}
                          className="inline-flex items-center gap-1 text-sm text-primary hover:underline"
                        >
                          {project.id === 'nasa-apod-app' ? (
                            <Github className="w-3 h-3" />
                          ) : (
                            <Lock className="w-3 h-3" />
                          )}
                          {project.id === 'nasa-apod-app' ? 'Code' : 'Premium'}
                        </button>
                      )}
                      {project.links.web && (
                        <Link
                          href={project.links.web}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-sm text-primary hover:underline"
                        >
                          <ExternalLink className="w-3 h-3" />
                          Live
                        </Link>
                      )}
                    </div>
                    
                    {/* View Details Button */}
                    <Link 
                      href={`/projects/${project.id}`}
                      className="inline-flex items-center gap-1 text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
                    >
                      Details
                      <ArrowRight className="w-3 h-3" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* No projects found message */}
          {filteredProjects.length === 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-center py-16"
            >
              <p className="text-muted-foreground text-lg">
                No projects found in the "{projectCategories.find(cat => cat.value === activeFilter)?.label}" category.
              </p>
              <button
                onClick={() => setActiveFilter('all')}
                className="mt-4 text-primary hover:underline font-medium"
              >
                View all projects
              </button>
            </motion.div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-muted/30">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center space-y-6"
          >
            <h2 className="text-3xl lg:text-4xl font-bold">
              Interested in Working Together?
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              I'm always excited to take on new challenges and build innovative solutions. 
              Let's discuss your project and see how we can bring your ideas to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-primary text-white dark:text-black hover:bg-primary/90 px-6 py-3 rounded-lg font-medium transition-colors"
              >
                Get In Touch
                <ArrowRight className="w-4 h-4" />
              </Link>
              <button
                data-cal-link="james-mweni-mrwrhm/kyc"
                data-cal-namespace="kyc"
                data-cal-config='{"layout":"month_view"}'
                className="inline-flex items-center gap-2 border border-border hover:bg-accent hover:text-accent-foreground px-6 py-3 rounded-lg font-medium transition-colors"
              >
                <Calendar className="w-4 h-4" />
                Schedule a Call
              </button>
            </div>
          </motion.div>
        </div>
      </section>
      
      {/* Payment Block Modal */}
      <AnimatePresence>
        {paymentBlock.show && (
          <PaymentBlock
            projectTitle={paymentBlock.projectTitle}
            projectId={paymentBlock.projectId}
            onClose={closePaymentBlock}
          />
        )}
      </AnimatePresence>
    </div>
  )
}