'use client'

import Link from 'next/link'
import { X } from 'lucide-react'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ctaBanner } from '@/data/navigation'

export function CTABanner() {
  const [isVisible, setIsVisible] = useState(true)

  if (!isVisible) return null

  return (
    <AnimatePresence>
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -100, opacity: 0 }}
        className="relative bg-gradient-to-r from-primary to-blue-600 text-primary-foreground"
      >
        <div className="container">
          <div className="flex items-center justify-between py-3 text-sm">
            <div className="flex items-center justify-center flex-1 gap-3">
              <span className="font-medium">{ctaBanner.text}</span>
              <div className="hidden sm:flex items-center gap-2">
                <Link
                  href={ctaBanner.primaryAction.href}
                  className="bg-white/20 hover:bg-white/30 px-3 py-1 rounded-full transition-colors font-medium"
                >
                  {ctaBanner.primaryAction.text}
                </Link>
                <Link
                  href={ctaBanner.secondaryAction.href}
                  className="border border-white/20 hover:bg-white/10 px-3 py-1 rounded-full transition-colors"
                >
                  {ctaBanner.secondaryAction.text}
                </Link>
              </div>
            </div>
            <button
              onClick={() => setIsVisible(false)}
              className="p-1 hover:bg-white/20 rounded-full transition-colors"
              aria-label="Close banner"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  )
}
