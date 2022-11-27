import { Suspense } from "react";
import { useRouter } from "next/router";
import dynamic from "next/dynamic";
import * as GalleriesProvider from "../../providers/GalleriesProvider";
import useWindowSize from "../../effects/useWindowSize";
import theme from "../../styles/theme";
import HeartBeatLoader from "../../components/loaders/HeartBeatLoader";

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

  // TODO rewrite
  if (!windowSize.width) return <></>;

  const width = windowSize.width;
  const form = width
    ? width <= theme.breakpoints.values.mobile
      ? gallery.contents.mobile || gallery.contents.desktop
      : gallery.contents.desktop || gallery.contents.mobile
    : gallery.contents.desktop || gallery.contents.mobile;

  const view = form?.meta.view || "Development";

  const DynamicGallery = dynamic<{
    gallery: GalleriesProvider.Gallery;
    form?: GalleriesProvider.GalleryContent;
  }>(() => import(`../../components/galleries/${view}`), {
    suspense: true,
  });

  return (
    <Suspense fallback={<HeartBeatLoader />}>
      <DynamicGallery gallery={gallery} form={form} />
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
