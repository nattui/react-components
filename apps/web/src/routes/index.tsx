import { Button, Spacer } from "@nattstack/ui"
import { createFileRoute } from "@tanstack/react-router"

export const Route = createFileRoute("/")({
  component: function RouteIndex() {
    return (
      <>
        <Spacer height={72} />

        <h1 className="text-30">Button</h1>
        <Spacer height={16} />

        <Button>Click me</Button>
        <Spacer height={1500} />
      </>
    )
  },
})
