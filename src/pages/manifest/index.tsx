import { useRouter } from "next/router";
import Head from "next/head";
import ResponsibleAppImage from "../../components/ResponsibleAppImage";
import Layout from "../../components/DefaultLayout";
import * as GalleriesProvider from "../../providers/GalleriesProvider";

export interface ManifestPageProps {
  logoSrc: {
    desk: string;
    mob: string;
  };
  contentSrc: {
    desk: string;
    mob: string;
  };
}

export default function ManifestPage({ logoSrc, contentSrc }: ManifestPageProps) {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Head>
        <title>Manifest</title>
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
          "/lovemanifest/media/galleries/manifest/desk/1_manifest_desk.jpg"
        ),
        mob: GalleriesProvider.createSignedImgUrl(
          "/lovemanifest/media/galleries/manifest/mob/1_manifest_mob.jpg"
        ),
      },
      contentSrc: {
        desk: GalleriesProvider.createSignedImgUrl(
          "/lovemanifest/media/galleries/manifest/desk/2_manifest_desk.jpg"
        ),
        mob: GalleriesProvider.createSignedImgUrl(
          "/lovemanifest/media/galleries/manifest/mob/2_manifest_mob.jpg"
        ),
      },
    },
  };
}
