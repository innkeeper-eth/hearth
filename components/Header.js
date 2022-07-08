/* eslint-disable @next/next/no-page-custom-font */
import Head from 'next/head'

function Header() {
  return (
    <div>
      <Head>
        <title>innkeeper</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        {/* <meta name="viewport" content="width=device-width, user-scalable=no" /> */}
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin={'true'}
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Irish+Grover&family=Montserrat:wght@400;700&family=Zen+Maru+Gothic&display=swap"
          rel="stylesheet"
        />
      </Head>
    </div>
  )
}

export default Header
