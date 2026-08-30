/*
    Palette metadata for the color scales shipped by the ./colors CSS export.

    Values map 1:1 to the data attributes read by the CSS:
    <html data-color-neutral="slate" data-color-accent="blue">
*/

export const NEUTRAL_PALETTES = ["gray", "mauve", "slate", "sage", "olive", "sand"] as const

/* Sorted by hue following the Radix Colors palette order, not alphabetically. */
export const ACCENT_PALETTES = [
  "gold",
  "bronze",
  "brown",
  "yellow",
  "amber",
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
  "lime",
  "mint",
  "sky",
] as const

export type AccentPalette = (typeof ACCENT_PALETTES)[number]
export type NeutralPalette = (typeof NEUTRAL_PALETTES)[number]

/*
    Natural pairing from Radix Colors: each accent scale is designed to sit on a specific
    gray scale (e.g. Red on Mauve, Blue on Slate, Green on Sage).
    Reference: https://www.radix-ui.com/colors/docs/palette-composition/composing-a-palette
*/
export const ACCENT_TO_NEUTRAL_PALETTE: Record<AccentPalette, NeutralPalette> = {
  amber: "sand",
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
  lime: "olive",
  mint: "sage",
  orange: "sand",
  pink: "mauve",
  plum: "mauve",
  purple: "mauve",
  red: "mauve",
  ruby: "mauve",
  sky: "slate",
  teal: "sage",
  tomato: "mauve",
  violet: "mauve",
  yellow: "sand",
}

export function getPairedNeutralPalette(accent: AccentPalette): NeutralPalette {
  return ACCENT_TO_NEUTRAL_PALETTE[accent]
}
