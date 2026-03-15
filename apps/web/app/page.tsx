import { ButtonLink, Column, Spacer } from "@nattui/react-components"
import Link from "next/link"

export default function HomePage() {
  return (
    <Column className="px-24">
      <p>Welcome to Natt UI React Components</p>
      <Spacer height={16} />
      <ButtonLink as={Link} href="/button/code">
        Go to components
      </ButtonLink>
    </Column>
  )
}
