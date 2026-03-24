import { Drawer as BaseDrawer } from "@base-ui/react"
import { normalizeWhitespace } from "@/utils/normalize-whitespace"
import styles from "@/components/drawer/drawer-portal.module.css"

export interface DrawerPortalProps extends BaseDrawer.Portal.Props {}

export function DrawerPortal(props: DrawerPortalProps) {
  const { className: customClassName = "", ...rest } = props

  const combinedClassName = normalizeWhitespace(`
    ${DRAWER_PORTAL_CLASS_NAME.BASE}
    ${customClassName}
  `)

  return <BaseDrawer.Portal className={combinedClassName} data-slot="drawer-portal" {...rest} />
}

export const DRAWER_PORTAL_CLASS_NAME = {
  BASE: styles.drawer_portal,
} as const
