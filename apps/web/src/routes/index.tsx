import { Spacer } from "@nattstack/ui"
import { createFileRoute } from "@tanstack/react-router"

export const Route = createFileRoute("/")({
  component: function RouteIndex() {
    return (
      <>
        <Spacer height={64} />

        <p>WIP</p>
      </>
    )
  },
})
