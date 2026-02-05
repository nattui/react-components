"use client"

import type { PropsWithChildren } from "react"
import { motion, useMotionValue } from "motion/react"

interface ToggleProps extends PropsWithChildren {}

export default function CarouselPage() {
  const x = useMotionValue(0)

  return (
    <div className="d flex flex-col p-64">
      <div className="overflow-clip">
        <motion.div className="flex gap-x-12" drag="x" style={{ x }}>
          <Toggle>All</Toggle>
          <Toggle>Gaming</Toggle>
          <Toggle>Music</Toggle>
          <Toggle>Podcasts</Toggle>
          <Toggle>Gaming consoles</Toggle>
          <Toggle>APIs</Toggle>
          <Toggle>AI</Toggle>
          <Toggle>Live</Toggle>
          <Toggle>Gadgets</Toggle>
          <Toggle>Chill-out music</Toggle>
          <Toggle>J-Pop</Toggle>
        </motion.div>
      </div>
    </div>
  )
}

function Toggle(props: ToggleProps) {
  const { children } = props

  return (
    <div className="bg-gray-3 rounded-8 flex h-32 shrink-0 items-center justify-center px-8">
      <p className="text-14 font-500 text-gray-12">{children}</p>
    </div>
  )
}
