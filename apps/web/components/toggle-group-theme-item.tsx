"use client"

import { Toggle, type ToggleProps } from "@base-ui/react"
import { type LucideIcon } from "@nattui/icons"
import { motion, type ValueAnimationTransition } from "motion/react"
import type { Theme } from "@/components/toggle-group-theme"

interface ToggleGroupThemeItemProps extends ToggleProps {
  icon: LucideIcon
  isActive: boolean
  label: string
  value: Theme
}

export function ToggleGroupThemeItem(props: ToggleGroupThemeItemProps) {
  const { icon: Icon, isActive, label, value, ...rest } = props

  const ICON_SIZE = 16

  const TRANSITION: ValueAnimationTransition = {
    duration: 0.15,
  }

  return (
    <div className="relative isolate flex">
      {/* Highlight */}
      {isActive && (
        <motion.div
          className="bg-gray-1 rounded-6 absolute inset-0"
          layoutId="highlight"
          transition={TRANSITION}
        />
      )}

      <Toggle
        className="rounded-6 focus-visible:outline-primary-9 group z-10 flex h-32 cursor-pointer items-center justify-center gap-x-8 px-10 outline-2 outline-transparent transition-[background-color] select-none"
        value={value}
        {...rest}
      >
        {/* Icon */}
        <Icon
          className="text-gray-11 group-data-pressed:text-primary-9 group-hover:text-gray-12 transition-colors"
          size={ICON_SIZE}
        />

        {/* Label */}
        <span className="text-gray-11 text-14 font-500 group-data-pressed:text-gray-12 group-hover:text-gray-12 transition-colors">
          {label}
        </span>
      </Toggle>
    </div>
  )
}
