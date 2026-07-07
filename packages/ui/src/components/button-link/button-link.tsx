import type { ComponentProps, ElementType, JSX } from "react"
import { button, type ButtonProps } from "../button/button"

export type ButtonLinkProps<ComponentType extends ElementType = "a"> =
  ButtonLinkHrefProps<ComponentType> &
    ButtonLinkInternalProps<ComponentType> &
    Omit<
      ComponentProps<ComponentType>,
      "children" | "href" | keyof ButtonLinkInternalProps<ComponentType>
    >

type ButtonLinkHrefProps<ComponentType extends ElementType> =
  // Router link components often narrow `href`, but concrete URLs should remain valid.
  ComponentProps<ComponentType> extends { href: infer Href }
    ? { href: Href | string }
    : ComponentProps<ComponentType> extends { href?: infer Href }
      ? { href?: Href | string }
      : unknown

interface ButtonLinkInternalProps<ComponentType extends ElementType> extends Pick<
  ButtonProps,
  "iconEnd" | "iconStart" | "isFullWidth" | "isRounded" | "label" | "size" | "variant"
> {
  as?: ComponentType
}

export function ButtonLink<ComponentType extends ElementType = "a">(
  props: ButtonLinkProps<ComponentType>,
): JSX.Element {
  const {
    as = "a",
    className: customClassName = "",
    iconEnd = "",
    iconStart = "",
    isFullWidth = false,
    isRounded = false,
    label = "",
    size = 40,
    variant = "primary",
    ...rest
  } = props

  const Component = as as ElementType

  const combinedClassName = button({
    className: customClassName as string,
    isFullWidth,
    isRounded,
    size: size as ButtonProps["size"],
    variant: variant as ButtonProps["variant"],
  })

  return (
    <Component className={combinedClassName} {...rest}>
      {iconStart}
      <span>{label}</span>
      {iconEnd}
    </Component>
  )
}
