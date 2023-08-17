import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Comment Section by Watership💧',
  description: 'A fullstack ⭐ application',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
