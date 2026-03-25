import { Tabs as BaseTabs } from "@base-ui/react"
import type { JSX } from "react"
import { normalizeWhitespace } from "@/utils/normalize-whitespace"
import styles from "@/components/tabs-pill/tabs-pill-tab.module.css"

export interface TabsPillTabProps extends Omit<BaseTabs.Tab.Props, "nativeButton"> {
  isNativeButton?: BaseTabs.Tab.Props["nativeButton"]
}

export function TabsPillTab(props: TabsPillTabProps): JSX.Element {
  const { className: customClassName = "", isNativeButton = true, ...rest } = props

  const combinedClassName = normalizeWhitespace(`
    ${TABS_PILL_TAB_CLASS_NAME.BASE}
    ${customClassName}
  `)

  return (
    <div className={TABS_PILL_TAB_CLASS_NAME.WRAPPER}>
      <BaseTabs.Tab
        className={combinedClassName}
        data-slot="tabs-pill-tab"
        nativeButton={isNativeButton}
        {...rest}
      />
      <div className={TABS_PILL_TAB_CLASS_NAME.BACKGROUND} />
    </div>
  )
}

export const TABS_PILL_TAB_CLASS_NAME = {
  BACKGROUND: styles.tabs_pill_tab_background,
  BASE: styles.tabs_pill_tab,
  WRAPPER: styles.tabs_pill_tab_wrapper,
} as const
