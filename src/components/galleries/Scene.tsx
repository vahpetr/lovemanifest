import Head from "next/head";
import Layout from "../DefaultLayout";
import * as GalleriesProvider from "../../providers/GalleriesProvider";
import Time from "../Time";
import MdxRender from "../MdxRender";

export interface SceneGalleryProps {
  gallery: GalleriesProvider.Gallery;
  form?: GalleriesProvider.GalleryContent;
}

export default function SceneGallery({ gallery, form }: SceneGalleryProps) {
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
              display: "none",
            }}
          >
            {gallery.meta.title}
          </h2>
          <Time
            dateTime={gallery.meta.createdAt}
            style={{
              display: "none",
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
