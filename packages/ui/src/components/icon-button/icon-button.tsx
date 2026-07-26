import { cva, cx } from "class-variance-authority"
import type { JSX, ReactNode } from "react"
import { button, type ButtonProps } from "../button/button"
import { ButtonSpinner } from "../button/button-spinner"
import styles from "./icon-button.module.css"

export interface IconButtonProps extends Omit<
  ButtonProps,
  "iconEnd" | "iconStart" | "isFullWidth" | "label"
> {
  icon?: ReactNode
}

export function IconButton(props: IconButtonProps): JSX.Element {
  const {
    className = "",
    icon = "",
    isDisabled = false,
    isLoading = false,
    isRounded = false,
    variant = "primary",
    size = 40,
    ...rest
  } = props

  return (
    <button
      className={cx(
        button({
          isDisabled,
          isLoading,
          isRounded,
          size,
          variant,
        }),
        iconButton({
          className,
          size,
        }),
      )}
      data-slot="icon-button"
      disabled={isDisabled || isLoading}
      type="button"
      {...rest}
    >
      {isLoading && <ButtonSpinner />}
      {icon}
    </button>
  )
}

export const iconButton = cva("", {
  variants: {
    size: {
      32: styles.size_32,
      36: styles.size_36,
      40: styles.size_40,
      44: styles.size_44,
      48: styles.size_48,
    },
  },
})
