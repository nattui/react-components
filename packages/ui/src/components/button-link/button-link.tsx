// oxlint-disable unicorn/no-empty-file

// import { createElement, type ComponentProps, type ElementType, type JSX } from "react"
// import { buttonVariants, type ButtonProps } from "../button/button"

// export type ButtonLinkProps<ComponentType extends ElementType = "a"> =
//   ButtonLinkHrefProps<ComponentType> &
//     ButtonLinkInternalProps<ComponentType> &
//     Omit<ComponentProps<ComponentType>, "href" | keyof ButtonLinkInternalProps<ComponentType>>

// type ButtonLinkHrefProps<ComponentType extends ElementType> =
//   // Router link components often narrow `href`, but concrete URLs should remain valid.
//   ComponentProps<ComponentType> extends { href: infer Href }
//     ? { href: Href | string }
//     : ComponentProps<ComponentType> extends { href?: infer Href }
//       ? { href?: Href | string }
//       : unknown

// interface ButtonLinkInternalProps<ComponentType extends ElementType> extends Pick<
//   ButtonProps,
//   "isFullWidth" | "isIconOnly" | "isRounded" | "size" | "variant"
// > {
//   as?: ComponentType
// }

// export function ButtonLink<ComponentType extends ElementType = "a">(
//   props: ButtonLinkProps<ComponentType>,
// ): JSX.Element {
//   const {
//     as = "a",
//     className: customClassName = "",
//     isFullWidth = false,
//     isIconOnly = false,
//     isRounded = false,
//     size = 40,
//     variant = "primary",
//     ...rest
//   } = props

//   const Component = as as ElementType

//   const combinedClassName = buttonVariants({
//     className: customClassName as string,
//     isFullWidth,
//     isIconOnly,
//     isRounded,
//     size: size as ButtonProps["size"],
//     variant: variant as ButtonProps["variant"],
//   })

//   return createElement(Component, {
//     className: combinedClassName,
//     ...rest,
//   })
// }
