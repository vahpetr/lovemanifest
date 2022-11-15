import fs from 'node:fs/promises'
import path from 'path'
import matter from 'gray-matter'
import { unified } from 'unified'
import remarkParse from 'remark-parse'
import remarkGfm from 'remark-gfm'
import remarkRehype from 'remark-rehype'
import rehypeStringify from 'rehype-stringify'
import remarkToc from 'remark-toc'
import theme from "../styles/theme"

export interface ManifestMetter {
  title: string,
  createdAt: string,
  posterUrl: string,
  view: string,
  fontFamily: string,
}

export interface Manifest extends ManifestMetter {
  id: string,
  contentHtml: string,
}

export interface ManifestLink {
  id: string,
  title: string,
  createdAt: string,
}

function matterSelector(result: matter.GrayMatterFile<string>): ManifestMetter {
  return {
    title: result.data.title || "",
    createdAt: result.data.createdAt || "1970-01-01",
    posterUrl: result.data.posterUrl || theme.defaults.posterUrl,
    view: result.data.view || "Default",
    fontFamily: result.data.fontFamily || theme.defaults.fontFamily,
  }
}

const directory = path.join(process.cwd(), 'src', 'data', 'manifests')

export async function getItems(): Promise<Manifest[]> {
  const fileNames = await fs.readdir(directory)
  const items = await Promise.all(fileNames.map(async fileName => {
    // Remove ".md" from file name to get id
    const id = fileName.replace(/\.md$/, '')

    const item = getItem(id)
    return item;
  }))

  // Sort by createdAt
  return items.sort((a, b) => {
    if (a.createdAt < b.createdAt) {
      return 1
    } else {
      return -1
    }
  })
}

export async function getItemLinks(): Promise<ManifestLink[]> {
  const fileNames = await fs.readdir(directory)
  const items = await Promise.all(fileNames.map(async fileName => {
    // Remove ".md" from file name to get id
    const id = fileName.replace(/\.md$/, '')

    // Read markdown file as string
    const fullPath = path.join(directory, fileName)
    const fileContents = await fs.readFile(fullPath, 'utf8')

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents)

    // Combine the data with the id
    const matterData = matterSelector(matterResult);
    const item: ManifestLink = {
      id,
      title: matterData.title,
      createdAt: matterData.createdAt,
    }
    return item;
  }))

  // Sort by createdAt
  return items.sort((a, b) => {
    if (a.createdAt < b.createdAt) {
      return 1
    } else {
      return -1
    }
  })
}

export async function getItemsIds(): Promise<string[]> {
  const fileNames = await fs.readdir(directory)
  return fileNames.map(fileName => fileName.replace(/\.md$/, ''))
}

export async function getItem(id: string): Promise<Manifest> {
  const fullPath = path.join(directory, `${id}.md`)
  const fileContents = await fs.readFile(fullPath, 'utf8')

  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents)

  // Use remark to convert markdown into HTML string
  const processedContent = await unified()
    .use(remarkParse) // Parse markdown.
    .use(remarkGfm) // Support GFM (tables, autolinks, tasklists, strikethrough).
    .use(remarkToc)
    .use(remarkRehype) // Turn it into HTML.
    .use(rehypeStringify) // Serialize HTML.
    .process(matterResult.content)
  const contentHtml = processedContent.toString()

  // Combine the data with the id and contentHtml
  const item: Manifest = {
    id,
    contentHtml,
    ...matterSelector(matterResult)
  }

  return item;
}
