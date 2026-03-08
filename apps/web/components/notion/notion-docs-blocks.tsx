import type { NotionBlock } from "@/components/notion/notion"
import { NotionBlockContent } from "@/components/notion/notion-block-content"

interface NotionDocsBlocksProps {
  blocks: NotionBlock[]
}

export function NotionDocsBlocks(props: NotionDocsBlocksProps) {
  const { blocks } = props

  return (
    <>
      {blocks.map((block, index) => (
        <NotionBlockContent block={block} blockIndex={index} key={index} />
      ))}
    </>
  )
}
