/* eslint-disable @next/next/no-page-custom-font */
import Head from 'next/head'

function Header() {
    return (
        <div>
            <Head>
                <title>innkeeper</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                {/* <meta name="viewport" content="width=device-width, user-scalable=no" /> */}
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
                <link href="https://fonts.googleapis.com/css2?family=Montserrat+Alternates:wght@200;400;700&family=Zen+Antique&display=swap" rel="stylesheet" />
            </Head>
        </div>
    )
}

export default Header