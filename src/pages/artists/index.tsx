import { useRouter } from 'next/router'
import Head from 'next/head'
import ResponsibleAppImage from '../../components/ResponsibleAppImage'
import Layout from '../../components/DefaultLayout'
import * as GalleriesProvider from '../../providers/GalleriesProvider'

export interface ArtistsPageProps {
  logoSrc: {
    desk: string
    mob: string
  }
}

export default function ArtistsPage({ logoSrc }: ArtistsPageProps) {
  const router = useRouter()

  if (router.isFallback) {
    return <div>Loading...</div>
  }

  return (
    <>
      <Head>
        <title>Artists</title>
      </Head>
      <Layout
        header={<ResponsibleAppImage deskSrc={logoSrc.desk} mobSrc={logoSrc.mob} alt="Lovemanifest" />}
      >
        <h2 style={{margin: '0 4px'}}>Artists</h2>
      </Layout>
    </>
  )
}

export async function getStaticProps() {
  return {
    props: {
      logoSrc: {
        desk: GalleriesProvider.createSignedImgUrl('/lovemanifest/media/main_desk.jpg'),
        mob: GalleriesProvider.createSignedImgUrl('/lovemanifest/media/main_mob.jpg')
      }
    },
  }
}
