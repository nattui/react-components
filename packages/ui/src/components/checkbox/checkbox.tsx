import { Checkbox as BaseCheckbox } from "@base-ui/react"
import { cva } from "class-variance-authority"
import type { ComponentProps, JSX } from "react"
import { CheckboxIcon } from "./checkbox-icon"
import styles from "./checkbox.module.css"

export interface CheckboxProps extends ComponentProps<typeof BaseCheckbox.Root> {}

export function Checkbox(props: CheckboxProps): JSX.Element {
  const { children = undefined, className: customClassName = "", ...rest } = props

  const combinedClassName = checkboxVariants({ className: customClassName })

  return (
    <BaseCheckbox.Root className={combinedClassName} data-slot="checkbox" {...rest}>
      <BaseCheckbox.Indicator className={styles.indicator}>
        {children ?? <CheckboxIcon className={styles.icon} />}
      </BaseCheckbox.Indicator>
    </BaseCheckbox.Root>
  )
}

export const checkboxVariants = cva(styles.base)
