import { useRouter } from "next/router";
import Head from "next/head";
import ResponsibleAppImage from "../../components/ResponsibleAppImage";
import Layout from "../../components/DefaultLayout";

export default function ManifestPage() {
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
            deskSrc="/media/1_manifest_desk.jpg"
            mobSrc="/media/1_manifest_mob.jpg"
            alt="Manifest logo"
          />
        }
        navBottom
      >
        <ResponsibleAppImage
          deskSrc="/media/2_manifest_desk.jpg"
          mobSrc="/media/2_manifest_mob.jpg"
          alt="Manifest content"
        />
      </Layout>
    </>
  );
}
