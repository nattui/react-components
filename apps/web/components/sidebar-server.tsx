import type { LinkProps } from "next/link"
import { notion, type NotionRichTextSegment } from "@/components/notion/notion"
import { SidebarClient } from "@/components/sidebar-client"

const NOTION_SIDEBAR_PAGE_ID = "30eb76f65e6e80a8a622d45f986012d6"

type SidebarBlock = Awaited<ReturnType<typeof notion.blocks.children.list>>["results"][number]

interface SidebarData {
  labelSegments: NotionRichTextSegment[]
  links: SidebarLink[]
}

interface SidebarLink {
  href: LinkProps<string>["href"]
  label: string
}

export async function SidebarServer() {
  const { labelSegments, links } = await getSidebarDataFromNotion()
  return <SidebarClient labelSegments={labelSegments} links={links} />
}

async function getSidebarDataFromNotion(): Promise<SidebarData> {
  try {
    return await getSidebarDataFromNotionPage()
  } catch {
    return {
      labelSegments: [],
      links: [],
    }
  }
}

async function getSidebarDataFromNotionPage(cursor?: string): Promise<SidebarData> {
  const blocks = await notion.blocks.children.list({
    block_id: NOTION_SIDEBAR_PAGE_ID,
    start_cursor: cursor,
  })

  let labelSegments: NotionRichTextSegment[] = []
  const currentLinks = blocks.results.flatMap((result) => {
    if (labelSegments.length === 0 && "type" in result) {
      const nextLabelSegments = toSidebarLabelSegments(result)
      if (nextLabelSegments) {
        labelSegments = nextLabelSegments
      }
    }

    if ("type" in result && result.type === "bulleted_list_item") {
      const text = result.bulleted_list_item.rich_text
        .map((richText) => richText.plain_text)
        .join("")
      const link = toSidebarLink(text)
      return link ? [link] : []
    }

    return []
  })

  if (!blocks.has_more || !blocks.next_cursor) {
    return {
      labelSegments,
      links: currentLinks,
    }
  }

  const nextData = await getSidebarDataFromNotionPage(blocks.next_cursor)
  return {
    labelSegments: labelSegments.length > 0 ? labelSegments : nextData.labelSegments,
    links: [...currentLinks, ...nextData.links],
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

  const richText =
    result.type === "paragraph"
      ? result.paragraph.rich_text
      : result.type === "heading_1"
        ? result.heading_1.rich_text
        : result.type === "heading_2"
          ? result.heading_2.rich_text
          : result.type === "heading_3"
            ? result.heading_3.rich_text
            : undefined

  if (!richText || richText.every((textBlock) => textBlock.plain_text.trim().length === 0)) {
    return
  }

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
