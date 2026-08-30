// oxlint-disable better-tailwindcss/no-unknown-classes

import type { ComponentProps, ElementType, JSX, ReactNode } from "react"
import type { ButtonSize, ButtonVariant } from "../button/button"
import { buttonStylesBy, buttonStyles } from "../button/button.stylex"
import { cn } from "../cn"
import { iconButtonStyles, iconButtonStylesBy } from "../icon-button/icon-button.stylex"

export type IconButtonLinkProps<ComponentType extends ElementType = "a"> =
  IconButtonLinkInternalProps<ComponentType> &
    Omit<ComponentProps<ComponentType>, "children" | keyof IconButtonLinkInternalProps>

interface IconButtonLinkInternalProps<ComponentType extends ElementType = "a"> {
  as?: ComponentType
  icon?: ReactNode
  rounded?: boolean
  size?: ButtonSize
  variant?: ButtonVariant
}

export function IconButtonLink<ComponentType extends ElementType = "a">(
  props: IconButtonLinkProps<ComponentType>,
): JSX.Element {
  const {
    as: Component = "a",
    className = "",
    icon = "",
    rounded = false,
    size = 40,
    variant = "primary",
    ...rest
  } = props as IconButtonLinkProps

  const combinedClassName = cn(
    buttonStyles.base,
    buttonStylesBy.rounded[rounded ? "full" : "base"][size],
    buttonStylesBy.size[size],
    buttonStylesBy.variant[variant],
    buttonStylesBy.width.base,
    iconButtonStyles.base,
    iconButtonStylesBy.size[size],
    className,
  )

  return (
    <Component className={combinedClassName} data-component="icon-button-link" {...rest}>
      {icon}
    </Component>
  )
}
