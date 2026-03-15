import { redirect } from "next/navigation"
import { getComponentPageMatch } from "@/app/(sidebar)/components/[...slugs]/get-component-page-match"
import { NotionDocsCodePage } from "@/components/notion/notion-docs-code-page"

interface PageProps {
  params: Promise<{
    slugs: string[]
  }>
}

export default async function Page(props: PageProps) {
  const { params } = props
  const { slugs } = await params

  const [slug] = slugs

  const matchedPage = await getComponentPageMatch(slug)

  if (!matchedPage) {
    redirect("/")
  }

  return <NotionDocsCodePage pageId={matchedPage.childPageId ?? ""} />
}
