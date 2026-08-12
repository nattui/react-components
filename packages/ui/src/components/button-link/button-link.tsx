// oxlint-disable better-tailwindcss/no-unknown-classes

import type { ComponentProps, ElementType, JSX, ReactNode } from "react"
import type { ButtonSize, ButtonVariant } from "../button/button"
import { buttonStylesBy, buttonStyles } from "../button/button.stylex"
import { cn } from "../cn"

export type ButtonLinkProps<ComponentType extends ElementType = "a"> =
  ButtonLinkInternalProps<ComponentType> &
    Omit<ComponentProps<ComponentType>, "children" | keyof ButtonLinkInternalProps>

interface ButtonLinkInternalProps<ComponentType extends ElementType = "a"> {
  as?: ComponentType
  fullWidth?: boolean
  iconEnd?: ReactNode
  iconStart?: ReactNode
  label?: string
  rounded?: boolean
  size?: ButtonSize
  variant?: ButtonVariant
}

export function ButtonLink<ComponentType extends ElementType = "a">(
  props: ButtonLinkProps<ComponentType>,
): JSX.Element {
  const {
    as: Component = "a",
    className = "",
    fullWidth = false,
    iconEnd = "",
    iconStart = "",
    label = "",
    rounded = false,
    size = 40,
    variant = "primary",
    ...rest
  } = props as ButtonLinkProps

  const combinedClassName = cn(
    buttonStyles.base,
    buttonStylesBy.rounded[rounded ? "full" : "base"][size],
    buttonStylesBy.size[size],
    buttonStylesBy.variant[variant],
    buttonStylesBy.width[fullWidth ? "full" : "base"],
    className,
  )

  return (
    <Component className={combinedClassName} data-component="button-link" {...rest}>
      {iconStart}
      {label}
      {iconEnd}
    </Component>
  )
}
