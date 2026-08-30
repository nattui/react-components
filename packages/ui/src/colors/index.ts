export type ColorAccent = (typeof COLOR.ACCENT)[keyof typeof COLOR.ACCENT]
export type ColorNeutral = (typeof COLOR.NEUTRAL)[keyof typeof COLOR.NEUTRAL]

export const COLOR = {
  ACCENT: {
    AMBER: "amber",
    BLUE: "blue",
    BRONZE: "bronze",
    BROWN: "brown",
    CRIMSON: "crimson",
    CYAN: "cyan",
    GOLD: "gold",
    GRASS: "grass",
    GREEN: "green",
    INDIGO: "indigo",
    IRIS: "iris",
    JADE: "jade",
    LIME: "lime",
    MINT: "mint",
    ORANGE: "orange",
    PINK: "pink",
    PLUM: "plum",
    PURPLE: "purple",
    RED: "red",
    RUBY: "ruby",
    SKY: "sky",
    TEAL: "teal",
    TOMATO: "tomato",
    VIOLET: "violet",
    YELLOW: "yellow",
  },
  NEUTRAL: {
    GRAY: "gray",
    MAUVE: "mauve",
    OLIVE: "olive",
    SAGE: "sage",
    SAND: "sand",
    SLATE: "slate",
  },
} as const

export const COLOR_ACCENT_TO_NEUTRAL = {
  [COLOR.ACCENT.AMBER]: COLOR.NEUTRAL.SAND,
  [COLOR.ACCENT.BLUE]: COLOR.NEUTRAL.SLATE,
  [COLOR.ACCENT.BRONZE]: COLOR.NEUTRAL.SAND,
  [COLOR.ACCENT.BROWN]: COLOR.NEUTRAL.SAND,
  [COLOR.ACCENT.CRIMSON]: COLOR.NEUTRAL.MAUVE,
  [COLOR.ACCENT.CYAN]: COLOR.NEUTRAL.SLATE,
  [COLOR.ACCENT.GOLD]: COLOR.NEUTRAL.SAND,
  [COLOR.ACCENT.GRASS]: COLOR.NEUTRAL.OLIVE,
  [COLOR.ACCENT.GREEN]: COLOR.NEUTRAL.SAGE,
  [COLOR.ACCENT.INDIGO]: COLOR.NEUTRAL.SLATE,
  [COLOR.ACCENT.IRIS]: COLOR.NEUTRAL.SLATE,
  [COLOR.ACCENT.JADE]: COLOR.NEUTRAL.SAGE,
  [COLOR.ACCENT.LIME]: COLOR.NEUTRAL.OLIVE,
  [COLOR.ACCENT.MINT]: COLOR.NEUTRAL.SAGE,
  [COLOR.ACCENT.ORANGE]: COLOR.NEUTRAL.SAND,
  [COLOR.ACCENT.PINK]: COLOR.NEUTRAL.MAUVE,
  [COLOR.ACCENT.PLUM]: COLOR.NEUTRAL.MAUVE,
  [COLOR.ACCENT.PURPLE]: COLOR.NEUTRAL.MAUVE,
  [COLOR.ACCENT.RED]: COLOR.NEUTRAL.MAUVE,
  [COLOR.ACCENT.RUBY]: COLOR.NEUTRAL.MAUVE,
  [COLOR.ACCENT.SKY]: COLOR.NEUTRAL.SLATE,
  [COLOR.ACCENT.TEAL]: COLOR.NEUTRAL.SAGE,
  [COLOR.ACCENT.TOMATO]: COLOR.NEUTRAL.MAUVE,
  [COLOR.ACCENT.VIOLET]: COLOR.NEUTRAL.MAUVE,
  [COLOR.ACCENT.YELLOW]: COLOR.NEUTRAL.SAND,
} as const satisfies Record<ColorAccent, ColorNeutral>

export function getColorAccentToNeutral(accent: ColorAccent): ColorNeutral {
  return COLOR_ACCENT_TO_NEUTRAL[accent]
}
