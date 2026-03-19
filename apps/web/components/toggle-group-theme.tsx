"use client"

import { Tabs, TabsSegmentedList } from "@nattstack/ui/react"
import { LucideMonitor, LucideMoon, LucideSun } from "@nattstack/icons"
import { useState } from "react"
import { ToggleGroupThemeItem } from "@/components/toggle-group-theme-item"

export const THEME = {
  DARK: "dark",
  LIGHT: "light",
  SYSTEM: "system",
}

export type Theme = (typeof THEME)[keyof typeof THEME]

export function ToggleGroupTheme() {
  const [theme, setTheme] = useState<Theme>(THEME.LIGHT)

  function onValueChange(value: Theme) {
    globalThis.document.body.classList.remove(...Object.values(THEME))
    globalThis.document.body.classList.add(value)
    setTheme(value)
  }

  return (
    <Tabs
      onValueChange={(value) => onValueChange(value as Theme)}
      value={theme}
    >
      <TabsSegmentedList aria-label="Theme">
        <ToggleGroupThemeItem
          icon={LucideSun}
          label="Light"
          value={THEME.LIGHT}
        />
        <ToggleGroupThemeItem
          icon={LucideMoon}
          label="Dark"
          value={THEME.DARK}
        />
        <ToggleGroupThemeItem
          icon={LucideMonitor}
          label="System"
          value={THEME.SYSTEM}
        />
      </TabsSegmentedList>
    </Tabs>
  )
}
