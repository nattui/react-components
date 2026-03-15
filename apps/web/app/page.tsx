import { ButtonLink, Column } from "@nattui/react-components"
import Link from "next/link"

export default function HomePage() {
  return (
    <Column className="px-24">
      <p>Welcome to Natt UI React Components</p>
      <ButtonLink as={Link} href="/button/code">
        Click me
      </ButtonLink>
    </Column>
  )
}
