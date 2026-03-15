import { redirect } from "next/navigation"
import type { PropsWithChildren } from "react"
import { getDirectChildPages } from "@/app/(sidebar)/components/[...slugs]/get-direct-child-block"
import { pascalToKebabCase } from "@/app/(sidebar)/components/[...slugs]/pascal-to-kebab-case"
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

  const directChildPages = await getDirectChildPages(NOTION_PAGE_ID)
  const pages = await Promise.all(
    directChildPages.map(async (page) => {
      const childPages = await getDirectChildPages(page.id)

      return {
        childPageIds: childPages.map((childPage) => childPage.id),
        id: page.id,
        title: page.title,
      }
    }),
  )

  console.log("pages:", pages)

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
