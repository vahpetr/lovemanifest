import { CSSProperties } from "styled-components";
import useWindowSize from "../effects/useWindowSize";
import AppImage from "./AppImage";
import { ImageProps } from "next/image";
import theme from "../styles/theme";

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
  // TODO rewrite to media query orientation. Examples:
  // https://developer.mozilla.org/en-US/docs/Web/API/CSS_Object_Model/Managing_screen_orientation
  // https://developer.mozilla.org/en-US/docs/Web/CSS/@media/orientation
  // https://mui.com/material-ui/react-use-media-query/

  return windowSize.width && windowSize.height ? (
    windowSize.width < windowSize.height ||
    windowSize.width < theme.breakpoints.values.mobile ? (
      <AppImage src={mobSrc} alt={alt} style={style} priority {...imageProps} />
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
