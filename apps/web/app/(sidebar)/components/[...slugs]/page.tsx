import { redirect } from "next/navigation"
import type { JSX } from "react"
import {
  getComponentPageMatch,
  getComponentPageSlugs,
} from "@/app/(sidebar)/components/[...slugs]/get-component-page-match"
import { NotionDocsCodePage } from "@/components/notion/notion-docs-code-page"

interface PageProps {
  params: Promise<{
    slugs: string[]
  }>
}

export async function generateStaticParams(): Promise<{ slugs: string[] }[]> {
  const slugs = await getComponentPageSlugs()
  return slugs.map((slug) => ({ slugs: [slug] }))
}

export default async function Page(props: PageProps): Promise<JSX.Element> {
  const { params } = props
  const { slugs } = await params

  const [slug] = slugs

  const matchedPage = await getComponentPageMatch(slug)

  if (!matchedPage) {
    redirect("/")
  }

  return <NotionDocsCodePage pageId={matchedPage.childPageId ?? ""} />
}
