import type { ComponentProps, JSX } from "react"

interface CheckboxIconProps extends ComponentProps<"svg"> {}

export function CheckboxIcon(props: CheckboxIconProps): JSX.Element {
  const { ...rest } = props

  return (
    <svg
      fill="none"
      height="24"
      viewBox="0 0 24 24"
      width="24"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <path
        d="M5 13.875L9.2 18L19 7"
        stroke="black"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
    </svg>
  )
}
