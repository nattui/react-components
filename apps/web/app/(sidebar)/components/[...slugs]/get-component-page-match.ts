import { cacheTag } from "next/cache"
import { getDirectChildPages } from "@/app/(sidebar)/components/[...slugs]/get-direct-child-block"
import { pascalToKebabCase } from "@/app/(sidebar)/components/[...slugs]/pascal-to-kebab-case"

const NOTION_PAGE_ID = "30eb76f65e6e8038b950fe10d1b6b5ba"

interface ComponentPage {
  childPageIds: string[]
  id: string
  slug: string
}

interface ComponentPageMatch {
  childPageId?: string
  pageId: string
}

export async function getComponentPageMatch(slug: string): Promise<ComponentPageMatch | undefined> {
  const pages = await getComponentPages()
  const matchedPage = pages.find((page) => page.slug === slug)

  if (!matchedPage) {
    return undefined
  }

  return {
    childPageId: matchedPage.childPageIds[0],
    pageId: matchedPage.id,
  }
}

export async function getComponentPageSlugs(): Promise<string[]> {
  const pages = await getComponentPages()
  return pages.filter((page) => page.childPageIds.length > 0).map((page) => page.slug)
}

async function getComponentPages(): Promise<ComponentPage[]> {
  "use cache"

  cacheTag("notion")
  cacheTag("notion-component-pages")

  const directChildPages = await getDirectChildPages(NOTION_PAGE_ID)

  return Promise.all(
    directChildPages.map(async (page) => {
      const childPages = await getDirectChildPages(page.id)

      return {
        childPageIds: childPages.map((childPage) => childPage.id),
        id: page.id,
        slug: pascalToKebabCase(page.title),
      }
    }),
  )
}
