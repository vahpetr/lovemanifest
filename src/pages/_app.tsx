import { useEffect } from "react";
import { AppProps } from "next/app";
import Head from "next/head";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "../styles/globalStyle";
import theme from "../styles/theme";
import { YmInitializer } from "../lib/ym/Initializer";

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    if (typeof window !== "undefined") {
      const loader = document.getElementById("globalloader");
      if (loader) {
        loader.style.display = "none";
      }

      const next = document.getElementById("__next");
      if (next) {
        next.style.display = "flex";
      }
    }
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <YmInitializer
        options={{
          defer: true,
          clickmap: true,
          trackLinks: true,
          accurateTrackBounce: true,
          webvisor: false,
        }}
      />
      <Head>
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=5"
        />
      </Head>
      <GlobalStyle />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
