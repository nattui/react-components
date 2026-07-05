import type { CSSProperties, JSX } from "react"
import styles from "./button-spinner.module.css"

// Match the default button icon size from button.module.css.
const SIZE = 18

export function ButtonSpinner(): JSX.Element {
  return (
    <div
      className={styles.base}
      data-slot="button-spinner"
      style={{ "--size": `${SIZE}px` } as CSSProperties}
    >
      {Array.from({ length: 12 }).map((_, index) => (
        <div key={index} />
      ))}
    </div>
  )
}
