import type { ComponentProps, JSX, ReactNode } from "react"
import { cn, sx } from "../cn"
import { ButtonSpinner } from "./button-spinner"
import { buttonRoundedBaseStyles, buttonRoundedFullStyles, buttonStyles } from "./button.stylex"

export { buttonStyles } from "./button.stylex"

export interface ButtonProps extends Omit<ComponentProps<"button">, "children"> {
  fullWidth?: boolean
  iconEnd?: ReactNode
  iconStart?: ReactNode
  label?: number | number[] | string | string[]
  loading?: boolean
  rounded?: boolean
  size?: ButtonSize
  variant?: ButtonVariant
}
export type ButtonSize = 32 | 36 | 40 | 44 | 48

export type ButtonVariant = "ghost" | "primary" | "secondary"

export function Button(props: ButtonProps): JSX.Element {
  const {
    className = "",
    disabled = false,
    iconStart = "",
    iconEnd = "",
    fullWidth = false,
    loading = false,
    rounded = false,
    label = "",
    variant = "primary",
    size = 40,
    ...rest
  } = props

  return (
    <button
      className={getButtonClassName({
        className,
        disabled,
        fullWidth,
        loading,
        rounded,
        size,
        variant,
      })}
      data-slot="button"
      disabled={disabled || loading}
      type="button"
      {...rest}
    >
      {loading && <ButtonSpinner />}
      {hideWhenLoading(iconStart, loading)}
      {label !== "" && <span className={sx(loading && buttonStyles.loadingContent)}>{label}</span>}
      {hideWhenLoading(iconEnd, loading)}
    </button>
  )
}

export function getButtonClassName(
  options: {
    className?: string
    disabled?: boolean
    fullWidth?: boolean
    loading?: boolean
    rounded?: boolean
    size?: ButtonSize
    variant?: ButtonVariant
  },
  ...overrides: Parameters<typeof sx>
): string {
  const {
    className = "",
    disabled = false,
    fullWidth = false,
    loading = false,
    rounded = false,
    size = 40,
    variant = "primary",
  } = options

  return cn(
    sx(
      buttonStyles.base,
      buttonStyles[size],
      (rounded ? buttonRoundedFullStyles : buttonRoundedBaseStyles)[size],
      buttonStyles[variant],
      fullWidth ? buttonStyles.widthFull : buttonStyles.widthBase,
      disabled && buttonStyles.disabled,
      loading && buttonStyles.loading,
      ...overrides,
    ),
    className,
  )
}

function hideWhenLoading(node: ReactNode, loading: boolean): ReactNode {
  if (!loading || node === "") {
    return node
  }

  return <span className={sx(buttonStyles.loadingContent)}>{node}</span>
}
