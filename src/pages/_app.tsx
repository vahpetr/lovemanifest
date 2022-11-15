import { AppProps } from 'next/app'
import Head from 'next/head'
import { ThemeProvider } from "styled-components"
import GlobalStyle from "../styles/globalStyle"
import theme from "../styles/theme"
// https://nextjs.org/docs/messages/no-document-viewport-meta

export default function App({ Component, pageProps }: AppProps) {
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
