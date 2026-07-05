import { Drawer as BaseDrawer } from "@base-ui/react"
import { cva } from "class-variance-authority"
import type { JSX } from "react"
import styles from "./dialog-responsive-backdrop.module.css"

export interface DialogResponsiveBackdropProps extends BaseDrawer.Backdrop.Props {}

export function DialogResponsiveBackdrop(props: DialogResponsiveBackdropProps): JSX.Element {
  const { className: customClassName = "", ...rest } = props

  const combinedClassName = dialogResponsiveBackdropVariants({ className: customClassName })

  return (
    <BaseDrawer.Backdrop
      className={combinedClassName}
      data-slot="dialog-responsive-backdrop"
      {...rest}
    />
  )
}

export const dialogResponsiveBackdropVariants = cva(styles.dialog_responsive_backdrop)
