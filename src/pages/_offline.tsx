import Head from "next/head";
import Layout from "../components/DefaultLayout";

export default function Offline() {
  return (
    <Layout>
      <Head>
        <title>You offline</title>
      </Head>
      <h1>This is offline fallback page</h1>
      <h2>When offline, not saved pages route will fallback to this page</h2>
    </Layout>
  );
}
