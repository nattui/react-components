import { Claude } from "@lobehub/icons"
import { IconChevronDownOutline18, IconPlusOutline18 } from "@nattstack/icons"
import { Button, Column, IconButton, Spacer } from "@nattstack/ui"
import { createFileRoute } from "@tanstack/react-router"
import { DialogAppearance } from "#/components/dialog-appearance"

export const Route = createFileRoute("/test")({
  component: function RouteComponent() {
    return (
      <Column className="gap-y-8">
        <Button
          className="w-full max-w-256"
          iconEnd={<IconChevronDownOutline18 className="ml-auto" size={14} />}
          iconStart={<Claude.Color size={18} />}
          label="Fable 5 Medium"
          variant="secondary"
        />
        <Spacer height={64} />

        <DialogAppearance />

        <IconButton icon={<IconPlusOutline18 />} />

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

// function ToggleMode(props: ToggleProps<string>): JSX.Element {
//   return (
//     <Toggle
//       aria-label="Align right"
//       className="d flex size-40 items-center justify-center"
//       value="right"
//       {...props}
//     />
//   )
// }
