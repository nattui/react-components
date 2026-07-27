import { Select as BaseSelect } from "@base-ui/react"
import { cva } from "class-variance-authority"
import type { JSX } from "react"
import styles from "../picker/picker.module.css"

export interface SelectGroupLabelProps extends Omit<BaseSelect.GroupLabel.Props, "className"> {
  className?: string
}

export function SelectGroupLabel(props: SelectGroupLabelProps): JSX.Element {
  const { className: customClassName = "", ...rest } = props

  const combinedClassName = selectGroupLabelVariants({ className: customClassName })

  return (
    <BaseSelect.GroupLabel className={combinedClassName} data-slot="select-group-label" {...rest} />
  )
}

export const selectGroupLabelVariants = cva(styles.group_label)
