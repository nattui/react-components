import { getChildBlocks, type NotionBlock } from "@/app/(sidebar)/[...pages]/get-child-block"

interface NotionPageSummary {
  id: string
  title: string
}

export async function getDirectChildPages(pageId: string): Promise<NotionPageSummary[]> {
  const blocks = await getChildBlocks(pageId)
  return blocks
    .filter(
      (block): block is Extract<NotionBlock, { type: "child_page" }> =>
        "type" in block && block.type === "child_page",
    )
    .map((block) => ({
      id: block.id.replaceAll("-", ""),
      title: block.child_page.title,
    }))
}
