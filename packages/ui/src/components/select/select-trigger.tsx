import { Select as BaseSelect } from "@base-ui/react"
import type { JSX } from "react"
import { cn } from "../cn"
import { pickerTriggerStylesBy, pickerTriggerStyles } from "../picker/picker-trigger.stylex"

export interface SelectTriggerProps extends BaseSelect.Trigger.Props {
  rounded?: boolean
  size?: SelectTriggerSize
}

export type SelectTriggerSize = 32 | 36 | 40 | 44 | 48

export function SelectTrigger(props: SelectTriggerProps): JSX.Element {
  const { children = undefined, className = "", rounded = false, size = 40, ...rest } = props

  const combinedClassName = cn(
    pickerTriggerStyles.base,
    pickerTriggerStylesBy.size[size],
    rounded && pickerTriggerStylesBy.rounded.full,
    className,
  )

  return (
    <BaseSelect.Trigger className={combinedClassName} data-component="select-trigger" {...rest}>
      {children}

      <BaseSelect.Icon className={cn(pickerTriggerStyles.icon)} data-component="select-icon">
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
