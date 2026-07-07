import { IconPlusOutline18 } from "@nattstack/icons"
import { Button, Column } from "@nattstack/ui"
import { createFileRoute } from "@tanstack/react-router"

export const Route = createFileRoute("/test")({
  component: function RouteComponent() {
    return (
      <Column className="gap-y-8">
        <Button label="Click me" />

        <Button isDisabled label="Disabled" />
        <Button isLoading label="Loading" />

        <Button isRounded label="Size 32" size={32} />
        <Button isRounded label="Size 36" size={36} />
        <Button isRounded label="Size 40" size={40} />
        <Button isRounded label="Size 44" size={44} />
        <Button isRounded label="Size 48" size={48} />

        <Button label="Size 32" size={32} />
        <Button label="Size 36" size={36} />
        <Button label="Size 40" size={40} />
        <Button label="Size 44" size={44} />
        <Button label="Size 48" size={48} />

        <Button isFullWidth label="Full width" />

        <Button label="Ghost" variant="ghost" />
        <Button label="Primary" variant="primary" />
        <Button label="Secondary" variant="secondary" />

        <Button iconStart={<IconPlusOutline18 />} label="Secondary" variant="secondary" />
      </Column>
    )
  },
})
