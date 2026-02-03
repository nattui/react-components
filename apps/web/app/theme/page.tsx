"use client"

import { Toggle } from "@base-ui/react/toggle"
import { ToggleGroup } from "@base-ui/react/toggle-group"
import { LucideMonitor, LucideMoon, LucideSun } from "@nattui/icons"
import { Button, Label, Spacer } from "@nattui/react-components"
import { useState } from "react"
import { ColorCombobox } from "@/components/color-combobox"

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
    <div className="flex flex-col">
      <Label>Theme</Label>
      <Spacer className="h-4" />
      <ThemeToggle />
      <Spacer className="h-16" />

      <ColorCombobox
        label="Gray palette"
        options={GRAY_OPTIONS}
        placeholder="e.g. color-gray-mauve"
      />
      <Spacer className="h-16" />
      <ColorCombobox
        label="Primary palette"
        options={PRIMARY_OPTIONS}
        placeholder="e.g. color-primary-red"
      />
      <Spacer className="h-16" />

      <Button variant="accent">Search</Button>
      <Spacer className="h-16" />
      <Button variant="primary">Search</Button>
    </div>
  )
}

function ThemeToggle() {
  const [theme, setTheme] = useState<string[]>(["light"])

  const ICON_SIZE = 16

  function onValueChange(value: string[]) {
    if (value.length > 0) {
      theme.forEach((item) => {
        document.body.classList.remove(item)
      })
      value.forEach((item) => {
        document.body.classList.add(item)
      })
      setTheme(value)
    }
  }

  return (
    <ToggleGroup
      className="rounded-8 bg-gray-3 flex w-fit gap-x-2 overflow-hidden p-2"
      onValueChange={onValueChange}
      value={theme}
    >
      <Toggle
        className="rounded-6 hover:bg-gray-2 data-pressed:bg-gray-1 data-pressed:text-gray-12 focus-visible:outline-primary-9 active:bg-gray-2 group flex h-32 cursor-pointer items-center justify-center gap-x-6 px-8 outline-2 outline-transparent transition-[background-color] select-none"
        value="light"
      >
        <span className="text-gray-11 text-14 font-500 group-data-pressed:text-gray-12 transition-colors">
          Light
        </span>
        <LucideSun
          className="text-gray-11 group-data-pressed:text-gray-12 transition-colors"
          size={ICON_SIZE}
        />
      </Toggle>
      <Toggle
        className="rounded-6 hover:bg-gray-2 data-pressed:bg-gray-1 data-pressed:text-gray-12 focus-visible:outline-primary-9 active:bg-gray-2 group flex h-32 cursor-pointer items-center justify-center gap-x-6 px-8 outline-2 outline-transparent transition-[background-color] select-none"
        value="dark"
      >
        <span className="text-gray-11 text-14 font-500 group-data-pressed:text-gray-12 transition-colors">
          Dark
        </span>
        <LucideMoon
          className="text-gray-11 group-data-pressed:text-gray-12 transition-colors"
          size={ICON_SIZE}
        />
      </Toggle>
      <Toggle
        className="rounded-6 hover:bg-gray-2 data-pressed:bg-gray-1 data-pressed:text-gray-12 focus-visible:outline-primary-9 active:bg-gray-2 group flex h-32 cursor-pointer items-center justify-center gap-x-6 px-8 outline-2 outline-transparent transition-[background-color] select-none"
        value="system"
      >
        <span className="text-gray-11 text-14 font-500 group-data-pressed:text-gray-12 transition-colors">
          System
        </span>
        <LucideMonitor
          className="text-gray-11 group-data-pressed:text-gray-12 transition-colors"
          size={ICON_SIZE}
        />
      </Toggle>
    </ToggleGroup>
  )
}
