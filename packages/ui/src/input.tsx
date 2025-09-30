import type { ComponentProps, JSX } from "react"
import styles from "@/input.module.css"

export interface InputProps
  extends Omit<ComponentProps<"input">, "aria-pressed" | "disabled"> {
  isActive?: boolean
  isDisabled?: boolean
}

export function Input(props: InputProps): JSX.Element {
  const {
    className: customClassName = "",
    isActive = false,
    isDisabled = false,
    type = "text",
    ...rest
  } = props

  const isPassword = type === "password"

  const combinedClassName = `
    ${INPUT_CLASS_NAME.BASE}
    ${isPassword ? INPUT_CLASS_NAME.PASSWORD : ""}
    ${customClassName}
  `
    .replaceAll(/\s+/g, " ")
    .trim()

  return (
    <input
      aria-pressed={isActive}
      className={combinedClassName}
      disabled={isDisabled}
      type={type}
      {...rest}
    />
  )
}

export const INPUT_CLASS_NAME = {
  BASE: styles.input,
  PASSWORD: styles.input__password,
} as const
