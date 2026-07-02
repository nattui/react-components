import { Column, Row, Spacer } from "@nattstack/ui"
import { createFileRoute } from "@tanstack/react-router"
import { LayoutDashboardMain } from "#/components/layout-dashboard-main"
import { Sidebar } from "#/components/sidebar"

export const Route = createFileRoute("/")({
  component: function RouteIndex() {
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
            <LayoutDashboardMain>
              <Spacer height={72} />
              <h1 className="text-30">Button</h1>
              <Spacer height={1500} />
            </LayoutDashboardMain>
          </Column>
        </Row>
      </>
    )
  },
})
