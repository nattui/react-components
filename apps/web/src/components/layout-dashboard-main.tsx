import { Column, Row } from "@nattstack/ui"
import type { JSX, PropsWithChildren } from "react"
import { Sidebar } from "#/components/sidebar"

export function LayoutDashboardMain(props: PropsWithChildren): JSX.Element {
  const { ...rest } = props

  return (
    <>
      <Row className="min-h-dvh">
        <Sidebar />

        <Column
          className="
            rounded-8 shadow-2 outline-border m-8 grow px-(--margin-page-main)
            outline
          "
        >
          <Column className="mx-auto w-full max-w-768" {...rest} />
        </Column>
      </Row>
    </>
  )
}
