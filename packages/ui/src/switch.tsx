import { Switch as BaseSwitch } from "@base-ui/react"
import type { ComponentProps, JSX } from "react"
import styles from "@/switch.module.css"

export interface SwitchProps extends ComponentProps<typeof BaseSwitch.Root> {}

export function Switch(props: SwitchProps): JSX.Element {
  const { className: customClassName = "", ...rest } = props

  const combinedClassName = `
    ${styles.switch}
    ${customClassName}
  `
    .replaceAll(/\s+/g, " ")
    .trim()

  return (
    <BaseSwitch.Root
      className={combinedClassName}
      {...rest}
    >
      <BaseSwitch.Thumb className={styles.switch__thumb} />
    </BaseSwitch.Root>
  )
}
