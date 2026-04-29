import type { CSSProperties, JSX } from "react"
import styles from "./button-spinner.module.css"

export interface ButtonSpinnerProps {
  size?: number
}

export function ButtonSpinner(props: ButtonSpinnerProps): JSX.Element {
  const DEFAULT_SIZE = 20

  // Match the default button icon size from button.module.css.
  const { size = DEFAULT_SIZE } = props

  return (
    <div className={styles.button_spinner} style={{ "--size": `${size}px` } as CSSProperties}>
      {Array.from({ length: 12 }).map((_, index) => (
        <div key={index} />
      ))}
    </div>
  )
}
