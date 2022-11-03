import { FC } from 'react'

import './globals.css'

type RootLayoutProps = {
  children: React.ReactNode
}

const RootLayout: FC<RootLayoutProps> = ({ children }) => {
  return (
    <html lang="en" className="bg-gray-100">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Justas Palumickas - Full Stack Development" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="google-site-verification" content="ZBm7rz4tEsDW8pxLimtSfy4qkxtL4gZsgjiug0u4ioY" />

        <meta name="twitter:site" content="@jpalumickas" />
        <meta name="twitter:creator" content="@jpalumickas" />
      </head>
      <body>{children}</body>
    </html>
  )
}

export default RootLayout
