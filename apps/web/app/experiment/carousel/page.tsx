"use client"

import { Toggle, ToggleGroup, ToggleProps } from "@base-ui/react"
import { useState } from "react"

type CategoryValue = (typeof categories)[number]["value"]

const categories = [
  {
    label: "All",
    value: "all",
  },
  {
    label: "Gaming",
    value: "gaming",
  },
  {
    label: "Music",
    value: "music",
  },
  {
    label: "Podcasts",
    value: "podcasts",
  },
  {
    label: "Gaming consoles",
    value: "gaming-consoles",
  },
  {
    label: "APIs",
    value: "apis",
  },
  {
    label: "AI",
    value: "ai",
  },
  {
    label: "Live",
    value: "live",
  },
  {
    label: "Gadgets",
    value: "gadgets",
  },
  {
    label: "Chill-out music",
    value: "chill-out-music",
  },
  {
    label: "J-Pop",
    value: "j-pop",
  },
]

export default function CarouselPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>(categories[0].value)

  function onValueChange(value: CategoryValue[]) {
    if (value.length > 0) {
      setSelectedCategory(value[0])
    }
  }

  return (
    <div className="d flex flex-col p-64">
      {/* Clip container */}
      <div className="scrollbar-hidden overflow-x-auto">
        {/* Drag container */}
        <div>
          <ToggleGroup
            className="flex gap-x-12"
            onValueChange={onValueChange}
            value={[selectedCategory]}
          >
            {categories.map((category) => (
              <ToggleCategory
                data-is-selected={selectedCategory === category.value}
                key={category.value}
                value={category.value}
              >
                {category.label}
              </ToggleCategory>
            ))}
          </ToggleGroup>
        </div>
      </div>
    </div>
  )
}

function ToggleCategory(props: ToggleProps) {
  const { children, value, ...rest } = props

  return (
    <Toggle
      className="bg-gray-3 rounded-8 data-[is-selected=true]:bg-gray-12 group focus-visible:outline-primary-9 flex h-32 shrink-0 cursor-pointer items-center justify-center px-8 outline-2 outline-transparent select-none"
      value={value}
      {...rest}
    >
      <p className="text-14 font-500 text-gray-12 group-data-[is-selected=true]:text-gray-1">
        {children}
      </p>
    </Toggle>
  )
}
