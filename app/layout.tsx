import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Pollos Poyin',
  description: 'Created with PESC',
  generator: 'PESC',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
