import { Switch as BaseSwitch } from "@base-ui/react"
import type { ComponentProps, JSX } from "react"
import { cn } from "../cn"
import { switchStyles } from "./switch.stylex"

export { switchStyles } from "./switch.stylex"

export interface SwitchProps extends Omit<ComponentProps<typeof BaseSwitch.Root>, "nativeButton"> {
  size?: SwitchSize
}

export type SwitchSize = 18 | 24

export function Switch(props: SwitchProps): JSX.Element {
  const { className: customClassName = "", size = 24, ...rest } = props

  return (
    <BaseSwitch.Root
      className={cn(switchStyles.base, switchStyles[size], customClassName)}
      data-slot="switch"
      {...rest}
    >
      <BaseSwitch.Thumb className={cn(switchStyles.thumb)} />
    </BaseSwitch.Root>
  )
}
