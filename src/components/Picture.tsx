import { CSSProperties } from 'styled-components';

export interface PictureProps {
  name: string,
  version: string,
  root?: string,
  alt?: string,
  style?: CSSProperties,
}

export default function Picture({ name, version, root = "", alt = "Logo", style }: PictureProps) {
  const path = `${root}/${name}/${name}`

  return (
    <picture>
      <source type="image/webp"
        srcSet={`${path}@1x.webp?v=${version} 1x, ${path}@2x.webp?v=${version} 2x`}
      />
      <source type="image/jpeg"
        srcSet={`${path}@1x.jpg?v=${version} 1x, ${path}@2x.jpg?v=${version} 2x`}
      />
      <img src={`${path}@1x.jpg?v=${version}`} alt={alt} style={style} />
    </picture>
  )
}
