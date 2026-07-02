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

          <Column className="d grow">
            <p>Content</p>
            <Spacer height={1500} />
          </Column>
        </Row>
      </>
    )
  },
})
