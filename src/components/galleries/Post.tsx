import Head from 'next/head'
import Layout from '../DefaultLayout'
import * as GalleriesProvider from '../../providers/GalleriesProvider'
import Time from '../Time'


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
      <Layout>
        <article style={{
          position: 'relative',
          maxWidth: '100%',
        }}>
          <h2 style={{
            margin: '0 4px'
          }}>{gallery.title}</h2>
          <Time dateTime={gallery.createdAt} style={{
            margin: '0 4px'
          }} />
          {form && form.html && (<div
            style={{
              margin: '0 4px'
            }}
            dangerouslySetInnerHTML={{ __html: form.html }}
          />)}
        </article>
      </Layout>
    </>
  )
}
