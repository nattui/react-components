import { Spacer } from "@nattstack/ui"
import { createFileRoute, notFound } from "@tanstack/react-router"
import type { MDXComponents } from "mdx/types"
import type { ComponentType } from "react"
import { MDX_COMPONENTS } from "#/components/mdx-components"
import ButtonContent from "./button.mdx"

interface ComponentPage {
  Content: ComponentType<{
    components?: MDXComponents
  }>
  description?: string
  title: string
}

const COMPONENT_PAGES: Record<string, ComponentPage> = {
  button: {
    Content: ButtonContent,
    description: "Use buttons to trigger actions in the interface.",
    title: "Button",
  },
}

function getComponentPage(slug: string): ComponentPage | undefined {
  return COMPONENT_PAGES[slug]
}

export const Route = createFileRoute("/components/$slug")({
  component: function RouteComponentPage() {
    const { slug } = Route.useParams()

    const page = getComponentPage(slug)

    if (!page) {
      throw notFound()
    }

    const { Content, description, title } = page

    return (
      <>
        <h1 className="text-30 leading-1-25 text-balance">{title}</h1>
        {description ? (
          <>
            <Spacer height={8} />
            <p className="text-gray-11 text-16 text-pretty">{description}</p>
          </>
        ) : undefined}

        <Spacer height={32} />

        <Content components={MDX_COMPONENTS} />
      </>
    )
  },
  head: function RouteComponentPageHead(context) {
    const { params } = context

    const page = getComponentPage(params.slug)

    if (!page) {
      return {}
    }

    return {
      meta: [
        {
          title: `${page.title} | Natt`,
        },
      ],
    }
  },
})
