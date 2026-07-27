import { Combobox as BaseCombobox } from "@base-ui/react"
import { cva, type VariantProps } from "class-variance-authority"
import type { JSX } from "react"
import styles from "./combobox-input.module.css"

export interface ComboboxInputProps extends Omit<
  BaseCombobox.Input.Props,
  "className" | "disabled" | "size"
> {
  className?: string
  isDisabled?: BaseCombobox.Input.Props["disabled"]
  isRounded?: VariantProps<typeof comboboxInputVariants>["isRounded"]
  size?: VariantProps<typeof comboboxInputVariants>["size"]
}

export function ComboboxInput(props: ComboboxInputProps): JSX.Element {
  const {
    className: customClassName = "",
    isDisabled = false,
    isRounded = false,
    size = 40,
    ...rest
  } = props

  const combinedClassName = comboboxInputVariants({
    className: customClassName,
    isRounded,
    size,
  })

  return (
    <BaseCombobox.InputGroup className={combinedClassName} data-slot="combobox-input-group">
      <BaseCombobox.Input
        className={styles.input}
        data-slot="combobox-input"
        disabled={isDisabled}
        {...rest}
      />

      <BaseCombobox.Trigger
        className={styles.trigger}
        data-slot="combobox-input-trigger"
        disabled={isDisabled}
        tabIndex={-1}
      >
        <BaseCombobox.Icon className={styles.icon} data-slot="combobox-input-icon">
          {/* chevron-down */}
          <svg height="14" viewBox="0 0 18 18" width="14" xmlns="http://www.w3.org/2000/svg">
            <polyline
              fill="none"
              points="15.25 6.5 9 12.75 2.75 6.5"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
            />
          </svg>
        </BaseCombobox.Icon>
      </BaseCombobox.Trigger>
    </BaseCombobox.InputGroup>
  )
}

export const comboboxInputVariants = cva(styles.base, {
  variants: {
    isRounded: {
      true: styles.rounded_full,
    },
    size: {
      32: styles.size_32,
      36: styles.size_36,
      40: styles.size_40,
      44: styles.size_44,
      48: styles.size_48,
    },
  },
})
