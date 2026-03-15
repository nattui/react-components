import type { PropsWithChildren } from "react"
import { NotionDocsLayout } from "@/components/notion/notion-docs-layout"

const NOTION_PAGE_ID = "31cb76f65e6e8060bfe2dfab0608cd7f"

export default function ButtonLayout(props: PropsWithChildren) {
  const { children } = props

  return <NotionDocsLayout pageId={NOTION_PAGE_ID}>{children}</NotionDocsLayout>
}
