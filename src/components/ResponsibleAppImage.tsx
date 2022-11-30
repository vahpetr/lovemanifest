import { CSSProperties } from "styled-components";
import useWindowSize from "../effects/useWindowSize";
import AppImage from "./AppImage";
import theme from "../styles/theme";

export interface ResponsiblePictureProps {
  deskSrc: string;
  mobSrc: string;
  alt: string;
  style?: CSSProperties;
}

export default function ResponsibleAppImage({
  deskSrc,
  mobSrc,
  alt = "",
  style,
}: ResponsiblePictureProps) {
  const windowSize = useWindowSize();

  return windowSize.width ? (
    windowSize.width <= theme.breakpoints.values.mobile ? (
      <AppImage src={mobSrc} alt={alt} style={style} priority />
    ) : (
      <AppImage src={deskSrc} alt={alt} style={style} priority />
    )
  ) : (
    <div style={style} />
  );
}
