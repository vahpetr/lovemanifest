import Head from "next/head";
import Link from "next/link";
import { useTheme } from "styled-components";
import Layout from "../components/DefaultLayout";
import ResponsibleAppImage from "../components/ResponsibleAppImage";
import * as GalleriesProvider from "../providers/GalleriesProvider";
import { sizeRangeStyle } from "../styles/theme";

export interface HomeProps {
  manifestLinks: GalleriesProvider.GalleryLink[];
}

export default function HomePage({ manifestLinks }: HomeProps) {
  const theme = useTheme();

  return (
    <>
      <Head>
        <title>Lovemanifest</title>
      </Head>
      <Layout
        header={
          <ResponsibleAppImage
            deskSrc={"/media/main_desk.avif?v=6, /media/main_desk.webp?v=6, /media/main_desk.jpg?v=6"}
            mobSrc={"/media/main_desk.avif?v=6, /media/main_mob.webp?v=6, /media/main_mob.jpg?v=6"}
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
      manifestLinks,
    },
  };
}
