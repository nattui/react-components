import { Drawer as BaseDrawer } from "@base-ui/react"
import { normalizeWhitespace } from "@/utils/normalize-whitespace"
import styles from "@/components/drawer/drawer-popup.module.css"

export interface DrawerPopupProps extends BaseDrawer.Popup.Props {}

export function DrawerPopup(props: DrawerPopupProps) {
  const { className: customClassName = "", ...rest } = props

  const combinedClassName = normalizeWhitespace(`
    ${DRAWER_POPUP_CLASS_NAME.BASE}
    ${customClassName}
  `)

  return <BaseDrawer.Popup className={combinedClassName} data-slot="drawer-popup" {...rest} />
}

export const DRAWER_POPUP_CLASS_NAME = {
  BASE: styles.drawer_popup,
} as const
