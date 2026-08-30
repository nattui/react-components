export const NEUTRAL_PALETTE_STORAGE_KEY = "theme-gray"
export const ACCENT_PALETTE_STORAGE_KEY = "theme-primary"

export const NEUTRAL_PALETTE_OPTIONS = ["gray", "mauve", "slate", "sage", "olive", "sand"] as const

/* Sorted by hue following the Radix Colors palette order, not alphabetically. */
export const ACCENT_PALETTE_OPTIONS = [
  "orange",
  "tomato",
  "red",
  "ruby",
  "crimson",
  "pink",
  "plum",
  "purple",
  "violet",
  "iris",
  "indigo",
  "blue",
  "cyan",
  "teal",
  "jade",
  "green",
  "grass",
  "bronze",
  "gold",
  "brown",
  // "amber",
  // "yellow",
  // "lime",
  // "mint",
  // "sky",
] as const

export type AccentPalette = (typeof ACCENT_PALETTE_OPTIONS)[number]
export type NeutralPalette = (typeof NEUTRAL_PALETTE_OPTIONS)[number]

export const DEFAULT_NEUTRAL_PALETTE: NeutralPalette = "slate"
export const DEFAULT_ACCENT_PALETTE: AccentPalette = "blue"

/*
    Natural pairing from Radix Colors: each accent scale is designed to sit on a specific
    gray scale (e.g. Red on Mauve, Green on Sage, Blue on Slate).
*/
const ACCENT_TO_NEUTRAL_PALETTE: Record<AccentPalette, NeutralPalette> = {
  blue: "slate",
  bronze: "sand",
  brown: "sand",
  crimson: "mauve",
  cyan: "slate",
  gold: "sand",
  grass: "olive",
  green: "sage",
  indigo: "slate",
  iris: "slate",
  jade: "sage",
  orange: "sand",
  pink: "mauve",
  plum: "mauve",
  purple: "mauve",
  red: "mauve",
  ruby: "mauve",
  teal: "sage",
  tomato: "mauve",
  violet: "mauve",
}

export function applyColorPalettes(accent: AccentPalette, neutral: NeutralPalette): void {
  const root = globalThis.document.documentElement
  root.dataset.colorAccent = accent
  root.dataset.colorNeutral = neutral
}

export function formatAccentPaletteLabel(palette: AccentPalette): string {
  return palette.charAt(0).toUpperCase() + palette.slice(1)
}

export function getPairedNeutralPalette(palette: AccentPalette): NeutralPalette {
  return ACCENT_TO_NEUTRAL_PALETTE[palette]
}

export function readStoredAccentPalette(): AccentPalette {
  return parseStoredPalette(
    localStorage.getItem(ACCENT_PALETTE_STORAGE_KEY),
    ACCENT_PALETTE_OPTIONS,
    DEFAULT_ACCENT_PALETTE,
  )
}

function parseStoredPalette<Palette extends string>(
  stored: null | string,
  palettes: readonly Palette[],
  fallback: Palette,
): Palette {
  return stored !== null && palettes.includes(stored as Palette) ? (stored as Palette) : fallback
}
