import Head from "next/head";
import Link from "next/link";
import { useTheme } from "styled-components";
import Layout from "../components/DefaultLayout";
import ResponsibleAppImage from "../components/ResponsibleAppImage";
import * as GalleriesProvider from "../providers/GalleriesProvider";
import { sizeRangeStyle } from "../styles/theme";

export interface HomeProps {
  logoSrc: {
    desk: string;
    mob: string;
  };
  manifestLinks: GalleriesProvider.GalleryLink[];
}

export default function HomePage({ logoSrc, manifestLinks }: HomeProps) {
  const theme = useTheme();

  return (
    <>
      <Head>
        <title>Lovemanifest</title>
      </Head>
      <Layout
        header={
          <ResponsibleAppImage
            deskSrc={logoSrc.desk}
            mobSrc={logoSrc.mob}
            alt="Lovemanifest"
          />
        }
      >
        <ul
          style={{
            display: "flex",
            flexDirection: "column",
            flexWrap: "wrap",
          }}
        >
          {manifestLinks.map((item, i) => (
            <li
              key={item.slug}
              style={{
                backgroundColor: i % 2 == 0 ? theme.rows.event : theme.rows.odd,
                textAlign: ["left", "right", "center"][i % 3] as any,
              }}
            >
              <Link
                href="/galleries/[slug]"
                as={`/galleries/${item.slug}`}
                style={{
                  color: i % 2 == 1 ? theme.rows.event : theme.rows.odd,
                  display: "inline-block",
                  margin: theme.margins.dynamic,
                  fontWeight: 700,
                  fontSize: sizeRangeStyle(24, 52),
                  lineHeight: sizeRangeStyle(26, 52),
                  textTransform: "uppercase",
                }}
              >
                {item.meta.title}
              </Link>
            </li>
          ))}
        </ul>
      </Layout>
    </>
  );
}

export async function getStaticProps() {
  const manifestLinks = await GalleriesProvider.getItemLinks();

  return {
    props: {
      logoSrc: {
        desk: GalleriesProvider.createSignedImgUrl(
          "/lovemanifest/media/main_desk.jpg"
        ),
        mob: GalleriesProvider.createSignedImgUrl(
          "/lovemanifest/media/main_mob.jpg"
        ),
      },
      manifestLinks,
    },
  };
}
