import React from 'react'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: 'archive.bryton.studio - Creative Projects',
  description: 'Find music and fashion creative projects by Bryton',
  keywords: 'music, fashion, creative, archive, bryton studio',
  authors: [{ name: 'Bryton' }],
  openGraph: {
    title: 'archive.bryton.studio - Creative Projects',
    description: 'Find music and fashion creative projects by Bryton',
    url: 'https://archive.bryton.studio',
    siteName: 'archive.bryton.studio',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'archive.bryton.studio - Creative Projects',
    description: 'Find music and fashion creative projects by Bryton',
  },
  robots: {
    index: true,
    follow: true,
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} font-body antialiased`}>
        <div className="min-h-screen bg-black overflow-x-hidden">
          <main className="relative">
            {children}
          </main>
        </div>
      </body>
    </html>
  )
} 