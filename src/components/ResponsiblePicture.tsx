import { CSSProperties } from 'styled-components'
import useWindowSize from '../effects/useWindowSize'
import theme from '../styles/theme'
import Picture from './Picture'


export interface ResponsiblePictureProps {
  deskSrc: string,
  mobSrc: string,
  alt?: string,
  style?: CSSProperties,
}

export default function ResponsiblePicture({ deskSrc, mobSrc, alt, style }: ResponsiblePictureProps) {
  const windowSize = useWindowSize()

  return windowSize.width
    ? windowSize.width <= theme.breakpoints.values.mobile
      ? <Picture src={mobSrc} alt={alt} style={style} />
      : <Picture src={deskSrc} alt={alt} style={style} />
    : <></>
}
