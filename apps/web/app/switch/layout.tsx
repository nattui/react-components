import type { PropsWithChildren } from "react"
import { NotionDocsLayout } from "@/components/notion/notion-docs-layout"

const NOTION_PAGE_ID = "31db76f65e6e807cb00dfacd23e2b127"

export default function SwitchLayout(props: PropsWithChildren) {
  const { children } = props

  return <NotionDocsLayout pageId={NOTION_PAGE_ID}>{children}</NotionDocsLayout>
}
