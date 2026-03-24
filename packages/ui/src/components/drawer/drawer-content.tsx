import { Drawer as BaseDrawer } from "@base-ui/react"
import styles from "@/components/drawer/drawer.module.css"

export interface DrawerContentProps extends BaseDrawer.Content.Props {}

export function DrawerContent(props: DrawerContentProps) {
  const { children, ...rest } = props

  return (
    <BaseDrawer.Portal className={styles.drawer_portal} data-slot="drawer-portal">
      <BaseDrawer.Backdrop className={styles.drawer_backdrop} data-slot="drawer-backdrop" />
      <BaseDrawer.Viewport className={styles.drawer_viewport} data-slot="drawer-viewport">
        <BaseDrawer.Popup className={styles.drawer_popup} data-slot="drawer-popup">
          <BaseDrawer.Content
            className={styles.drawer_content}
            data-slot="drawer-content"
            {...rest}
          >
            {children}
          </BaseDrawer.Content>
        </BaseDrawer.Popup>
      </BaseDrawer.Viewport>
    </BaseDrawer.Portal>
  )
}
