"use client"

import { TabsSegmentedTab, type TabsSegmentedTabProps } from "@nattstack/ui/react"
import type { LucideIcon } from "@nattstack/icons"
import type { Theme } from "@/components/toggle-group-theme"

interface ToggleGroupThemeItemProps extends TabsSegmentedTabProps {
  icon: LucideIcon
  label: string
  value: Theme
}

export function ToggleGroupThemeItem(props: ToggleGroupThemeItemProps) {
  const { className = "", icon: Icon, label, value, ...rest } = props

  const ICON_SIZE = 16

  return (
    <TabsSegmentedTab className={`gap-x-8 ${className}`.trim()} value={value} {...rest}>
      <Icon size={ICON_SIZE} />
      <span>{label}</span>
    </TabsSegmentedTab>
  )
}
