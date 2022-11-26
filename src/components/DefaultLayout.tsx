import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { CSSProperties } from 'styled-components'
import theme, { sizeRange } from '../styles/theme'


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
      {header && (<Nav />)}
      <main role="main" style={style}>
        {children}
      </main>
      {!header && (<Nav />)}
      <footer role="contentinfo" style={{
        backgroundColor: theme.colors.primaryBackground,
      }}>
        {router.pathname !== "/" && (<div style={{
          margin: '16px 4px 0 4px',
          textAlign: "center",
          fontSize: sizeRange(16, 24)
        }}>
          <Link href="/">← На главную</Link>
        </div>)}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
          verticalAlign: 'middle',
          padding: '38px 0',
          color: theme.colors.primaryColor,
        }}>
          <p style={{
            fontFamily: 'Inter',
            fontWeight: 500,
            textTransform: 'uppercase',
            fontSize: sizeRange(10, 16),
            lineHeight: sizeRange(10, 16),
          }}>
            © 2022 love manifest gallery
            <br />
            All right reserved
          </p>
        </div>
      </footer>
    </>
  )
}


export function Nav() {
  return (
    <nav>
      <ul>
      <Link href="/">O</Link>
        <Link href="/manifest">Manifest</Link>
        <Link href="/artists">Artists</Link>
      </ul>
    </nav>
  )
}
