"use client"

import { ToggleGroup } from "@base-ui/react"
import { LucideMonitor, LucideMoon, LucideSun } from "@nattui/icons"
import { useState } from "react"
import { ToggleGroupThemeItem } from "@/components/toggle-group-theme-item"

export const THEME = {
  DARK: "dark",
  LIGHT: "light",
  SYSTEM: "system",
}

export type Theme = (typeof THEME)[keyof typeof THEME]

export function ToggleGroupTheme() {
  const [theme, setTheme] = useState<Theme[]>([THEME.LIGHT])

  function onValueChange(value: Theme[]) {
    if (value.length > 0) {
      document.body.classList.remove(...theme)
      document.body.classList.add(...value)
      setTheme(value)
    }
  }

  return (
    <ToggleGroup
      className="rounded-8 bg-gray-3 flex w-fit gap-x-2 overflow-hidden p-2"
      onValueChange={onValueChange}
      value={theme}
    >
      <ToggleGroupThemeItem
        icon={LucideSun}
        isActive={theme.includes(THEME.LIGHT)}
        label="Light"
        value={THEME.LIGHT}
      />
      <ToggleGroupThemeItem
        icon={LucideMoon}
        isActive={theme.includes(THEME.DARK)}
        label="Dark"
        value={THEME.DARK}
      />
      <ToggleGroupThemeItem
        icon={LucideMonitor}
        isActive={theme.includes(THEME.SYSTEM)}
        label="System"
        value={THEME.SYSTEM}
      />
    </ToggleGroup>
  )
}
