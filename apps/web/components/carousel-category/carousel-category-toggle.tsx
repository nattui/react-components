"use client"

import { Toggle, type ToggleProps } from "@base-ui/react"
import type { FocusEvent, JSX } from "react"

export function CarouselCategoryToggle(props: ToggleProps<string>): JSX.Element {
  const { children, value, ...rest } = props

  return (
    <Toggle
      className="
        group flex h-32 shrink-0 cursor-pointer scroll-mx-128 items-center
        justify-center rounded-8 bg-gray-3 px-8 outline-2 -outline-offset-2
        outline-transparent select-none
        focus-visible:outline-primary-9
        data-[is-selected=true]:bg-gray-12
      "
      onFocus={onFocus}
      value={value}
      {...rest}
    >
      <p
        className="
          text-14 font-500 text-gray-12
          group-data-[is-selected=true]:text-gray-1
        "
      >
        {children}
      </p>
    </Toggle>
  )
}

function onFocus(event: FocusEvent<HTMLButtonElement>): void {
  event.currentTarget.scrollIntoView({ behavior: "smooth" })
}
