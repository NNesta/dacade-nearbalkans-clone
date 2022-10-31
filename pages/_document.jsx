import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head>
      <link href="http://fonts.cdnfonts.com/css/graphik" rel="stylesheet"/>            
        </Head>
      <body className='container mx-auto w-full'>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}