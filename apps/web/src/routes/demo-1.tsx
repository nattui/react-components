import { IconShieldKeyholeOutline18 } from "@nattstack/icons/components/IconShieldKeyholeOutline18"
import { Button, Column, Input, Row, Spacer } from "@nattstack/ui"
import { createFileRoute, Link } from "@tanstack/react-router"
import { motion, useTime, useTransform } from "motion/react"
import type { JSX } from "react"
import { LogoLink } from "#/components/logo-link"
import { LogomarkGoogle } from "#/components/logomark-google"

export const Route = createFileRoute("/demo-1")({
  component: function RouteComponent() {
    const BUTTON_SIZE = 48

    return (
      <Column className="h-dvh items-center justify-center">
        <LogoLink
          className="
            rounded-10 absolute top-8 left-8 flex w-fit items-center p-8
            transition-opacity select-none
            hover:opacity-75
          "
        />

        <Row
          className="
            outline-border shadow-5 rounded-16 bg-bg-shell-inner w-full
            max-w-960 outline
          "
        >
          {/* Left */}
          <Column className="grow basis-0">
            <Column className="px-48 py-64">
              <h1 className="text-24 font-400 text-center">Login into Retell</h1>
              <Spacer height={4} />

              <p className="text-14 text-center">
                Chose a sign in option below or{" "}
                <Link className="ui-link-2" to="/demo-1">
                  sign up
                </Link>
              </p>
              <Spacer height={32} />

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

          {/* Right */}
          <Column
            className="
              border-border bg-gray-3 relative grow basis-0 overflow-hidden
              border-l
            "
          >
            <Column className="d relative h-full w-full">
              {INDUSTRY_CARDS.map((title, index) => (
                <CardIndustry index={index} key={title} title={title} />
              ))}
            </Column>
            {/* <p className="text-14 leading-1-625 text-center">
              With Retell, we’ve increased scheduling NPS by 38%, and filled underutilized provider
              capacity, allowing our team to focus on meaningful patient care instead of phone tag.
            </p> */}
          </Column>
        </Row>
      </Column>
    )
  },
})

const INDUSTRY_CARDS = [
  "Healthcare",
  "Financial Services",
  "Logistics",
  "Home Services",
  "Retail & Consumer",
  "Travel & Hospitality",
  "Debt Collection",
] as const

const CARD_COUNT = INDUSTRY_CARDS.length
// Diagonal distance between two neighboring cards in the stack
const STEP_X = 64
const STEP_Y = 32
// Time it takes a card to advance one slot toward the front
const SLOT_DURATION_MS = 2500
// Portion of a slot spent fading out at the front / fading in at the back
const FADE = 0.5

function CardIndustry(props: { index: number; title: string }): JSX.Element {
  const { index, title } = props

  const time = useTime()
  // Position along the diagonal, in slots: 0 = front (bottom-left),
  // decreasing over time and wrapping back to CARD_COUNT at the rear
  const slot = useTransform(
    time,
    (ms) => (((index - ms / SLOT_DURATION_MS) % CARD_COUNT) + CARD_COUNT) % CARD_COUNT,
  )
  const x = useTransform(slot, (pos) => pos * STEP_X)
  const y = useTransform(slot, (pos) => -pos * STEP_Y)
  const zIndex = useTransform(slot, (pos) => Math.round((CARD_COUNT - pos) * 100))
  const opacity = useTransform(slot, (pos) => Math.min(1, pos / FADE, (CARD_COUNT - pos) / FADE))

  return (
    <motion.div
      className="
        shadow-5 rounded-20 text-16 font-500 absolute bottom-32 -left-64 flex
        size-176 flex-col items-center justify-center bg-[blue] px-16
        text-center text-[white]
      "
      style={{ opacity, x, y, zIndex }}
    >
      {title}
    </motion.div>
  )
}
