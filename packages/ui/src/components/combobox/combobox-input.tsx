import { Combobox as BaseCombobox } from "@base-ui/react"
import type { JSX } from "react"
import { cn } from "../cn"
import { comboboxInputStylesBy, comboboxInputStyles } from "./combobox-input.stylex"

export interface ComboboxInputProps extends Omit<BaseCombobox.Input.Props, "className" | "size"> {
  className?: string
  rounded?: boolean
  size?: ComboboxInputSize
}

export type ComboboxInputSize = 32 | 36 | 40 | 44 | 48

export function ComboboxInput(props: ComboboxInputProps): JSX.Element {
  const { className = "", disabled = false, rounded = false, size = 40, ...rest } = props

  const combinedClassName = cn(
    comboboxInputStyles.base,
    comboboxInputStylesBy.size[size],
    rounded && comboboxInputStylesBy.rounded.full,
    className,
  )

  return (
    <BaseCombobox.InputGroup className={combinedClassName} data-component="combobox-input-group">
      <BaseCombobox.Input
        className={cn(comboboxInputStyles.input)}
        data-component="combobox-input"
        disabled={disabled}
        {...rest}
      />

      <BaseCombobox.Trigger
        className={cn(comboboxInputStyles.trigger)}
        data-component="combobox-input-trigger"
        disabled={disabled}
        tabIndex={-1}
      >
        <BaseCombobox.Icon
          className={cn(comboboxInputStyles.icon)}
          data-component="combobox-input-icon"
        >
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
