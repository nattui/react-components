import { createFileRoute, Outlet } from "@tanstack/react-router"
import { LayoutDashboardMain } from "#/components/layout-dashboard-main.js"

export const Route = createFileRoute("/_sidebar")({
  component: function RouteComponent() {
    return (
      <LayoutDashboardMain>
        <Outlet />
      </LayoutDashboardMain>
    )
  },
})
