import { AppProps } from 'next/app'
import Head from 'next/head'
import { useEffect } from 'react'
import { ThemeProvider } from "styled-components"
import GlobalStyle from "../styles/globalStyle"
import theme from "../styles/theme"
// https://nextjs.org/docs/messages/no-document-viewport-meta

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const loader = document.getElementById('globalloader')
      if (loader) {
        loader.style.display = 'none'
      }

      const next = document.getElementById('__next')
      if (next) {
        next.style.display = 'flex'
      }
    }
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Head>
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=5"
        />
      </Head>
      <GlobalStyle />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}
