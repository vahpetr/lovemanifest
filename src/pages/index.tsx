import dynamic from "next/dynamic"
import { Suspense } from "react"
import HeartBeatLoader from "../components/loaders/HeartBeatLoader"
import * as GalleriesProvider from '../providers/GalleriesProvider'
import { HomeProps } from "./HomePage"


export default function Index(props: HomeProps) {
  const DynamicHome = dynamic<HomeProps>(
    () => import(`./HomePage`),
    {
      suspense: true
    }
  )

  return (
    <Suspense fallback={<HeartBeatLoader />}>
      <DynamicHome {...props} />
    </Suspense>
  )
}

export async function getStaticProps() {
  const manifestLinks = await GalleriesProvider.getItemLinks()

  return {
    props: {
      logoSrc: {
        desk: GalleriesProvider.createSignedImgUrl('/lovemanifest/media/main_desk.jpg'),
        mob: GalleriesProvider.createSignedImgUrl('/lovemanifest/media/main_mob.jpg')
      },
      manifestLinks
    },
  }
}
