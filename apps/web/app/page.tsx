import { ButtonLink, Column, Spacer } from "@nattstack/ui"
import Link from "next/link"
import type { JSX } from "react"

export default function HomePage(): JSX.Element {
  return (
    <Column className="px-24">
      <p>Welcome to Natt UI React Components</p>
      <Spacer height={16} />
      <ButtonLink as={Link} href={{ pathname: "/components/[...slugs]", query: { slugs: ["button"] } }}>
        Go to components
      </ButtonLink>
    </Column>
  )
}
