import { createFileRoute } from "@tanstack/react-router"
import { MDX_COMPONENTS } from "#/components/mdx-components"
import GettingStartedContent from "#/routes/-index-content.mdx"

export const Route = createFileRoute("/")({
  component: function RouteIndex() {
    return <GettingStartedContent components={MDX_COMPONENTS} />
  },
})
