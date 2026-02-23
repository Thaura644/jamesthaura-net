'use client'

import { Inter } from 'next/font/google'
import { ThemeProvider } from 'next-themes'
import { Header } from './header'
import { Footer } from './footer'
import { CTABanner } from './cta-banner'

const inter = Inter({ subsets: ['latin'] })

interface LayoutProps {
  children: React.ReactNode
  personalInfo: any
  ctaBannerData?: any
}

export function Layout({ children, personalInfo, ctaBannerData }: LayoutProps) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <div className={`min-h-screen bg-background font-sans antialiased ${inter.className}`}>
        <CTABanner data={ctaBannerData} />
        <Header personalInfo={personalInfo} />
        <main className="flex-1">
          {children}
        </main>
        <Footer personalInfo={personalInfo} />
      </div>
    </ThemeProvider>
  )
}
