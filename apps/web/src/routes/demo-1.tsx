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
            max-w-960 overflow-hidden outline
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
              border-border bg-bg-shell-outer relative grow basis-0
              overflow-hidden border-l
            "
          >
            <Column className="relative top-[-100px] h-full w-full">
              {INDUSTRY_CARDS.map((card, index) => (
                <CardIndustry key={card.title} {...card} index={index} />
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

// Photos from Unsplash, sized down to roughly the card's rendered size
function unsplashUrl(photoId: string): string {
  return `https://images.unsplash.com/${photoId}?auto=format&fit=crop&w=400&h=400&q=70`
}

const INDUSTRY_CARDS = [
  {
    imageUrl: unsplashUrl("photo-1532938911079-1b06ac7ceec7"),
    title: "Healthcare",
  },
  {
    imageUrl: unsplashUrl("photo-1486406146926-c627a92ad1ab"),
    title: "Financial Services",
  },
  {
    imageUrl: unsplashUrl("photo-1606185540834-d6e7483ee1a4"),
    title: "Logistics",
  },
  {
    imageUrl: unsplashUrl("photo-1581783898377-1c85bf937427"),
    title: "Home Services",
  },
  {
    imageUrl: unsplashUrl("photo-1483985988355-763728e1935b"),
    title: "Retail & Consumer",
  },
  {
    imageUrl: unsplashUrl("photo-1584132869994-873f9363a562"),
    title: "Travel & Hospitality",
  },
  {
    imageUrl: unsplashUrl("photo-1707157284454-553ef0a4ed0d"),
    title: "Debt Collection",
  },
] as const

const CARD_COUNT = INDUSTRY_CARDS.length
// Diagonal distance between two neighboring cards in the stack
const STEP_X = 128
const STEP_Y = 32
// Cards advance one slot on every tick, like a clock hand
const TICK_MS = 2500
// Fraction of each tick spent moving; the rest is spent at rest
const MOVE_PORTION = 0.2
// Delay between each card's hop within a tick, front card first
const STAGGER_MS = 50

function CardIndustry(props: { imageUrl: string; index: number; title: string }): JSX.Element {
  const { imageUrl, index, title } = props

  const time = useTime()
  // Position along the diagonal, in slots. Range is [-1, CARD_COUNT - 1):
  // the extra slot below 0 lets the front card slide fully off-screen
  // (bottom-left) before wrapping to the rear, so no fade is needed.
  const slot = useTransform(time, (ms) => {
    // Whole ticks elapsed, plus an eased hop at the start of each tick.
    // Each card's hop is delayed by its position in the stack, so the
    // movement ripples from the front card to the rear one.
    const ticks = Math.floor(ms / TICK_MS)
    const tickProgress = (ms % TICK_MS) / TICK_MS
    const stackOrder = (((index - ticks) % CARD_COUNT) + CARD_COUNT) % CARD_COUNT
    const hopStart = (stackOrder * STAGGER_MS) / TICK_MS
    const hopProgress = Math.min(1, Math.max(0, (tickProgress - hopStart) / MOVE_PORTION))
    const advanced = ticks + easeOutBack(hopProgress)
    return ((((index - advanced) % CARD_COUNT) + CARD_COUNT) % CARD_COUNT) - 1
  })
  const x = useTransform(slot, (pos) => pos * STEP_X)
  const y = useTransform(slot, (pos) => -pos * STEP_Y)
  const zIndex = useTransform(slot, (pos) => Math.round((CARD_COUNT - pos) * 100))

  return (
    <motion.div
      className="
        rounded-6 text-16 font-500 absolute bottom-32 -left-64 flex size-176
        flex-col items-center justify-center px-16 text-center text-[white]
      "
      style={{
        // Dark scrim over the photo keeps the white title readable
        background: `
          linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),
          url(${imageUrl}) center / cover no-repeat
        `,
        x,
        y,
        zIndex,
      }}
    >
      {title}
    </motion.div>
  )
}

// How far past the target the hop overshoots before settling back;
// higher = bouncier
const BOUNCE_OVERSHOOT = 1.4

function easeOutBack(progress: number): number {
  const inverse = progress - 1
  return 1 + (BOUNCE_OVERSHOOT + 1) * inverse ** 3 + BOUNCE_OVERSHOOT * inverse ** 2
}
