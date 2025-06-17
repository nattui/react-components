import { type ComponentProps } from "react"
import styles from "@/button.module.css"

export interface ButtonProperties extends ComponentProps<"button"> {
  size?: 32 | 36 | 40 | 48
}

export const buttonStyles = {
  base: styles.button,
  size: {
    32: styles.button__size_32,
    36: styles.button__size_36,
    40: styles.button__size_40,
    48: styles.button__size_48,
  },
}

export function Button(properties: ButtonProperties) {
  const {
    children = "",
    className: customClassName = "",
    size = 36,
    ...rest
  } = properties

  const combinedClassName = `
    ${buttonStyles.base}
    ${buttonStyles.size[size]}
    ${customClassName}
  `
    .replaceAll(/\s+/g, " ")
    .trim()

  return (
    <button className={combinedClassName} {...rest}>
      <p>Click me</p>
      <span>{children}</span>
    </button>
  )
}
