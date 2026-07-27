import { Claude, Gemini, Grok, OpenAI, type IconType } from "@lobehub/icons"
import { IconPlusOutline18 } from "@nattstack/icons"
import {
  Button,
  Column,
  Combobox,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxInput,
  ComboboxItem,
  ComboboxList,
  ComboboxSearch,
  ComboboxTrigger,
  ComboboxValue,
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

const MODELS: Model[] = [
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

const FONTS = ["Sans-serif", "Serif", "Monospace", "Cursive", "Fantasy", "System UI"]

export const Route = createFileRoute("/test")({
  component: function RouteComponent() {
    return (
      <Column>
        <Label>Model</Label>
        <Spacer height={4} />

        <Select defaultValue={MODELS[0]} itemToStringValue={(item: Model) => item.value}>
          <SelectTrigger className="max-w-288">
            <SelectValue placeholder="Select a model">
              {(model: Model) => (
                <Row className="items-center">
                  {model.icon && <model.icon className="mr-8" size={ICON_SIZE} />}
                  <span className="truncate">{model.label}</span>
                  {model.description && (
                    <span className="text-13 text-gray-9 font-400 ml-6 truncate">
                      {model.description}
                    </span>
                  )}
                </Row>
              )}
            </SelectValue>
          </SelectTrigger>
          <SelectContent>
            {MODELS.map((model) => (
              <SelectItem key={model.value} label={model.label} value={model}>
                <Row className="items-center">
                  {model.icon && <model.icon className="mr-8" size={ICON_SIZE} />}
                  <span className="truncate">{model.label}</span>
                  {model.description && (
                    <span className="text-13 text-gray-9 font-400 ml-6 truncate">
                      {model.description}
                    </span>
                  )}
                </Row>
              </SelectItem>
            ))}
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
        <Spacer height={32} />

        <Label>Combobox</Label>
        <Spacer height={4} />

        <Combobox defaultValue={MODELS[0]} items={MODELS}>
          <ComboboxTrigger className="max-w-288">
            <ComboboxValue placeholder="Select a model">
              {(model: Model) => (
                <Row className="items-center">
                  {model.icon && <model.icon className="mr-8" size={ICON_SIZE} />}
                  <span className="truncate">{model.label}</span>
                  {model.description && (
                    <span className="text-12 text-gray-9 font-400 ml-6 truncate">
                      {model.description}
                    </span>
                  )}
                </Row>
              )}
            </ComboboxValue>
          </ComboboxTrigger>
          <ComboboxContent>
            <ComboboxSearch placeholder="Search models" />
            <ComboboxEmpty>No models found.</ComboboxEmpty>
            <ComboboxList>
              {(model: Model) => (
                <ComboboxItem key={model.value} value={model}>
                  <Row className="items-center">
                    {model.icon && <model.icon className="mr-8" size={ICON_SIZE} />}
                    <span className="truncate">{model.label}</span>
                    {model.description && (
                      <span className="text-12 text-gray-9 font-400 ml-6 truncate">
                        {model.description}
                      </span>
                    )}
                  </Row>
                </ComboboxItem>
              )}
            </ComboboxList>
          </ComboboxContent>
        </Combobox>
        <Spacer height={16} />

        <Combobox items={FONTS}>
          <ComboboxInput className="max-w-288" placeholder="Search a font" />
          <ComboboxContent>
            <ComboboxEmpty>No fonts found.</ComboboxEmpty>
            <ComboboxList>
              {(font: string) => (
                <ComboboxItem key={font} value={font}>
                  {font}
                </ComboboxItem>
              )}
            </ComboboxList>
          </ComboboxContent>
        </Combobox>
        <Spacer height={16} />

        <Combobox defaultValue="Sans-serif" disabled items={FONTS}>
          <ComboboxInput className="max-w-288" placeholder="Search a font" />
        </Combobox>
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
