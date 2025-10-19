/** biome-ignore-all lint/nursery/useSortedClasses: FIXME */

"use client"

import { Button } from "@nattui/react-components"
import {
  LucideChartCandlestick,
  LucideCircleEllipsis,
  LucideCirclePlus,
  LucideCoins,
  LucideLifeBuoy,
  LucideMessageCircle,
  LucidePanelLeft,
  LucideUser,
  LucideVideo,
} from "lucide-react"
import { type ReactNode, useState } from "react"

export default function SidebarPage() {
  const [isExpanded, setIsExpanded] = useState(true)
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div className="flex w-full">
      <div
        className=" bg-gray-2 shadow-[0_0_0_1px_red] mx-auto w-256 h-[500px] relative data-[is-expanded=false]:w-[52px] transition-[width] duration-300 overflow-hidden"
        data-is-expanded={isExpanded}
      >
        <Button
          className="absolute! top-8 right-8 data-[is-expanded=false]:opacity-0 transition-opacity duration-300 data-[is-expanded=false]:pointer-events-none cursor-w-resize!"
          data-is-expanded={isExpanded}
          iconOnly
          onClick={() => setIsExpanded(false)}
          variant="ghost"
        >
          <LucidePanelLeft size={20} />
        </Button>
        <Button
          className="ml-8 mt-8 mb-16"
          iconOnly
          onClick={() => setIsExpanded(true)}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          variant="ghost"
        >
          {isHovered ? (
            <LucidePanelLeft className="" size={20} />
          ) : (
            <svg
              className="size-24 text-primary-9 bg-primary-x9"
              fill="none"
              height="32"
              viewBox="0 0 32 32"
              width="32"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Logomark</title>
              <path
                d="M15.6162 4.05469C19.021 0.649083 24.5415 0.649083 27.9463 4.05469C31.351 7.46048 31.3511 12.982 27.9463 16.3877L27.9434 16.3906L20.4971 23.876L8.12402 11.5029L15.6133 4.05762L15.6162 4.05469Z"
                stroke="currentColor"
                strokeWidth="3"
              />
              <path
                d="M2.99295 14.5514C-0.99765 18.543 -0.99765 25.0146 2.99295 29.0061C6.98355 32.9977 13.4536 32.9977 17.4442 29.0061L23.2247 23.2243L8.77345 8.76953L2.99295 14.5514Z"
                fill="currentColor"
              />
            </svg>
          )}
        </Button>
        <div className="flex flex-col px-8">
          <SidebarItem
            icon={<LucideCirclePlus className="shrink-0" size={20} />}
            isExpanded={isExpanded}
            label="New coin"
            variant="accent"
          />
          <SidebarItem
            icon={<LucideCoins className="shrink-0" size={20} />}
            isExpanded={isExpanded}
            label="Coins"
          />
          <SidebarItem
            icon={<LucideVideo className="shrink-0" size={20} />}
            isExpanded={isExpanded}
            label="Live"
          />
          <SidebarItem
            icon={<LucideChartCandlestick className="shrink-0" size={20} />}
            isExpanded={isExpanded}
            label="Advanced"
          />
          <SidebarItem
            icon={<LucideMessageCircle className="shrink-0" size={20} />}
            isExpanded={isExpanded}
            label="Chat"
          />
          <SidebarItem
            icon={<LucideUser className="shrink-0" size={20} />}
            isExpanded={isExpanded}
            label="Profile"
          />
          <SidebarItem
            icon={<LucideLifeBuoy className="shrink-0" size={20} />}
            isExpanded={isExpanded}
            label="Support"
          />
          <SidebarItem
            icon={<LucideCircleEllipsis className="shrink-0" size={20} />}
            isExpanded={isExpanded}
            label="More"
          />
        </div>
      </div>
    </div>
  )
}

interface SidebarItemProps {
  icon: ReactNode
  label: string
  isExpanded: boolean
  variant?: "accent"
}

function SidebarItem(props: SidebarItemProps) {
  const { icon, label, isExpanded, variant } = props

  return (
    <div
      className="flex items-center h-36 px-8 rounded-8 gap-x-6 hover:text-gray-12 text-gray-11 hover:bg-gray-3 data-[is-expanded=false]:w-[36px] w-full transition-all duration-300 data-[variant=accent]:text-primary-11 data-[variant=accent]:hover:text-primary-12 cursor-pointer select-none"
      data-is-expanded={isExpanded}
      data-variant={variant}
    >
      {icon}
      <p
        className="text-14 font-500 data-[is-expanded=false]:opacity-0 transition-opacity duration-300 shrink-0"
        data-is-expanded={isExpanded}
      >
        {label}
      </p>
    </div>
  )
}
