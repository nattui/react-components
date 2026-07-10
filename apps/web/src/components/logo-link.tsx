import { Spacer } from "@nattstack/ui"
import { type LinkComponentProps, Link } from "@tanstack/react-router"
import type { JSX } from "react"
import { Logotype } from "#/components/logotype"
import { isDevelopment } from "#/utils/environment"

interface LogoLinkProps extends LinkComponentProps {}

export function LogoLink(props: LogoLinkProps): JSX.Element {
  const { to = "/", ...rest } = props

  return (
    <Link
      className="
        rounded-10 flex w-fit items-center p-8 transition-opacity select-none
        hover:opacity-75
      "
      to={to}
      {...rest}
    >
      <Logotype className="text-text-primary h-16 w-fit" />

      {isDevelopment && (
        <>
          <Spacer width={6} />
          <span
            className="
              font-code text-12 text-primary relative bottom-4 leading-1
              select-none
            "
          >
            dev
          </span>
        </>
      )}
    </Link>
  )
}
