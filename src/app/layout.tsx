import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '../index.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Senior Developer Portfolio - Full Stack & Blockchain',
  description: 'Senior Full Stack and Blockchain Developer with 10 years of experience. Specializing in modern web technologies, 3D graphics, and blockchain solutions.',
  keywords: 'full stack developer, blockchain developer, typescript, react, 3d graphics, portfolio',
  openGraph: {
    title: 'Senior Developer Portfolio',
    description: 'Full Stack and Blockchain Developer with 10 years of experience',
    type: 'website',
    url: 'https://your-portfolio.com',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Senior Developer Portfolio',
    description: 'Full Stack and Blockchain Developer with 10 years of experience',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500;600&display=swap" rel="stylesheet" />
      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}
