import { Select as BaseSelect } from "@base-ui/react"
import type { JSX, ReactNode } from "react"
import { cn } from "../cn"
import { selectValueStyles } from "./select-value.stylex"

export { selectValueStyles } from "./select-value.stylex"

export interface SelectValueProps extends BaseSelect.Value.Props {}

export function SelectValue(props: SelectValueProps): JSX.Element {
  const {
    children = undefined,
    className: customClassName = "",
    placeholder = undefined,
    render = <div />,
    ...rest
  } = props

  /* When nothing is selected, Base UI still calls function children (passing
     null) and ignores the placeholder, so the function may crash or render
     nothing. Guard against that: show the placeholder while nothing is
     selected, and only call the function once there is a real value. */
  const resolvedChildren: BaseSelect.Value.Props["children"] =
    typeof children === "function"
      ? (selectedValue: unknown): ReactNode =>
          (selectedValue ?? undefined) === undefined ? placeholder : children(selectedValue)
      : children

  return (
    <BaseSelect.Value
      className={cn(selectValueStyles.base, customClassName)}
      data-slot="select-value"
      placeholder={placeholder}
      render={render}
      {...rest}
    >
      {resolvedChildren}
    </BaseSelect.Value>
  )
}
