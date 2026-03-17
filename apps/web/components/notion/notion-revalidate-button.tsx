import { revalidatePath, revalidateTag } from "next/cache"
import { NotionRevalidateButtonClient } from "@/components/notion/notion-revalidate-button-client"

export function NotionRevalidateButton() {
  return (
    <form action={revalidateNotionPageAction}>
      <NotionRevalidateButtonClient />
    </form>
  )
}

// oxlint-disable-next-line require-await
async function revalidateNotionPageAction() {
  "use server"

  revalidateTag("notion", "max")
  revalidatePath("/")
}
