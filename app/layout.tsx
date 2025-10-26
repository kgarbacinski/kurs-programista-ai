import type { Metadata } from 'next'
import { Inter, JetBrains_Mono, Space_Grotesk } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin', 'latin-ext'],
  variable: '--font-inter',
  display: 'swap',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin', 'latin-ext'],
  variable: '--font-jetbrains',
  display: 'swap',
})

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin', 'latin-ext'],
  variable: '--font-space',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Kurs Programista AI | Programuj 3x szybciej z AI - Efektywniejsi',
  description: 'Praktyczny kurs AI dla programistów. Naucz się programować 3x szybciej z Claude Code. Production-ready projekt SaaS od podstaw. Techniki od Senior Engineerów.',
  keywords: [
    'kurs programowania AI',
    'Claude Code',
    'programowanie z AI',
    'kurs AI dla programistów',
    'Python AI',
    'FastAPI',
    'DevOps',
    'Docker',
    'Kubernetes',
    'kurs programista',
  ],
  authors: [{ name: 'Efektywniejsi' }],
  creator: 'Efektywniejsi',
  publisher: 'Efektywniejsi',
  metadataBase: new URL('https://efektywniejsi.pl'),
  openGraph: {
    type: 'website',
    locale: 'pl_PL',
    url: 'https://efektywniejsi.pl',
    title: 'Kurs Programista AI | Programuj 3x szybciej z AI',
    description: 'Praktyczny kurs AI dla programistów. Naucz się programować 3x szybciej z Claude Code.',
    siteName: 'Efektywniejsi - Kurs Programista AI',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kurs Programista AI | Programuj 3x szybciej z AI',
    description: 'Praktyczny kurs AI dla programistów. Naucz się programować 3x szybciej z Claude Code.',
    creator: '@efektywniejsi',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'verification_token_placeholder',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pl" className="scroll-smooth">
      <body className={`${inter.variable} ${jetbrainsMono.variable} ${spaceGrotesk.variable} font-sans`}>
        {children}
      </body>
    </html>
  )
}
