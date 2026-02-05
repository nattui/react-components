"use client"

import { Toggle, type ToggleProps } from "@base-ui/react"

export function CarouselCategoryToggle(props: ToggleProps) {
  const { children, value, ...rest } = props

  return (
    <Toggle
      className="bg-gray-3 rounded-8 data-[is-selected=true]:bg-gray-12 group focus-visible:outline-primary-9 flex h-32 shrink-0 cursor-pointer items-center justify-center px-8 outline-2 -outline-offset-2 outline-transparent select-none"
      value={value}
      {...rest}
    >
      <p className="text-14 font-500 text-gray-12 group-data-[is-selected=true]:text-gray-1">
        {children}
      </p>
    </Toggle>
  )
}
