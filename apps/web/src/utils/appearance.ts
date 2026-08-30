import { COLOR, type ColorAccent, type ColorNeutral, getColorAccentToNeutral } from "@nattstack/ui"
import { useSyncExternalStore } from "react"

/* ====================================================== /
    Appearance

    Single source of truth for the theme mode (auto/light/dark) and the color
    palettes (accent + paired neutral). The stored preferences live in
    localStorage and are rendered as data-color-* attributes on <html>, which
    is what the palette CSS keys off.

    The same applyStoredAppearance function is serialized into an inline boot
    script (see appearanceBootScript) and reused by the runtime store, so the
    pre-hydration and post-hydration code paths cannot drift apart.
// ===================================================== */

export const THEME_MODE_STORAGE_KEY = "theme"
export const ACCENT_PALETTE_STORAGE_KEY = "theme-accent"

export const THEME_MODES = ["auto", "light", "dark"] as const

/* Sorted by hue following the Radix Colors palette order, not alphabetically. */
export const ACCENT_PALETTES = [
  COLOR.ACCENT.TOMATO,
  COLOR.ACCENT.RED,
  COLOR.ACCENT.RUBY,
  COLOR.ACCENT.CRIMSON,
  COLOR.ACCENT.PINK,
  COLOR.ACCENT.PLUM,
  COLOR.ACCENT.PURPLE,
  COLOR.ACCENT.VIOLET,
  COLOR.ACCENT.IRIS,
  COLOR.ACCENT.INDIGO,
  COLOR.ACCENT.BLUE,
  COLOR.ACCENT.CYAN,
  COLOR.ACCENT.TEAL,
  COLOR.ACCENT.JADE,
  COLOR.ACCENT.GREEN,
  COLOR.ACCENT.GRASS,
  COLOR.ACCENT.YELLOW,
  COLOR.ACCENT.AMBER,
  COLOR.ACCENT.LIME,
  COLOR.ACCENT.MINT,
  COLOR.ACCENT.SKY,
  COLOR.ACCENT.GOLD,
  COLOR.ACCENT.BRONZE,
  COLOR.ACCENT.BROWN,
] as const satisfies readonly ColorAccent[]

export type AccentPalette = (typeof ACCENT_PALETTES)[number]

export interface Appearance {
  accent: AccentPalette
  mode: ThemeMode
}

export type { ColorNeutral as NeutralPalette } from "@nattstack/ui"

export type ThemeMode = (typeof THEME_MODES)[number]

const DEFAULT_THEME_MODE: ThemeMode = "auto"
const DEFAULT_ACCENT_PALETTE: AccentPalette = COLOR.ACCENT.BLUE

/*
    Natural pairing from Radix Colors (shipped by @nattstack/ui), narrowed to the
    accents offered here so disabled palettes never validate. The neutral palette
    is always derived from the accent, never stored on its own.
*/
const ACCENT_TO_NEUTRAL_PALETTE = Object.fromEntries(
  ACCENT_PALETTES.map((accent) => [accent, getColorAccentToNeutral(accent)]),
) as Record<AccentPalette, ColorNeutral>

interface AppearanceBootConfig {
  accentFallback: AccentPalette
  accentKey: string
  accentToNeutral: Record<AccentPalette, ColorNeutral>
  modeFallback: ThemeMode
  modeKey: string
  modes: readonly ThemeMode[]
}

const APPEARANCE_BOOT_CONFIG: AppearanceBootConfig = {
  accentFallback: DEFAULT_ACCENT_PALETTE,
  accentKey: ACCENT_PALETTE_STORAGE_KEY,
  accentToNeutral: ACCENT_TO_NEUTRAL_PALETTE,
  modeFallback: DEFAULT_THEME_MODE,
  modeKey: THEME_MODE_STORAGE_KEY,
  modes: THEME_MODES,
}

/*
    Reads the stored appearance, resolves it (auto follows the OS preference),
    and applies it to <html> as data-color-* attributes.

    This function is also stringified into the inline boot script, so it must
    stay self-contained: everything it uses comes from its own scope, its
    config parameter, or browser globals.
*/
function applyStoredAppearance(config: AppearanceBootConfig): Appearance {
  // oxlint-disable-next-line unicorn/consistent-function-scoping -- nested on purpose, see comment above
  function read<Value extends string>(
    key: string,
    valid: readonly Value[],
    fallback: Value,
  ): Value {
    try {
      const stored = localStorage.getItem(key)

      return stored !== null && (valid as readonly string[]).includes(stored)
        ? (stored as Value)
        : fallback
    } catch {
      /* localStorage can be unavailable, e.g. blocked by browser settings. */
      return fallback
    }
  }

  const mode = read(config.modeKey, config.modes, config.modeFallback)
  const accent = read(
    config.accentKey,
    Object.keys(config.accentToNeutral) as AccentPalette[],
    config.accentFallback,
  )
  const dark =
    mode === "auto" ? matchMedia("(prefers-color-scheme: dark)").matches : mode === "dark"

  const root = document.documentElement
  root.dataset.colorTheme = dark ? "dark" : "light"
  root.dataset.colorAccent = accent
  root.dataset.colorNeutral = config.accentToNeutral[accent]

  return { accent, mode }
}

/*
    Inline <script> source that applies the stored appearance before React
    hydrates, avoiding a flash of the wrong theme (FOUC). Rendered by
    <RouteRootAppearance /> in the root route.
*/
export const appearanceBootScript = `(${applyStoredAppearance.toString()})(${JSON.stringify(
  APPEARANCE_BOOT_CONFIG,
)})`

/* ====================================================== /
    Store

    A minimal external store for React. Setters persist to localStorage and
    re-run applyStoredAppearance, so every change (local, other tab, OS theme
    flip) flows through the same read -> resolve -> apply path.
// ===================================================== */

type Listener = () => void

const listeners = new Set<Listener>()

let snapshot = initializeAppearance()

export function formatAppearanceLabel(value: string): string {
  return value.charAt(0).toUpperCase() + value.slice(1)
}

export function setAccentPalette(accent: AccentPalette): void {
  writeStorage(ACCENT_PALETTE_STORAGE_KEY, accent)
  syncAppearance()
}

export function setThemeMode(mode: ThemeMode): void {
  writeStorage(THEME_MODE_STORAGE_KEY, mode)
  syncAppearance()
}

/*
    Returns undefined on the server, where the stored preferences are unknown.
*/
export function useAppearance(): Appearance | undefined {
  return useSyncExternalStore(subscribe, getSnapshot, getSnapshot)
}

function getSnapshot(): Appearance | undefined {
  return snapshot
}

/*
    Client-only wiring, once per page load. The boot script has already applied
    the stored appearance pre-paint; this seeds the snapshot and keeps the page
    live afterwards:

    - The media query follows the OS preference while in auto mode.
    - The storage event keeps other tabs of the site in sync. (event.key is
      null when storage is cleared; the appearance may have changed then too.)
*/
function initializeAppearance(): Appearance | undefined {
  if (typeof document === "undefined") {
    return
  }

  matchMedia("(prefers-color-scheme: dark)").addEventListener("change", () => {
    if (snapshot?.mode === "auto") {
      syncAppearance()
    }
  })

  globalThis.addEventListener("storage", (event: StorageEvent) => {
    if (
      event.key === null ||
      event.key === THEME_MODE_STORAGE_KEY ||
      event.key === ACCENT_PALETTE_STORAGE_KEY
    ) {
      syncAppearance()
    }
  })

  return applyStoredAppearance(APPEARANCE_BOOT_CONFIG)
}

function subscribe(listener: Listener): () => void {
  listeners.add(listener)

  return (): void => {
    listeners.delete(listener)
  }
}

function syncAppearance(): void {
  snapshot = applyStoredAppearance(APPEARANCE_BOOT_CONFIG)

  for (const listener of listeners) {
    listener()
  }
}

function writeStorage(key: string, value: string): void {
  try {
    localStorage.setItem(key, value)
  } catch {
    /* localStorage can be unavailable, e.g. blocked by browser settings. */
  }
}
