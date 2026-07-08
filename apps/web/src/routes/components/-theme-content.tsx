import { Button, Column, Label, Spacer, ToggleGroup, ToggleGroupItem } from "@nattstack/ui"
import { useMemo, useState, type JSX } from "react"

const GRAY_OPTIONS = [
  "color-gray-gray",
  "color-gray-mauve",
  "color-gray-slate",
  "color-gray-sage",
  "color-gray-olive",
  "color-gray-sand",
] as const

const PRIMARY_OPTIONS = [
  // "color-primary-amber",
  "color-primary-blue",
  "color-primary-bronze",
  "color-primary-brown",
  "color-primary-crimson",
  "color-primary-cyan",
  "color-primary-gold",
  "color-primary-grass",
  "color-primary-green",
  "color-primary-indigo",
  "color-primary-iris",
  "color-primary-jade",
  // "color-primary-lime",
  // "color-primary-mint",
  "color-primary-orange",
  "color-primary-pink",
  "color-primary-plum",
  "color-primary-purple",
  "color-primary-red",
  "color-primary-ruby",
  // "color-primary-sky",
  "color-primary-teal",
  "color-primary-tomato",
  "color-primary-violet",
  // "color-primary-yellow",
] as const

interface ThemeToggleGroupProps {
  label: string
  onValueChange: (value: string) => void
  options: readonly string[]
  value: string
}

export function ThemeContent(): JSX.Element {
  const [grayPalette, setGrayPalette] = useState("color-gray-slate")
  const [primaryPalette, setPrimaryPalette] = useState("color-primary-blue")

  function handleGrayPaletteChange(value: string): void {
    setGrayPalette(value)
    applyGrayPalette(value)
  }

  function handlePrimaryPaletteChange(value: string): void {
    setPrimaryPalette(value)
    applyPrimaryPalette(value)
  }

  function handleReset(): void {
    const nextGrayPalette = "color-gray-slate"
    const nextPrimaryPalette = "color-primary-blue"

    setGrayPalette(nextGrayPalette)
    setPrimaryPalette(nextPrimaryPalette)
    applyGrayPalette(nextGrayPalette)
    applyPrimaryPalette(nextPrimaryPalette)
  }

  return (
    <>
      <h1 className="text-30 mb-16 text-pretty">Theme</h1>
      <p className="text-16/1-875 mb-24 text-pretty">
        Preview different gray and primary color palettes.
      </p>

      <Column>
        <ThemeToggleGroup
          label="Gray palette"
          onValueChange={handleGrayPaletteChange}
          options={GRAY_OPTIONS}
          value={grayPalette}
        />
        <Spacer height={24} />

        <ThemeToggleGroup
          label="Primary palette"
          onValueChange={handlePrimaryPaletteChange}
          options={PRIMARY_OPTIONS}
          value={primaryPalette}
        />
        <Spacer height={24} />

        <Button label="Reset" onClick={handleReset} variant="primary" />
      </Column>
    </>
  )
}

function applyGrayPalette(value: string): void {
  replaceRootClass(GRAY_OPTIONS, value)
}

function applyPrimaryPalette(value: string): void {
  replaceRootClass(PRIMARY_OPTIONS, value)
}

function formatColorName(option: string): string {
  const name = getColorName(option)

  return name.charAt(0).toUpperCase() + name.slice(1)
}

function getColorName(option: string): string {
  return option.split("-").at(-1) ?? option
}

function replaceRootClass(classNames: readonly string[], nextClassName: string): void {
  const root = globalThis.document.documentElement

  root.classList.remove(...classNames)
  root.classList.add(nextClassName)
}

function ThemeToggleGroup(props: ThemeToggleGroupProps): JSX.Element {
  const { label, onValueChange, options, value } = props

  const pressedValues = useMemo(() => [value], [value])

  function handleValueChange(groupValue: string[]): void {
    const [nextValue] = groupValue

    if (nextValue !== undefined) {
      onValueChange(nextValue)
    }
  }

  return (
    <div className="flex flex-col gap-8">
      <Label>{label}</Label>
      <ToggleGroup
        aria-label={label}
        className="max-w-[520px]"
        onValueChange={handleValueChange}
        value={pressedValues}
      >
        {options.map((option) => (
          <ToggleGroupItem className="w-80 flex-col gap-y-6" key={option} value={option}>
            <span
              aria-hidden
              className="inset-ring-gray-12/15 size-24 rounded-full inset-ring"
              style={{ backgroundColor: `var(--color-primitive-${getColorName(option)}-9)` }}
            />
            <span className="text-12">{formatColorName(option)}</span>
          </ToggleGroupItem>
        ))}
      </ToggleGroup>
    </div>
  )
}
