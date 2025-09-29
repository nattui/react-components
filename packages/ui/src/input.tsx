import type { ComponentProps, JSX } from "react"

export interface InputProps extends ComponentProps<"input"> {}

export default function Input(props: InputProps): JSX.Element {
  return <input {...props} />
}
