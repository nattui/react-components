import { Select as BaseSelect } from "@base-ui/react"
import { cva } from "class-variance-authority"
import type { JSX } from "react"
import styles from "./select-trigger.module.css"

export interface SelectTriggerProps extends BaseSelect.Trigger.Props {
  placeholder?: BaseSelect.Value.Props["placeholder"]
}

export function SelectTrigger(props: SelectTriggerProps): JSX.Element {
  const { className: customClassName = "", placeholder = "", ...rest } = props

  const combinedClassName = selectTriggerVariants({ className: customClassName })

  return (
    <BaseSelect.Trigger className={combinedClassName} data-slot="select-trigger" {...rest}>
      <BaseSelect.Value
        className={styles.select_trigger__value}
        data-slot="select-value"
        placeholder={placeholder}
      />

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

export const selectTriggerVariants = cva(styles.select_trigger)
