import type { CSSProperties, JSX } from "react"
import styles from "@/components/button/button-spinner.module.css"

export interface ButtonSpinnerProps {
  size?: number
}

export function ButtonSpinner(props: ButtonSpinnerProps): JSX.Element {
  const { size = 18 } = props

  return (
    <div className={styles.button_spinner} style={{ "--size": `${size}px` } as CSSProperties}>
      {Array.from({ length: 12 }).map((_, index) => (
        <div key={index} />
      ))}
    </div>
  )
}
