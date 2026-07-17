import { HeadContent, Outlet, Scripts } from "@tanstack/react-router"
import type { JSX } from "react"
import { Providers } from "#/components/providers"
import { RouteRootPalette } from "#/routes/-route-root-palette"
import { RouteRootTheme } from "#/routes/-route-root-theme"

export function RouteRoot(): JSX.Element {
  return (
    <html
      className="[--margin-page-dashboard:16px] [--margin-page-main:20px]"
      lang="en"
      suppressHydrationWarning
    >
      <head>
        <HeadContent />
      </head>
      <body>
        <RouteRootTheme />
        <RouteRootPalette />

        <Providers>
          <Outlet />
        </Providers>

        <Scripts />
      </body>
    </html>
  )
}
