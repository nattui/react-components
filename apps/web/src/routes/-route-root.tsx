import { HeadContent, Outlet, Scripts } from "@tanstack/react-router"
import type { JSX } from "react"
import { LayoutDashboardMain } from "#/components/layout-dashboard-main"
import { RouteRootTheme } from "#/routes/-route-root-theme"

export function RouteRoot(): JSX.Element {
  return (
    <html
      className="
        color-gray-mauve color-primary-crimson [--margin-page-dashboard:16px]
        [--margin-page-main:20px]
      "
      lang="en"
      suppressHydrationWarning
    >
      <head>
        <HeadContent />
      </head>
      <body>
        <RouteRootTheme />

        <LayoutDashboardMain>
          <Outlet />
        </LayoutDashboardMain>

        <Scripts />
      </body>
    </html>
  )
}
