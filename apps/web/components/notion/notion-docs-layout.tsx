import { Column, Spacer } from "@nattstack/ui/react"
import { cacheTag } from "next/cache"
import type { PropsWithChildren } from "react"
import { getNotionPage } from "@/components/notion/notion"
import { NotionDocsBlocks } from "@/components/notion/notion-docs-blocks"
import { NotionTabs } from "@/components/notion/notion-tabs"

type NotionDocsLayoutProps = PropsWithChildren<{
  childPageIds?: string[]
  pageId: string
}>

export async function NotionDocsLayout(props: NotionDocsLayoutProps) {
  "use cache"

  const { children, pageId } = props

  cacheTag("notion")
  cacheTag(`notion-page:${pageId}`)

  const { blocks, lastEditedTime, tabs, title } = await getNotionPage(pageId)

  const formattedUpdatedTime = new Intl.DateTimeFormat("en-US", {
    dateStyle: "long",
    timeStyle: "short",
  }).format(new Date(lastEditedTime))

  return (
    <Column>
      <Column className="mx-auto w-full max-w-[620px]">
        {/* Title */}
        <h1 className="text-36 font-500 leading-[1.2]">{title}</h1>
        <Spacer height={8} />

        {/* Last Updated Time */}
        <p className="text-gray-11 text-14 flex items-center gap-x-8">
          <span>Last updated on {formattedUpdatedTime}</span>
        </p>
        <Spacer height={16} />

        {/* Description and links */}
        <NotionDocsBlocks blocks={blocks} />
        <Spacer height={24} />

        {/* Tabs */}
        {tabs.length > 0 && <NotionTabs tabs={tabs} />}

        {children}
      </Column>
    </Column>
  )
}
