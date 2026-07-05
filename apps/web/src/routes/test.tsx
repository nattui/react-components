import { Button2 } from "@nattstack/ui"
import { createFileRoute } from "@tanstack/react-router"

export const Route = createFileRoute("/test")({
  component: function RouteComponent() {
    return (
      <>
        <Button2 className="d">asdf</Button2>
      </>
    )
  },
})
