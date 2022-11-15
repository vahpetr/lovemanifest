import Head from "next/head"
import Link from "next/link"
import { useTheme } from 'styled-components'
import Layout from "../components/DefaultLayout"
import ResponsiblePicture from "../components/ResponsiblePicture"
import * as ManifetProvider from '../providers/ManifestProvider'

export interface HomeProps {
  manifestLinks: ManifetProvider.ManifestLink[]
}

export default function Home({ manifestLinks }: HomeProps) {
  const theme = useTheme()

  return (
    <Layout
      header={<ResponsiblePicture
        root="/media"
        name="main"
        version="221112"
      />}
    >
      <Head>
        <title>Lovemanifest</title>
      </Head>
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
            <Link href="/manifests/[id]" as={`/manifests/${item.id}`}
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
  )
}

export async function getStaticProps() {
  const manifestLinks = await ManifetProvider.getItemLinks()

  return {
    props: {
      manifestLinks
    },
  }
}
