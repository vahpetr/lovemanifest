import { Suspense } from 'react'
import { useRouter } from 'next/router'
import dynamic from 'next/dynamic'
import * as GalleriesProvider from '../../providers/GalleriesProvider'
import useWindowSize from '../../effects/useWindowSize'
import theme from '../../styles/theme'
import HeartBeat from '../../components/loaders/HeartBeat'


export interface GalleryPageProps {
  gallery?: GalleriesProvider.Gallery;
}

export default function GalleryPage({ gallery }: GalleryPageProps) {
  const router = useRouter()
  const windowSize = useWindowSize()

  if (!gallery) {
    return <div>Not found</div>
  }

  if (router.isFallback) {
    return <div>Loading...</div>
  }

  // TODO rewrite
  if (!windowSize.width) return (
    <></>
  )

  const form = windowSize.width
    ? windowSize.width <= theme.breakpoints.values.mobile
      ? gallery.contents.mobile || gallery.contents.desktop
      : gallery.contents.desktop || gallery.contents.mobile
    : gallery.contents.desktop || gallery.contents.mobile

  const view = form?.view || "Development"

  const DynamicGallery = dynamic<{ gallery: GalleriesProvider.Gallery, form?: GalleriesProvider.GalleryContet }>(
    () => import(`../../components/galleries/${view}`),
    {
      suspense: true
    }
  )

  return (
    <Suspense fallback={<HeartBeat />}>
      <DynamicGallery gallery={gallery} form={form} />
    </Suspense>
  )
}

export interface GalleryPageParams {
  params: {
    id: string;
  }
}

export async function getStaticProps({ params }: GalleryPageParams) {
  const gallery = await GalleriesProvider.getItem(params.id)

  return {
    props: {
      gallery,
    },
  }
}

export async function getStaticPaths() {
  const ids = await GalleriesProvider.getItemsIds()

  return {
    paths: ids.map(id => {
      return {
        params: {
          id,
        },
      }
    }),
    fallback: false,
  }
}
