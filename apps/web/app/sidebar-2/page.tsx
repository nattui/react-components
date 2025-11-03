"use client"

import { Button } from "@nattui/react-components"
import { LucidePanelLeft } from "lucide-react"
import { useState } from "react"

export default function SidebarPage2() {
  const [isExpanded, setIsExpanded] = useState(true)

  console.log(isExpanded)

  return (
    <div className="flex w-full grow p-64">
      <div className="d mx-auto">
        {/* Sidebar */}
        <div
          className="relative flex h-full w-256 flex-col transition-[width] duration-150 data-[is-expanded=false]:w-64"
          data-is-expanded={isExpanded}
        >
          {/* Toggle */}
          <Button
            className="absolute! top-16 right-16 cursor-w-resize! focus-visible:opacity-100! data-[is-expanded=false]:cursor-e-resize! data-[is-expanded=false]:opacity-0"
            data-is-expanded={isExpanded}
            iconOnly
            onClick={() => setIsExpanded((previous) => !previous)}
            size={32}
            variant="ghost"
          >
            <LucidePanelLeft size={18} />
          </Button>

          {/* Logo */}
          <div className="mt-16 ml-16 w-fit p-4">
            <Logomark />
          </div>
        </div>
      </div>
    </div>
  )
}

function Logomark() {
  return (
    <svg
      className="size-24 text-primary-9"
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
  )
}
