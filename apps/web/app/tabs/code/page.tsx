import { getNotionPage, type NotionBlock } from "@/components/notion/notion"
import { NotionBlockContent } from "@/components/notion/notion-block-content"

const NOTION_PAGE_ID = "31db76f65e6e817a908afb8946d0f436"

export default async function TabsCodePage() {
  const { blocks } = await getNotionPage(NOTION_PAGE_ID)

  return (
    <>
      {blocks.map((block: NotionBlock, index) => (
        <NotionBlockContent block={block} blockIndex={index} key={index} />
      ))}
    </>
  )
}
