'use client'

import { motion } from 'framer-motion'
import { Download, ArrowLeft, ExternalLink } from 'lucide-react'
import { personalInfo } from '@/data/content'
import Link from 'next/link'

export default function Resume() {
  // Convert Google Drive share URL to embed URL
  const embedUrl = personalInfo.resumeUrl.replace('/view?usp=sharing', '/preview')

  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="section-padding pb-8">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <div className="flex items-center gap-4 mb-8">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-primary hover:underline"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to About
              </Link>
            </div>

            <div className="text-center space-y-4">
              <h1 className="text-3xl lg:text-5xl font-bold">
                Resume
              </h1>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                {personalInfo.name} - {personalInfo.title}
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href={personalInfo.resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-primary text-white dark:text-black hover:bg-primary/90 px-6 py-3 rounded-lg font-medium transition-colors"
                >
                  <Download className="w-4 h-4" />
                  Download PDF
                </Link>
                
                <Link
                  href={personalInfo.resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 border border-border hover:bg-accent hover:text-accent-foreground px-6 py-3 rounded-lg font-medium transition-colors"
                >
                  <ExternalLink className="w-4 h-4" />
                  Open in Google Drive
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Resume Embed */}
      <section className="section-padding pt-0">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-card border border-border rounded-lg overflow-hidden"
          >
            <div className="aspect-[8.5/11] w-full">
              <iframe
                src={embedUrl}
                width="100%"
                height="100%"
                className="border-0"
                title={`${personalInfo.name} Resume`}
                allow="autoplay"
              />
            </div>
            
            {/* Fallback message */}
            <div className="p-8 text-center border-t">
              <p className="text-muted-foreground mb-4">
                Can't see the resume? 
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href={personalInfo.resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-primary text-white dark:text-black hover:bg-primary/90 px-6 py-3 rounded-lg font-medium transition-colors"
                >
                  <Download className="w-4 h-4" />
                  Download PDF
                </Link>
                
                <Link
                  href={personalInfo.resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 border border-border hover:bg-accent hover:text-accent-foreground px-6 py-3 rounded-lg font-medium transition-colors"
                >
                  <ExternalLink className="w-4 h-4" />
                  View in New Tab
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="section-padding bg-muted/30">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center space-y-6"
          >
            <h2 className="text-2xl lg:text-3xl font-bold">
              Interested in My Background?
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Let's discuss how my experience and skills can contribute to your next project.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-primary text-white dark:text-black hover:bg-primary/90 px-6 py-3 rounded-lg font-medium transition-colors"
              >
                Get In Touch
              </Link>
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 border border-border hover:bg-accent hover:text-accent-foreground px-6 py-3 rounded-lg font-medium transition-colors"
              >
                View My Work
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}