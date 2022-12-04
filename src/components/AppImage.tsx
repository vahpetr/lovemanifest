import Image, { ImageProps } from "next/image";
export interface AppImageProps extends Omit<ImageProps, "src"> {
  watermark?: string;
  src: string;
}

export default function AppImage({
  width = 320,
  height = 320,
  fill,
  style,
  alt,
  src,
  ...otherProps
}: AppImageProps) {
  const srcSet = src.split(",").map((p) => p.trim());

  if (fill) {
    return (
      <picture
        style={{
          flex: 1,
          display: "flex",
          position: "absolute",
          height: "100%",
          width: "100%",
          inset: "0px",
          color: "transparent",
          ...style,
        }}
      >
        {srcSet.map((src, i) => (
          <source
            key={i}
            srcSet={`${src}`}
            type={`image/${src.split("?")[0].split(".").pop()}`}
          />
        ))}
        <Image alt={alt} fill src={srcSet[0]} {...otherProps} />
      </picture>
    );
  }

  return (
    <picture style={{ flex: 1, display: "flex", ...style }}>
      {srcSet.map((src, i) => (
        <source
          key={i}
          srcSet={`${src}`}
          type={`image/${src.split("?")[0].split(".").pop()}`}
        />
      ))}
      <Image
        style={{
          width: "100%",
          height: "auto",
        }}
        width={width}
        height={height}
        alt={alt}
        src={srcSet[0]}
        {...otherProps}
      />
    </picture>
  );
}
