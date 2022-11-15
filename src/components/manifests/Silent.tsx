import Head from 'next/head'
import Layout from '../../components/DefaultLayout'
import * as ManifestProvider from '../../providers/ManifestProvider'
import Time from '../../components/Time'
import ResponsiblePicture from '../ResponsiblePicture'

export interface SilentManifestProps {
  item: ManifestProvider.Manifest;
}

export default function SilentManifest({ item }: SilentManifestProps) {
  return (
    <>
      <Head>
        <title>{item.title}</title>
      </Head>
      <Layout>
        <article style={{
          fontFamily: 'Noto Serif',
          position: 'relative',
          maxWidth: '100%',
        }}>
          <h2 style={{
            color: '#A4CCFA',
            position: 'absolute',
            textTransform: 'uppercase',
            fontSize: '3em',
            lineHeight: 1,
          }}>{item.title}</h2>
          <Time dateTime={item.createdAt} style={{
            display: 'none',
          }} />
          <ResponsiblePicture
            root="/media/manifests"
            name="silent"
            version="221115"
            style={{
              zIndex: -1,
              objectFit: 'contain'
            }}
          />
          {item.contentHtml && (<div
            style={{
              fontFamily: 'Inter',
              fontWeight: 500,
              color: '#B1D5FF',
              margin: '0 4px',
              position: 'absolute',
              bottom: 0,
              left: '8px',
              textTransform: 'uppercase',
            }}
            dangerouslySetInnerHTML={{ __html: item.contentHtml }}
          />)}
        </article>
      </Layout>
    </>
  )
}
