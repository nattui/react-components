import { Row } from "@nattstack/ui"
import type { JSX } from "react"
import { Logomark } from "#/components/logomark"
import { Logotype } from "#/components/logotype"

export function Logo(): JSX.Element {
  return (
    <Row className="shrink-0 items-center gap-x-8">
      <Logomark className="text-primary" />
      <Logotype className="text-text-primary" />
    </Row>
  )
}
