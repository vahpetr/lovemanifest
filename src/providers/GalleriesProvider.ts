import fs from "node:fs/promises";
import path from "path";
import matter from "gray-matter";
import remarkGfm from "remark-gfm";
import rehypeStringify from "rehype-stringify";
import remarkToc from "remark-toc";
import { serialize } from "next-mdx-remote/serialize";
import { MDXRemoteSerializeResult } from "next-mdx-remote";
import { SerializeOptions } from "next-mdx-remote/dist/types";
import remarkImageSrc from "../../plugins/remarkImageSrc.mjs";

export interface GalleryLink {
  slug: string;
  meta: GalleryMeta;
}
export interface GalleryMeta {
  title: string;
  createdAt: string;
}

export interface GalleryContent {
  mdxSource: MDXRemoteSerializeResult;
  meta: GalleryFormMeta;
}
export interface GalleryFormMeta {
  view: string;
}

export const galleryContentTypes = ["mobile", "desktop"] as const;
export type GalleryContentType = typeof galleryContentTypes[number];
export interface Gallery extends GalleryLink {
  contents: {
    [content in GalleryContentType]?: GalleryContent;
  };
}

function getGalleryFormMeta(data: { [key: string]: any }): GalleryFormMeta {
  return {
    view: data.view || "Development",
  };
}

function getGalleryLinkMeta(data: { [key: string]: any }): GalleryMeta {
  return {
    title: data.title || "",
    createdAt: data.createdAt || "1970-01-01",
  };
}

const directory = path.join(process.cwd(), "src", "data", "galleries");

export async function getItemLinkBySlug(slig: string) {
  // Read markdown file as string
  const fullPath = path.join(directory, `${slig}.mdx`);
  const fileContents = await fs.readFile(fullPath, "utf8");

  // Use gray-matter to parse the post metadata section
  const { data } = matter(fileContents);

  // Combine the data with the slug
  const meta = getGalleryLinkMeta(data);

  const item: GalleryLink = {
    slug: slig,
    meta: meta,
  };

  return item;
}

export async function getItemLinks(): Promise<GalleryLink[]> {
  const slugs = await getItemsSlugs();

  const items = [];
  for await (let slug of slugs.map(getItemLinkBySlug)) {
    items.push(slug);
  }

  // Sort by createdAt
  return items.sort((a, b) => {
    if (a.meta.createdAt < b.meta.createdAt) {
      return 1;
    }

    return -1;
  });
}

export async function getItemBySlug(slug: string): Promise<Gallery> {
  const link = await getItemLinkBySlug(slug);
  const gallery: Gallery = {
    ...link,
    contents: {},
  };

  for (const contentType of galleryContentTypes) {
    const fullPath = path.join(directory, contentType, `${link.slug}.mdx`);
    if (await exist(fullPath)) {
      const item = await getItemForm(fullPath);
      gallery.contents[contentType] = item;
    }
  }

  return gallery;
}

export async function getItems(): Promise<Gallery[]> {
  const slugs = await getItemsSlugs();

  const items = [];
  for await (let slug of slugs.map(getItemBySlug)) {
    items.push(slug);
  }

  return items;
}

export async function getItemsSlugs(): Promise<string[]> {
  const dirents = await fs.readdir(directory, { withFileTypes: true });
  return dirents
    .filter((p) => p.isFile())
    .map((p) => p.name.replace(/\.mdx$/, ""));
}

async function exist(path: string): Promise<boolean> {
  try {
    await fs.access(path, fs.constants.F_OK);
    return true;
  } catch {
    return false;
  }
}

async function getItemForm(fullPath: string): Promise<GalleryContent> {
  const fileContents = await fs.readFile(fullPath, "utf8");

  // Use gray-matter to parse the post metadata section
  let { data, content: markdown } = matter(fileContents);

  // const html = await markdownToHtml(markdown);
  const mdxSource = await getMdxSource(markdown);

  const meta = getGalleryFormMeta(data);

  // Combine
  const item: GalleryContent = {
    mdxSource,
    meta,
  };

  return item;
}

export const createSignedImgUrl = (uri: string) => {
  const imgcdn_host = process.env.IMGCDN_HOST;
  const s3Url = process.env.S3_URL;
  const key = process.env.IMGPROXY_KEY;
  const salt = process.env.IMGPROXY_SALT;
  return require("../../scripts/sign")({
    host: imgcdn_host,
    uri,
    s3Url,
    key,
    salt,
  });
};

const getSourceConfig: SerializeOptions = {
  mdxOptions: {
    remarkPlugins: [
      [remarkGfm, { singleTilde: false }],
      [remarkToc, { maxDepth: 3, tight: true }],
      remarkImageSrc,
    ],
    rehypePlugins: [rehypeStringify],
    format: "mdx",
  },
  parseFrontmatter: false,
};

export function getMdxSource(
  markdown: string,
  scope: Record<string, unknown> = {}
): Promise<MDXRemoteSerializeResult> {
  return serialize(markdown, {
    ...getSourceConfig,
    scope,
  });
}
