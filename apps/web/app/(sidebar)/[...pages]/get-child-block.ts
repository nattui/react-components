import { notion } from "@/components/notion/notion"

export type NotionBlock = Awaited<ReturnType<typeof notion.blocks.children.list>>["results"][number]

export async function getChildBlocks(blockId: string, cursor?: string): Promise<NotionBlock[]> {
  const response = await notion.blocks.children.list({
    block_id: blockId,
    start_cursor: cursor,
  })

  if (!response.has_more || !response.next_cursor) {
    return response.results
  }

  const nextBlocks = await getChildBlocks(blockId, response.next_cursor)
  return [...response.results, ...nextBlocks]
}
