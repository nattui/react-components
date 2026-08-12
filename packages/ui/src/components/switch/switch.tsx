import { Switch as BaseSwitch } from "@base-ui/react"
import type { ComponentProps, JSX } from "react"
import { cn } from "../cn"
import { switchStylesBy, switchStyles } from "./switch.stylex"

export interface SwitchProps extends Omit<ComponentProps<typeof BaseSwitch.Root>, "nativeButton"> {
  size?: SwitchSize
}

export type SwitchSize = 18 | 24

export function Switch(props: SwitchProps): JSX.Element {
  const { className = "", size = 24, ...rest } = props

  const combinedClassName = cn(switchStyles.base, switchStylesBy.size[size], className)

  return (
    <BaseSwitch.Root className={combinedClassName} data-component="switch" {...rest}>
      <BaseSwitch.Thumb className={cn(switchStyles.thumb)} />
    </BaseSwitch.Root>
  )
}
