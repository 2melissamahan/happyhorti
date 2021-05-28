import React from 'react'
import './../styles/globals.css'
import Head from 'next/head'
import { StylesProvider } from '@material-ui/core/styles'

function MyApp({ Component, pageProps }) {
    return <StylesProvider injectFirst>
        <Component {...pageProps}>
            <Head>
                <title>Happy Horti</title>
            </Head>
        </Component>
    </StylesProvider>
}

export default MyApp
