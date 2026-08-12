import { Select as BaseSelect } from "@base-ui/react"
import type { JSX } from "react"
import { cn } from "../cn"
import { pickerTriggerStyles } from "../picker/picker-trigger.stylex"

export { pickerTriggerStyles as selectTriggerStyles } from "../picker/picker-trigger.stylex"

export interface SelectTriggerProps extends BaseSelect.Trigger.Props {
  rounded?: boolean
  size?: SelectTriggerSize
}

export type SelectTriggerSize = 32 | 36 | 40 | 44 | 48

export function SelectTrigger(props: SelectTriggerProps): JSX.Element {
  const {
    children = undefined,
    className: customClassName = "",
    rounded = false,
    size = 40,
    ...rest
  } = props

  return (
    <BaseSelect.Trigger
      className={cn(
        pickerTriggerStyles.base,
        pickerTriggerStyles[size],
        rounded && pickerTriggerStyles.roundedFull,
        customClassName,
      )}
      data-slot="select-trigger"
      {...rest}
    >
      {children}

      <BaseSelect.Icon className={cn(pickerTriggerStyles.icon)} data-slot="select-icon">
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
