import { ReactNode } from 'react'
import { Metadata } from 'next'

import './globals.css'

export const metadata: Metadata = {
  metadataBase: process.env.NEXT_PUBLIC_URL
    ? new URL(process.env.NEXT_PUBLIC_URL)
    : undefined,
  title: {
    template: '%s - Justas Palumickas',
    default: 'Justas Palumickas',
  },
  viewport: 'width=device-width, initial-scale=1.0',
  description:
    'Interested in open source and full stack development. Technologies I currently love and happy to work with - React, React Native, TypeScript/JavaScript, Node.js, GraphQL, Electron, Prisma and more.',
  twitter: {
    site: '@jpalumickas',
    creator: '@jpalumickas',
  },
  verification: {
    google: 'ZBm7rz4tEsDW8pxLimtSfy4qkxtL4gZsgjiug0u4ioY',
  },
}

export default function AppLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className="bg-gray-100 overflow-x-hidden min-h-screen">
      <body>{children}</body>
    </html>
  )
}
