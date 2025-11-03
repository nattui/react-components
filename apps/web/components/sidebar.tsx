"use client"

import { Button } from "@nattui/react-components"
import { LucideHome, LucidePanelLeft, LucideUsers, LucideWandSparkles } from "lucide-react"
import Link, { type LinkProps } from "next/link"
import { usePathname } from "next/navigation"
import { type PropsWithChildren, type ReactNode, useState } from "react"
import { Spacer } from "@/components/spacer"

export function Sidebar() {
  const [isExpanded, setIsExpanded] = useState(true)
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div
      className="relative z-10 flex h-full w-256 flex-col border-gray-6 border-r transition-[width] data-[is-expanded=false]:w-64"
      data-is-expanded={isExpanded}
    >
      {/* Toggle */}
      <Button
        className="absolute! top-16 right-16 z-10 cursor-w-resize! focus-visible:opacity-100! data-[is-expanded=false]:cursor-e-resize! data-[is-expanded=false]:opacity-0"
        data-is-expanded={isExpanded}
        iconOnly
        onClick={() => setIsExpanded((previous) => !previous)}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        size={32}
        variant="ghost"
      >
        <LucidePanelLeft size={18} />
      </Button>

      {/* Logo */}
      <div
        className="mt-16 ml-16 w-fit p-4 transition-opacity data-[is-expanded=true]:opacity-100! data-[is-hovered=true]:opacity-0"
        data-is-expanded={isExpanded}
        data-is-hovered={isHovered}
      >
        <Logomark />
      </div>
      <Spacer className="h-16" />

      {/* Navigation */}
      <SidebarNavigationLabel>Components</SidebarNavigationLabel>
      <SidebarNavigationGroup>
        <SidebarNavigationItem
          href="/button"
          icon={
            <LucideHome
              className="shrink-0"
              size={18}
            />
          }
          isExpanded={isExpanded}
          label="Button"
        />
        <SidebarNavigationItem
          href="/input"
          icon={
            <LucideUsers
              className="shrink-0"
              size={18}
            />
          }
          isExpanded={isExpanded}
          label="Input"
        />
      </SidebarNavigationGroup>
      <Spacer className="h-16" />

      <SidebarNavigationLabel>Experiments</SidebarNavigationLabel>
      <SidebarNavigationGroup>
        <SidebarNavigationItem
          href="/dialog"
          icon={
            <LucideWandSparkles
              className="shrink-0"
              size={18}
            />
          }
          isExpanded={isExpanded}
          label="Dialog"
        />
        <SidebarNavigationItem
          href="/combobox"
          icon={
            <LucideWandSparkles
              className="shrink-0"
              size={18}
            />
          }
          isExpanded={isExpanded}
          label="Combobox"
        />
      </SidebarNavigationGroup>
    </div>
  )
}

function SidebarNavigationLabel(props: PropsWithChildren) {
  const { children } = props
  return <p className="mx-16 mb-4 pl-6 font-500 text-14">{children}</p>
}

function SidebarNavigationGroup(props: PropsWithChildren) {
  const { children } = props
  return <div className="flex flex-col gap-y-4 overflow-y-auto px-16">{children}</div>
}

function SidebarNavigationItem(props: {
  icon: ReactNode
  isExpanded: boolean
  label: string
  href: LinkProps<string>["href"]
}) {
  const { icon, isExpanded, label, href } = props

  const pathname = usePathname()
  const isActive = pathname === href

  return (
    <Link
      className="flex h-32 w-full items-center gap-x-8 rounded-8 px-6 transition-colors hover:bg-gray-3 hover:text-gray-12 data-[active=true]:bg-gray-3 data-[active=true]:text-gray-12"
      data-active={isActive}
      href={href}
    >
      {icon}
      {isExpanded && <p className="truncate font-500 text-14">{label}</p>}
    </Link>
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
