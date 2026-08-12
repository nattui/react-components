import type { ComponentProps, JSX, ReactNode } from "react"
import { cn, sx } from "../cn"
import { ButtonSpinner } from "./button-spinner"
import { buttonRoundedBaseStyles, buttonRoundedFullStyles, buttonStyles } from "./button.stylex"

export { buttonStyles } from "./button.stylex"

export interface ButtonProps extends Omit<ComponentProps<"button">, "children" | "disabled"> {
  iconEnd?: ReactNode
  iconStart?: ReactNode
  isDisabled?: ComponentProps<"button">["disabled"]
  isFullWidth?: boolean
  isLoading?: ComponentProps<"button">["disabled"]
  isRounded?: boolean
  label?: number | number[] | string | string[]
  size?: ButtonSize
  variant?: ButtonVariant
}
export type ButtonSize = 32 | 36 | 40 | 44 | 48

export type ButtonVariant = "ghost" | "primary" | "secondary"

export function Button(props: ButtonProps): JSX.Element {
  const {
    className = "",
    isDisabled = false,
    iconStart = "",
    iconEnd = "",
    isFullWidth = false,
    isLoading = false,
    isRounded = false,
    label = "",
    variant = "primary",
    size = 40,
    ...rest
  } = props

  return (
    <button
      className={getButtonClassName({
        className,
        isDisabled,
        isFullWidth,
        isLoading,
        isRounded,
        size,
        variant,
      })}
      data-slot="button"
      disabled={isDisabled || isLoading}
      type="button"
      {...rest}
    >
      {isLoading && <ButtonSpinner />}
      {hideWhenLoading(iconStart, isLoading)}
      {label !== "" && (
        <span className={sx(isLoading && buttonStyles.loadingContent)}>{label}</span>
      )}
      {hideWhenLoading(iconEnd, isLoading)}
    </button>
  )
}

export function getButtonClassName(
  options: {
    className?: string
    isDisabled?: boolean
    isFullWidth?: boolean
    isLoading?: boolean
    isRounded?: boolean
    size?: ButtonSize
    variant?: ButtonVariant
  },
  ...overrides: Parameters<typeof sx>
): string {
  const {
    className = "",
    isDisabled = false,
    isFullWidth = false,
    isLoading = false,
    isRounded = false,
    size = 40,
    variant = "primary",
  } = options

  return cn(
    sx(
      buttonStyles.base,
      buttonStyles[size],
      (isRounded ? buttonRoundedFullStyles : buttonRoundedBaseStyles)[size],
      buttonStyles[variant],
      isFullWidth ? buttonStyles.widthFull : buttonStyles.widthBase,
      isDisabled && buttonStyles.disabled,
      isLoading && buttonStyles.loading,
      ...overrides,
    ),
    className,
  )
}

function hideWhenLoading(node: ReactNode, isLoading: boolean): ReactNode {
  if (!isLoading || node === "") {
    return node
  }

  return <span className={sx(buttonStyles.loadingContent)}>{node}</span>
}
