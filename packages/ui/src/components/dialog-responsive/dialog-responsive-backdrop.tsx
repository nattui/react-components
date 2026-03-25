import { Drawer as BaseDrawer } from "@base-ui/react"
import type { JSX } from "react"
import { normalizeWhitespace } from "@/utils/normalize-whitespace"
import styles from "@/components/dialog-responsive/dialog-responsive-backdrop.module.css"

export interface DialogResponsiveBackdropProps extends BaseDrawer.Backdrop.Props {}

export function DialogResponsiveBackdrop(props: DialogResponsiveBackdropProps): JSX.Element {
  const { className: customClassName = "", ...rest } = props

  const combinedClassName = normalizeWhitespace(`
    ${DIALOG_RESPONSIVE_BACKDROP_CLASS_NAME.BASE}
    ${customClassName}
  `)

  return (
    <BaseDrawer.Backdrop
      className={combinedClassName}
      data-slot="dialog-responsive-backdrop"
      {...rest}
    />
  )
}

export const DIALOG_RESPONSIVE_BACKDROP_CLASS_NAME = {
  BASE: styles.dialog_responsive_backdrop,
} as const
