// oxlint-disable better-tailwindcss/no-unknown-classes

import type { ComponentProps, ElementType, JSX, ReactNode } from "react"
import type { ButtonSize, ButtonVariant } from "../button/button"
import { buttonStyles, buttonStylesBy } from "../button/button.stylex"
import { cn } from "../cn"

export type ButtonLinkProps<ComponentType extends ElementType = "a"> =
  ButtonLinkInternalProps<ComponentType> &
    Omit<ComponentProps<ComponentType>, "children" | keyof ButtonLinkInternalProps>

interface ButtonLinkInternalProps<ComponentType extends ElementType = "a"> {
  as?: ComponentType
  fullWidth?: boolean
  iconEnd?: ReactNode
  iconStart?: ReactNode
  label?: number | number[] | string | string[]
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
    iconStart = "",
    iconEnd = "",
    fullWidth = false,
    rounded = false,
    label = "",
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
    <Component className={combinedClassName} data-slot="button-link" {...rest}>
      {iconStart}
      {label !== "" && <span>{label}</span>}
      {iconEnd}
    </Component>
  )
}
