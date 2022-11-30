import { Suspense } from "react";
import { useRouter } from "next/router";
import * as GalleriesProvider from "../../providers/GalleriesProvider";
import useWindowSize from "../../effects/useWindowSize";
import theme from "../../styles/theme";
import HeartBeatLoader from "../../components/loaders/HeartBeatLoader";
import Post from "../../components/galleries/Post";
import Scene from "../../components/galleries/Scene";
import Development from "../../components/galleries/Development";

export interface GalleryPageProps {
  gallery?: GalleriesProvider.Gallery;
}

export default function GalleryPage({ gallery }: GalleryPageProps) {
  const router = useRouter();
  const windowSize = useWindowSize();

  if (!gallery) {
    return <div>Not found</div>;
  }

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  const width = windowSize.width || theme.breakpoints.values.mobile;
  const form = width
    ? width <= theme.breakpoints.values.mobile
      ? gallery.contents.mobile || gallery.contents.desktop
      : gallery.contents.desktop || gallery.contents.mobile
    : gallery.contents.desktop || gallery.contents.mobile;

  const view = form?.meta.view || "Development";

  return (
    <Suspense fallback={<HeartBeatLoader />}>
      {
        {
          Post: <Post gallery={gallery} form={form} />,
          Scene: <Scene gallery={gallery} form={form} />,
          Development: <Development gallery={gallery} />,
        }[view]
      }
    </Suspense>
  );
}

export interface GalleryPageParams {
  params: {
    slug: string;
  };
}

export async function getStaticProps({ params }: GalleryPageParams) {
  const gallery = await GalleriesProvider.getItemBySlug(params.slug);

  return {
    props: {
      gallery,
    },
  };
}

export async function getStaticPaths() {
  const slugs = await GalleriesProvider.getItemsSlugs();

  return {
    paths: slugs.map((slug) => {
      return {
        params: {
          slug,
        },
      };
    }),
    fallback: false,
  };
}
