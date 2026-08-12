import type { ComponentProps, ElementType, JSX, ReactNode } from "react"
import { getButtonClassName, type ButtonSize, type ButtonVariant } from "../button/button"

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

  return (
    <Component
      className={getButtonClassName({
        className,
        fullWidth,
        rounded,
        size,
        variant,
      })}
      data-slot="button-link"
      {...rest}
    >
      {iconStart}
      {label !== "" && <span>{label}</span>}
      {iconEnd}
    </Component>
  )
}
