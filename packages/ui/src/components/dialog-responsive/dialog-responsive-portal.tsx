import { Drawer as BaseDrawer } from "@base-ui/react"
import { cva } from "class-variance-authority"
import type { JSX } from "react"
import styles from "./dialog-responsive-portal.module.css"

export interface DialogResponsivePortalProps extends BaseDrawer.Portal.Props {}

export function DialogResponsivePortal(props: DialogResponsivePortalProps): JSX.Element {
  const { className: customClassName = "", ...rest } = props

  const combinedClassName = dialogResponsivePortalVariants({ className: customClassName })

  return (
    <BaseDrawer.Portal
      className={combinedClassName}
      data-slot="dialog-responsive-portal"
      {...rest}
    />
  )
}

export const dialogResponsivePortalVariants = cva(styles.base)
