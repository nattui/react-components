"use client"

import { Button } from "@nattui/react-components"
import ColorCombobox from "@/app/components/color-combobox"

export default function ComboboxPage() {
  const GRAY_OPTIONS = [
    "color-gray-gray",
    "color-gray-mauve",
    "color-gray-slate",
    "color-gray-sage",
    "color-gray-olive",
    "color-gray-sand",
    "color-gray-gray-dark",
    "color-gray-mauve-dark",
    "color-gray-slate-dark",
    "color-gray-sage-dark",
    "color-gray-olive-dark",
    "color-gray-sand-dark",
  ] as const

  const PRIMARY_OPTIONS = [
    "color-primary-red",
    "color-primary-crimson",
    "color-primary-blue",
    "color-primary-green",
    "color-primary-red-dark",
    "color-primary-crimson-dark",
    "color-primary-blue-dark",
    "color-primary-green-dark",
  ] as const

  return (
    <div className="flex flex-col gap-16 p-64">
      <ColorCombobox
        label="Gray palette"
        options={GRAY_OPTIONS}
        placeholder="e.g. color-gray-mauve"
      />
      <ColorCombobox
        label="Primary palette"
        options={PRIMARY_OPTIONS}
        placeholder="e.g. color-primary-red"
      />
      <Button variant="accent">Search</Button>
      <Button variant="primary">Search</Button>
    </div>
  )
}
