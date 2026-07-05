"use client"

import { IconMonitorOutline18, IconMoonOutline18, IconSunOutline18 } from "@nattstack/icons"
import {
  Tabs,
  TabsSegmentedList,
  TabsSegmentedTab,
  Tooltip,
  TooltipPopup,
  TooltipTrigger,
} from "@nattstack/ui"
import { useState, type JSX } from "react"

// oxlint-disable-next-line react/only-export-components
export const THEME = {
  AUTO: "auto",
  DARK: "dark",
  LIGHT: "light",
} as const

export type Theme = (typeof THEME)[keyof typeof THEME]

const STORAGE_KEY = "theme"

export function TabsTheme(): JSX.Element {
  const [theme, setTheme] = useState<Theme | undefined>(() =>
    typeof localStorage === "undefined" ? undefined : readStoredTheme(),
  )

  const SIDE_OFFSET = 6

  function onValueChange(value: Theme): void {
    localStorage.setItem(STORAGE_KEY, value)
    applyTheme(value)
    setTheme(value)
  }

  return (
    <Tabs onValueChange={(value) => onValueChange(value)} value={theme}>
      <TabsSegmentedList aria-label="Theme" className="h-36! rounded-full! [&>span]:rounded-full!">
        <Tooltip>
          <TooltipTrigger
            render={
              <TabsSegmentedTab className="px-8!" suppressHydrationWarning value={THEME.AUTO}>
                <IconMonitorOutline18 data-active={theme === THEME.AUTO} suppressHydrationWarning />
              </TabsSegmentedTab>
            }
          />
          <TooltipPopup sideOffset={SIDE_OFFSET}>{getThemeLabel(THEME.AUTO)}</TooltipPopup>
        </Tooltip>
        <Tooltip>
          <TooltipTrigger
            render={
              <TabsSegmentedTab className="px-8!" suppressHydrationWarning value={THEME.LIGHT}>
                <IconSunOutline18 data-active={theme === THEME.LIGHT} suppressHydrationWarning />
              </TabsSegmentedTab>
            }
          />
          <TooltipPopup sideOffset={SIDE_OFFSET}>{getThemeLabel(THEME.LIGHT)}</TooltipPopup>
        </Tooltip>
        <Tooltip>
          <TooltipTrigger
            render={
              <TabsSegmentedTab className="px-8!" suppressHydrationWarning value={THEME.DARK}>
                <IconMoonOutline18 data-active={theme === THEME.DARK} suppressHydrationWarning />
              </TabsSegmentedTab>
            }
          />
          <TooltipPopup sideOffset={SIDE_OFFSET}>{getThemeLabel(THEME.DARK)}</TooltipPopup>
        </Tooltip>
      </TabsSegmentedList>
    </Tabs>
  )
}

function applyTheme(theme: Theme): void {
  const root = document.documentElement
  root.classList.remove(THEME.DARK, THEME.LIGHT)
  root.classList.add(resolveTheme(theme))
}

function getThemeLabel(theme: Theme): string {
  return theme.charAt(0).toUpperCase() + theme.slice(1)
}

function isTheme(value: unknown): value is Theme {
  return value === THEME.AUTO || value === THEME.DARK || value === THEME.LIGHT
}

function readStoredTheme(): Theme {
  const stored = localStorage.getItem(STORAGE_KEY)
  return isTheme(stored) ? stored : THEME.AUTO
}

function resolveTheme(theme: Theme): typeof THEME.DARK | typeof THEME.LIGHT {
  if (theme !== THEME.AUTO) {
    return theme
  }
  return matchMedia("(prefers-color-scheme: dark)").matches ? THEME.DARK : THEME.LIGHT
}
