import { useRouter } from "next/router";
import Head from "next/head";
import ResponsibleAppImage from "../../components/ResponsibleAppImage";
import Layout from "../../components/DefaultLayout";
import InstagramIcon from "../../components/icons/InstagramIcon";
import theme, { sizeRangeStyle } from "../../styles/theme";

export interface ArtistsPageProps {
  artists: {
    name: string;
    role: string;
    instagramUrl: string;
  }[];
}

export default function ArtistsPage({ artists }: ArtistsPageProps) {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  const nameSize = sizeRangeStyle(24, 52);
  const roleSize = sizeRangeStyle(12, 20);
  const roleLineHeight = sizeRangeStyle(14, 24);

  return (
    <>
      <Head>
        <title>Artists</title>
      </Head>
      <Layout
        header={
          <ResponsibleAppImage
            deskSrc="/media/1_artists_desk.png?v=6"
            mobSrc="/media/1_artists_mob.png?v=6"
            alt="Manifest logo"
          />
        }
        navBottom
        style={{
          display: "flex",
          justifyContent: "center",
          justifyItems: "center",
          backgroundColor: "#000",
          color: theme.colors.primaryBackground,
          padding: "96px 0 224px 0",
        }}
      >
        <div
          style={{
            width: "auto",
          }}
        >
          {artists.map((p, i) => {
            return (
              <section
                key={i}
                style={{
                  textAlign: "center",
                  textTransform: "uppercase",
                  padding: "32px 0",
                }}
              >
                <h2
                  style={{
                    fontWeight: "700",
                    fontSize: nameSize,
                    lineHeight: nameSize,
                  }}
                >
                  {p.name}
                </h2>
                <span
                  style={{
                    fontFamily: "Inter",
                    fontWeight: "400",
                    fontSize: roleSize,
                    lineHeight: roleLineHeight,
                  }}
                >
                  {p.role}
                </span>
                <a
                  href={p.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${p.name} instagram`}
                  title={`${p.name} instagram`}
                >
                  <InstagramIcon
                    style={{
                      margin: "0 auto",
                      marginTop: "20px",
                    }}
                    color={theme.colors.primaryBackground}
                    aria-label={`${p.name} instagram`}
                  />
                </a>
              </section>
            );
          })}
        </div>
      </Layout>
    </>
  );
}

export async function getStaticProps() {
  return {
    props: {
      artists: getArtists(),
    },
  };
}

function getArtists() {
  return [
    {
      name: "MaxMegart",
      role: "Creativity without rules",
      instagramUrl: "https://instagram.com/maxmegart",
    },
    {
      name: "Anastasia Danilova",
      role: "Artist",
      instagramUrl: "https://instagram.com/_doux_amer_",
    },
    {
      name: "Galina V",
      role: "Love creation",
      instagramUrl: "https://instagram.com/galina.vasilevaa",
    },
    {
      name: "Lënya",
      role: "Holly Hell",
      instagramUrl: "https://instagram.com/madrum13",
    },
    {
      name: "Polina Borisova",
      role: "Photographer",
      instagramUrl: "https://instagram.com/polinaborya",
    },
    {
      name: "Lubava",
      role: "Wind in my head",
      instagramUrl: "https://instagram.com/lubava_crochet",
    },
  ];
}
