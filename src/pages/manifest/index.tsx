import { useRouter } from 'next/router'
import Head from 'next/head'
import ResponsiblePicture from '../../components/ResponsiblePicture'
import Layout from '../../components/DefaultLayout'
import * as GalleriesProvider from '../../providers/GalleriesProvider'

export interface ManifestPageProps {
  logoSrc: {
    desk: string
    mob: string
  }
}

export default function ManifestPage({ logoSrc }: ManifestPageProps) {
  const router = useRouter()

  if (router.isFallback) {
    return <div>Loading...</div>
  }

  return (
    <>
      <Head>
        <title>Manifest</title>
      </Head>
      <Layout
        header={<ResponsiblePicture deskSrc={logoSrc.desk} mobSrc={logoSrc.mob} alt="Lovemanifest" />}
      >
        <h2 style={{margin: '0 4px'}}>Manifest</h2>
      </Layout>
    </>
  )
}

export async function getStaticProps() {
  return {
    props: {
      logoSrc: {
        desk: GalleriesProvider.createSignedImgUrl("lovemanifest/media/main_desk.jpg"),
        mob: GalleriesProvider.createSignedImgUrl("lovemanifest/media/main_mob.jpg")
      }
    },
  }
}
