import { createRootRoute } from "@tanstack/react-router"
import { RouteRoot } from "#/routes/-route-root"
import { RouteRootBeforeLoad } from "#/routes/-route-root-before-load"
import { RouteRootHead } from "#/routes/-route-root-head"
import { RouteRootNotFound } from "#/routes/-route-root-not-found"

export const Route = createRootRoute({
  beforeLoad: RouteRootBeforeLoad,
  component: RouteRoot,
  head: RouteRootHead,
  notFoundComponent: RouteRootNotFound,
})
