import { Column } from "@nattstack/ui"
import type { JSX, PropsWithChildren } from "react"

export function LayoutDashboardMain(props: PropsWithChildren): JSX.Element {
  const { ...rest } = props

  return <Column className="mx-auto w-full max-w-768" {...rest} />
}
