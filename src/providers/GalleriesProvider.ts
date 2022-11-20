import fs from 'node:fs/promises'
import path from 'path'
import matter from 'gray-matter'
import { unified } from 'unified'
import remarkParse from 'remark-parse'
import remarkGfm from 'remark-gfm'
import remarkRehype from 'remark-rehype'
import rehypeStringify from 'rehype-stringify'
import remarkToc from 'remark-toc'


export interface GalleryLink extends GalleryLinkMetter {
  id: string
}
interface GalleryLinkMetter {
  title: string
  createdAt: string
}

export interface GalleryContet extends GalleryFormMetter {
  html: string
}
interface GalleryFormMetter {
  view: string
}

export const galleryContentTypes = ["mobile", "desktop"] as const;
export type GalleryContentType = typeof galleryContentTypes[number];
export interface Gallery extends GalleryLink {
  contents: {
    [content in GalleryContentType]?: GalleryContet
  }
}

function getGalleryFormMetter(data: { [key: string]: any }): GalleryFormMetter {
  return {
    view: data.view || "Development",
  }
}

function getGalleryLinkMetter(data: { [key: string]: any }): GalleryLinkMetter {
  return {
    title: data.title || "",
    createdAt: data.createdAt || "1970-01-01",
  }
}

const directory = path.join(process.cwd(), 'src', 'data', 'galleries')

export async function getItemLink(id: string) {
  // Read markdown file as string
  const fullPath = path.join(directory, `${id}.md`)
  const fileContents = await fs.readFile(fullPath, 'utf8')

  // Use gray-matter to parse the post metadata section
  const { data: frontmatter } = matter(fileContents)

  // Combine the data with the id
  const data = getGalleryLinkMetter(frontmatter);
  const item: GalleryLink = {
    id,
    title: data.title,
    createdAt: data.createdAt,
  }

  return item;
}

export async function getItemLinks(): Promise<GalleryLink[]> {
  const ids = await getItemsIds()

  const items = []
  for await (let item of ids.map(getItemLink)) {
    items.push(item)
  }

  // Sort by createdAt
  return items.sort((a, b) => {
    if (a.createdAt < b.createdAt) {
      return 1
    }

    return -1
  })
}

export async function getItem(id: string): Promise<Gallery> {
  const link = await getItemLink(id)
  const gallery: Gallery = {
    ...link,
    contents: {}
  }

  for (const contentType of galleryContentTypes) {
    const fullPath = path.join(directory, contentType, `${link.id}.md`)
    if (await exist(fullPath)) {
      const item = await getItemForm(fullPath)
      gallery.contents[contentType] = item
    }
  }

  return gallery;
}

export async function getItems(): Promise<Gallery[]> {
  const ids = await getItemsIds();

  const items = []
  for await (let item of ids.map(getItem)) {
    items.push(item)
  }

  return items;
}

export async function getItemsIds(): Promise<string[]> {
  const dirents = await fs.readdir(directory, { withFileTypes: true })
  return dirents.filter(p => p.isFile()).map(p => p.name.replace(/\.md$/, ''))
}

async function exist(path: string): Promise<boolean> {
  try {
    await fs.access(path, fs.constants.F_OK)
    return true
  } catch {
    return false
  }
}

async function getItemForm(fullPath: string): Promise<GalleryContet> {
  const fileContents = await fs.readFile(fullPath, 'utf8')

  // Use gray-matter to parse the post metadata section
  let { data: frontmatter, content } = matter(fileContents)

  const regex = /\!\[(.*?)\]\((.*?)\)/gm
  let matches: RegExpExecArray | null;
  while ((matches = regex.exec(content)) !== null) {
    content = content.replace(`](${matches[2]}`, `](${createSignedImgUrl(matches[2])}`)
  }

  // Use remark to convert markdown into HTML string
  const processedContent = await unified()
    .use(remarkParse) // Parse markdown.
    .use(remarkGfm) // Support GFM (tables, autolinks, tasklists, strikethrough).
    .use(remarkToc)
    .use(remarkRehype) // Turn it into HTML.
    .use(rehypeStringify) // Serialize HTML.
    .process(content)
  const html = processedContent.toString()

  // Combine the data with the id and contentHtml
  const item: GalleryContet = {
    html,
    ...getGalleryFormMetter(frontmatter)
  }

  return item;
}

export const createSignedImgUrl = (uri: string) => {
  const s3Url = process.env.S3_URL
  const key = process.env.IMGPROXY_KEY
  const salt = process.env.IMGPROXY_SALT
  return require("../../scripts/sign").default({ uri, s3Url, key, salt })
}
