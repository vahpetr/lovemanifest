import { CSSProperties } from 'styled-components';
import useWindowSize from '../effects/useWindowSize';
import Picture from "./Picture";

export interface ResponsiblePictureProps {
  name: string,
  root: string,
  version: string,
  alt?: string,
  style?: CSSProperties,
}

export default function ResponsiblePicture({ name, version, root, alt = "Logo", style }: ResponsiblePictureProps) {
  const windowSize = useWindowSize()

  return windowSize.width
    ? windowSize.width <= 600
      ? <Picture name={`mobile_${name}_600`} root={`${root}/${name}`} version={version} alt={alt} style={style} />
      : <Picture name={`desktop_${name}_1536`} root={`${root}/${name}`} version={version} alt={alt} style={style} />
    : <></>
}
