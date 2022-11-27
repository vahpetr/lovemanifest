import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import * as mdx from "@mdx-js/react";
import AppImage from "./AppImage";

export interface MdxRenderProps {
  mdxSource: MDXRemoteSerializeResult;
  components?: React.ComponentProps<typeof mdx.MDXProvider>["components"];
  lazy?: boolean;
}

const DefaultComponents = {
  Image: AppImage,
};

export default function MdxRender({
  mdxSource,
  components,
  lazy = true,
}: MdxRenderProps) {
  return (
    <MDXRemote
      {...mdxSource}
      components={{ ...DefaultComponents, ...components }}
      lazy={lazy}
    />
  );
}
