'use client'

import Link from 'next/link'
import { socialLinks } from '@/data/navigation'
import { personalInfo } from '@/data/content'
import { SocialIcons } from '@/components/ui/social-icons'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t bg-background">
      <div className="container section-padding">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand & Description */}
          <div className="space-y-4">
            <div className="font-bold text-xl">
              <span className="text-primary">{personalInfo.name.split(' ')[0]}</span>
              <span className="ml-1">{personalInfo.name.split(' ')[1]}</span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              {personalInfo.title} passionate about building innovative solutions 
              that make a real difference. Available for global opportunities.
            </p>
            <div className="flex items-center space-x-4">
              {socialLinks.map((link) => {
                const IconComponent = SocialIcons[link.icon as keyof typeof SocialIcons]
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="p-2 rounded-md hover:bg-accent transition-colors"
                    aria-label={link.name}
                    target={link.external ? '_blank' : undefined}
                    rel={link.external ? 'noopener noreferrer' : undefined}
                  >
                    <IconComponent className="w-4 h-4" />
                  </Link>
                )
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-sm uppercase tracking-wider">Quick Links</h3>
            <nav className="space-y-2">
              <Link href="/projects" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                View Projects
              </Link>
              <Link href="/skills" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                Technical Skills
              </Link>
              <Link href="/experience" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                Experience
              </Link>
              <Link href="/contact" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                Get In Touch
              </Link>
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="font-semibold text-sm uppercase tracking-wider">Get In Touch</h3>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p>{personalInfo.location}</p>
              <Link href={`mailto:${personalInfo.email}`} className="block hover:text-primary transition-colors">
                {personalInfo.email}
              </Link>
              <Link href={`tel:${personalInfo.phone}`} className="block hover:text-primary transition-colors">
                {personalInfo.phone}
              </Link>
              <div className="pt-2">
                <span className="inline-flex items-center px-2 py-1 rounded-full text-xs bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400">
                  {personalInfo.availability}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 pt-8 border-t border-border">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-2 sm:space-y-0">
            <p className="text-sm text-muted-foreground">
              © {currentYear} {personalInfo.name}. All rights reserved.
            </p>
            <p className="text-sm text-muted-foreground">
              Built with Next.js, TypeScript, and Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}