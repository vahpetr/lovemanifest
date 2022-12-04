import Document, {
  Html,
  Main,
  DocumentContext,
  DocumentInitialProps,
  Head,
  NextScript,
  DocumentProps,
} from "next/document";
import cssReset from "../styles/cssReset";
import baseStyle from "../styles/baseStyle";
import HeartBeatLoader from "../components/loaders/HeartBeatLoader";

export interface AppDocumentInitialProps extends DocumentInitialProps {}
export interface AppDocumentProps extends DocumentProps {}

export default class AppDocument<
  AppDocumentProps
> extends Document<AppDocumentProps> {
  static async getInitialProps(
    ctx: DocumentContext
  ): Promise<AppDocumentInitialProps> {
    const initialProps = await Document.getInitialProps(ctx);
    return {
      ...initialProps,
      styles: [initialProps.styles],
    };
  }

  render() {
    return (
      <Html lang="ru">
        <Head>
          <meta charSet="utf-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <link rel="canonical" href="https://lovemanifest.art"/>

          <link rel="icon" href="/favicon.ico?v=6" />
          <link rel="shortcut icon" href="/favicon.ico?v=6" />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/icons/favicon-32x32.png?v=6"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/icons/favicon-16x16.png?v=6"
          />

          <link rel="manifest" href="/manifest.json?v=6" />
          <link rel="manifest" href="/site.webmanifest?v=6" />

          <meta name="application-name" content="Lovemanifest" />
          <meta name="theme-color" content="#ffffff" />

          <meta name="msapplication-config" content="/browserconfig.xml?v=6" />
          <meta name="msapplication-TileColor" content="#ffffff" />
          <meta name="msapplication-starturl" content="/" />

          <meta name="format-detection" content="telephone=no" />
          <meta name="mobile-web-app-capable" content="yes" />

          <link
            rel="mask-icon"
            href="/icons/safari-pinned-tab.svg?v=6"
            color="#b43cf5"
          />
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/icons/apple-touch-icon.png?v=6"
          />
          <meta name="apple-mobile-web-app-title" content="Lovemanifest" />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta
            name="apple-mobile-web-app-status-bar-style"
            content="black-translucent"
          />
          <meta
            httpEquiv="Accept-CH"
            content="DPR, Viewport-Width, Width, Downlink"
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `window.YM_TRACKING_ID="${process.env.YM_TRACKING_ID}"`,
            }}
          />
          <style dangerouslySetInnerHTML={{ __html: cssReset }} />
          <style dangerouslySetInnerHTML={{ __html: baseStyle }} />
        </Head>
        <body onContextMenu={() => false}>
          <HeartBeatLoader id="globalloader" />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
