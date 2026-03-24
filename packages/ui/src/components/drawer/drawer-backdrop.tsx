import { Drawer as BaseDrawer } from "@base-ui/react"
import { normalizeWhitespace } from "@/utils/normalize-whitespace"
import styles from "@/components/drawer/drawer-backdrop.module.css"

export interface DrawerBackdropProps extends BaseDrawer.Backdrop.Props {}

export function DrawerBackdrop(props: DrawerBackdropProps) {
  const { className: customClassName = "", ...rest } = props

  const combinedClassName = normalizeWhitespace(`
    ${DRAWER_BACKDROP_CLASS_NAME.BASE}
    ${customClassName}
  `)

  return <BaseDrawer.Backdrop className={combinedClassName} data-slot="drawer-backdrop" {...rest} />
}

export const DRAWER_BACKDROP_CLASS_NAME = {
  BASE: styles.drawer_backdrop,
} as const
