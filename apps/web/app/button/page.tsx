import { Column, Spacer } from "@nattui/react-components"
import { getNotionPage, type NotionBlock } from "@/components/notion/notion"
import { NotionBlockContent } from "@/components/notion/notion-block-content"

const NOTION_PAGE_ID = "31cb76f65e6e8060bfe2dfab0608cd7f"

export default async function NotionPage() {
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
        <Spacer height={12} />

        {/* Content */}
        {blocks.map((block: NotionBlock, index) => (
          <NotionBlockContent block={block} blockIndex={index} key={index} />
        ))}
      </Column>

      <Spacer height={128} />
    </Column>
  )
}
