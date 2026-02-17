import { Switch as BaseSwitch } from "@base-ui/react"
import type { ComponentProps, JSX } from "react"
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
  size?: 14 | 24
}

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

  const combinedClassName = `
    ${SWITCH_CLASS_NAME.BASE}
    ${SWITCH_CLASS_NAME.SIZE[size]}
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

export const SWITCH_CLASS_NAME = {
  BASE: styles.switch,
  SIZE: {
    14: styles.switch__size_14,
    24: styles.switch__size_24,
  },
} as const
