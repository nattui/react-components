import { IconMonitorOutline18, IconMoonOutline18, IconSunOutline18 } from "@nattstack/icons"
import {
  Tabs,
  TabsSegmentedList,
  TabsSegmentedTab,
  Tooltip,
  TooltipPopup,
  TooltipTrigger,
} from "@nattstack/ui"
import type { ComponentType, JSX } from "react"
import {
  type ThemeMode,
  formatAppearanceLabel,
  setThemeMode,
  THEME_MODES,
  useAppearance,
} from "#/utils/appearance"

const TOOLTIP_SIDE_OFFSET = 6

const THEME_MODE_ICONS: Record<ThemeMode, ComponentType> = {
  auto: IconMonitorOutline18,
  dark: IconMoonOutline18,
  light: IconSunOutline18,
}

export function TabsTheme(): JSX.Element {
  const mode = useAppearance()?.mode

  return (
    <Tabs onValueChange={(value: ThemeMode) => setThemeMode(value)} value={mode}>
      <TabsSegmentedList
        aria-label="Theme"
        className="
          h-36! rounded-full!
          [&>span]:rounded-full!
        "
        id="mode"
      >
        {THEME_MODES.map((option) => (
          <TabTheme key={option} mode={option} />
        ))}
      </TabsSegmentedList>
    </Tabs>
  )
}

function TabTheme(props: { mode: ThemeMode }): JSX.Element {
  const { mode } = props

  const Icon = THEME_MODE_ICONS[mode]

  return (
    <Tooltip>
      <TooltipTrigger
        render={
          <TabsSegmentedTab className="px-8!" value={mode}>
            <Icon />
          </TabsSegmentedTab>
        }
      />
      <TooltipPopup sideOffset={TOOLTIP_SIDE_OFFSET}>{formatAppearanceLabel(mode)}</TooltipPopup>
    </Tooltip>
  )
}
