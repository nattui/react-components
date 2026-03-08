import { getNotionPage, type NotionBlock } from "@/components/notion/notion"
import { NotionBlockContent } from "@/components/notion/notion-block-content"

const NOTION_PAGE_ID = "31db76f65e6e8026af1cc22d5a177c1d"

export default async function ButtonPage() {
  const { blocks } = await getNotionPage(NOTION_PAGE_ID)

  return (
    <>
      {blocks.map((block: NotionBlock, index) => (
        <NotionBlockContent block={block} blockIndex={index} key={index} />
      ))}
    </>
  )
}
