// oxlint-disable react-perf/jsx-no-new-array-as-prop

import { Claude, DeepSeek, Gemini, Grok, OpenAI } from "@lobehub/icons"
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
import { useState, type JSX, type ReactNode } from "react"
import { DialogAppearance } from "#/components/dialog-appearance"

const ICON_SIZE = 18

const MODELS = [
  {
    label: <ModelOption icon={<OpenAI size={ICON_SIZE} />} label="GPT-4o" />,
    value: "gpt-4o",
  },
  {
    label: <ModelOption icon={<Claude.Color size={ICON_SIZE} />} label="Claude Sonnet 4" />,
    value: "claude-sonnet-4",
  },
  {
    label: <ModelOption icon={<Gemini.Color size={ICON_SIZE} />} label="Gemini 2.5 Pro" />,
    value: "gemini-2.5-pro",
  },
  {
    label: <ModelOption icon={<DeepSeek.Color size={ICON_SIZE} />} label="DeepSeek V3" />,
    value: "deepseek-v3",
  },
  {
    label: <ModelOption icon={<Grok size={ICON_SIZE} />} label="Grok 3" />,
    value: "grok-3",
  },
]

export const Route = createFileRoute("/test")({
  component: function RouteComponent() {
    const [model, setModel] = useState<null | string>("gpt-4o")

    return (
      <Column className="gap-y-8">
        <Select
          items={MODELS}
          onValueChange={(value) => {
            if (typeof value === "string" || value === null) {
              setModel(value)
            }
          }}
          value={model}
        >
          <SelectTrigger className="max-w-288" placeholder="Select a model" />
          <SelectContent>
            <SelectGroup>
              <SelectGroupLabel>Models</SelectGroupLabel>
              {MODELS.map((option) => (
                <SelectItem key={option.value} value={option.value}>
                  {option.label}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>

        <Select>
          <SelectTrigger className="max-w-288" placeholder="Select a font" />
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

        <Select defaultValue="sans" disabled>
          <SelectTrigger className="max-w-288" placeholder="Select a font" />
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

function ModelOption(props: { icon: ReactNode; label: string }): JSX.Element {
  const { icon, label } = props

  return (
    <>
      {icon}
      {label}
    </>
  )
}

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
