import { Drawer as BaseDrawer } from "@base-ui/react"
import { DialogResponsiveBackdrop } from "@/components/dialog-responsive/dialog-responsive-backdrop"
import { DialogResponsiveBar } from "@/components/dialog-responsive/dialog-responsive-bar"
import { DialogResponsivePopup } from "@/components/dialog-responsive/dialog-responsive-popup"
import { DialogResponsivePortal } from "@/components/dialog-responsive/dialog-responsive-portal"
import { DialogResponsiveScroll } from "@/components/dialog-responsive/dialog-responsive-scroll"
import { DialogResponsiveViewport } from "@/components/dialog-responsive/dialog-responsive-viewport"
import { normalizeWhitespace } from "@/utils/normalize-whitespace"
import styles from "@/components/dialog-responsive/dialog-responsive-content.module.css"

export interface DialogResponsiveContentProps extends BaseDrawer.Content.Props {}

export function DialogResponsiveContent(props: DialogResponsiveContentProps) {
  const { children, className: customClassName = "", ...rest } = props

  const combinedClassName = normalizeWhitespace(`
    ${DIALOG_RESPONSIVE_CONTENT_CLASS_NAME.BASE}
    ${customClassName}
  `)

  return (
    <DialogResponsivePortal>
      <DialogResponsiveBackdrop />
      <DialogResponsiveViewport>
        <DialogResponsiveScroll>
          <DialogResponsivePopup>
            <DialogResponsiveBar />
            <BaseDrawer.Content
              className={combinedClassName}
              data-slot="dialog-responsive-content"
              {...rest}
            >
              {children}
            </BaseDrawer.Content>
          </DialogResponsivePopup>
        </DialogResponsiveScroll>
      </DialogResponsiveViewport>
    </DialogResponsivePortal>
  )
}

export const DIALOG_RESPONSIVE_CONTENT_CLASS_NAME = {
  BASE: styles.dialog_responsive_content,
} as const
