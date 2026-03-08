import { NotionDocsCodePage } from "@/components/notion/notion-docs-code-page"

const NOTION_PAGE_ID = "31db76f65e6e80958341c654bed08395"

export default function SwitchCodePage() {
  return <NotionDocsCodePage pageId={NOTION_PAGE_ID} />
}
