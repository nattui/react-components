"use client"

import { Tabs, TabsSegmentedList, TabsSegmentedTab } from "@nattstack/ui/react"
import { LucideMonitor, LucideMoon, LucideSun } from "@nattstack/icons"
import { useState } from "react"

export const THEME = {
  DARK: "dark",
  LIGHT: "light",
  SYSTEM: "system",
}

export type Theme = (typeof THEME)[keyof typeof THEME]

export function TabsTheme() {
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
        <TabsSegmentedTab value={THEME.LIGHT}><LucideSun size={16} /> Light</TabsSegmentedTab>
        <TabsSegmentedTab value={THEME.DARK}><LucideMoon size={16} /> Dark</TabsSegmentedTab>
        <TabsSegmentedTab value={THEME.SYSTEM}><LucideMonitor size={16} /> System</TabsSegmentedTab>
      </TabsSegmentedList>
    </Tabs>
  )
}
