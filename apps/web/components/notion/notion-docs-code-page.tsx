import { cacheTag } from "next/cache"
import type { JSX } from "react"
import { getNotionPage } from "@/components/notion/notion"
import { NotionDocsBlocks } from "@/components/notion/notion-docs-blocks"

interface NotionDocsCodePageProps {
  pageId: string
}

export async function NotionDocsCodePage(props: NotionDocsCodePageProps): Promise<JSX.Element> {
  "use cache"

  const { pageId } = props

  cacheTag("notion")
  cacheTag(`notion-page:${pageId}`)

  const { blocks } = await getNotionPage(pageId)

  return <NotionDocsBlocks blocks={blocks} />
}
