import { Column, Row, Spacer } from "@nattstack/ui"
import type { JSX } from "react"
import { LogoLink } from "#/components/logo-link"
import { SidebarLink } from "#/components/sidebar-link"
import { TabsTheme } from "#/components/tabs-theme.js"

const COMPONENT_LINKS = [
  { label: "Button", slug: "button" },
  { label: "Dialog responsive", slug: "dialog-responsive" },
  { label: "Input", slug: "input" },
  { label: "Menu", slug: "menu" },
  { label: "Switch", slug: "switch" },
  { label: "Tabs pill", slug: "tabs-pill" },
  { label: "Tabs segmented", slug: "tabs-segmented" },
  { label: "Tabs underline", slug: "tabs-underline" },
  { label: "Textarea", slug: "textarea" },
  { label: "Theme", slug: "theme" },
  { label: "Tooltip", slug: "tooltip" },
] as const

export function Sidebar(): JSX.Element {
  return (
    <Column as="aside" className="sticky top-0 left-0 h-dvh w-full max-w-[200px]">
      <Spacer height={8} />

      {/* Top */}
      <Row className="ml-8">
        <LogoLink />
      </Row>
      <Spacer height={16} />

      {/* Middle */}
      <Column className="gap-y-2 px-8">
        {COMPONENT_LINKS.map(({ label, slug }) => (
          <SidebarLink key={slug} params={{ slug }} to="/components/$slug">
            {label}
          </SidebarLink>
        ))}
      </Column>
      <Spacer height={8} />

      <Row className="ml-16">
        <TabsTheme />
      </Row>
    </Column>
  )
}
