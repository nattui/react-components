import { HeadContent, Outlet, Scripts } from "@tanstack/react-router"
import type { JSX } from "react"
import { RouteRootTheme } from "#/routes/-route-root-theme"

export function RouteRoot(): JSX.Element {
  return (
    <html
      className="color-gray-mauve color-primary-crimson [--margin-page:20px]"
      lang="en"
      suppressHydrationWarning
    >
      <head>
        <HeadContent />
      </head>
      <body>
        <RouteRootTheme />
        <Outlet />
        <Scripts />
      </body>
    </html>
  )
}
