import { Select as BaseSelect } from "@base-ui/react"
import { cva } from "class-variance-authority"
import type { JSX } from "react"
import styles from "./select-content.module.css"

export interface SelectContentProps
  extends
    Omit<BaseSelect.Popup.Props, "className">,
    Pick<
      BaseSelect.Positioner.Props,
      | "align"
      | "alignItemWithTrigger"
      | "alignOffset"
      | "anchor"
      | "arrowPadding"
      | "collisionAvoidance"
      | "collisionBoundary"
      | "collisionPadding"
      | "disableAnchorTracking"
      | "positionMethod"
      | "side"
      | "sideOffset"
      | "sticky"
    > {
  className?: string
  container?: BaseSelect.Portal.Props["container"]
}

export function SelectContent(props: SelectContentProps): JSX.Element {
  const {
    align = "start",
    alignItemWithTrigger = false,
    alignOffset = undefined,
    anchor = undefined,
    arrowPadding = undefined,
    children,
    className: customClassName = "",
    collisionAvoidance = undefined,
    collisionBoundary = undefined,
    collisionPadding = undefined,
    container = undefined,
    disableAnchorTracking = undefined,
    positionMethod = undefined,
    side = "bottom",
    sideOffset = 6,
    sticky = undefined,
    ...rest
  } = props

  const combinedClassName = selectContentVariants({ className: customClassName })

  return (
    <BaseSelect.Portal container={container} data-slot="select-portal">
      <BaseSelect.Positioner
        align={align}
        alignItemWithTrigger={alignItemWithTrigger}
        alignOffset={alignOffset}
        anchor={anchor}
        arrowPadding={arrowPadding}
        className={styles.positioner}
        collisionAvoidance={collisionAvoidance}
        collisionBoundary={collisionBoundary}
        collisionPadding={collisionPadding}
        data-slot="select-positioner"
        disableAnchorTracking={disableAnchorTracking}
        positionMethod={positionMethod}
        side={side}
        sideOffset={sideOffset}
        sticky={sticky}
      >
        <BaseSelect.Popup className={combinedClassName} data-slot="select-content" {...rest}>
          <BaseSelect.List className={styles.list} data-slot="select-list">
            {children}
          </BaseSelect.List>
        </BaseSelect.Popup>
      </BaseSelect.Positioner>
    </BaseSelect.Portal>
  )
}

export const selectContentVariants = cva(styles.base)
