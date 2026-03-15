import { redirect } from "next/navigation"
import { getDirectChildPages } from "@/app/(sidebar)/[...slugs]/get-direct-child-block"
import { NotionDocsLayout } from "@/components/notion/notion-docs-layout"

const NOTION_PAGE_ID = "30eb76f65e6e8038b950fe10d1b6b5ba"

interface PageProps {
  params: Promise<{
    slugs: string[]
  }>
}

export default async function Page(props: PageProps) {
  const { params } = props

  const { slugs } = await params

  const [slug] = slugs

  const pages = await getDirectChildPages(NOTION_PAGE_ID)

  let matchedPageId = ""
  let matchedPageTitle = ""

  const hasMatch = pages.some((page) => {
    const pageTitle = pascalToKebabCase(page.title)
    if (pageTitle === slug) {
      matchedPageId = page.id
      matchedPageTitle = page.title
      return true
    }

    return false
  })

  if (!hasMatch) {
    redirect(`/`)
  }

  return <NotionDocsLayout pageId={matchedPageId}>{matchedPageTitle}</NotionDocsLayout>
}

function pascalToKebabCase(value: string) {
  return value
    .trim()
    .replaceAll(/([A-Z]+)([A-Z][a-z])/g, "$1-$2")
    .replaceAll(/([a-z0-9])([A-Z])/g, "$1-$2")
    .replaceAll(/[\s_]+/g, "-")
    .replaceAll(/-+/g, "-")
    .toLowerCase()
}
