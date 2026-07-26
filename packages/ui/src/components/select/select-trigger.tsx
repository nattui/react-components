import { Select as BaseSelect } from "@base-ui/react"
import { cva, type VariantProps } from "class-variance-authority"
import type { JSX } from "react"
import styles from "./select-trigger.module.css"

export interface SelectTriggerProps extends Omit<BaseSelect.Trigger.Props, "children"> {
  children?: BaseSelect.Value.Props["children"]
  isRounded?: VariantProps<typeof selectTriggerVariants>["isRounded"]
  placeholder?: BaseSelect.Value.Props["placeholder"]
  size?: VariantProps<typeof selectTriggerVariants>["size"]
}

export function SelectTrigger(props: SelectTriggerProps): JSX.Element {
  const {
    children = undefined,
    className: customClassName = "",
    isRounded = false,
    placeholder = "",
    size = 40,
    ...rest
  } = props

  const combinedClassName = selectTriggerVariants({
    className: customClassName,
    isRounded,
    size,
  })

  return (
    <BaseSelect.Trigger className={combinedClassName} data-slot="select-trigger" {...rest}>
      <BaseSelect.Value
        className={styles.select_trigger__value}
        data-slot="select-value"
        placeholder={placeholder}
      >
        {children}
      </BaseSelect.Value>

      <BaseSelect.Icon className={styles.select_trigger__icon} data-slot="select-icon">
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
      </BaseSelect.Icon>
    </BaseSelect.Trigger>
  )
}

export const selectTriggerVariants = cva(styles.select_trigger, {
  variants: {
    isRounded: {
      false: styles.rounded_base,
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
