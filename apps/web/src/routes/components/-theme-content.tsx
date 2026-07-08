import { Button, Column, Label, Spacer, ToggleGroup, ToggleGroupItem } from "@nattstack/ui"
import { useEffect, useMemo, useState, type JSX } from "react"
import {
  DEFAULT_GRAY_PALETTE,
  DEFAULT_PRIMARY_PALETTE,
  GRAY_PALETTE_OPTIONS,
  GRAY_PALETTE_STORAGE_KEY,
  PRIMARY_PALETTE_OPTIONS,
  PRIMARY_PALETTE_STORAGE_KEY,
  readStoredGrayPalette,
  readStoredPrimaryPalette,
} from "#/utils/theme-palette"

interface ThemeToggleGroupProps {
  label: string
  onValueChange: (value: string) => void
  options: readonly string[]
  value: string | undefined
}

export function ThemeContent(): JSX.Element {
  const [grayPalette, setGrayPalette] = useState<string | undefined>()
  const [primaryPalette, setPrimaryPalette] = useState<string | undefined>()

  /*
      The server does not know the stored palettes, so the first render (and the SSR
      markup) shows no pressed item. Reading the stored values in an effect re-renders
      after hydration, which is what actually flips the pressed state in the DOM —
      hydration alone never patches mismatched attributes.
  */
  useEffect(() => {
    setGrayPalette(readStoredGrayPalette())
    setPrimaryPalette(readStoredPrimaryPalette())
  }, [])

  function handleGrayPaletteChange(value: string): void {
    localStorage.setItem(GRAY_PALETTE_STORAGE_KEY, value)
    setGrayPalette(value)
    applyGrayPalette(value)
  }

  function handlePrimaryPaletteChange(value: string): void {
    localStorage.setItem(PRIMARY_PALETTE_STORAGE_KEY, value)
    setPrimaryPalette(value)
    applyPrimaryPalette(value)
  }

  function handleReset(): void {
    localStorage.removeItem(GRAY_PALETTE_STORAGE_KEY)
    localStorage.removeItem(PRIMARY_PALETTE_STORAGE_KEY)
    setGrayPalette(DEFAULT_GRAY_PALETTE)
    setPrimaryPalette(DEFAULT_PRIMARY_PALETTE)
    applyGrayPalette(DEFAULT_GRAY_PALETTE)
    applyPrimaryPalette(DEFAULT_PRIMARY_PALETTE)
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
          options={GRAY_PALETTE_OPTIONS}
          value={grayPalette}
        />
        <Spacer height={24} />

        <ThemeToggleGroup
          label="Primary palette"
          onValueChange={handlePrimaryPaletteChange}
          options={PRIMARY_PALETTE_OPTIONS}
          value={primaryPalette}
        />
        <Spacer height={24} />

        <Button label="Reset" onClick={handleReset} variant="primary" />
      </Column>
    </>
  )
}

function applyGrayPalette(value: string): void {
  replaceRootClass(GRAY_PALETTE_OPTIONS, value)
}

function applyPrimaryPalette(value: string): void {
  replaceRootClass(PRIMARY_PALETTE_OPTIONS, value)
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

  const pressedValues = useMemo(() => (value === undefined ? [] : [value]), [value])

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
