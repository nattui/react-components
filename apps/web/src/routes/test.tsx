// oxlint-disable react-perf/jsx-no-new-array-as-prop

import { IconPlusOutline18 } from "@nattstack/icons"
import {
  Button,
  Column,
  IconButton,
  Select,
  SelectContent,
  SelectGroup,
  SelectGroupLabel,
  SelectItem,
  SelectSeparator,
  SelectTrigger,
  Spacer,
} from "@nattstack/ui"
import { createFileRoute } from "@tanstack/react-router"
import { DialogAppearance } from "#/components/dialog-appearance"

export const Route = createFileRoute("/test")({
  component: function RouteComponent() {
    return (
      <Column className="gap-y-8">
        <Select>
          <SelectTrigger className="w-full max-w-320" placeholder="Select a font" />
          <SelectContent>
            <SelectGroup>
              <SelectGroupLabel>Fonts</SelectGroupLabel>
              <SelectItem value="sans">Sans-serif</SelectItem>
              <SelectItem value="serif">Serif</SelectItem>
              <SelectItem isDisabled value="cursive">
                Cursive
              </SelectItem>
            </SelectGroup>
            <SelectSeparator />
            <SelectItem value="mono">Monospace</SelectItem>
            <SelectItem value="Monospace monospace monospace monospace monospace">
              Monospace monospace monospace monospace monospace
            </SelectItem>
          </SelectContent>
        </Select>

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
