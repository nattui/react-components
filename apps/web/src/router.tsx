import { createRouter, type Router } from "@tanstack/react-router"
import { routeTree } from "#/routeTree.gen"

export function getRouter(): Router<typeof routeTree> {
  return createRouter({
    defaultPreload: "intent", // Preload the page when the user hovers over a link
    defaultPreloadStaleTime: 30_000, // 30 seconds
    routeTree,
    scrollRestoration: true,
  })
}
