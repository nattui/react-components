import { cache } from "react"
import { getDirectChildPages } from "@/app/(sidebar)/components/[...slugs]/get-direct-child-block"
import { pascalToKebabCase } from "@/app/(sidebar)/components/[...slugs]/pascal-to-kebab-case"

const NOTION_PAGE_ID = "30eb76f65e6e8038b950fe10d1b6b5ba"

interface ComponentPage {
  childPageIds: string[]
  id: string
  title: string
}

interface ComponentPageMatch {
  childPageId?: string
  pageId: string
}

const getComponentPages = cache(async (): Promise<ComponentPage[]> => {
  const directChildPages = await getDirectChildPages(NOTION_PAGE_ID)

  return Promise.all(
    directChildPages.map(async (page) => {
      const childPages = await getDirectChildPages(page.id)

      return {
        childPageIds: childPages.map((childPage) => childPage.id),
        id: page.id,
        title: page.title,
      }
    }),
  )
})

export async function getComponentPageMatch(slug: string): Promise<ComponentPageMatch | undefined> {
  const pages = await getComponentPages()
  const matchedPage = pages.find((page) => pascalToKebabCase(page.title) === slug)

  if (!matchedPage) {
    return undefined
  }

  return {
    childPageId: matchedPage.childPageIds[0],
    pageId: matchedPage.id,
  }
}
