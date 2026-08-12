import { Combobox as BaseCombobox } from "@base-ui/react"
import type { JSX, ReactNode } from "react"
import { cn, sx } from "../cn"
import { comboboxValueStyles } from "./combobox-value.stylex"

export { comboboxValueStyles } from "./combobox-value.stylex"

export interface ComboboxValueProps extends BaseCombobox.Value.Props {
  className?: string
}

export function ComboboxValue(props: ComboboxValueProps): JSX.Element {
  const {
    children = undefined,
    className: customClassName = "",
    placeholder = undefined,
    ...rest
  } = props

  /* When nothing is selected, Base UI still calls function children (passing
     null) and ignores the placeholder, so the function may crash or render
     nothing. Guard against that: show the placeholder while nothing is
     selected, and only call the function once there is a real value. */
  const resolvedChildren: BaseCombobox.Value.Props["children"] =
    typeof children === "function"
      ? (selectedValue: unknown): ReactNode =>
          (selectedValue ?? undefined) === undefined ? placeholder : children(selectedValue)
      : children

  return (
    <div className={cn(sx(comboboxValueStyles.base), customClassName)} data-slot="combobox-value">
      <BaseCombobox.Value placeholder={placeholder} {...rest}>
        {resolvedChildren}
      </BaseCombobox.Value>
    </div>
  )
}
