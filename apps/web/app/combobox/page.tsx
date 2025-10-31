"use client"

import ColorCombobox from "@/app/components/color-combobox"

export default function ComboboxPage() {
  const GRAY_OPTIONS = [
    "color-gray-gray",
    "color-gray-gray-dark",
    "color-gray-mauve",
  ] as const

  const GRAY_GROUP = [
    "color-gray-gray",
    "color-gray-gray-dark",
    "color-gray-mauve",
    "color-gray-mauve-dark",
    "color-gray-slate",
    "color-gray-slate-dark",
    "color-gray-sage",
    "color-gray-sage-dark",
    "color-gray-olive",
    "color-gray-olive-dark",
    "color-gray-sand",
    "color-gray-sand-dark",
  ] as const

  const PRIMARY_OPTIONS = [
    "color-primary-red",
    "color-primary-blue",
    "color-primary-green",
  ] as const

  const PRIMARY_GROUP = [
    "color-primary-red",
    "color-primary-red-dark",
    "color-primary-blue",
    "color-primary-blue-dark",
    "color-primary-green",
    "color-primary-green-dark",
  ] as const

  return (
    <div className="flex flex-col gap-16">
      <ColorCombobox
        label="Gray palette"
        managedGroup={GRAY_GROUP}
        options={GRAY_OPTIONS}
        placeholder="e.g. color-gray-mauve"
      />
      <ColorCombobox
        label="Primary palette"
        managedGroup={PRIMARY_GROUP}
        options={PRIMARY_OPTIONS}
        placeholder="e.g. color-primary-red"
      />
    </div>
  )
}
