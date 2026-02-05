"use client"

import { Toggle, ToggleGroup, ToggleProps } from "@base-ui/react"
import { useDrag } from "@use-gesture/react"
import { useRef, useState } from "react"
import { categories } from "@/app/experiment/carousel/categories"

type CategoryValue = (typeof categories)[number]["value"]

export default function CarouselPage() {
  const [selectedCategory, setSelectedCategory] = useState<CategoryValue>(categories[0].value)

  const carouselRef = useRef<HTMLDivElement>(null)

  const bind = useDrag(
    ({ first, memo, movement: [mx] }) => {
      const carousel = carouselRef.current
      if (!carousel) return

      if (first) {
        memo = carousel.scrollLeft
      }

      carousel.scrollLeft = memo - mx

      return memo
    },
    {
      axis: "x",
      filterTaps: true,
      pointer: {
        keys: false,
      },
    },
  )

  function onValueChange(value: CategoryValue[]) {
    if (value.length > 0) {
      setSelectedCategory(value[0])
    }
  }

  return (
    <div className="d flex flex-col p-64">
      <div className="scrollbar-hidden d overflow-x-auto" ref={carouselRef} {...bind()}>
        <ToggleGroup
          className="flex gap-x-12 py-12"
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
  )
}

function ToggleCategory(props: ToggleProps) {
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
