import { Drawer as BaseDrawer } from "@base-ui/react"
import { normalizeWhitespace } from "@/utils/normalize-whitespace"
import styles from "@/components/dialog-responsive/dialog-responsive-popup.module.css"

export interface DialogResponsivePopupProps extends BaseDrawer.Popup.Props {}

export function DialogResponsivePopup(props: DialogResponsivePopupProps) {
  const { className: customClassName = "", ...rest } = props

  const combinedClassName = normalizeWhitespace(`
    ${DIALOG_RESPONSIVE_POPUP_CLASS_NAME.BASE}
    ${customClassName}
  `)

  return (
    <BaseDrawer.Popup className={combinedClassName} data-slot="dialog-responsive-popup" {...rest} />
  )
}

export const DIALOG_RESPONSIVE_POPUP_CLASS_NAME = {
  BASE: styles.dialog_responsive_popup,
} as const
