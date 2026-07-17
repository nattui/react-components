import { IconShieldKeyholeOutline18 } from "@nattstack/icons/components/IconShieldKeyholeOutline18"
import { Button, Column, Input, Row, Spacer } from "@nattstack/ui"
import { createFileRoute, Link } from "@tanstack/react-router"
import { LogomarkGoogle } from "#/components/logomark-google"

export const Route = createFileRoute("/demo-1")({
  component: function RouteComponent() {
    const BUTTON_SIZE = 48

    return (
      <Column className="size-[600px] items-center justify-center gap-16">
        <Column className="w-full max-w-320 items-center">
          <h1 className="text-24 font-400 text-center">Login into Retell</h1>
          <Spacer height={4} />
          <p className="text-14 text-center">
            Chose a sign in option below or{" "}
            <Link className="ui-link-2" to="/demo-1">
              sign up
            </Link>
          </p>
          <Spacer height={24} />

          <Column className="w-full gap-y-8">
            <Button
              iconStart={<LogomarkGoogle className="absolute left-12" />}
              isFullWidth
              label="Sign in with Google"
              size={BUTTON_SIZE}
              variant="secondary"
            />
            <Button
              iconStart={<IconShieldKeyholeOutline18 className="absolute left-12" />}
              isFullWidth
              label="Sign in with SSO"
              size={BUTTON_SIZE}
              variant="secondary"
            />
          </Column>
          <Spacer height={16} />

          <Row className="w-full items-center gap-x-4">
            <Row className="bg-border h-1 w-full" />
            <p className="text-14 font-[450]">Or</p>
            <Row className="bg-border h-1 w-full" />
          </Row>
          <Spacer height={16} />

          <Input placeholder="Email" />
          <Spacer height={16} />

          <Button isFullWidth label="Sign in" size={BUTTON_SIZE} />
          <Spacer height={24} />

          <p className="text-13 text-center">
            By logging in you agree with our{" "}
            <Link className="ui-link-2" to="/demo-1">
              Terms of Service
            </Link>{" "}
            and{" "}
            <Link className="ui-link-2" to="/demo-1">
              Privacy Policy
            </Link>
          </p>
        </Column>
      </Column>
    )
  },
})
