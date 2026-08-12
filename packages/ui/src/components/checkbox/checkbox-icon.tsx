import type { ComponentProps, JSX } from "react"
import { sx } from "../cn"
import { checkboxStyles } from "./checkbox.stylex"

interface CheckboxIconProps extends ComponentProps<"svg"> {}

export function CheckboxIcon(props: CheckboxIconProps): JSX.Element {
  const { ...rest } = props

  return (
    <svg
      data-slot="checkbox-icon"
      fill="none"
      height="24"
      viewBox="0 0 24 24"
      width="24"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <path
        className={sx(checkboxStyles.iconPath)}
        d="M5 13.875L9.2 18L19 7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
