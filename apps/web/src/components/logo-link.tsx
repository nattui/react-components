import { Spacer } from "@nattstack/ui"
import { type LinkComponentProps, Link } from "@tanstack/react-router"
import { motion, useReducedMotion } from "motion/react"
import { useEffect, useRef, useState, type JSX } from "react"
import { Logomark } from "#/components/logomark"
import { Logotype } from "#/components/logotype"
import { isDevelopment } from "#/utils/environment"

const FULL_ROTATION_DEGREES = 180
const SCROLL_ANIMATION_THRESHOLD_PX = 144

interface LogoLinkProps extends LinkComponentProps {
  preventAnimation?: boolean
}

export function LogoLink(props: LogoLinkProps): JSX.Element {
  const { preventAnimation = false, to = "/", ...rest } = props

  const [isAnimating, setIsAnimating] = useState(false)
  const [spinCount, setSpinCount] = useState(0)

  const hasTriggeredScrollAnimation = useRef(false)
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

  useEffect(() => {
    if (shouldPreventAnimation) {
      return
    }

    let previousScrollY = window.scrollY
    let totalScrollDistance = 0
    let hasStartedTrackingScroll = false

    function handleScroll(): void {
      const currentScrollY = window.scrollY

      // Ignore browser/router scroll restoration before measuring user scroll distance
      if (!hasStartedTrackingScroll) {
        hasStartedTrackingScroll = true
        previousScrollY = currentScrollY
        return
      }

      totalScrollDistance += Math.abs(currentScrollY - previousScrollY)
      previousScrollY = currentScrollY

      if (
        hasTriggeredScrollAnimation.current ||
        totalScrollDistance < SCROLL_ANIMATION_THRESHOLD_PX
      ) {
        return
      }

      hasTriggeredScrollAnimation.current = true
      triggerAnimation()
      window.removeEventListener("scroll", handleScroll)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })

    return function cleanupScrollListener(): void {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [shouldPreventAnimation])

  return (
    <Link
      className="
        rounded-10 flex w-fit items-center p-8 transition-opacity select-none
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
        <Logomark className="text-text-primary" />
      </motion.span>
      <Spacer width={8} />

      <Logotype className="text-text-primary" />

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
