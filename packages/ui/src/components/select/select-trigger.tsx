import { Select as BaseSelect } from "@base-ui/react"
import { cva } from "class-variance-authority"
import type { JSX, ReactNode } from "react"
import styles from "./select-trigger.module.css"

export interface SelectTriggerProps extends BaseSelect.Trigger.Props {
  icon?: ReactNode
  placeholder?: BaseSelect.Value.Props["placeholder"]
}

export function SelectTrigger(props: SelectTriggerProps): JSX.Element {
  const { className: customClassName = "", icon = undefined, placeholder = "", ...rest } = props

  const combinedClassName = selectTriggerVariants({ className: customClassName })

  const currentIcon = icon ?? (
    <svg fill="none" height="16" viewBox="0 0 16 16" width="16">
      <path
        d="M4.5 6L8 2.5L11.5 6M4.5 10L8 13.5L11.5 10"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
    </svg>
  )

  return (
    <BaseSelect.Trigger className={combinedClassName} data-slot="select-trigger" {...rest}>
      <BaseSelect.Value
        className={styles.select_trigger__value}
        data-slot="select-value"
        placeholder={placeholder}
      />

      <BaseSelect.Icon className={styles.select_trigger__icon} data-slot="select-icon">
        {currentIcon}
      </BaseSelect.Icon>
    </BaseSelect.Trigger>
  )
}

export const selectTriggerVariants = cva(styles.select_trigger)
