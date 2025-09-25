'use client'

import { motion } from 'framer-motion'
import { Mail, MessageCircle, Phone, Calendar, ArrowRight } from 'lucide-react'
import { personalInfo } from '@/data/content'
import Link from 'next/link'
import { CalClickIntegration } from '@/components/ui/cal-click-integration'

export default function Contact() {
  const contactOptions = [
    {
      icon: Mail,
      title: 'Send an Email',
      description: 'Drop me a line and I&apos;ll get back to you within 24 hours',
      action: 'Send Email',
      href: `mailto:${personalInfo.email}`,
      color: 'bg-blue-100 text-blue-800 hover:bg-blue-200',
      iconColor: 'text-blue-600'
    },
    {
      icon: MessageCircle,
      title: 'WhatsApp Me',
      description: 'Let&apos;s chat on WhatsApp for quick discussions',
      action: 'Open WhatsApp',
      href: 'https://wa.link/354bhq',
      color: 'bg-green-100 text-green-800 hover:bg-green-200',
      iconColor: 'text-green-600'
    },
    {
      icon: Phone,
      title: 'Call Me',
      description: 'Available for calls during business hours (EAT)',
      action: 'Call Now',
      href: `tel:${personalInfo.phone}`,
      color: 'bg-purple-100 text-purple-800 hover:bg-purple-200',
      iconColor: 'text-purple-600'
    }
  ]

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
              Let's Work Together
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Ready to bring your ideas to life? I'm here to help you build innovative solutions 
              that make a difference. Choose your preferred way to get in touch.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Options */}
      <section className="section-padding">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {contactOptions.map((option, index) => (
              <motion.div
                key={option.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-card border border-border rounded-lg p-8 text-center hover:shadow-lg transition-all duration-300 hover:border-primary/50"
              >
                <div className={`p-4 rounded-full w-fit mx-auto mb-6 ${option.color.replace('hover:', '')}`}>
                  <option.icon className={`w-8 h-8 ${option.iconColor}`} />
                </div>
                
                <h3 className="text-xl font-bold mb-3">{option.title}</h3>
                <p className="text-muted-foreground mb-6 text-sm leading-relaxed">
                  {option.description}
                </p>
                
                <Link
                  href={option.href}
                  target={option.href.startsWith('http') ? '_blank' : undefined}
                  rel={option.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className={`inline-flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-colors ${option.color}`}
                >
                  {option.action}
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Schedule a Meeting */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-primary/10 to-blue-600/10 border border-border rounded-lg p-8 text-center"
          >
            <div className="p-4 bg-primary/10 rounded-full w-fit mx-auto mb-6">
              <Calendar className="w-8 h-8 text-primary" />
            </div>
            
            <h3 className="text-2xl font-bold mb-3">Schedule a Meeting</h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Prefer to schedule a formal meeting? Book a time slot that works for both of us. 
              Perfect for project discussions, consultations, or technical deep dives.
            </p>
            
            <button
              data-cal-link="james-mweni-mrwrhm/kyc"
              data-cal-namespace="kyc"
              data-cal-config='{"layout":"month_view"}'
              className="inline-flex items-center gap-2 bg-primary text-white dark:text-black hover:bg-primary/90 px-8 py-4 rounded-lg font-medium transition-colors text-lg"
            >
              <Calendar className="w-5 h-5" />
              Schedule a Call
            </button>
          </motion.div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="section-padding bg-muted/30">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center space-y-8"
          >
            <h2 className="text-3xl lg:text-4xl font-bold">Quick Info</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="space-y-2">
                <h3 className="font-semibold text-primary">Email</h3>
                <p className="text-muted-foreground">{personalInfo.email}</p>
              </div>
              
              <div className="space-y-2">
                <h3 className="font-semibold text-primary">Phone</h3>
                <p className="text-muted-foreground">{personalInfo.phone}</p>
              </div>
              
              <div className="space-y-2">
                <h3 className="font-semibold text-primary">Location</h3>
                <p className="text-muted-foreground">{personalInfo.location}</p>
              </div>
              
              <div className="space-y-2">
                <h3 className="font-semibold text-primary">Status</h3>
                <p className="text-green-600 dark:text-green-400 font-medium">
                  {personalInfo.availability}
                </p>
              </div>
            </div>

            <div className="pt-8 border-t">
              <p className="text-muted-foreground mb-4">
                <strong>Response Time:</strong> I typically respond within 24 hours during business days.
              </p>
              <p className="text-muted-foreground">
                <strong>Time Zone:</strong> East Africa Time (EAT, UTC+3)
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center space-y-6 mb-12"
          >
            <h2 className="text-3xl lg:text-4xl font-bold">Before You Reach Out</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Here are some common questions that might help you prepare for our conversation
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                question: "What projects do you take on?",
                answer: "I specialize in full-stack development, mobile apps, API development, and system architecture. I work on both new projects and existing system improvements."
              },
              {
                question: "What's your availability?",
                answer: "I'm currently available for new projects. For project timelines, I typically work with 2-4 week sprints depending on complexity."
              },
              {
                question: "Do you work remotely?",
                answer: "Yes! I work with clients globally. I'm based in Kenya (EAT timezone) but flexible with meeting times for different timezones."
              },
              {
                question: "What information should I prepare?",
                answer: "Project scope, timeline, budget range, and any specific technical requirements. The more details you provide, the better I can help."
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-card border border-border rounded-lg p-6"
              >
                <h3 className="font-bold text-lg mb-3">{faq.question}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <CalClickIntegration />
    </div>
  )
}