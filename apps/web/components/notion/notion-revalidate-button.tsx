import { revalidatePath } from "next/cache"
import { NotionRevalidateButtonClient } from "@/components/notion/notion-revalidate-button-client"

export function NotionRevalidateButton() {
  return (
    <div className="mx-auto w-full max-w-[620px]">
      <form action={revalidateNotionPageAction}>
        <NotionRevalidateButtonClient />
      </form>
    </div>
  )
}

// oxlint-disable-next-line require-await
async function revalidateNotionPageAction() {
  "use server"

  revalidatePath("/")
}
