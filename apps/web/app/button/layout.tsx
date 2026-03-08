import {
  Column,
  Spacer,
  Tabs,
  TabsIndicator,
  TabsList,
  TabsPanel,
  TabsTab,
} from "@nattui/react-components"
import Link from "next/link"
import type { PropsWithChildren } from "react"
import { getNotionPage, type NotionBlock } from "@/components/notion/notion"
import { NotionBlockContent } from "@/components/notion/notion-block-content"

const NOTION_PAGE_ID = "31cb76f65e6e8060bfe2dfab0608cd7f"

export default async function ButtonLayout(props: PropsWithChildren) {
  const { children } = props

  const { blocks, lastEditedTime, title } = await getNotionPage(NOTION_PAGE_ID)

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
        <Spacer height={24} />

        {/* Description and links */}
        {blocks.map((block: NotionBlock, index) => (
          <NotionBlockContent block={block} blockIndex={index} key={index} />
        ))}
        <Spacer height={24} />

        {/* Tabs */}
        <Tabs defaultValue="code">
          <TabsList
            aria-label="Button sections"
            className="border-gray-4 relative flex gap-x-8 border-b"
          >
            <TabsTab nativeButton={false} render={<Link href="/button/code" />} value="code">
              Code
            </TabsTab>
            <TabsTab nativeButton={false} render={<Link href="/button/code" />} value="Specs">
              Specs
            </TabsTab>
            <TabsIndicator />
          </TabsList>

          {/* Content */}
          <TabsPanel value="code">{children}</TabsPanel>
        </Tabs>
      </Column>

      <Spacer height={128} />
    </Column>
  )
}
