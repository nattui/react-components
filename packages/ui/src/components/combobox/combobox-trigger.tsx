import { Combobox as BaseCombobox } from "@base-ui/react"
import type { JSX } from "react"
import { cn } from "../cn"
import { pickerTriggerStylesBy, pickerTriggerStyles } from "../picker/picker-trigger.stylex"

export interface ComboboxTriggerProps extends BaseCombobox.Trigger.Props {
  rounded?: boolean
  size?: ComboboxTriggerSize
}

export type ComboboxTriggerSize = 32 | 36 | 40 | 44 | 48

export function ComboboxTrigger(props: ComboboxTriggerProps): JSX.Element {
  const { children = undefined, className = "", rounded = false, size = 40, ...rest } = props

  const combinedClassName = cn(
    pickerTriggerStyles.base,
    pickerTriggerStylesBy.size[size],
    rounded && pickerTriggerStylesBy.rounded.full,
    className,
  )

  return (
    <BaseCombobox.Trigger className={combinedClassName} data-component="combobox-trigger" {...rest}>
      {children}

      <BaseCombobox.Icon className={cn(pickerTriggerStyles.icon)} data-component="combobox-icon">
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
  )
}
