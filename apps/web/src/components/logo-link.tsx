import { Spacer } from "@nattstack/ui"
import { Link } from "@tanstack/react-router"
import type { JSX } from "react"
import { Logomark } from "#/components/logomark"
import { Logotype } from "#/components/logotype"
import { ENVIRONMENT } from "#/utils/environment"

export function LogoLink(): JSX.Element {
  return (
    <Link
      className="
        flex items-center justify-center rounded-full animation-shimmer p-8
      "
      to="/"
    >
      <Logomark className="text-accent" />
      <Spacer width={8} />

      <Logotype className="text-text-primary" />

      {ENVIRONMENT.IS_DEVELOPMENT && (
        <>
          <Spacer width={6} />
          <span
            className="
              relative bottom-4 font-code text-12 leading-1 text-accent
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
