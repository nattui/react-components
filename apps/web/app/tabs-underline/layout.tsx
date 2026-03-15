import type { PropsWithChildren } from "react"
import { NotionDocsLayout } from "@/components/notion/notion-docs-layout"

const NOTION_PAGE_ID = "31db76f65e6e80f2b125d026f1c318f1"

export default function TabsUnderlineLayout(props: PropsWithChildren) {
  const { children } = props

  return <NotionDocsLayout pageId={NOTION_PAGE_ID}>{children}</NotionDocsLayout>
}
