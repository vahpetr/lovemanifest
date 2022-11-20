import Head from 'next/head'
import Layout from '../DefaultLayout'
import * as GalleriesProvider from '../../providers/GalleriesProvider'


export interface DefaultGalleryProps {
  gallery: GalleriesProvider.Gallery
  form?: GalleriesProvider.GalleryContet
}

export default function Post({ gallery, form }: DefaultGalleryProps) {
  return (
    <>
      <Head>
        <title>{gallery.title}</title>
      </Head>
      <Layout style={{
        flex: 1,
      }}>
        <article style={{
          position: 'relative',
          maxWidth: '100%',
        }}>
          <h2 style={{
            margin: '0 4px'
          }}>{gallery.title}</h2>
          Галерея находится в разработке.
        </article>
      </Layout>
    </>
  )
}
