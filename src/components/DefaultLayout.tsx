import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { CSSProperties } from 'styled-components'
import useWindowSize from '../effects/useWindowSize'
import theme, { sizeRangeStyle, sizeRangeValue } from '../styles/theme'
import HeartIcon from './icons/HeartIcon'
import InstagramIcon from './icons/InstagramIcon'
import TelegramIcon from './icons/TelegramIcon'


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
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
          verticalAlign: 'middle',
          padding: '64px 0',
          color: theme.colors.primaryColor,
        }}>
          <p style={{
            fontFamily: 'Inter',
            fontWeight: 500,
            textTransform: 'uppercase',
            fontSize: sizeRangeStyle(10, 16),
            lineHeight: sizeRangeStyle(10, 16),
          }}>
            <SocialLinks />
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
  const windowSize = useWindowSize()
  const width = windowSize.width || 320
  const size = sizeRangeValue(16, 20, width)

  return (
    <nav>
      <ul>
        <Link href="/"><HeartIcon width={size} height={size} /></Link>
        <Link href="/manifest">Manifest</Link>
        <Link href="/artists">Artists</Link>
      </ul>
    </nav>
  )
}

export function SocialLinks() {
  const windowSize = useWindowSize()
  const width = windowSize.width || 320
  const size = sizeRangeValue(24, 48, width)

  return (
    <i style={{
      display: 'flex',
      paddingBottom: '32px',
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
      gap: '16px',
    }}>
      <a href="https://instagram.com/lovemanifest_art" target="_blank" rel="noopener noreferrer"><InstagramIcon width={size} height={size} /></a>
      <a href="https://t.me/lovemanifest_art" target="_blank" rel="noopener noreferrer"><TelegramIcon width={size} height={size} /></a>
    </i>
  )
}
