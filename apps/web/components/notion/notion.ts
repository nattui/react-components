import { Client } from "@notionhq/client"

const { NOTION_API_KEY } = process.env

const NOTION_API_VERSION = "2025-09-03"

export const notion = new Client({
  auth: NOTION_API_KEY,
  notionVersion: NOTION_API_VERSION,
})

export type NotionBlock =
  | {
      alt: string
      type: "image"
      url: string
    }
  | {
      code: string
      language: string
      type: "code"
    }
  | {
      segments: NotionRichTextSegment[]
      type: "h2" | "h3" | "paragraph"
    }

export interface NotionPage {
  blocks: NotionBlock[]
  createdTime: string
  lastEditedTime: string
  tabs: NotionTab[]
  title: string
}

export interface NotionRichTextSegment {
  bold: boolean
  code: boolean
  href: null | string
  italic: boolean
  strikethrough: boolean
  text: string
  underline: boolean
}

export interface NotionTab {
  href: string
  label: string
}

interface NotionRichTextInput {
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

export async function getNotionPage(pageId: string): Promise<NotionPage> {
  if (!NOTION_API_KEY) {
    throw new Error("NOTION_API_KEY is required")
  }

  // Keep a stable fallback when page metadata is missing or unexpected.
  const DEFAULT_EMPTY = {
    blocks: [],
    createdTime: "",
    lastEditedTime: "",
    tabs: [],
    title: "",
  }

  const [metaContent, metaPage] = await Promise.all([
    notion.blocks.children.list({ block_id: pageId }),
    notion.pages.retrieve({ page_id: pageId }),
  ])

  if (!("properties" in metaPage)) {
    return DEFAULT_EMPTY
  }

  const titleProperty = metaPage.properties.title

  if (!titleProperty || titleProperty.type !== "title") {
    return DEFAULT_EMPTY
  }

  let title = ""
  const titleArray = titleProperty.title
  if (titleArray.length > 0) {
    title = titleArray[0].plain_text
  }

  const blocks: NotionBlock[] = []
  const tabs: NotionTab[] = []

  // Shared paragraph/heading handler: skip empty text and normalize segment shape.
  function pushRichTextBlock(
    richText: NotionRichTextInput[],
    type: Extract<NotionBlock, { segments: NotionRichTextSegment[] }>["type"],
  ): void {
    if (richText.length === 0) {
      return
    }

    blocks.push({
      segments: toNotionRichTextSegments(richText),
      type,
    })
  }

  function pushTab(text: string): void {
    const tab = toNotionTab(text)
    if (tab) {
      tabs.push(tab)
    }
  }

  // Convert Notion API blocks into the small renderable union used by the UI.
  for (const result of metaContent.results) {
    if (!("type" in result)) {
      return DEFAULT_EMPTY
    }

    if (result.type === "paragraph") {
      pushRichTextBlock(result.paragraph.rich_text, "paragraph")
    }

    if (result.type === "heading_1") {
      // Notion heading_1 is rendered as h2 for this page.
      pushRichTextBlock(result.heading_1.rich_text, "h2")
    }

    if (result.type === "heading_2") {
      pushRichTextBlock(result.heading_2.rich_text, "h3")
    }

    if (result.type === "image") {
      const url =
        result.image.type === "external" ? result.image.external.url : result.image.file.url

      const alt = result.image.caption.map((textBlock) => textBlock.plain_text).join("")

      blocks.push({ alt, type: "image", url })
    }

    if (result.type === "code") {
      const code = result.code.rich_text.map((textBlock) => textBlock.plain_text).join("")
      if (code.length > 0) {
        blocks.push({ code, language: result.code.language, type: "code" })
      }
    }

    if (result.type === "bulleted_list_item") {
      const text = result.bulleted_list_item.rich_text
        .map((textBlock) => textBlock.plain_text)
        .join("")
      pushTab(text)
    }

    if (result.type === "numbered_list_item") {
      const text = result.numbered_list_item.rich_text
        .map((textBlock) => textBlock.plain_text)
        .join("")
      pushTab(text)
    }

    if (result.type === "child_page") {
      pushTab(result.child_page.title)
    }
  }

  return {
    blocks,
    createdTime: metaPage.created_time,
    lastEditedTime: metaPage.last_edited_time,
    tabs,
    title,
  }
}

// Map Notion rich text objects to the formatting fields consumed by components.
function toNotionRichTextSegments(richText: NotionRichTextInput[]): NotionRichTextSegment[] {
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

function toNotionTab(text: string): NotionTab | undefined {
  const separatorIndex = text.indexOf("::")
  if (separatorIndex === -1) {
    return undefined
  }

  const label = text.slice(0, separatorIndex).trim()
  const rawHref = text.slice(separatorIndex + 2).trim()
  if (!label || !rawHref) {
    return undefined
  }

  return {
    href: toNotionTabHref(rawHref),
    label,
  }
}

function toNotionTabHref(rawHref: string): string {
  if (rawHref.startsWith("/") || rawHref.startsWith("http://") || rawHref.startsWith("https://")) {
    return rawHref
  }

  return `/${rawHref}`
}
