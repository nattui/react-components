import { Select as BaseSelect } from "@base-ui/react"
import { cva } from "class-variance-authority"
import type { JSX } from "react"
import styles from "./select-value.module.css"

export interface SelectValueProps extends BaseSelect.Value.Props {}

export function SelectValue(props: SelectValueProps): JSX.Element {
  const { className: customClassName = "", render = <div />, ...rest } = props

  const combinedClassName = selectValueVariants({ className: customClassName })

  return (
    <BaseSelect.Value
      className={combinedClassName}
      data-slot="select-value"
      render={render}
      {...rest}
    />
  )
}

export const selectValueVariants = cva(styles.base)
