export const GRAY_PALETTE_STORAGE_KEY = "theme-gray"
export const PRIMARY_PALETTE_STORAGE_KEY = "theme-primary"

export const GRAY_PALETTE_OPTIONS = [
  "color-gray-gray",
  "color-gray-mauve",
  "color-gray-slate",
  "color-gray-sage",
  "color-gray-olive",
  "color-gray-sand",
] as const

export const PRIMARY_PALETTE_OPTIONS = [
  "color-primary-amber",
  "color-primary-blue",
  "color-primary-bronze",
  "color-primary-brown",
  "color-primary-crimson",
  "color-primary-cyan",
  "color-primary-gold",
  "color-primary-grass",
  "color-primary-green",
  "color-primary-indigo",
  "color-primary-iris",
  "color-primary-jade",
  "color-primary-lime",
  "color-primary-mint",
  "color-primary-orange",
  "color-primary-pink",
  "color-primary-plum",
  "color-primary-purple",
  "color-primary-red",
  "color-primary-ruby",
  "color-primary-sky",
  "color-primary-teal",
  "color-primary-tomato",
  "color-primary-violet",
  "color-primary-yellow",
] as const

export type GrayPalette = (typeof GRAY_PALETTE_OPTIONS)[number]
export type PrimaryPalette = (typeof PRIMARY_PALETTE_OPTIONS)[number]

export const DEFAULT_GRAY_PALETTE: GrayPalette = "color-gray-slate"
export const DEFAULT_PRIMARY_PALETTE: PrimaryPalette = "color-primary-blue"

export function readStoredGrayPalette(): GrayPalette {
  const stored = localStorage.getItem(GRAY_PALETTE_STORAGE_KEY)
  return isGrayPalette(stored) ? stored : DEFAULT_GRAY_PALETTE
}

export function readStoredPrimaryPalette(): PrimaryPalette {
  const stored = localStorage.getItem(PRIMARY_PALETTE_STORAGE_KEY)
  return isPrimaryPalette(stored) ? stored : DEFAULT_PRIMARY_PALETTE
}

function isGrayPalette(value: unknown): value is GrayPalette {
  return GRAY_PALETTE_OPTIONS.includes(value as GrayPalette)
}

function isPrimaryPalette(value: unknown): value is PrimaryPalette {
  return PRIMARY_PALETTE_OPTIONS.includes(value as PrimaryPalette)
}
