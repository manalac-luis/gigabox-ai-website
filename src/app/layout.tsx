import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Gigabox | Building Systems for an AI-First World',
  description:
    'Production software where AI agents do the routine work. Eight running systems — CRM, EHR, inference, workflow automation, AI classrooms — operated autonomously.',
  openGraph: {
    title: 'Gigabox | Building Systems for an AI-First World',
    description:
      'Production software where AI agents do the routine work. Eight running systems — CRM, EHR, inference, workflow automation, AI classrooms — operated autonomously.',
    url: 'https://www.gigabox.ai',
    siteName: 'Gigabox',
    type: 'website',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Gigabox - Building Systems for an AI-First World',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Gigabox | Building Systems for an AI-First World',
    description:
      'Production software where AI agents do the routine work. Eight running systems — CRM, EHR, inference, workflow automation, AI classrooms — operated autonomously.',
    images: ['/og-image.jpg'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
