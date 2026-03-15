import { Button, Column, Label, Spacer } from "@nattui/react-components"
import { ColorCombobox } from "@/components/color-combobox"
import { ToggleGroupTheme } from "@/components/toggle-group-theme"

export default function ComboboxPage() {
  const GRAY_OPTIONS = [
    "color-gray-gray",
    "color-gray-mauve",
    "color-gray-slate",
    "color-gray-sage",
    "color-gray-olive",
    "color-gray-sand",
  ] as const

  const PRIMARY_OPTIONS = [
    "color-primary-amber",
    "color-primary-blue",
    "color-primary-bronze",
    "color-primary-brown",
    "color-primary-crimson",
    "color-primary-cyan",
    "color-primary-gold",
    "color-primary-grass",
    "color-primary-green",
    "color-primary-indigo",
    "color-primary-iris",
    "color-primary-jade",
    "color-primary-lime",
    "color-primary-mint",
    "color-primary-orange",
    "color-primary-pink",
    "color-primary-plum",
    "color-primary-purple",
    "color-primary-red",
    "color-primary-ruby",
    "color-primary-sky",
    "color-primary-teal",
    "color-primary-tomato",
    "color-primary-violet",
    "color-primary-yellow",
  ] as const

  return (
    <Column>
      <Label>Theme</Label>
      <Spacer height={4} />
      <div className="w-full overflow-x-auto">
        <ToggleGroupTheme />
      </div>
      <Spacer height={16} />

      <ColorCombobox
        label="Gray palette"
        options={GRAY_OPTIONS}
        placeholder="e.g. color-gray-mauve"
      />
      <Spacer height={16} />
      <ColorCombobox
        label="Primary palette"
        options={PRIMARY_OPTIONS}
        placeholder="e.g. color-primary-red"
      />
      <Spacer height={16} />

      <Button variant="accent">Search</Button>
      <Spacer height={16} />
      <Button variant="primary">Search</Button>
    </Column>
  )
}
