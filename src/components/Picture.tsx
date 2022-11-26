import { CSSProperties } from 'styled-components'

export interface PictureProps {
  src: string,
  alt?: string,
  style?: CSSProperties,
}

export default function Picture({ src, alt, style }: PictureProps) {
  return (
    <img src={src} alt={alt} style={style} />
  )
}
