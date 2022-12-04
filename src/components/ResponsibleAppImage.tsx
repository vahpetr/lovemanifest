import { CSSProperties } from "styled-components";
import useWindowSize from "../effects/useWindowSize";
import AppImage from "./AppImage";
import theme from "../styles/theme";
import { ImageProps } from "next/image";

export interface ResponsibleAppImageProps extends Omit<ImageProps, "src"> {
  deskSrc: string;
  mobSrc: string;
  alt: string;
  style?: CSSProperties;
  supportWebP?: boolean;
}

export default function ResponsibleAppImage({
  deskSrc,
  mobSrc,
  alt = "",
  style,
  ...imageProps
}: ResponsibleAppImageProps) {
  const windowSize = useWindowSize();

  return windowSize.width ? (
    windowSize.width <= theme.breakpoints.values.mobile ? (
      <AppImage
        src={mobSrc}
        alt={alt}
        style={style}
        priority
        {...imageProps}
      />
    ) : (
      <AppImage
        src={deskSrc}
        alt={alt}
        style={style}
        priority
        {...imageProps}
      />
    )
  ) : (
    <div style={style} />
  );
}
