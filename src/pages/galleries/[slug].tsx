import { Suspense } from "react";
import { useRouter } from "next/router";
import useWindowSize from "../../effects/useWindowSize";
import HeartBeatLoader from "../../components/loaders/HeartBeatLoader";
import Post from "../../components/galleries/Post";
import Scene from "../../components/galleries/Scene";
import Development from "../../components/galleries/Development";
import * as GalleriesProvider from "../../providers/GalleriesProvider";
import theme from "../../styles/theme";
import NotFoundPage from "../404";

export interface GalleryPageProps {
  gallery?: GalleriesProvider.Gallery;
}

export default function GalleryPage({ gallery }: GalleryPageProps) {
  const router = useRouter();
  const windowSize = useWindowSize();

  if (!gallery) {
    return <NotFoundPage />;
  }

  if (router.isFallback) {
    return <HeartBeatLoader />;
  }

  if (!windowSize.width || !windowSize.height) {
    return <HeartBeatLoader />
  }

  const isMobile = windowSize.width <= windowSize.height || windowSize.width <= theme.breakpoints.values.mobile
  const form = (isMobile ? gallery.contents.mobile : gallery.contents.desktop) || gallery.contents.desktop;
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
