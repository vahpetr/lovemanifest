import { useRouter } from "next/router";
import Head from "next/head";
import ResponsibleAppImage from "../../components/ResponsibleAppImage";
import Layout from "../../components/DefaultLayout";
import HeartBeatLoader from "../../components/loaders/HeartBeatLoader";

export default function ManifestPage() {
  const router = useRouter();

  if (router.isFallback) {
    return <HeartBeatLoader />;
  }

  return (
    <>
      <Head>
        <title>Manifest</title>
      </Head>
      <Layout
        header={
          <ResponsibleAppImage
            deskSrc="/media/1_manifest_desk.png?v=6"
            mobSrc="/media/1_manifest_mob.png?v=6"
            alt="Manifest logo"
          />
        }
        navBottom
      >
        <ResponsibleAppImage
          deskSrc="/media/2_manifest_desk.png?v=6"
          mobSrc="/media/2_manifest_mob.png?v=6"
          alt="Manifest content"
        />
      </Layout>
    </>
  );
}
