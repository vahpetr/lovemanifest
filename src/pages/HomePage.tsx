import Head from "next/head"
import Link from "next/link"
import { useTheme } from 'styled-components'
import Layout from "../components/DefaultLayout"
import ResponsiblePicture from "../components/ResponsiblePicture"
import * as ManifetProvider from '../providers/GalleriesProvider'

export interface HomeProps {
  logoSrc: {
    desk: string
    mob: string
  }
  manifestLinks: ManifetProvider.GalleryLink[]
}

export default function HomePage({ logoSrc, manifestLinks }: HomeProps) {
  const theme = useTheme()

  return (
    <>
      <Head>
        <title>Lovemanifest</title>
      </Head>
      <Layout
        header={<ResponsiblePicture deskSrc={logoSrc.desk} mobSrc={logoSrc.mob} alt="Lovemanifest" />}
      >
        <ul style={{
          display: 'flex',
          flexDirection: 'column',
          flexWrap: 'wrap',
        }}>
          {manifestLinks.map((item, i) => (
            <li key={item.id}
              style={{
                backgroundColor: i % 2 == 1 ? theme.rows.event : theme.rows.odd,
                textAlign: ['left', 'right', 'center'][i % 3] as any,
              }}>
              <Link href="/galleries/[id]" as={`/galleries/${item.id}`}
                style={{
                  color: i % 2 == 0 ? theme.rows.event : theme.rows.odd,
                  display: 'inline-block',
                  margin: theme.margins.dynamic,
                  fontFamily: 'Times New Roman',
                  fontWeight: 700,
                }}>
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      </Layout>
    </>
  )
}

export async function getStaticProps() {
  const manifestLinks = await ManifetProvider.getItemLinks()

  return {
    props: {
      logoSrc: {
        desk: ManifetProvider.createSignedImgUrl("lovemanifest/media/main_desk.jpg"),
        mob: ManifetProvider.createSignedImgUrl("lovemanifest/media/main_mob.jpg")
      },
      manifestLinks
    },
  }
}
