import { Spacer } from "@nattstack/ui"
import { type LinkComponentProps, Link } from "@tanstack/react-router"
import { motion, useMotionValueEvent, useReducedMotion, useScroll } from "motion/react"
import { useRef, useState, type JSX } from "react"
import { Logomark } from "#/components/logomark"
import { Logotype } from "#/components/logotype"
import { ENVIRONMENT } from "#/utils/environment"

const FULL_ROTATION_DEGREES = 360
const SCROLL_ANIMATION_THRESHOLD_PX = 144

interface LogoLinkProps extends LinkComponentProps {
  preventAnimation?: boolean
}

export function LogoLink(props: LogoLinkProps): JSX.Element {
  const { preventAnimation = false, to = "/", ...rest } = props
  const { scrollY } = useScroll()

  const [isAnimating, setIsAnimating] = useState(false)
  const [spinCount, setSpinCount] = useState(0)

  const hasTriggeredScrollAnimation = useRef(false)
  const scrollTracking = useRef({
    hasStartedTracking: false,
    previousScrollY: 0,
    totalScrollDistance: 0,
  })

  const shouldReduceMotion = useReducedMotion()
  const shouldPreventAnimation = preventAnimation || shouldReduceMotion

  function triggerAnimation(): void {
    setIsAnimating(true)
    setSpinCount((count) => count + 1)
  }

  function handleMouseEnter(): void {
    if (isAnimating || shouldPreventAnimation) {
      return
    }

    triggerAnimation()
  }

  useMotionValueEvent(scrollY, "change", (currentScrollY) => {
    if (shouldPreventAnimation || hasTriggeredScrollAnimation.current) {
      return
    }

    const tracking = scrollTracking.current

    // Ignore browser/router scroll restoration before measuring user scroll distance
    if (!tracking.hasStartedTracking) {
      tracking.hasStartedTracking = true
      tracking.previousScrollY = currentScrollY
      return
    }

    tracking.totalScrollDistance += Math.abs(currentScrollY - tracking.previousScrollY)
    tracking.previousScrollY = currentScrollY

    if (tracking.totalScrollDistance < SCROLL_ANIMATION_THRESHOLD_PX) {
      return
    }

    hasTriggeredScrollAnimation.current = true
    triggerAnimation()
  })

  return (
    <Link
      className="
        flex w-fit items-center rounded-10 p-8 transition-opacity select-none
        hover:opacity-75
      "
      onMouseEnter={handleMouseEnter}
      to={to}
      {...rest}
    >
      <motion.span
        animate={{ rotate: spinCount * FULL_ROTATION_DEGREES }}
        className="origin-center"
        onAnimationComplete={() => setIsAnimating(false)}
        transition={{ duration: 1, ease: "easeInOut" }}
      >
        <Logomark className="text-primary" />
      </motion.span>
      <Spacer width={8} />

      <Logotype className="text-text-primary" />

      {ENVIRONMENT.IS_DEVELOPMENT && (
        <>
          <Spacer width={6} />
          <span
            className="
              relative bottom-4 font-code text-12 leading-1 text-primary
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
