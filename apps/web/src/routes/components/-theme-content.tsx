import { Button, Column, Label, Spacer } from "@nattstack/ui"
import { useState, type ChangeEvent, type JSX } from "react"

const GRAY_OPTIONS = [
  "color-gray-gray",
  "color-gray-mauve",
  "color-gray-slate",
  "color-gray-sage",
  "color-gray-olive",
  "color-gray-sand",
] as const

const PRIMARY_OPTIONS = [
  "color-primary-amber",
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
  "color-primary-lime",
  "color-primary-mint",
  "color-primary-orange",
  "color-primary-pink",
  "color-primary-plum",
  "color-primary-purple",
  "color-primary-red",
  "color-primary-ruby",
  "color-primary-sky",
  "color-primary-teal",
  "color-primary-tomato",
  "color-primary-violet",
  "color-primary-yellow",
] as const

const SELECT_CLASS_NAME =
  "h-40 w-256 rounded-8 border border-border bg-bg-shell-outer px-12 text-16 text-text-primary outline-none transition-colors focus:border-primary"

export function ThemeContent(): JSX.Element {
  const [grayPalette, setGrayPaletteValue] = useState("color-gray-slate")
  const [primaryPalette, setPrimaryPaletteValue] = useState("color-primary-blue")

  function handleGrayPaletteChange(value: string): void {
    setGrayPaletteValue(value)
    setGrayPalette(value)
  }

  function handlePrimaryPaletteChange(value: string): void {
    setPrimaryPaletteValue(value)
    setPrimaryPalette(value)
  }

  function handleReset(): void {
    const nextGrayPalette = "color-gray-slate"
    const nextPrimaryPalette = "color-primary-blue"

    setGrayPaletteValue(nextGrayPalette)
    setPrimaryPaletteValue(nextPrimaryPalette)
    setGrayPalette(nextGrayPalette)
    setPrimaryPalette(nextPrimaryPalette)
  }

  return (
    <>
      <h1 className="text-30 mb-16 text-pretty">Theme</h1>
      <p className="text-16/1-875 mb-24 text-pretty">
        Preview different gray and primary color palettes.
      </p>

      <Column>
        <ThemeSelect
          label="Gray palette"
          onValueChange={handleGrayPaletteChange}
          options={GRAY_OPTIONS}
          value={grayPalette}
        />
        <Spacer height={16} />

        <ThemeSelect
          label="Primary palette"
          onValueChange={handlePrimaryPaletteChange}
          options={PRIMARY_OPTIONS}
          value={primaryPalette}
        />
        <Spacer height={16} />

        <Button onClick={handleReset} variant="primary">
          Reset
        </Button>
      </Column>
    </>
  )
}

interface ThemeSelectProps {
  label: string
  onValueChange: (value: string) => void
  options: readonly string[]
  value: string
}

function ThemeSelect(props: ThemeSelectProps): JSX.Element {
  const { label, onValueChange, options, value } = props

  function handleChange(event: ChangeEvent<HTMLSelectElement>): void {
    onValueChange(event.currentTarget.value)
  }

  return (
    <div className="flex flex-col gap-4">
      <Label>{label}</Label>
      <select className={SELECT_CLASS_NAME} onChange={handleChange} value={value}>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  )
}

function replaceRootClass(classNames: readonly string[], nextClassName: string): void {
  const root = globalThis.document.documentElement

  root.classList.remove(...classNames)
  root.classList.add(nextClassName)
}

function setGrayPalette(value: string): void {
  replaceRootClass(GRAY_OPTIONS, value)
}

function setPrimaryPalette(value: string): void {
  replaceRootClass(PRIMARY_OPTIONS, value)
}
