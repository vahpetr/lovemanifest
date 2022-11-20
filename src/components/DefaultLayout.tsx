import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { CSSProperties } from 'styled-components';
import theme from '../styles/theme';


export interface LayoutProps {
  children?: JSX.Element | JSX.Element[]
  style?: CSSProperties
  header?: JSX.Element | JSX.Element[]
}

export default function Layout({ children, style, header }: LayoutProps) {
  const router = useRouter()

  return (
    <>
      <Head>
        <meta name="description" content="Lovemanifest" />
        <meta name="keywords" content="Lovemanifest" />
        <meta property="og:image" content="/icons/maskable_icon_x512.png?v=6" />
        <meta name="og:title" content="Lovemanifest" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      {header && (<header role="banner">{header}</header>)}
      <main role="main" style={style}>
        {children}
      </main>
      <footer role="contentinfo" style={{
        backgroundColor: theme.colors.primaryBackground,
      }}>
        {router.pathname !== "/" && (<div style={{
          margin: '16px 4px 0 4px',
          textAlign: "center",
        }}>
          <Link href="/">← На главную</Link>
        </div>)}
        <div style={{
          fontFamily: 'Inter',
          fontWeight: 500,
          textTransform: 'uppercase',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
          lineHeight: 1.5,
          verticalAlign: 'middle',
          padding: '38px 0',
          color: theme.colors.primaryColor,
        }}>
          <p>
            © 2022 love manifest gallery
            <br />
            All right reserved
          </p>
        </div>
      </footer>
    </>
  )
}
