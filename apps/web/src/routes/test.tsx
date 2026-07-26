import { Claude, Gemini, Grok, OpenAI, type IconType } from "@lobehub/icons"
import { IconChevronDownOutline18, IconPlusOutline18 } from "@nattstack/icons"
import {
  Button,
  Column,
  IconButton,
  Label,
  Row,
  Select,
  SelectContent,
  SelectGroup,
  SelectGroupLabel,
  SelectItem,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
  Spacer,
} from "@nattstack/ui"
import { createFileRoute } from "@tanstack/react-router"
import { DialogAppearance } from "#/components/dialog-appearance"

const ICON_SIZE = 18

interface Model {
  description?: string
  icon?: IconType
  label: string
  value: string
}

const MODELS_2: Model[] = [
  {
    description: "Max",
    icon: Claude.Color,
    label: "Fable 5",
    value: "fable-5",
  },
  {
    description: "High Fast",
    icon: Grok,
    label: "Grok 4.5",
    value: "grok-4.5",
  },
  {
    description: "Medium",
    icon: OpenAI,
    label: "GPT-5.6 Sol",
    value: "gpt-5.6-sol",
  },
  {
    description: "Fast",
    icon: Gemini.Color,
    label: "Gemini 2.5 Pro",
    value: "gemini-2.5-pro",
  },
]

export const Route = createFileRoute("/test")({
  component: function RouteComponent() {
    return (
      <Column>
        <Label>Model</Label>
        <Spacer height={4} />
        <Row
          className="
            rounded-10 bg-bg-shell-inner
            hover:bg-gray-3
            relative h-40 max-w-288 cursor-pointer items-center justify-between
            overflow-hidden pr-48 pl-16
            shadow-[inset_0_0_0_1px_var(--color-border)]
            transition-[background-color]
          "
        >
          <Row className="w-full items-center">
            <Grok className="mr-8" size={ICON_SIZE} />
            <span className="text-14 text-text-primary truncate font-[450]">Cursor Grok 4.5</span>
            <span className="text-12 text-gray-9 ml-8 truncate">High Fast</span>
          </Row>

          <Row className="absolute right-16 size-16 items-center justify-center">
            <IconChevronDownOutline18 size={14} />
          </Row>
        </Row>
        <Spacer height={64} />

        <Select defaultValue={MODELS_2[0]} itemToStringValue={(item: Model) => item.value}>
          <SelectTrigger className="max-w-288">
            <SelectValue placeholder="Select a model">
              {(model: Model) => (
                <Row className="w-full items-center">
                  {model.icon && <model.icon className="mr-8" size={ICON_SIZE} />}
                  <span className="text-14 text-text-primary truncate font-[450]">
                    {model.label}
                  </span>
                  {model.description && (
                    <span className="text-12 text-gray-9 ml-8 truncate">{model.description}</span>
                  )}
                </Row>
              )}
            </SelectValue>
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectGroupLabel>Models</SelectGroupLabel>
              {MODELS_2.map((model) => (
                <SelectItem key={model.value} value={model}>
                  {model.icon && <model.icon className="mr-8" size={ICON_SIZE} />}
                  <span className="text-14 text-text-primary truncate font-[450]">
                    {model.label}
                  </span>
                  {model.description && (
                    <span className="text-12 text-gray-9 ml-8 truncate">{model.description}</span>
                  )}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
        <Spacer height={16} />

        <Select>
          <SelectTrigger className="max-w-288">
            <SelectValue placeholder="Select a font" />
          </SelectTrigger>
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
        <Spacer height={16} />

        <Select defaultValue="sans" disabled>
          <SelectTrigger className="max-w-288">
            <SelectValue placeholder="Select a font" />
          </SelectTrigger>
        </Select>
        <Spacer height={64} />

        <Column className="gap-y-16">
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
      </Column>
    )
  },
})
