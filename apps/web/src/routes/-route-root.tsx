import { COLOR } from "@nattstack/ui"
import { HeadContent, Outlet, Scripts } from "@tanstack/react-router"
import type { JSX } from "react"
import { LayoutDashboardMain } from "#/components/layout-dashboard-main"
import { Providers } from "#/components/providers"
import { RouteRootAppearance } from "#/routes/-route-root-appearance"

export function RouteRoot(): JSX.Element {
  return (
    <html
      className="[--margin-page-dashboard:16px] [--margin-page-main:20px]"
      data-color-accent={COLOR.ACCENT.BLUE}
      data-color-neutral={COLOR.NEUTRAL.SLATE}
      data-color-theme={COLOR.THEME.LIGHT}
      lang="en"
      suppressHydrationWarning
    >
      <head>
        <HeadContent />
      </head>
      <body>
        <RouteRootAppearance />

        <Providers>
          <LayoutDashboardMain>
            <Outlet />
          </LayoutDashboardMain>
        </Providers>

        <Scripts />
      </body>
    </html>
  )
}
