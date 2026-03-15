import { getDirectChildPages } from "@/app/(sidebar)/[...pages]/get-direct-child-block"

const NOTION_PAGE_ID = "30eb76f65e6e8038b950fe10d1b6b5ba"

export default async function Page() {
  const pages = await getDirectChildPages(NOTION_PAGE_ID)

  for (const page of pages) {
    console.log("Notion page:", page.title, page.id)
  }

  return (
    <div>
      <h1>Test 123</h1>
    </div>
  )
}
