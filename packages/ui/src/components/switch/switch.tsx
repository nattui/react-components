import { Switch as BaseSwitch } from "@base-ui/react"
import type { ComponentProps, JSX } from "react"
import { cn, sx } from "../cn"
import { switchStyles } from "./switch.stylex"

export { switchStyles } from "./switch.stylex"

export interface SwitchProps extends Omit<
  ComponentProps<typeof BaseSwitch.Root>,
  "checked" | "defaultChecked" | "disabled" | "nativeButton" | "readOnly" | "required"
> {
  isChecked?: boolean
  isDefaultChecked?: boolean
  isDisabled?: boolean
  isReadOnly?: boolean
  isRequired?: boolean
  size?: SwitchSize
}

export type SwitchSize = 18 | 24

export function Switch(props: SwitchProps): JSX.Element {
  const {
    className: customClassName = "",
    isChecked = undefined,
    isDefaultChecked = false,
    isDisabled = false,
    isReadOnly = false,
    isRequired = false,
    size = 24,
    ...rest
  } = props

  return (
    <BaseSwitch.Root
      checked={isChecked}
      className={cn(sx(switchStyles.base, switchStyles[size]), customClassName)}
      data-slot="switch"
      defaultChecked={isDefaultChecked}
      disabled={isDisabled}
      readOnly={isReadOnly}
      required={isRequired}
      {...rest}
    >
      <BaseSwitch.Thumb className={sx(switchStyles.thumb)} />
    </BaseSwitch.Root>
  )
}
