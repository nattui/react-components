import { ScriptOnce } from "@tanstack/react-router"
import type { JSX } from "react"
import {
  ACCENT_PALETTE_OPTIONS,
  ACCENT_PALETTE_STORAGE_KEY,
  DEFAULT_ACCENT_PALETTE,
  DEFAULT_NEUTRAL_PALETTE,
  NEUTRAL_PALETTE_OPTIONS,
  NEUTRAL_PALETTE_STORAGE_KEY,
} from "#/utils/theme-palette"

/*
    Resolves the neutral and accent color palettes from localStorage (falling back to the
    defaults) and applies them to <html> before React hydrates to avoid a flash of the
    wrong palette (FOUC).

    Placement matters: this component MUST render before <Outlet /> in <body>, next to
    <RouteRootTheme />. See -route-root-theme.tsx for details.
*/
export function RouteRootPalette(): JSX.Element {
  return (
    <ScriptOnce>
      {`
        const neutralPalettes = ${JSON.stringify(NEUTRAL_PALETTE_OPTIONS)};
        const accentPalettes = ${JSON.stringify(ACCENT_PALETTE_OPTIONS)};

        function parseStoredPalette(stored, palettes, fallback) {
          return palettes.includes(stored) ? stored : fallback;
        }

        function applyPalette(attribute, palettes, storageKey, fallback) {
          const palette = parseStoredPalette(localStorage.getItem(storageKey), palettes, fallback);
          document.documentElement.setAttribute(attribute, palette);
        }

        function applyPalettes() {
          applyPalette('data-color-neutral', neutralPalettes, '${NEUTRAL_PALETTE_STORAGE_KEY}', '${DEFAULT_NEUTRAL_PALETTE}');
          applyPalette('data-color-accent', accentPalettes, '${ACCENT_PALETTE_STORAGE_KEY}', '${DEFAULT_ACCENT_PALETTE}');
        }

        function onPaletteStorage(event) {
          // event.key is null when storage is cleared; in both cases the palettes may have changed.
          if (
            event.key === '${NEUTRAL_PALETTE_STORAGE_KEY}' ||
            event.key === '${ACCENT_PALETTE_STORAGE_KEY}' ||
            event.key === null
          ) {
            applyPalettes();
          }
        }

        applyPalettes();

        // Keep other tabs of the site in sync when the palettes are changed in one of them.
        window.addEventListener('storage', onPaletteStorage);
      `}
    </ScriptOnce>
  )
}
