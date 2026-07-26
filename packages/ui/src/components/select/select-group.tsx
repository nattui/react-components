import { Select as BaseSelect } from "@base-ui/react"
import { cva } from "class-variance-authority"
import type { JSX } from "react"
import styles from "./select-group.module.css"

export interface SelectGroupProps extends Omit<BaseSelect.Group.Props, "className"> {
  className?: string
}

export function SelectGroup(props: SelectGroupProps): JSX.Element {
  const { className: customClassName = "", ...rest } = props

  const combinedClassName = selectGroupVariants({ className: customClassName })

  return <BaseSelect.Group className={combinedClassName} data-slot="select-group" {...rest} />
}

export const selectGroupVariants = cva(styles.select_group)
