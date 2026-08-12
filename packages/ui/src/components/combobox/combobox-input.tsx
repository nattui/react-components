import { Combobox as BaseCombobox } from "@base-ui/react"
import type { JSX } from "react"
import { cn, sx } from "../cn"
import { comboboxInputStyles } from "./combobox-input.stylex"

export { comboboxInputStyles } from "./combobox-input.stylex"

export interface ComboboxInputProps extends Omit<BaseCombobox.Input.Props, "className" | "size"> {
  className?: string
  rounded?: boolean
  size?: ComboboxInputSize
}

export type ComboboxInputSize = 32 | 36 | 40 | 44 | 48

export function ComboboxInput(props: ComboboxInputProps): JSX.Element {
  const {
    className: customClassName = "",
    disabled = false,
    rounded = false,
    size = 40,
    ...rest
  } = props

  return (
    <BaseCombobox.InputGroup
      className={cn(
        sx(
          comboboxInputStyles.base,
          comboboxInputStyles[size],
          rounded && comboboxInputStyles.roundedFull,
        ),
        customClassName,
      )}
      data-slot="combobox-input-group"
    >
      <BaseCombobox.Input
        className={sx(comboboxInputStyles.input)}
        data-slot="combobox-input"
        disabled={disabled}
        {...rest}
      />

      <BaseCombobox.Trigger
        className={sx(comboboxInputStyles.trigger)}
        data-slot="combobox-input-trigger"
        disabled={disabled}
        tabIndex={-1}
      >
        <BaseCombobox.Icon className={sx(comboboxInputStyles.icon)} data-slot="combobox-input-icon">
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
