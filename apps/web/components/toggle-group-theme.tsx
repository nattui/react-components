"use client"

import { Toggle, ToggleGroup, type ToggleProps } from "@base-ui/react"
import { type LucideIcon, LucideMonitor, LucideMoon, LucideSun } from "@nattui/icons"
import { useState } from "react"

const THEME = {
  DARK: "dark",
  LIGHT: "light",
  SYSTEM: "system",
}

type Theme = (typeof THEME)[keyof typeof THEME]

interface ToggleThemeProps extends ToggleProps {
  icon: LucideIcon
  text: string
  value: Theme
}

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
      <ToggleTheme icon={LucideSun} text="Light" value={THEME.LIGHT} />
      <ToggleTheme icon={LucideMoon} text="Dark" value={THEME.DARK} />
      <ToggleTheme icon={LucideMonitor} text="System" value={THEME.SYSTEM} />
    </ToggleGroup>
  )
}

function ToggleTheme(props: ToggleThemeProps) {
  const { icon: Icon, text, value, ...rest } = props

  const ICON_SIZE = 16

  return (
    <Toggle
      className="rounded-6 data-pressed:bg-gray-1 data-pressed:text-gray-12 focus-visible:outline-primary-9 active:bg-gray-2 group flex h-32 cursor-pointer items-center justify-center gap-x-6 px-10 outline-2 outline-transparent transition-[background-color] select-none"
      value={value}
      {...rest}
    >
      <span className="text-gray-11 text-14 font-500 group-data-pressed:text-gray-12 group-hover:text-gray-12 transition-colors">
        {text}
      </span>
      <Icon
        className="text-gray-11 group-data-pressed:text-gray-12 group-hover:text-gray-12 transition-colors"
        size={ICON_SIZE}
      />
    </Toggle>
  )
}
