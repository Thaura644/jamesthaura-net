'use client'

import { motion } from 'framer-motion'
import { Download, MapPin, Calendar, Flag, Mail, Phone } from 'lucide-react'
import { personalInfo, bio, education } from '@/data/content'
import Link from 'next/link'

export default function About() {
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
              About Me
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              {personalInfo.tagline}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Personal Info Section */}
      <section className="section-padding bg-muted/30">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="text-3xl font-bold">Get to Know Me</h2>
              <div className="prose prose-lg">
                <p className="text-muted-foreground leading-relaxed">
                  {bio.long}
                </p>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-muted-foreground">
                  <Flag className="w-5 h-5 text-primary" />
                  <span>{personalInfo.nationality}</span>
                </div>
                <div className="flex items-center gap-3 text-muted-foreground">
                  <Calendar className="w-5 h-5 text-primary" />
                  <span>Born: {personalInfo.dateOfBirth}</span>
                </div>
                <div className="flex items-center gap-3 text-muted-foreground">
                  <MapPin className="w-5 h-5 text-primary" />
                  <span>{personalInfo.location}</span>
                </div>
                <div className="flex items-center gap-3 text-muted-foreground">
                  <Mail className="w-5 h-5 text-primary" />
                  <span>{personalInfo.email}</span>
                </div>
                <div className="flex items-center gap-3 text-muted-foreground">
                  <Phone className="w-5 h-5 text-primary" />
                  <span>{personalInfo.phone}</span>
                </div>
              </div>

              <Link
                href={personalInfo.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-primary text-white dark:text-black hover:bg-primary/90 px-6 py-3 rounded-lg font-medium transition-colors"
              >
                <Download className="w-4 h-4" />
                Download Resume
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="flex justify-center lg:justify-end"
            >
              <div className="relative">
                <div className="w-80 h-80 rounded-2xl bg-gradient-to-br from-primary/10 to-blue-600/10 border border-border/50 flex items-center justify-center">
                  <div className="text-8xl font-bold text-muted-foreground/20">
                    {personalInfo.name.split(' ').map(n => n[0]).join('')}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center space-y-6 mb-12"
          >
            <h2 className="text-3xl lg:text-4xl font-bold">My Values</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              The principles that guide my work and drive my passion for technology
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {bio.values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-card border border-border rounded-lg p-6 text-center"
              >
                <h3 className="font-semibold text-lg mb-2">{value}</h3>
              </motion.div>
            ))}
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
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-card border border-border rounded-lg p-8"
              >
                <div className="space-y-4">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                    <div>
                      <h3 className="text-xl font-bold">{edu.degree}</h3>
                      <p className="text-primary font-medium">{edu.institution}</p>
                    </div>
                    <div className="text-sm text-muted-foreground md:text-right">
                      <p>{edu.period}</p>
                      <p>{edu.location}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                      {edu.grade}
                    </span>
                  </div>
                  <p className="text-muted-foreground">{edu.description}</p>
                  {edu.website && (
                    <p className="text-sm text-muted-foreground">
                      Website: <span className="text-primary">{edu.website}</span>
                    </p>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}