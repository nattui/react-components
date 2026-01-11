import type { ComponentProps, JSX } from "react"
import styles from "@/button-2.module.css"

export interface ButtonProps extends ComponentProps<"button"> {
  variant?: "accent" | "primary" | "secondary"
}

export function Button2(props: ButtonProps): JSX.Element {
  const {
    children = "",
    className: customClassName = "",
    type = "button",
    variant = "accent",
    ...rest
  } = props

  const combinedClassName = `
    ${BUTTON_CLASS_NAME.BASE}
    ${BUTTON_CLASS_NAME.VARIANT[variant.toUpperCase() as keyof typeof BUTTON_CLASS_NAME.VARIANT]}
    ${customClassName}
  `
    .replaceAll(/\s+/g, " ")
    .trim()

  return (
    <button
      className={combinedClassName}
      type={type}
      {...rest}
    >
      {children}
    </button>
  )
}

export const BUTTON_CLASS_NAME = {
  BASE: styles.button,
  VARIANT: {
    ACCENT: styles.button__variant_accent,
    PRIMARY: styles.button__variant_primary,
    SECONDARY: styles.button__variant_secondary,
  },
} as const
