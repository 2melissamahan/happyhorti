import React from 'react'
import './../styles/globals.css'
import Head from 'next/head'
import { StylesProvider } from '@material-ui/core/styles'
import { configure } from "@happykit/flags/config";

configure({
    envKey: process.env.NEXT_PUBLIC_FLAGS_ENVIRONMENT_KEY
});


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
