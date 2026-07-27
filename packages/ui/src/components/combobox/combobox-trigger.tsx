import { Combobox as BaseCombobox } from "@base-ui/react"
import { cva, type VariantProps } from "class-variance-authority"
import type { JSX } from "react"
import styles from "../picker/picker.module.css"

export interface ComboboxTriggerProps extends BaseCombobox.Trigger.Props {
  isRounded?: VariantProps<typeof comboboxTriggerVariants>["isRounded"]
  size?: VariantProps<typeof comboboxTriggerVariants>["size"]
}

export function ComboboxTrigger(props: ComboboxTriggerProps): JSX.Element {
  const {
    children = undefined,
    className: customClassName = "",
    isRounded = false,
    size = 40,
    ...rest
  } = props

  const combinedClassName = comboboxTriggerVariants({
    className: customClassName,
    isRounded,
    size,
  })

  return (
    <BaseCombobox.Trigger className={combinedClassName} data-slot="combobox-trigger" {...rest}>
      {children}

      <BaseCombobox.Icon className={styles.trigger_icon} data-slot="combobox-icon">
        {/* chevron-down */}
        <svg height="14" viewBox="0 0 18 18" width="14" xmlns="http://www.w3.org/2000/svg">
          <polyline
            fill="none"
            points="15.25 6.5 9 12.75 2.75 6.5"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
          />
        </svg>
      </BaseCombobox.Icon>
    </BaseCombobox.Trigger>
  )
}

export const comboboxTriggerVariants = cva(styles.trigger, {
  variants: {
    isRounded: {
      true: styles.trigger_rounded_full,
    },
    size: {
      32: styles.trigger_size_32,
      36: styles.trigger_size_36,
      40: styles.trigger_size_40,
      44: styles.trigger_size_44,
      48: styles.trigger_size_48,
    },
  },
})
