import { createElement, type ComponentProps, type ElementType, type JSX } from "react"
import { BUTTON_CLASS_NAME, type ButtonProps } from "@/button"

export type ButtonLinkProps<ComponentType extends ElementType = "a"> = ButtonLinkInternalProps &
  ComponentProps<ComponentType>

interface ButtonLinkInternalProps extends Pick<
  ButtonProps,
  "isFullWidth" | "isIconOnly" | "isRounded" | "size" | "variant"
> {
  as?: ElementType
}

export function ButtonLink<ComponentType extends ElementType = "a">(
  props: ButtonLinkProps<ComponentType>,
): JSX.Element {
  const {
    as = "a",
    className: customClassName = "",
    isFullWidth = false,
    isIconOnly = false,
    isRounded = false,
    size = 40,
    variant = "primary",
    ...rest
  } = props

  const Component = as as ElementType

  const combinedClassName = `
    ${BUTTON_CLASS_NAME.BASE}
    ${BUTTON_CLASS_NAME.SIZE[size]}
    ${BUTTON_CLASS_NAME.VARIANT[variant.toUpperCase() as keyof typeof BUTTON_CLASS_NAME.VARIANT]}
    ${isFullWidth ? BUTTON_CLASS_NAME.WIDTH.FULL : BUTTON_CLASS_NAME.WIDTH.BASE}
    ${isIconOnly ? BUTTON_CLASS_NAME.ICON_ONLY : ""}
    ${isRounded ? BUTTON_CLASS_NAME.ROUNDED.FULL : BUTTON_CLASS_NAME.ROUNDED.BASE}
    ${customClassName}
  `
    .replaceAll(/\s+/g, " ")
    .trim()

  return createElement(Component, {
    ...rest,
    className: combinedClassName,
  })
}
