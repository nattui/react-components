import { Drawer as BaseDrawer } from "@base-ui/react"
import { normalizeWhitespace } from "@/utils/normalize-whitespace"
import styles from "@/components/drawer/drawer-viewport.module.css"

export interface DrawerViewportProps extends BaseDrawer.Viewport.Props {}

export function DrawerViewport(props: DrawerViewportProps) {
  const { className: customClassName = "", ...rest } = props

  const combinedClassName = normalizeWhitespace(`
    ${DRAWER_VIEWPORT_CLASS_NAME.BASE}
    ${customClassName}
  `)

  return <BaseDrawer.Viewport className={combinedClassName} data-slot="drawer-viewport" {...rest} />
}

export const DRAWER_VIEWPORT_CLASS_NAME = {
  BASE: styles.drawer_viewport,
} as const
