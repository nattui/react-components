import { cacheTag } from "next/cache"
import type { LinkProps } from "next/link"
import { notion, type NotionRichTextSegment } from "@/components/notion/notion"
import { SidebarClient } from "@/components/sidebar-client"

const NOTION_SIDEBAR_PAGE_ID = "30eb76f65e6e80a8a622d45f986012d6"

type SidebarBlock = Awaited<ReturnType<typeof notion.blocks.children.list>>["results"][number]

interface SidebarLink {
  href: LinkProps<string>["href"]
  label: string
}

interface SidebarRichTextItem {
  annotations: {
    bold: boolean
    code: boolean
    italic: boolean
    strikethrough: boolean
    underline: boolean
  }
  href: null | string
  plain_text: string
}

interface SidebarSection {
  labelSegments: NotionRichTextSegment[]
  links: SidebarLink[]
}

export async function SidebarServer() {
  const sections = await getSidebarSectionsFromNotion()
  return <SidebarClient sections={sections} />
}

async function getSidebarBlocksFromNotionPage(cursor?: string): Promise<SidebarBlock[]> {
  const blocks = await notion.blocks.children.list({
    block_id: NOTION_SIDEBAR_PAGE_ID,
    start_cursor: cursor,
  })

  if (!blocks.has_more || !blocks.next_cursor) {
    return blocks.results
  }

  const nextBlocks = await getSidebarBlocksFromNotionPage(blocks.next_cursor)
  return [...blocks.results, ...nextBlocks]
}

async function getSidebarSectionsFromNotion(): Promise<SidebarSection[]> {
  "use cache"

  cacheTag("notion")
  cacheTag("notion-sidebar")

  try {
    const blocks = await getSidebarBlocksFromNotionPage()
    return toSidebarSections(blocks)
  } catch {
    return []
  }
}

function toSidebarHref(rawHref: string): LinkProps<string>["href"] {
  if (rawHref.startsWith("/") || rawHref.startsWith("http://") || rawHref.startsWith("https://")) {
    return rawHref as LinkProps<string>["href"]
  }

  return `/${rawHref}` as LinkProps<string>["href"]
}

function toSidebarLabelSegments(result: SidebarBlock): NotionRichTextSegment[] | undefined {
  if (!("type" in result)) {
    return
  }

  let richText: SidebarRichTextItem[] | undefined = undefined

  if (result.type === "paragraph") {
    richText = result.paragraph.rich_text
  }

  if (result.type === "heading_1") {
    richText = result.heading_1.rich_text
  }

  if (result.type === "heading_2") {
    richText = result.heading_2.rich_text
  }

  if (result.type === "heading_3") {
    richText = result.heading_3.rich_text
  }

  if (!richText || richText.every((textBlock) => textBlock.plain_text.trim().length === 0)) {
    return
  }

  return toSidebarRichTextSegments(richText)
}

function toSidebarLink(text: string): SidebarLink | undefined {
  const separatorIndex = text.indexOf("::")
  if (separatorIndex === -1) {
    return undefined
  }

  const label = text.slice(0, separatorIndex).trim()
  const hrefValue = text.slice(separatorIndex + 2).trim()

  if (!label || !hrefValue) {
    return undefined
  }

  return {
    href: toSidebarHref(hrefValue),
    label,
  }
}

function toSidebarLinkFromBlock(result: SidebarBlock): SidebarLink | undefined {
  if (!("type" in result)) {
    return
  }

  let richText: SidebarRichTextItem[] | undefined = undefined

  if (result.type === "bulleted_list_item") {
    richText = result.bulleted_list_item.rich_text
  }

  if (result.type === "numbered_list_item") {
    richText = result.numbered_list_item.rich_text
  }

  if (!richText) {
    return
  }

  const text = richText.map((textBlock) => textBlock.plain_text).join("")
  return toSidebarLink(text)
}

function toSidebarRichTextSegments(richText: SidebarRichTextItem[]): NotionRichTextSegment[] {
  return richText.map((textBlock) => ({
    bold: textBlock.annotations.bold,
    code: textBlock.annotations.code,
    href: textBlock.href,
    italic: textBlock.annotations.italic,
    strikethrough: textBlock.annotations.strikethrough,
    text: textBlock.plain_text,
    underline: textBlock.annotations.underline,
  }))
}

function toSidebarSections(blocks: SidebarBlock[]): SidebarSection[] {
  const sections: SidebarSection[] = []
  let currentSection: SidebarSection | undefined = undefined

  for (const block of blocks) {
    const labelSegments = toSidebarLabelSegments(block)
    const link = toSidebarLinkFromBlock(block)

    if (labelSegments) {
      currentSection = {
        labelSegments,
        links: [],
      }
      sections.push(currentSection)
    } else if (link) {
      if (!currentSection) {
        currentSection = {
          labelSegments: [],
          links: [],
        }
        sections.push(currentSection)
      }

      currentSection.links.push(link)
    }
  }

  return sections.filter((section) => section.labelSegments.length > 0 || section.links.length > 0)
}
