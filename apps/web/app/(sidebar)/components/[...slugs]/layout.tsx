import { redirect } from "next/navigation"
import type { PropsWithChildren } from "react"
import { getComponentPageMatch } from "@/app/(sidebar)/components/[...slugs]/get-component-page-match"
import { NotionDocsLayout } from "@/components/notion/notion-docs-layout"

interface LayoutProps extends PropsWithChildren {
  params: Promise<{
    slugs: string[]
  }>
}

export default async function Layout(props: LayoutProps) {
  const { children, params } = props
  const { slugs } = await params

  const [slug] = slugs

  const matchedPage = await getComponentPageMatch(slug)

  if (!matchedPage) {
    redirect("/")
  }

  return <NotionDocsLayout pageId={matchedPage.pageId}>{children}</NotionDocsLayout>
}
