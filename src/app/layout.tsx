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
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}
