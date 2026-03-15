import { redirect } from "next/navigation"
import type { PropsWithChildren } from "react"
import { getDirectChildPages } from "@/app/(sidebar)/[...slugs]/get-direct-child-block"
import { pascalToKebabCase } from "@/app/(sidebar)/[...slugs]/pascal-to-kebab-case"
import { NotionDocsLayout } from "@/components/notion/notion-docs-layout"

const NOTION_PAGE_ID = "30eb76f65e6e8038b950fe10d1b6b5ba"

interface LayoutProps extends PropsWithChildren {
  params: Promise<{
    slugs: string[]
  }>
}

export default async function Layout(props: LayoutProps) {
  const { children, params } = props

  const { slugs } = await params

  const [slug] = slugs

  const pages = await getDirectChildPages(NOTION_PAGE_ID)

  let matchedPageId = ""
  const isMatched = pages.some((page) => {
    const pageTitle = pascalToKebabCase(page.title)
    if (pageTitle === slug) {
      matchedPageId = page.id
      return true
    }

    return false
  })

  if (!isMatched) {
    redirect(`/`)
  }

  return <NotionDocsLayout pageId={matchedPageId}>{children}</NotionDocsLayout>
}
