import { redirect } from "@tanstack/react-router"

interface RouteRootBeforeLoadContext {
  location: {
    pathname: string
  }
}

export function RouteRootBeforeLoad(context: RouteRootBeforeLoadContext): void {
  const { location } = context

  // Preserve the old blog URL for existing links and search results.
  if (location.pathname === "/blog/2024-03-17-supabase-activity-scheduler") {
    throw redirect({
      params: {
        slug: "prevent-supabase-free-tier-pause",
      },
      statusCode: 301,
      to: "/writing/$slug",
    })
  }
}
