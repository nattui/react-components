import { Column, Row, Spacer } from "@nattstack/ui"
import type { JSX } from "react"
import { LogoLink } from "#/components/logo-link"

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
      <p>Sidebar Middle</p>

      {/* Bottom */}
      <p>Sidebar Bottom</p>
    </Column>
  )
}
