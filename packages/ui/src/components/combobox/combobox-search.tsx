import { Combobox as BaseCombobox } from "@base-ui/react"
import type { JSX } from "react"
import { cn, sx } from "../cn"
import { comboboxSearchStyles } from "./combobox-search.stylex"

export { comboboxSearchStyles } from "./combobox-search.stylex"

export interface ComboboxSearchProps extends Omit<BaseCombobox.Input.Props, "className" | "size"> {
  className?: string
}

export function ComboboxSearch(props: ComboboxSearchProps): JSX.Element {
  const { className: customClassName = "", ...rest } = props

  return (
    <div className={cn(sx(comboboxSearchStyles.base), customClassName)} data-slot="combobox-search">
      <span className={sx(comboboxSearchStyles.icon)} data-slot="combobox-search-icon">
        {/* magnifier */}
        <svg height="18" viewBox="0 0 18 18" width="18" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M15.75 15.75L11.6386 11.6386"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
          />
          <path
            d="M7.75 13.25C10.7875 13.25 13.25 10.7875 13.25 7.75C13.25 4.7125 10.7875 2.25 7.75 2.25C4.7125 2.25 2.25 4.7125 2.25 7.75C2.25 10.7875 4.7125 13.25 7.75 13.25Z"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
          />
        </svg>
      </span>

      <BaseCombobox.Input
        className={sx(comboboxSearchStyles.input)}
        data-slot="combobox-search-input"
        {...rest}
      />
    </div>
  )
}
