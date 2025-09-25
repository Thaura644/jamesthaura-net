'use client'

import { motion } from 'framer-motion'
import { Building, Calendar, MapPin, CheckCircle } from 'lucide-react'
import { experience, education } from '@/data/content'

export default function Experience() {
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
              Professional Experience
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              My journey in software engineering, from internships to senior roles, 
              building innovative solutions across various industries.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Experience Timeline */}
      <section className="section-padding">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center space-y-6 mb-12"
          >
            <h2 className="text-3xl lg:text-4xl font-bold">Work Experience</h2>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-6 md:left-1/2 md:-ml-px h-full w-0.5 bg-border"></div>

              {experience.map((job, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className={`relative flex items-center mb-16 ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-6 md:left-1/2 md:-ml-3 w-6 h-6 bg-primary rounded-full border-4 border-background z-10"></div>

                  {/* Content Card */}
                  <div className={`ml-16 md:ml-0 md:w-5/12 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                    <div className="bg-card border border-border rounded-lg p-8 shadow-sm">
                      {/* Header */}
                      <div className="space-y-2 mb-4">
                        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                          <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                            job.type === 'Full-time' 
                              ? 'bg-green-100 text-green-800' 
                              : 'bg-blue-100 text-blue-800'
                          }`}>
                            {job.type}
                          </span>
                        </div>
                        <h3 className="text-xl font-bold">{job.role}</h3>
                        <div className="flex items-center gap-2 text-primary font-medium">
                          <Building className="w-4 h-4" />
                          <span>{job.company}</span>
                        </div>
                        <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-sm text-muted-foreground">
                          <div className="flex items-center gap-2">
                            <Calendar className="w-4 h-4" />
                            <span>{job.period}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <MapPin className="w-4 h-4" />
                            <span>{job.location}</span>
                          </div>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-muted-foreground mb-6 leading-relaxed">
                        {job.description}
                      </p>

                      {/* Achievements */}
                      <div className="space-y-3">
                        <h4 className="font-semibold text-sm uppercase tracking-wide text-muted-foreground">
                          Key Achievements
                        </h4>
                        <ul className="space-y-2">
                          {job.achievements.map((achievement, achievementIndex) => (
                            <li key={achievementIndex} className="flex items-start gap-3">
                              <CheckCircle className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                              <span className="text-sm text-muted-foreground">{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="section-padding bg-muted/30">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center space-y-6 mb-12"
          >
            <h2 className="text-3xl lg:text-4xl font-bold">Education</h2>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-card border border-border rounded-lg p-8"
              >
                <div className="space-y-4">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                    <div className="space-y-2">
                      <h3 className="text-2xl font-bold">{edu.degree}</h3>
                      <div className="flex items-center gap-2 text-primary font-medium">
                        <Building className="w-5 h-5" />
                        <span>{edu.institution}</span>
                      </div>
                    </div>
                    <div className="text-muted-foreground lg:text-right space-y-1">
                      <div className="flex items-center gap-2 lg:justify-end">
                        <Calendar className="w-4 h-4" />
                        <span>{edu.period}</span>
                      </div>
                      <div className="flex items-center gap-2 lg:justify-end">
                        <MapPin className="w-4 h-4" />
                        <span>{edu.location}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <span className="bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium">
                      {edu.grade}
                    </span>
                  </div>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    {edu.description}
                  </p>
                  
                  {edu.website && (
                    <div className="pt-2 border-t">
                      <p className="text-sm text-muted-foreground">
                        Institution Website: 
                        <span className="text-primary ml-1">{edu.website}</span>
                      </p>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Summary */}
      <section className="section-padding">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center space-y-6 mb-12"
          >
            <h2 className="text-3xl lg:text-4xl font-bold">Professional Focus</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Throughout my experience, I've developed expertise in these key areas
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: 'Full-Stack Development', desc: 'End-to-end application development' },
              { title: 'Mobile Development', desc: 'Flutter & React Native apps' },
              { title: 'Backend Systems', desc: 'API development with Python/FastAPI' },
              { title: 'DevOps & Deployment', desc: 'CI/CD, Docker, and cloud deployment' },
              { title: 'Enterprise Solutions', desc: 'Odoo development and customization' },
              { title: 'System Architecture', desc: 'Scalable system design and planning' },
              { title: 'Team Collaboration', desc: 'Agile methodologies and project management' },
              { title: 'Problem Solving', desc: 'Technical troubleshooting and optimization' }
            ].map((focus, index) => (
              <motion.div
                key={focus.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-card border border-border rounded-lg p-6 text-center"
              >
                <h3 className="font-bold text-lg mb-2">{focus.title}</h3>
                <p className="text-muted-foreground text-sm">{focus.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}