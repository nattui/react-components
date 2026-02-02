import type { ComponentProps, JSX } from "react"
import { Switch as BaseSwitch } from "@base-ui/react"
import styles from "@/switch.module.css"

export interface SwitchProps extends Omit<
  ComponentProps<typeof BaseSwitch.Root>,
  "checked" | "defaultChecked" | "disabled" | "nativeButton" | "readOnly" | "required"
> {
  isChecked?: boolean
  isDefaultChecked?: boolean
  isDisabled?: boolean
  isReadOnly?: boolean
  isRequired?: boolean
}

export function Switch(props: SwitchProps): JSX.Element {
  const {
    className: customClassName = "",
    isChecked = undefined,
    isDefaultChecked = false,
    isDisabled = false,
    isReadOnly = false,
    isRequired = false,
    ...rest
  } = props

  const combinedClassName = `
    ${styles.switch}
    ${customClassName}
  `
    .replaceAll(/\s+/g, " ")
    .trim()

  return (
    <BaseSwitch.Root
      checked={isChecked}
      className={combinedClassName}
      defaultChecked={isDefaultChecked}
      disabled={isDisabled}
      readOnly={isReadOnly}
      required={isRequired}
      {...rest}
    >
      <BaseSwitch.Thumb className={styles.switch__thumb} />
    </BaseSwitch.Root>
  )
}
