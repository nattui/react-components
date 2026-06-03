import { Checkbox as BaseCheckbox } from "@base-ui/react"
import type { ComponentProps, JSX } from "react"
import { normalizeWhitespace } from "../../utils/normalize-whitespace"
import { CheckboxIcon } from "./checkbox-icon"
import styles from "./checkbox.module.css"

export interface CheckboxProps extends ComponentProps<typeof BaseCheckbox.Root> {}

export function Checkbox(props: CheckboxProps): JSX.Element {
  const { className: customClassName = "", ...rest } = props

  const combinedClassName = normalizeWhitespace(`
    ${CHECKBOX_CLASS_NAME.BASE}
    ${customClassName}
  `)

  return (
    <BaseCheckbox.Root className={combinedClassName} {...rest}>
      <BaseCheckbox.Indicator className={styles.indicator}>
        <CheckboxIcon />
      </BaseCheckbox.Indicator>
    </BaseCheckbox.Root>
  )
}

export const CHECKBOX_CLASS_NAME = {
  BASE: styles.checkbox,
} as const
