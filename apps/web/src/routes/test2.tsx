import { IconMenu4Outline18, IconUserOutline18 } from "@nattstack/icons"
import { Button, Spacer } from "@nattstack/ui"
import { createFileRoute } from "@tanstack/react-router"
import type { JSX } from "react"
import { Logotype } from "#/components/logotype.js"

export const Route = createFileRoute("/test2")({
  component: RouteTest2,
})

interface CarePlanItemProps {
  image: string
  label: string
}

function CarePlanItem(props: CarePlanItemProps): JSX.Element {
  const { image, label } = props

  return (
    <div className="flex items-center gap-x-12">
      <img alt="" className="rounded-8 size-56 shrink-0 object-cover" src={image} />
      <p className="text-12 font-500 leading-1-375 text-white">{label}</p>
    </div>
  )
}

function Header(): JSX.Element {
  return (
    <header
      className="
        flex h-80 shrink-0 items-center justify-between bg-[#f5f3ec] px-20
      "
    >
      <Logotype className="text-text-primary h-[28px] w-fit" />

      <div className="flex items-center gap-x-10">
        <Button label="Book a Visit" />

        <button
          aria-label="Account"
          className="
            flex size-[44px] items-center justify-center rounded-full border
            border-[#16161d] text-[#16161d] transition-colors
            hover:bg-[#16161d]/5
          "
          type="button"
        >
          <IconUserOutline18 />
        </button>

        <button
          aria-label="Menu"
          className="
            flex size-[44px] items-center justify-center rounded-full border
            border-[#16161d] text-[#16161d] transition-colors
            hover:bg-[#16161d]/5
          "
          type="button"
        >
          <IconMenu4Outline18 />
        </button>
      </div>
    </header>
  )
}

function Hero(): JSX.Element {
  return (
    <section
      className="
        1024:grid-cols-2
        grid grow
      "
    >
      <div className="flex flex-col justify-center bg-[#f4a6bf] px-[130px] py-64">
        <p className="font-600 text-14 tracking-[0.2em] text-[#2b2b33] uppercase">
          Get the care you deserve
        </p>

        <h1
          className="
            font-heading text-36
            640:text-48
            leading-1-125 mt-16 text-[#16161d]
          "
        >
          The Midlife Care You&nbsp;Deserve
        </h1>

        <p className="text-20 leading-1-625 mt-20 max-w-384 text-[#2b2b33]">
          From perimenopause to post menopause—midlife is a journey, and the symptoms of hormonal
          change are real. Midi is here with expert care, treatment, and support through it all.
        </p>
        <Spacer height={16} />

        <Button label="Book Your Virtual Visit" size={48} variant="secondary" />
      </div>

      <div className="relative min-h-384 bg-[#a9bcdd]">
        <img
          alt="A Midi clinician smiling in a white coat"
          className="absolute inset-0 size-full object-cover object-top"
          src="/images/test2-hero.png"
        />

        <div
          className="
            rounded-12 shadow-5 backdrop-blur-12
            640:left-40
            absolute bottom-48 left-24 w-208 border border-white/40 bg-white/30
          "
        >
          <p
            className="
              font-heading text-16 border-b border-white/40 px-16 py-12
              text-[#16161d]
            "
          >
            Your Care Plan
          </p>

          <div className="flex flex-col gap-y-12 p-16">
            <CarePlanItem image="/images/test2-glp1.png" label="Personalized GLP–1 Plan" />
            <CarePlanItem image="/images/test2-cortisol.png" label="Cortisol Support" />
          </div>
        </div>
      </div>
    </section>
  )
}

function RouteTest2(): JSX.Element {
  return (
    <div className="fixed inset-0 z-50 flex flex-col overflow-y-auto bg-[#f5f3ec]">
      <Header />
      <Hero />
    </div>
  )
}
