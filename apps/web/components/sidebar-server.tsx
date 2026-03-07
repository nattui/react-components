import type { LinkProps } from "next/link"
import { notion } from "@/components/notion/notion"
import { SidebarClient } from "@/components/sidebar-client"

const NOTION_SIDEBAR_PAGE_ID = "30eb76f65e6e80a8a622d45f986012d6"

interface SidebarLink {
  href: LinkProps<string>["href"]
  label: string
}

export async function SidebarServer() {
  const links = await getSidebarLinksFromNotion()
  console.log("links:", links)
  return <SidebarClient links={links} />
}

async function getSidebarLinksFromNotion(): Promise<SidebarLink[]> {
  try {
    return await getSidebarLinksFromNotionPage()
  } catch {
    return []
  }
}

async function getSidebarLinksFromNotionPage(cursor?: string): Promise<SidebarLink[]> {
  const blocks = await notion.blocks.children.list({
    block_id: NOTION_SIDEBAR_PAGE_ID,
    start_cursor: cursor,
  })

  const currentLinks = blocks.results.flatMap((result) => {
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
    return currentLinks
  }

  const nextLinks = await getSidebarLinksFromNotionPage(blocks.next_cursor)
  return [...currentLinks, ...nextLinks]
}

function toSidebarHref(rawHref: string): LinkProps<string>["href"] {
  if (rawHref.startsWith("/") || rawHref.startsWith("http://") || rawHref.startsWith("https://")) {
    return rawHref as LinkProps<string>["href"]
  }

  return `/${rawHref}` as LinkProps<string>["href"]
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
