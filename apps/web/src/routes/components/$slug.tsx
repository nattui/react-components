import { createFileRoute, notFound } from "@tanstack/react-router"
import type { MDXComponents } from "mdx/types"
import type { ComponentType } from "react"
import { MDX_COMPONENTS } from "#/components/mdx-components"
import ButtonContent from "#/routes/components/button.mdx"
import SwitchContent from "#/routes/components/switch.mdx"
import TabsPillContent from "#/routes/components/tabs-pill.mdx"
import TabsSegmentedContent from "#/routes/components/tabs-segmented.mdx"
import TabsUnderlineContent from "#/routes/components/tabs-underline.mdx"
import TooltipContent from "#/routes/components/tooltip.mdx"

interface ComponentPage {
  Content: ComponentType<{
    components?: MDXComponents
  }>
  title: string
}

const COMPONENT_PAGES: Record<string, ComponentPage> = {
  button: {
    Content: ButtonContent,
    title: "Button",
  },
  switch: {
    Content: SwitchContent,
    title: "Switch",
  },
  "tabs-pill": {
    Content: TabsPillContent,
    title: "TabsPill",
  },
  "tabs-segmented": {
    Content: TabsSegmentedContent,
    title: "TabsSegmented",
  },
  "tabs-underline": {
    Content: TabsUnderlineContent,
    title: "TabsUnderline",
  },
  tooltip: {
    Content: TooltipContent,
    title: "Tooltip",
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

    const { Content } = page

    return <Content components={MDX_COMPONENTS} />
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
