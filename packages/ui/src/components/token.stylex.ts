import { defineConsts } from "@stylexjs/stylex"

/*
    defineConsts groups must be flat maps of string | number values,
    so each token group is a separate named export.
    Values are inlined into the compiled CSS at build time.
*/

export const CONTROL = defineConsts({
  BUTTON_FONT_SIZE: 14,
  BUTTON_FONT_WEIGHT: 450,
})

export const COLOR_ACCENT = defineConsts({
  "01": "var(--color-accent-1)",
  "02": "var(--color-accent-2)",
  "03": "var(--color-accent-3)",
  "04": "var(--color-accent-4)",
  "05": "var(--color-accent-5)",
  "06": "var(--color-accent-6)",
  "07": "var(--color-accent-7)",
  "08": "var(--color-accent-8)",
  "09": "var(--color-accent-9)",
  "10": "var(--color-accent-10)",
  "11": "var(--color-accent-11)",
  "12": "var(--color-accent-12)",
})

export const COLOR_NEUTRAL = defineConsts({
  "01": "var(--color-neutral-1)",
  "02": "var(--color-neutral-2)",
  "03": "var(--color-neutral-3)",
  "04": "var(--color-neutral-4)",
  "05": "var(--color-neutral-5)",
  "06": "var(--color-neutral-6)",
  "07": "var(--color-neutral-7)",
  "08": "var(--color-neutral-8)",
  "09": "var(--color-neutral-9)",
  "10": "var(--color-neutral-10)",
  "11": "var(--color-neutral-11)",
  "12": "var(--color-neutral-12)",
})
