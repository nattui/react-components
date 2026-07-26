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

  return (
    <BaseSelect.Trigger className={combinedClassName} data-slot="select-trigger" {...rest}>
      <BaseSelect.Value
        className={styles.select_trigger__value}
        data-slot="select-value"
        placeholder={placeholder}
      />

      {icon && (
        <BaseSelect.Icon className={styles.select_trigger__icon} data-slot="select-icon">
          {icon}
        </BaseSelect.Icon>
      )}
    </BaseSelect.Trigger>
  )
}

export const selectTriggerVariants = cva(styles.select_trigger)
