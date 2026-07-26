import { Select as BaseSelect } from "@base-ui/react"
import { cva } from "class-variance-authority"
import type { JSX } from "react"
import styles from "./select-separator.module.css"

export interface SelectSeparatorProps extends Omit<BaseSelect.Separator.Props, "className"> {
  className?: string
}

export function SelectSeparator(props: SelectSeparatorProps): JSX.Element {
  const { className: customClassName = "", ...rest } = props

  const combinedClassName = selectSeparatorVariants({ className: customClassName })

  return (
    <BaseSelect.Separator className={combinedClassName} data-slot="select-separator" {...rest} />
  )
}

export const selectSeparatorVariants = cva(styles.select_separator)
