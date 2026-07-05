import { Button2, Column } from "@nattstack/ui"
import { createFileRoute } from "@tanstack/react-router"

export const Route = createFileRoute("/test")({
  component: function RouteComponent() {
    return (
      <Column className="gap-y-8">
        <Button2>Click me</Button2>
        <Button2 isDisabled>Disabled</Button2>

        <Button2 isRounded size={32}>
          Size 32
        </Button2>
        <Button2 isRounded size={36}>
          Size 36
        </Button2>
        <Button2 isRounded size={40}>
          Size 40
        </Button2>
        <Button2 isRounded size={44}>
          Size 44
        </Button2>
        <Button2 isRounded size={48}>
          Size 48
        </Button2>

        <Button2 size={32}>Size 32</Button2>
        <Button2 size={36}>Size 36</Button2>
        <Button2 size={40}>Size 40</Button2>
        <Button2 size={44}>Size 44</Button2>
        <Button2 size={48}>Size 48</Button2>

        <Button2 isFullWidth>Full width</Button2>
      </Column>
    )
  },
})
