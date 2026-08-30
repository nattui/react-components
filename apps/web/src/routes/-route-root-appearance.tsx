import { ScriptOnce } from "@tanstack/react-router"
import type { JSX } from "react"
import { appearanceBootScript } from "#/utils/appearance"

/*
    Applies the stored theme mode and color palettes to <html> before React
    hydrates to avoid a flash of the wrong appearance (FOUC). The script source
    is generated from the same function the runtime store uses, so the two
    cannot drift apart (see utils/appearance.ts).

    Placement matters: this component MUST render before <Outlet /> in <body>.
    `ScriptOnce` emits a synchronous inline <script> that runs where it appears in the
    HTML. If rendered after the page content, a hard reload (Cmd+Shift+R) can paint the
    body with the default (light) theme before the script attaches the resolved
    attributes, producing a visible white flash on dark mode.

    See: https://tanstack.com/router/latest/docs/guide/document-head-management#inline-scripts-with-scriptonce
*/
export function RouteRootAppearance(): JSX.Element {
  return <ScriptOnce>{appearanceBootScript}</ScriptOnce>
}
