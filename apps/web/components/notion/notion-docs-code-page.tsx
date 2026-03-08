import { getNotionPage } from "@/components/notion/notion"
import { NotionDocsBlocks } from "@/components/notion/notion-docs-blocks"

interface NotionDocsCodePageProps {
  pageId: string
}

export async function NotionDocsCodePage(props: NotionDocsCodePageProps) {
  const { pageId } = props
  const { blocks } = await getNotionPage(pageId)

  return <NotionDocsBlocks blocks={blocks} />
}
