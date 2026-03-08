import { Column, Spacer } from "@nattui/react-components"
import type { PropsWithChildren } from "react"
import { getNotionPage, type NotionBlock } from "@/components/notion/notion"
import { NotionBlockContent } from "@/components/notion/notion-block-content"
import { NotionTabs } from "@/components/notion/notion-tabs"

const NOTION_PAGE_ID = "31db76f65e6e80f2b125d026f1c318f1"

export default async function TabsLayout(props: PropsWithChildren) {
  const { children } = props

  const { blocks, lastEditedTime, tabs, title } = await getNotionPage(NOTION_PAGE_ID)

  const formattedUpdatedTime = new Intl.DateTimeFormat("en-US", {
    dateStyle: "long",
    timeStyle: "short",
  }).format(new Date(lastEditedTime))

  return (
    <Column className="px-16">
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
        {blocks.map((block: NotionBlock, index) => (
          <NotionBlockContent block={block} blockIndex={index} key={index} />
        ))}
        <Spacer height={24} />

        {/* Tabs */}
        {tabs.length > 0 && <NotionTabs tabs={tabs} />}

        {children}
      </Column>
    </Column>
  )
}
