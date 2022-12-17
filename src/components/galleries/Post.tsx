import Head from "next/head";
import Layout from "../DefaultLayout";
import * as GalleriesProvider from "../../providers/GalleriesProvider";
import Time from "../Time";
import MdxRender from "../MdxRender";

export interface PostGalleryProps {
  gallery: GalleriesProvider.Gallery;
  form?: GalleriesProvider.GalleryContent;
}

export default function PostGalleryPage({ gallery, form }: PostGalleryProps) {
  return (
    <>
      <Head>
        <title>{gallery.meta.title}</title>
      </Head>
      <Layout navBottom>
        <article
          style={{
            position: "relative",
            maxWidth: "100%",
          }}
        >
          <h2
            style={{
              margin: "0 4px",
            }}
          >
            {gallery.meta.title}
          </h2>
          <Time
            dateTime={gallery.meta.createdAt}
            style={{
              margin: "0 4px",
            }}
          />
          {form && form.mdxSource.compiledSource && (
            <MdxRender mdxSource={form.mdxSource} />
          )}
        </article>
      </Layout>
    </>
  );
}
