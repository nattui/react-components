import type { JSX } from "react"
import { ButtonProps } from "@/button"
import styles from "@/button-background.module.css"

export interface ButtonBackgroundProps
  extends Pick<ButtonProps, "rounded" | "variant"> {}

export function ButtonBackground(props: ButtonBackgroundProps): JSX.Element {
  const { rounded = false, variant = "primary" } = props

  const combinedBackgroundStyles = `
    ${buttonBackgroundClassName.base}
    ${rounded ? buttonBackgroundClassName.rounded.full : buttonBackgroundClassName.rounded.base}
    ${variant === "accent" && buttonBackgroundClassName.variant.accent}
    ${variant === "primary" && buttonBackgroundClassName.variant.primary}
  `
    .replaceAll(/\s+/g, " ")
    .trim()

  if (!(variant === "accent" || variant === "primary")) return <></>

  return <div className={combinedBackgroundStyles} />
}

export const buttonBackgroundClassName = {
  base: styles.button_background,
  rounded: {
    base: styles.button_background__rounded_base,
    full: styles.button_background__rounded_full,
  },
  variant: {
    accent: styles.button_background__variant_accent,
    primary: styles.button_background__variant_primary,
  },
} as const
