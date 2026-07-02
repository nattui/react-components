import { Column, Row, Spacer } from "@nattstack/ui"
import type { JSX, PropsWithChildren } from "react"
import { Sidebar } from "#/components/sidebar"

export function LayoutDashboardMain(props: PropsWithChildren): JSX.Element {
  const { children, ...rest } = props

  return (
    <>
      <Row className="min-h-dvh">
        <Sidebar />

        <Column
          className="
            rounded-8 shadow-2 outline-border my-8 mr-8 grow
            px-(--margin-page-main) outline
          "
        >
          <Column className="mx-auto w-full max-w-768" {...rest}>
            <Spacer height={72} />
            {children}
          </Column>
        </Column>
      </Row>
    </>
  )
}
