interface CarouselCategoryScrollIndicatorProps {
  isHidden: boolean
  variant: "end" | "start"
}

export function CarouselCategoryScrollIndicator(props: CarouselCategoryScrollIndicatorProps) {
  const { isHidden, variant } = props

  return (
    <div
      className="from-gray-1 pointer-events-none absolute top-0 block h-full w-32 to-transparent transition-opacity data-[is-hidden=true]:opacity-0 data-[variant=end]:right-0 data-[variant=end]:bg-linear-to-l data-[variant=start]:left-0 data-[variant=start]:bg-linear-to-r"
      data-is-hidden={isHidden}
      data-variant={variant}
    />
  )
}
