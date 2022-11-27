import { useRouter } from "next/router";
import Head from "next/head";
import ResponsibleAppImage from "../../components/ResponsibleAppImage";
import Layout from "../../components/DefaultLayout";
import * as GalleriesProvider from "../../providers/GalleriesProvider";

export interface ArtistsPageProps {
  logoSrc: {
    desk: string;
    mob: string;
  };
  contentSrc: {
    desk: string;
    mob: string;
  };
}

export default function ArtistsPage({ logoSrc, contentSrc }: ArtistsPageProps) {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Head>
        <title>Artists</title>
      </Head>
      <Layout
        header={
          <ResponsibleAppImage
            deskSrc={logoSrc.desk}
            mobSrc={logoSrc.mob}
            alt="Manifest logo"
          />
        }
        navBottom
      >
        <ResponsibleAppImage
          deskSrc={contentSrc.desk}
          mobSrc={contentSrc.mob}
          alt="Manifest content"
        />
      </Layout>
    </>
  );
}

export async function getStaticProps() {
  return {
    props: {
      logoSrc: {
        desk: GalleriesProvider.createSignedImgUrl(
          "/lovemanifest/media/galleries/artists/desk/1_artists_desk.jpg"
        ),
        mob: GalleriesProvider.createSignedImgUrl(
          "/lovemanifest/media/galleries/artists/mob/1_artists_mob.jpg"
        ),
      },
      contentSrc: {
        desk: GalleriesProvider.createSignedImgUrl(
          "/lovemanifest/media/galleries/artists/desk/2_artists_desk.jpg"
        ),
        mob: GalleriesProvider.createSignedImgUrl(
          "/lovemanifest/media/galleries/artists/mob/2_artists_mob.jpg"
        ),
      },
    },
  };
}
