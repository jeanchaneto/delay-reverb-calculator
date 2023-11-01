import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className='bg-background dark text-foreground-500' >
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
