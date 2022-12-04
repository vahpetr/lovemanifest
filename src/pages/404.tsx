import Head from "next/head";
import Link from "next/link";
import Layout from "../components/DefaultLayout";
import ResponsibleAppImage from "../components/ResponsibleAppImage";
import theme, { sizeRangeStyle } from "../styles/theme";

export default function NotFound() {
  const headerSize = sizeRangeStyle(16, 24);
  const headerLineHeight = sizeRangeStyle(20, 28);
  const buttonSize = sizeRangeStyle(12, 16);

  return (
    <Layout
      style={{
        backgroundColor: "#000",
        fontFamily: "Inter",
        color: theme.colors.primaryBackground,
        textTransform: "uppercase",
        display: "flex",
        justifyContent: "center",
        justifyItems: "center",
        flex: 1,
        position: "relative",
      }}
      navBottom
    >
      <Head>
        <title>Страница не существует</title>
      </Head>
      <ResponsibleAppImage
        deskSrc="/media/404_desk.png?v=6"
        mobSrc="/media/404_mob.png?v=6"
        alt="404"
        fill
      />
      <div
        style={{
          width: "auto",
          textAlign: "center",
          zIndex: 1,
          margin: "auto",
        }}
      >
        <h1
          style={{
            fontSize: headerSize,
            lineHeight: headerLineHeight,
          }}
        >
          Страница не существует
        </h1>
        <Link
          style={{
            display: "inline-block",
            padding: "16px 48px 16px 48px",
            border: `4px solid ${theme.colors.primaryBackground}`,
            fontSize: buttonSize,
            lineHeight: buttonSize,
            margin: "32px 0",
          }}
          href="/"
        >
          Перейти в галерею
        </Link>
      </div>
    </Layout>
  );
}
