import { Checkbox as BaseCheckbox } from "@base-ui/react"
import type { ComponentProps, JSX } from "react"
import { cn } from "../cn"
import { CheckboxIcon } from "./checkbox-icon"
import { checkboxStyles } from "./checkbox.stylex"

export { checkboxStyles } from "./checkbox.stylex"

export interface CheckboxProps extends ComponentProps<typeof BaseCheckbox.Root> {}

export function Checkbox(props: CheckboxProps): JSX.Element {
  const { children = undefined, className: customClassName = "", ...rest } = props

  return (
    <BaseCheckbox.Root
      className={cn(checkboxStyles.base, customClassName)}
      data-slot="checkbox"
      {...rest}
    >
      <BaseCheckbox.Indicator className={cn(checkboxStyles.indicator)}>
        {children ?? <CheckboxIcon className={cn(checkboxStyles.icon)} />}
      </BaseCheckbox.Indicator>
    </BaseCheckbox.Root>
  )
}
