"use client"

import { Combobox } from "@base-ui-components/react/combobox"
import { LucideCheck, LucideChevronDown, LucideX } from "lucide-react"
import { useId } from "react"

export default function ComboboxPage() {
  const id = useId()

  const handleValueChange = (value: string) => {
    const body = document.body
    const primaryClasses = [
      "color-primary-blue",
      "color-primary-red",
      "color-primary-green",
    ] as const
    const grayClasses = ["color-gray-slate"] as const

    if (primaryClasses.includes(value as (typeof primaryClasses)[number])) {
      body.classList.remove(...primaryClasses)
      body.classList.add(value)
      return
    }

    if (grayClasses.includes(value as (typeof grayClasses)[number])) {
      body.classList.remove(...grayClasses)
      body.classList.add(value)
    }
  }

  return (
    <Combobox.Root items={COLOR_OPTIONS} onValueChange={handleValueChange}>
      <div className="relative flex flex-col gap-4 font-500 text-14 text-gray-11">
        <label htmlFor={id}>Choose a color class</label>
        <Combobox.Input
          className="focus:-outline-offset-1 h-40 w-256 rounded-md border border-gray-200 bg-gray-1 pl-14 font-normal text-16 text-gray-900 focus:outline-2 focus:outline-primary-9"
          id={id}
          placeholder="e.g. color-primary-red"
        />
        <div className="absolute right-8 bottom-0 flex h-40 items-center justify-center text-gray-11">
          <Combobox.Clear
            aria-label="Clear selection"
            className="flex h-40 w-24 items-center justify-center rounded bg-transparent p-0"
          >
            <LucideX className="size-4" />
          </Combobox.Clear>
          <Combobox.Trigger
            aria-label="Open popup"
            className="flex h-40 w-24 items-center justify-center rounded bg-transparent p-0"
          >
            <LucideChevronDown className="size-16" />
          </Combobox.Trigger>
        </div>
      </div>

      <Combobox.Portal>
        <Combobox.Positioner className="outline-none" sideOffset={4}>
          <Combobox.Popup className="max-h-[min(var(--available-height),368px)] w-var(--anchor-width) max-w-var(--available-width) origin-(--transform-origin) scroll-pt-2 scroll-pb-2 overflow-y-auto overscroll-contain rounded-md bg-gray-1 py-2 text-gray-11 shadow-gray-200 shadow-lg outline-1 outline-gray-200 transition-[transform,scale,opacity] data-ending-style:scale-95 data-starting-style:scale-95 data-ending-style:opacity-0 data-starting-style:opacity-0">
            <Combobox.Empty className="px-4 py-2 text-[0.925rem] text-gray-11 leading-4 empty:m-0 empty:p-0">
              No fruits found.
            </Combobox.Empty>
            <Combobox.List>
              {(item: string) => (
                <Combobox.Item
                  className="grid h-24 cursor-default select-none grid-cols-[12px_1fr] items-center gap-2 py-2 pr-8 pl-4 text-16 leading-4 outline-none data-highlighted:relative data-highlighted:z-0 data-highlighted:text-gray-50 data-highlighted:before:absolute data-highlighted:before:inset-x-2 data-highlighted:before:inset-y-0 data-highlighted:before:z-[-1] data-highlighted:before:rounded-sm data-highlighted:before:bg-gray-2"
                  key={item}
                  value={item}
                >
                  <Combobox.ItemIndicator className="col-start-1">
                    <LucideCheck className="size-12" />
                  </Combobox.ItemIndicator>
                  <div className="col-start-2">{item}</div>
                </Combobox.Item>
              )}
            </Combobox.List>
          </Combobox.Popup>
        </Combobox.Positioner>
      </Combobox.Portal>
    </Combobox.Root>
  )
}

const COLOR_OPTIONS = [
  "color-gray-slate",
  "color-primary-blue",
  "color-primary-red",
  "color-primary-green",
] as const
