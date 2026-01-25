import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Gigabox Research | AI Agents for Human Expertise',
  description:
    'Building AI agents that democratize access to expert knowledge. We research and develop conversational AI systems that bring specialized human expertise to everyone.',
  openGraph: {
    title: 'Gigabox Research | AI Agents for Human Expertise',
    description:
      'Building AI agents that democratize access to expert knowledge. We research and develop conversational AI systems that bring specialized human expertise to everyone.',
    url: 'https://gigaboxresearch.com',
    siteName: 'Gigabox Research',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Gigabox Research | AI Agents for Human Expertise',
    description:
      'Building AI agents that democratize access to expert knowledge. We research and develop conversational AI systems that bring specialized human expertise to everyone.',
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
