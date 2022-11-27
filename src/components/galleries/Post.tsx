import Head from "next/head";
import Layout from "../DefaultLayout";
import * as GalleriesProvider from "../../providers/GalleriesProvider";
import Time from "../Time";
import MdxRender from "../MdxRender";

export interface DefaultGalleryProps {
  gallery: GalleriesProvider.Gallery;
  form?: GalleriesProvider.GalleryContent;
}

export default function Post({ gallery, form }: DefaultGalleryProps) {
  return (
    <>
      <Head>
        <title>{gallery.meta.title}</title>
      </Head>
      <Layout
        style={{
          flex: 1,
        }}
      >
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
