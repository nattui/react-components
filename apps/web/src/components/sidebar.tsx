import { Column, Row, Spacer } from "@nattstack/ui"
import type { JSX } from "react"
import { LogoLink } from "#/components/logo-link"
import { SidebarLink } from "#/components/sidebar-link"

export function Sidebar(): JSX.Element {
  return (
    <Column as="aside" className="sticky top-0 left-0 h-dvh w-full max-w-[240px]">
      <Spacer height={8} />

      {/* Top */}
      <Row className="ml-8">
        <LogoLink />
      </Row>
      <Spacer height={16} />

      {/* Middle */}
      <Column className="gap-y-2 px-8">
        <SidebarLink params={{ slug: "button" }} to="/components/$slug">
          Button
        </SidebarLink>
        <SidebarLink params={{ slug: "switch" }} to="/components/$slug">
          Switch
        </SidebarLink>
        <SidebarLink params={{ slug: "tooltip" }} to="/components/$slug">
          Tooltip
        </SidebarLink>
      </Column>
    </Column>
  )
}
