import { Drawer as BaseDrawer } from "@base-ui/react"
import { DrawerBackdrop } from "@/components/drawer/drawer-backdrop"
import { DrawerBar } from "@/components/drawer/drawer-bar"
import { DrawerPopup } from "@/components/drawer/drawer-popup"
import { DrawerPortal } from "@/components/drawer/drawer-portal"
import { DrawerViewport } from "@/components/drawer/drawer-viewport"
import { normalizeWhitespace } from "@/utils/normalize-whitespace"
import styles from "@/components/drawer/drawer-content.module.css"

export interface DrawerContentProps extends BaseDrawer.Content.Props {}

export function DrawerContent(props: DrawerContentProps) {
  const { children, className: customClassName = "", ...rest } = props

  const combinedClassName = normalizeWhitespace(`
    ${DRAWER_CONTENT_CLASS_NAME.BASE}
    ${customClassName}
  `)

  return (
    <DrawerPortal>
      <DrawerBackdrop />
      <DrawerViewport>
        <DrawerPopup>
          <DrawerBar />
          <BaseDrawer.Content className={combinedClassName} data-slot="drawer-content" {...rest}>
            {children}
          </BaseDrawer.Content>
        </DrawerPopup>
      </DrawerViewport>
    </DrawerPortal>
  )
}

export const DRAWER_CONTENT_CLASS_NAME = {
  BASE: styles.drawer_content,
} as const
