import { Checkbox as BaseCheckbox } from "@base-ui/react"
import type { ComponentProps, JSX } from "react"
import { cn } from "../cn"
import { CheckboxIcon } from "./checkbox-icon"
import { checkboxStyles } from "./checkbox.stylex"

export interface CheckboxProps extends ComponentProps<typeof BaseCheckbox.Root> {}

export function Checkbox(props: CheckboxProps): JSX.Element {
  const { children = undefined, className = "", ...rest } = props

  const combinedClassName = cn(checkboxStyles.base, className)

  return (
    <BaseCheckbox.Root className={combinedClassName} data-component="checkbox" {...rest}>
      <BaseCheckbox.Indicator className={cn(checkboxStyles.indicator)}>
        {children ?? <CheckboxIcon className={cn(checkboxStyles.icon)} />}
      </BaseCheckbox.Indicator>
    </BaseCheckbox.Root>
  )
}
