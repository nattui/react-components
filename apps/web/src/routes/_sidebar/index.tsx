import { Spacer } from "@nattstack/ui"
import { createFileRoute, Link } from "@tanstack/react-router"

export const Route = createFileRoute("/_sidebar/")({
  component: function RouteIndex() {
    return (
      <>
        <h1 className="text-30 font-500">Welcome to Retell UI React Components</h1>
        <Spacer height={16} />

        <Link className="ui-link" params={{ slug: "button" }} to="/components/$slug">
          Get started
        </Link>
      </>
    )
  },
})
