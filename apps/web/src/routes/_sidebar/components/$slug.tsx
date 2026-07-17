import { createFileRoute, notFound } from "@tanstack/react-router"
import type { MDXComponents } from "mdx/types"
import type { ComponentType } from "react"
import { MDX_COMPONENTS } from "#/components/mdx-components"
import { InputContent } from "#/routes/_sidebar/components/-input-content"
import ButtonContent from "#/routes/_sidebar/components/button.mdx"
import DialogResponsiveContent from "#/routes/_sidebar/components/dialog-responsive.mdx"
import IconButtonContent from "#/routes/_sidebar/components/icon-button.mdx"
import MenuContent from "#/routes/_sidebar/components/menu.mdx"
import SwitchContent from "#/routes/_sidebar/components/switch.mdx"
import TabsPillContent from "#/routes/_sidebar/components/tabs-pill.mdx"
import TabsSegmentedContent from "#/routes/_sidebar/components/tabs-segmented.mdx"
import TabsUnderlineContent from "#/routes/_sidebar/components/tabs-underline.mdx"
import TextareaContent from "#/routes/_sidebar/components/textarea.mdx"
import TooltipContent from "#/routes/_sidebar/components/tooltip.mdx"
import { formatTitle } from "#/utils/format-title"

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
  "dialog-responsive": {
    Content: DialogResponsiveContent,
    title: "DialogResponsive",
  },
  "icon-button": {
    Content: IconButtonContent,
    title: "IconButton",
  },
  input: {
    Content: InputContent,
    title: "Input",
  },
  menu: {
    Content: MenuContent,
    title: "Menu",
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
  textarea: {
    Content: TextareaContent,
    title: "Textarea",
  },
  tooltip: {
    Content: TooltipContent,
    title: "Tooltip",
  },
}

function getComponentPage(slug: string): ComponentPage | undefined {
  return COMPONENT_PAGES[slug]
}

export const Route = createFileRoute("/_sidebar/components/$slug")({
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
          title: `${formatTitle(page.title)} · Retell UI`,
        },
      ],
    }
  },
})
