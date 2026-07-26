import type { VariantProps } from "class-variance-authority"
import type { ComponentProps, ElementType, JSX, ReactNode } from "react"
import { button } from "../button/button"

export type ButtonLinkProps<ComponentType extends ElementType = "a"> =
  ButtonLinkInternalProps<ComponentType> &
    Omit<ComponentProps<ComponentType>, "children" | keyof ButtonLinkInternalProps>

interface ButtonLinkInternalProps<ComponentType extends ElementType = "a"> {
  as?: ComponentType
  iconEnd?: ReactNode
  iconStart?: ReactNode
  isFullWidth?: VariantProps<typeof button>["isFullWidth"]
  isRounded?: VariantProps<typeof button>["isRounded"]
  label?: number | number[] | string | string[]
  size?: VariantProps<typeof button>["size"]
  variant?: VariantProps<typeof button>["variant"]
}

export function ButtonLink<ComponentType extends ElementType = "a">(
  props: ButtonLinkProps<ComponentType>,
): JSX.Element {
  const {
    as: Component = "a",
    className = "",
    iconStart = "",
    iconEnd = "",
    isFullWidth = false,
    isRounded = false,
    label = "",
    size = 40,
    variant = "primary",
    ...rest
  } = props as ButtonLinkProps

  return (
    <Component
      className={button({
        className,
        isFullWidth,
        isRounded,
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
