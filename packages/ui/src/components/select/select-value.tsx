import { Select as BaseSelect } from "@base-ui/react"
import { cva } from "class-variance-authority"
import type { JSX } from "react"
import styles from "./select-value.module.css"

export interface SelectValueProps extends Omit<BaseSelect.Value.Props, "className"> {
  className?: string
}

export function SelectValue(props: SelectValueProps): JSX.Element {
  const { className: customClassName = "", ...rest } = props

  const combinedClassName = selectValueVariants({ className: customClassName })

  return <BaseSelect.Value className={combinedClassName} data-slot="select-value" {...rest} />
}

export const selectValueVariants = cva(styles.select_value)
