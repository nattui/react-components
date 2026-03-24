import { Drawer as BaseDrawer } from "@base-ui/react"
import { normalizeWhitespace } from "@/utils/normalize-whitespace"
import styles from "@/components/dialog-responsive/dialog-responsive-viewport.module.css"

export interface DialogResponsiveViewportProps extends BaseDrawer.Viewport.Props {}

export function DialogResponsiveViewport(props: DialogResponsiveViewportProps) {
  const { className: customClassName = "", ...rest } = props

  const combinedClassName = normalizeWhitespace(`
    ${DIALOG_RESPONSIVE_VIEWPORT_CLASS_NAME.BASE}
    ${customClassName}
  `)

  return (
    <BaseDrawer.Viewport
      className={combinedClassName}
      data-slot="dialog-responsive-viewport"
      {...rest}
    />
  )
}

export const DIALOG_RESPONSIVE_VIEWPORT_CLASS_NAME = {
  BASE: styles.dialog_responsive_viewport,
} as const
