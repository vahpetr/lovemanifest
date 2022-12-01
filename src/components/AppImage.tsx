import Image, { ImageProps } from "next/image";

export interface AppImageProps extends ImageProps {
  watermark?: string;
}

export default function AppImage({
  width = 320,
  height = 320,
  style,
  alt,
  ...otherProps
}: AppImageProps) {
  return (
    <Image
      style={{
        width: "auto",
        height: "auto",
        ...style,
      }}
      width={width}
      height={height}
      alt={alt}
      {...otherProps}
    />
  );
}
