import { IconPlusOutline18 } from "@nattstack/icons"
import { Button, Column } from "@nattstack/ui"
import { createFileRoute } from "@tanstack/react-router"

export const Route = createFileRoute("/test")({
  component: function RouteComponent() {
    return (
      <Column className="gap-y-8">
        <Button>Click me</Button>

        <Button isDisabled>Disabled</Button>
        <Button isLoading>Loading</Button>

        <Button isRounded size={32}>
          Size 32
        </Button>
        <Button isRounded size={36}>
          Size 36
        </Button>
        <Button isRounded size={40}>
          Size 40
        </Button>
        <Button isRounded size={44}>
          Size 44
        </Button>
        <Button isRounded size={48}>
          Size 48
        </Button>

        <Button size={32}>Size 32</Button>
        <Button size={36}>Size 36</Button>
        <Button size={40}>Size 40</Button>
        <Button size={44}>Size 44</Button>
        <Button size={48}>Size 48</Button>

        <Button isFullWidth>Full width</Button>

        <Button variant="ghost">Ghost</Button>
        <Button variant="primary">Primary</Button>
        <Button variant="secondary">Secondary</Button>

        <Button iconStart={<IconPlusOutline18 />} variant="secondary">
          Secondary
        </Button>
      </Column>
    )
  },
})
