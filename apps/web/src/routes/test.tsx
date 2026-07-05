import { Button2, Column } from "@nattstack/ui"
import { createFileRoute } from "@tanstack/react-router"

export const Route = createFileRoute("/test")({
  component: function RouteComponent() {
    return (
      <Column className="gap-y-8">
        <Button2 className="">Click me</Button2>
        <Button2 className="" disabled>
          Disabled
        </Button2>
      </Column>
    )
  },
})
