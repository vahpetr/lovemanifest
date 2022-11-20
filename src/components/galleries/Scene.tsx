import Head from 'next/head'
import Layout from '../DefaultLayout'
import * as GalleriesProvider from '../../providers/GalleriesProvider'
import Time from '../Time'


export interface DefaultGalleryProps {
  gallery: GalleriesProvider.Gallery
  form?: GalleriesProvider.GalleryContet
}

export default function Scene({ gallery, form }: DefaultGalleryProps) {
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
            display: 'none',
          }}>{gallery.title}</h2>
          <Time dateTime={gallery.createdAt} style={{
            display: 'none',
          }} />
          {form && form.html && (<div
            dangerouslySetInnerHTML={{ __html: form.html }}
          />)}
        </article>
      </Layout>
    </>
  )
}
