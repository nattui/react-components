import { Tabs as BaseTabs } from "@base-ui/react"
import { cva } from "class-variance-authority"
import type { JSX } from "react"
import styles from "./tabs-pill-tab.module.css"

export interface TabsPillTabProps extends Omit<BaseTabs.Tab.Props, "nativeButton"> {
  isNativeButton?: BaseTabs.Tab.Props["nativeButton"]
}

export function TabsPillTab(props: TabsPillTabProps): JSX.Element {
  const { className: customClassName = "", isNativeButton = true, ...rest } = props

  const combinedClassName = tabsPillTabVariants({ className: customClassName })

  return (
    <div className={styles.wrapper}>
      <BaseTabs.Tab
        className={combinedClassName}
        data-slot="tabs-pill-tab"
        nativeButton={isNativeButton}
        {...rest}
      />
      <div className={styles.background} />
    </div>
  )
}

export const tabsPillTabVariants = cva(styles.base)
