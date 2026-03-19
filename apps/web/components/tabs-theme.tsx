"use client"

import { LucideMonitor, LucideMoon, LucideSun } from "@nattstack/icons"
import { Tabs, TabsSegmentedList, TabsSegmentedTab } from "@nattstack/ui/react"
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
    <Tabs onValueChange={(value) => onValueChange(value as Theme)} value={theme}>
      <TabsSegmentedList aria-label="Theme">
        <TabsSegmentedTab value={THEME.LIGHT}>
          <LucideSun
            className="data-[active=true]:text-primary-9"
            data-active={theme === THEME.LIGHT}
            size={16}
          />
          Light
        </TabsSegmentedTab>
        <TabsSegmentedTab value={THEME.DARK}>
          <LucideMoon
            className="data-[active=true]:text-primary-9"
            data-active={theme === THEME.DARK}
            size={16}
          />
          Dark
        </TabsSegmentedTab>
        <TabsSegmentedTab value={THEME.SYSTEM}>
          <LucideMonitor
            className="data-[active=true]:text-primary-9"
            data-active={theme === THEME.SYSTEM}
            size={16}
          />
          System
        </TabsSegmentedTab>
      </TabsSegmentedList>
    </Tabs>
  )
}
