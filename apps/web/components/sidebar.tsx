"use client"

import { Button, Spacer } from "@nattui/react-components"
import { LucideComponent, LucidePanelLeft, LucideWandSparkles } from "lucide-react"
import Link, { type LinkProps } from "next/link"
import { usePathname } from "next/navigation"
import { type ComponentProps, type ReactNode, useState } from "react"
import { Logomark } from "@/components/logomark"

export function Sidebar() {
  const [isExpanded, setIsExpanded] = useState(true)
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div
      className="sticky top-0 bottom-0 z-10 flex h-dvh w-256 flex-col border-gray-6 border-r transition-[width] data-[is-expanded=false]:w-64"
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
        <Logomark className="size-24 text-primary-9" />
      </div>
      <Spacer className="h-16" />

      {/* Navigation */}
      <SidebarNavigationLabel data-is-expanded={isExpanded}>Components</SidebarNavigationLabel>
      <SidebarNavigationGroup>
        <SidebarNavigationItem
          href="/button"
          icon={
            <LucideComponent
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
            <LucideComponent
              className="shrink-0"
              size={18}
            />
          }
          isExpanded={isExpanded}
          label="Input"
        />
      </SidebarNavigationGroup>
      <Spacer className="h-16" />

      <SidebarNavigationLabel data-is-expanded={isExpanded}>Experiments</SidebarNavigationLabel>
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

function SidebarNavigationLabel(props: ComponentProps<"p">) {
  const { ...rest } = props

  return (
    <p
      className="mx-16 mb-4 truncate pl-6 font-500 text-14 transition-opacity data-[is-expanded=false]:opacity-0"
      {...rest}
    />
  )
}

function SidebarNavigationGroup(props: ComponentProps<"div">) {
  const { ...rest } = props

  return (
    <div
      className="flex flex-col gap-y-4 overflow-y-auto px-16"
      {...rest}
    />
  )
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
