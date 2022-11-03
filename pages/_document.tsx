import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en" className="bg-gray-100">
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="title"
          content="Justas Palumickas - Full Stack Development"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />

        <meta
          name="google-site-verification"
          content="ZBm7rz4tEsDW8pxLimtSfy4qkxtL4gZsgjiug0u4ioY"
        />

        <meta name="twitter:site" content="@jpalumickas" />
        <meta name="twitter:creator" content="@jpalumickas" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
