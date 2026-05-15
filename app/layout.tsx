import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
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
      <body>{children}</body>
    </html>
  )
}
