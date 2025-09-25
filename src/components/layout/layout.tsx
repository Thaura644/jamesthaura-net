'use client'

import { Inter } from 'next/font/google'
import { ThemeProvider } from 'next-themes'
import { Header } from './header'
import { Footer } from './footer'
import { CTABanner } from './cta-banner'

const inter = Inter({ subsets: ['latin'] })

interface LayoutProps {
  children: React.ReactNode
}

export function Layout({ children }: LayoutProps) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <div className={`min-h-screen bg-background font-sans antialiased ${inter.className}`}>
        <CTABanner />
        <Header />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  )
}
