import Head from "next/head";
import Layout from "../DefaultLayout";
import * as GalleriesProvider from "../../providers/GalleriesProvider";

export interface DefaultGalleryProps {
  gallery: GalleriesProvider.Gallery;
}

export default function Post({ gallery }: DefaultGalleryProps) {
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
          Галерея находится в разработке.
        </article>
      </Layout>
    </>
  );
}
