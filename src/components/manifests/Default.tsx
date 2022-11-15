import Head from 'next/head'
import Layout from '../../components/DefaultLayout'
import * as ManifestProvider from '../../providers/ManifestProvider'
import Time from '../../components/Time'

export interface DefaultManifestProps {
  item: ManifestProvider.Manifest;
}

export default function DefaultManifest({ item }: DefaultManifestProps) {
  return (
    <>
      <Head>
        <title>{item.title}</title>
      </Head>
      <Layout>
        <article style={{
          position: 'relative',
          maxWidth: '100%',
        }}>
          <h2 style={{
            margin: '0 4px'
          }}>{item.title}</h2>
          <Time dateTime={item.createdAt} style={{
            margin: '0 4px'
          }} />
          <img src={item.posterUrl} alt={item.title} style={{
            margin: '0 auto'
          }} />
          {item.contentHtml && (<div
            style={{
              margin: '0 4px'
            }}
            dangerouslySetInnerHTML={{ __html: item.contentHtml }}
          />)}
        </article>
      </Layout>
    </>
  )
}
