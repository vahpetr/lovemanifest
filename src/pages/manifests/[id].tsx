import { Suspense } from 'react'
import { useRouter } from 'next/router'
import dynamic from 'next/dynamic'
import * as ManifestProvider from '../../providers/ManifestProvider'

export interface ManifestPageProps {
  item?: ManifestProvider.Manifest;
}

export default function ManifestPage({ item }: ManifestPageProps) {
  const router = useRouter()

  if (!item) {
    return <div>Not found</div>
  }

  if (router.isFallback) {
    return <div>Loading...</div>
  }

  const DynamicManifest = dynamic<{ item: ManifestProvider.Manifest }>(
    () => import(`../../components/manifests/${item.view}`),
    {
      suspense: true,
    }
  )

  return (
    <Suspense fallback={`Loading...`}>
      <DynamicManifest item={item} />
    </Suspense>
  )
}

export interface ManifestPageParams {
  params: {
    id: string;
  }
}

export async function getStaticProps({ params }: ManifestPageParams) {
  const item = await ManifestProvider.getItem(params.id)

  return {
    props: {
      item,
    },
  }
}

export async function getStaticPaths() {
  const ids = await ManifestProvider.getItemsIds()

  return {
    paths: ids.map(id => {
      return {
        params: {
          id,
        },
      }
    }),
    fallback: false,
  }
}
