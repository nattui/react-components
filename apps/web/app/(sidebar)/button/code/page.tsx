import { NotionDocsCodePage } from "@/components/notion/notion-docs-code-page"

const NOTION_PAGE_ID = "31db76f65e6e8026af1cc22d5a177c1d"

export default function ButtonPage() {
  return <NotionDocsCodePage pageId={NOTION_PAGE_ID} />
}
