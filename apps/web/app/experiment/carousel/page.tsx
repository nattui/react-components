"use client"

import { Toggle, ToggleGroup, ToggleProps } from "@base-ui/react"
import { useDrag } from "@use-gesture/react"
import { type UIEvent, useState } from "react"
import { categories } from "@/app/experiment/carousel/categories"

type CategoryValue = (typeof categories)[number]["value"]

export default function CarouselPage() {
  return (
    <div className="d flex flex-col p-64">
      <CarouselCategory />
    </div>
  )
}

function CarouselCategory() {
  const [carousel, setCarousel] = useState<HTMLDivElement | null>(null)
  const [scrollX, setScrollX] = useState(0)
  const [selectedCategory, setSelectedCategory] = useState<CategoryValue>(categories[0].value)

  const scrollXMax = carousel ? carousel.scrollWidth - carousel.clientWidth : 0

  const bind = useDrag(
    ({ memo, movement: [mx] }) => {
      if (!carousel) return

      if (!memo) {
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

  function onScroll(event: UIEvent<HTMLDivElement>) {
    setScrollX(event.currentTarget.scrollLeft)
  }

  function onValueChange(value: CategoryValue[]) {
    if (value.length > 0) {
      setSelectedCategory(value[0])
    }
  }

  return (
    <div className="relative">
      {/* Scrollable */}
      <div
        className="scrollbar-hidden touch-pan-x overflow-x-auto"
        onScroll={onScroll}
        ref={setCarousel}
        {...bind()}
      >
        <ToggleGroup
          className="flex gap-x-12 py-12"
          onValueChange={onValueChange}
          value={[selectedCategory]}
        >
          {categories.map((category) => (
            <CarouselCategoryToggle
              data-is-selected={selectedCategory === category.value}
              key={category.value}
              value={category.value}
            >
              {category.label}
            </CarouselCategoryToggle>
          ))}
        </ToggleGroup>
      </div>

      {/* Scroll indicators */}
      <CarouselCategoryScrollIndicator isHidden={scrollX === 0} variant="start" />
      <CarouselCategoryScrollIndicator isHidden={scrollX === scrollXMax} variant="end" />
    </div>
  )
}

function CarouselCategoryScrollIndicator(props: { isHidden: boolean; variant: "end" | "start" }) {
  const { isHidden, variant } = props

  return (
    <div
      className="from-gray-1 pointer-events-none absolute top-0 block h-full w-32 to-transparent transition-opacity data-[is-hidden=true]:opacity-0 data-[variant=end]:right-0 data-[variant=end]:bg-linear-to-l data-[variant=start]:left-0 data-[variant=start]:bg-linear-to-r"
      data-is-hidden={isHidden}
      data-variant={variant}
    />
  )
}

function CarouselCategoryToggle(props: ToggleProps) {
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
