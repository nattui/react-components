import type { JSX } from "react"
import { ENVIRONMENT } from "#/utils/environment"
import CSS from "#/styles/global.css?url"

interface RouteRootHead {
  links?: JSX.IntrinsicElements["link"][]
  meta?: JSX.IntrinsicElements["meta"][]
}

const META = {
  DESCRIPTION: "A collection of reusable React components built with Base UI and StyleX.",
  TITLE: "Natt UI",
}

export function RouteRootHead(): RouteRootHead {
  return {
    links: [
      /*
          Preload critical fonts to avoid FOUT and reduce layout shift on first paint

          See:
          - https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Attributes/rel/preload
          - https://web.dev/articles/preload-critical-assets
      */
      {
        as: "font",
        crossOrigin: "anonymous",
        href: "/fonts/body.woff2",
        rel: "preload",
        type: "font/woff2",
      },
      {
        as: "font",
        crossOrigin: "anonymous",
        href: "/fonts/code.woff2",
        rel: "preload",
        type: "font/woff2",
      },
      {
        href: CSS,
        rel: "stylesheet",
      },
      {
        href: ENVIRONMENT.IS_PRODUCTION ? "/favicon/production.ico" : "/favicon/development.ico",
        rel: "icon",
        type: "image/x-icon",
      },
    ],
    meta: [
      {
        charSet: "utf8",
      },
      {
        content: META.DESCRIPTION,
        name: "description",
      },
      {
        content: "initial-scale=1, maximum-scale=1, user-scalable=no, width=device-width",
        name: "viewport",
      },
      {
        title: META.TITLE,
      },
    ],
  }
}
