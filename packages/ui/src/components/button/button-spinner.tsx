import type { CSSProperties, JSX } from "react"
import { sx } from "../cn"
import { buttonSpinnerStyles } from "./button-spinner.stylex"

export { buttonSpinnerStyles } from "./button-spinner.stylex"

const SIZE = 18

const BAR_STYLES = [
  buttonSpinnerStyles[1],
  buttonSpinnerStyles[2],
  buttonSpinnerStyles[3],
  buttonSpinnerStyles[4],
  buttonSpinnerStyles[5],
  buttonSpinnerStyles[6],
  buttonSpinnerStyles[7],
  buttonSpinnerStyles[8],
  buttonSpinnerStyles[9],
  buttonSpinnerStyles[10],
  buttonSpinnerStyles[11],
  buttonSpinnerStyles[12],
] as const

export function ButtonSpinner(): JSX.Element {
  return (
    <div
      className={sx(buttonSpinnerStyles.base)}
      data-slot="button-spinner"
      style={{ "--size": `${SIZE}px` } as CSSProperties}
    >
      {BAR_STYLES.map((barStyle, index) => (
        <div className={sx(buttonSpinnerStyles.bar, barStyle)} key={index} />
      ))}
    </div>
  )
}
