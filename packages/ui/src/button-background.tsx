import type { JSX } from "react"
import { ButtonProps } from "@/button"
import styles from "@/button-background.module.css"

export interface ButtonBackgroundProps
  extends Pick<ButtonProps, "rounded" | "variant"> {}

export function ButtonBackground(props: ButtonBackgroundProps): JSX.Element {
  const { rounded = false, variant = "primary" } = props

  const combinedBackgroundStyles = `
    ${BUTTON_BACKGROUND_CLASS_NAME.BASE}
    ${rounded ? BUTTON_BACKGROUND_CLASS_NAME.ROUNDED.FULL : BUTTON_BACKGROUND_CLASS_NAME.ROUNDED.BASE}
    ${variant === "accent" && BUTTON_BACKGROUND_CLASS_NAME.VARIANT.ACCENT}
    ${variant === "primary" && BUTTON_BACKGROUND_CLASS_NAME.VARIANT.PRIMARY}
  `
    .replaceAll(/\s+/g, " ")
    .trim()

  if (!(variant === "accent" || variant === "primary")) return <></>

  return <div className={combinedBackgroundStyles} />
}

export const BUTTON_BACKGROUND_CLASS_NAME = {
  BASE: styles.button_background,
  ROUNDED: {
    BASE: styles.button_background__rounded_base,
    FULL: styles.button_background__rounded_full,
  },
  VARIANT: {
    ACCENT: styles.button_background__variant_accent,
    PRIMARY: styles.button_background__variant_primary,
  },
} as const
