import { Drawer as BaseDrawer } from "@base-ui/react"
import type { JSX } from "react"
import { normalizeWhitespace } from "@/utils/normalize-whitespace"
import styles from "@/components/dialog-responsive/dialog-responsive-portal.module.css"

export interface DialogResponsivePortalProps extends BaseDrawer.Portal.Props {}

export function DialogResponsivePortal(props: DialogResponsivePortalProps): JSX.Element {
  const { className: customClassName = "", ...rest } = props

  const combinedClassName = normalizeWhitespace(`
    ${DIALOG_RESPONSIVE_PORTAL_CLASS_NAME.BASE}
    ${customClassName}
  `)

  return (
    <BaseDrawer.Portal
      className={combinedClassName}
      data-slot="dialog-responsive-portal"
      {...rest}
    />
  )
}

export const DIALOG_RESPONSIVE_PORTAL_CLASS_NAME = {
  BASE: styles.dialog_responsive_portal,
} as const
