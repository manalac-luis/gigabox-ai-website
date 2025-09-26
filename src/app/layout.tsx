import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Gigabox — OneUI, the AI Development Platform for Developers',
  description:
    'OneUI helps internal developers build governed AI apps faster—deploy in your K8s or cloud, use your toolchain, skip AI plumbing.',
  openGraph: {
    title: 'Gigabox — OneUI, the AI Development Platform for Developers',
    description:
      'Build AI and AI-assisted apps with policies, receipts, and audit. Deploy in your Kubernetes cluster or cloud.',
    url: 'https://gigabox.ai',
    siteName: 'Gigabox',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Gigabox — OneUI, the AI Development Platform for Developers',
    description:
      'Build AI and AI-assisted apps with policies, receipts, and audit. Deploy in your Kubernetes cluster or cloud.',
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

// import type { Metadata } from 'next'
// import { Inter } from 'next/font/google'
// import './globals.css'

// const inter = Inter({ subsets: ['latin'] })

// export const metadata: Metadata = {
//   title: 'gigabox.ai - Transform Your Business with AI',
//   description: 'Harness the power of artificial intelligence to streamline operations and boost productivity',
// }

// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode
// }) {
//   return (
//     <html lang="en" className="scroll-smooth">
//       <body className={inter.className}>{children}</body>
//     </html>
//   );
// } 