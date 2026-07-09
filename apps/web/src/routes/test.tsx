// oxlint-disable react-perf/jsx-no-new-array-as-prop
import { type ToggleProps, Toggle, ToggleGroup } from "@base-ui/react"
import { IconDarkLightOutline18, IconSunOutline18, IconPlusOutline18 } from "@nattstack/icons"
import {
  Button,
  Column,
  DialogResponsive,
  DialogResponsivePopup,
  DialogResponsiveTrigger,
  IconButton,
  Label,
  Row,
  Spacer,
} from "@nattstack/ui"
import { createFileRoute } from "@tanstack/react-router"
import type { JSX } from "react"

export const Route = createFileRoute("/test")({
  component: function RouteComponent() {
    return (
      <Column className="gap-y-8">
        <DialogResponsive>
          <DialogResponsiveTrigger
            render={<IconButton icon={<IconDarkLightOutline18 />} variant="ghost" />}
          />
          <DialogResponsivePopup className="max-w-480">
            <h1>Appearance</h1>
            <Spacer height={8} />

            <Label>Mode</Label>
            <Spacer height={4} />
            <ToggleGroup
              aria-label="Text alignment"
              className="d flex w-fit items-center"
              defaultValue={["left"]}
            >
              <ToggleMode>
                <IconSunOutline18 />
              </ToggleMode>
              <ToggleMode>
                <IconSunOutline18 />
              </ToggleMode>
              <ToggleMode>
                <IconSunOutline18 />
              </ToggleMode>
            </ToggleGroup>
            <Spacer height={16} />

            <Label>Color</Label>
            <Spacer height={4} />
            <ToggleGroup
              aria-label="Text alignment"
              className="
                grid w-full grid-cols-[repeat(auto-fit,minmax(40px,1fr))]
                items-center gap-8
              "
              defaultValue={["left"]}
            >
              {/* 20 items */}
              {Array.from({ length: 20 }).map((_, index) => (
                <ToggleColor key={index} value={index.toString()}>
                  <IconSunOutline18 />
                </ToggleColor>
              ))}
            </ToggleGroup>
          </DialogResponsivePopup>
        </DialogResponsive>

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

function ToggleColor(props: ToggleProps<string>): JSX.Element {
  const { ...rest } = props

  return (
    <Toggle
      aria-label="Align right"
      className="
        aspect-1-1 flex w-full items-center justify-center overflow-hidden
        rounded-full outline-offset-2
        data-pressed:outline-2
      "
      value="right"
      {...rest}
    >
      <Row className="bg-primary size-full" />
    </Toggle>
  )
}

function ToggleMode(props: ToggleProps<string>): JSX.Element {
  return (
    <Toggle
      aria-label="Align right"
      className="d flex size-40 items-center justify-center"
      value="right"
      {...props}
    />
  )
}
