import { Column, Row, Spacer } from "@nattstack/ui"
import { createFileRoute } from "@tanstack/react-router"

export const Route = createFileRoute("/")({
  component: function RouteIndex() {
    return (
      <>
        <Row className="min-h-dvh">
          <Column className="sticky top-0 left-0 h-dvh w-full max-w-[240px]">
            {/* Top */}
            <p>Sidebar Top</p>

            {/* Middle */}
            <p>Sidebar Middle</p>

            {/* Bottom */}
            <p>Sidebar Bottom</p>
          </Column>

          <Column
            className="
              rounded-8 shadow-2 outline-border m-8 grow px-(--margin-page-main)
              outline
            "
          >
            <Spacer height={72} />
            <h1 className="text-30">Button</h1>
            <Spacer height={1500} />
          </Column>
        </Row>
      </>
    )
  },
})
