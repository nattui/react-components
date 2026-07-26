import { Switch as BaseSwitch } from "@base-ui/react"
import { cva, type VariantProps } from "class-variance-authority"
import type { ComponentProps, JSX } from "react"
import styles from "./switch.module.css"

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

type SwitchSize = NonNullable<VariantProps<typeof switchVariants>["size"]>

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

  const combinedClassName = switchVariants({
    className: customClassName,
    size,
  })

  return (
    <BaseSwitch.Root
      checked={isChecked}
      className={combinedClassName}
      data-slot="switch"
      defaultChecked={isDefaultChecked}
      disabled={isDisabled}
      readOnly={isReadOnly}
      required={isRequired}
      {...rest}
    >
      <BaseSwitch.Thumb className={styles.thumb} />
    </BaseSwitch.Root>
  )
}

export const switchVariants = cva(styles.base, {
  defaultVariants: {
    size: 24,
  },
  variants: {
    size: {
      18: styles.size_18,
      24: styles.size_24,
    },
  },
})
