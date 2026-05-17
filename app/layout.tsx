import type { Metadata } from 'next'
import { DM_Serif_Display, Inter } from 'next/font/google'
import './globals.css'

const dmSerifDisplay = DM_Serif_Display({
  subsets: ['latin'],
  weight: ['400'],
  style: ['normal', 'italic'],
  variable: '--font-dm-serif',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://mypracti.com'),
  title: 'MyPracti — Dental Practice Websites & AI Solutions',
  description:
    'We design modern websites for dental practices and build AI solutions that help your practice grow.',
  openGraph: {
    title: 'MyPracti — Dental Practice Websites & AI Solutions',
    description:
      'We design modern websites for dental practices and build AI solutions that help your practice grow.',
    type: 'website',
    url: 'https://mypracti.com',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${dmSerifDisplay.variable} ${inter.variable}`}>{children}</body>
    </html>
  )
}
