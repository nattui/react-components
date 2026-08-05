// oxlint-disable react-perf/jsx-no-new-array-as-prop

import { type ToggleProps, Toggle, ToggleGroup } from "@base-ui/react"
import { IconDarkLightOutline18 } from "@nattstack/icons"
import {
  DialogResponsive,
  DialogResponsivePopup,
  DialogResponsiveTrigger,
  IconButton,
  Label,
  Row,
  Spacer,
  Tooltip,
  TooltipPopup,
  TooltipTrigger,
} from "@nattstack/ui"
import { useEffect, useState, type JSX } from "react"
import { TabsTheme } from "#/components/tabs-theme"
import {
  type PrimaryPalette,
  GRAY_PALETTE_OPTIONS,
  GRAY_PALETTE_STORAGE_KEY,
  PRIMARY_PALETTE_OPTIONS,
  PRIMARY_PALETTE_STORAGE_KEY,
  formatPrimaryPaletteLabel,
  getPairedGrayPalette,
  readStoredPrimaryPalette,
} from "#/utils/theme-palette"
interface ToggleColorProps extends ToggleProps<PrimaryPalette> {
  value: PrimaryPalette
}

export function DialogAppearance(): JSX.Element {
  const [primaryPalette, setPrimaryPalette] = useState<PrimaryPalette | undefined>()

  /*
        The server does not know the stored palette, so the first render shows no pressed
        item. Reading the stored value in an effect re-renders after hydration, which is
        what actually flips the pressed state in the DOM.
    */
  useEffect(() => {
    setPrimaryPalette(readStoredPrimaryPalette())
  }, [])

  function handlePrimaryPaletteChange(groupValue: PrimaryPalette[]): void {
    const [nextPalette] = groupValue

    if (nextPalette === undefined) {
      return
    }

    /* Apply the natural Radix gray pairing, e.g. Red pairs with Mauve, Green with Sage. */
    const nextGrayPalette = getPairedGrayPalette(nextPalette)

    localStorage.setItem(PRIMARY_PALETTE_STORAGE_KEY, nextPalette)
    localStorage.setItem(GRAY_PALETTE_STORAGE_KEY, nextGrayPalette)
    setPrimaryPalette(nextPalette)

    const root = globalThis.document.documentElement
    root.classList.remove(...PRIMARY_PALETTE_OPTIONS, ...GRAY_PALETTE_OPTIONS)
    root.classList.add(nextPalette, nextGrayPalette)
  }

  return (
    <div>
      <DialogResponsive>
        <Tooltip>
          <TooltipTrigger
            render={
              <DialogResponsiveTrigger
                render={<IconButton icon={<IconDarkLightOutline18 />} size={32} variant="ghost" />}
              />
            }
          />
          <TooltipPopup side="right">Appearance</TooltipPopup>
        </Tooltip>
        <DialogResponsivePopup className="max-w-[360px]">
          <h2 className="text-20">Appearance</h2>
          <Spacer height={16} />

          <Row className="justify-between">
            <Label htmlFor="mode">Mode</Label>
            <TabsTheme />
          </Row>
          <Spacer height={16} />
          {/* <ToggleGroup
              aria-label="Text alignment"
              className="d flex w-fit items-center"
              defaultValue={["left"]}
              id="mode"
            >
              <ToggleMode>
                <IconSunOutline18 />
              </ToggleMode>
              <ToggleMode>
                <IconSunOutline18 />
              </ToggleMode>
              <ToggleMode>
                <IconSunOutline18 />
              </ToggleMode>
            </ToggleGroup>
             */}

          <Row className="justify-between">
            <Label htmlFor="color">Color</Label>

            <p className="text-14 font-500 text-text-primary">
              {primaryPalette === undefined ? undefined : formatPrimaryPaletteLabel(primaryPalette)}
            </p>
          </Row>
          <Spacer height={8} />
          <ToggleGroup
            aria-label="Color"
            className="
              grid w-full grid-cols-[repeat(auto-fit,minmax(40px,1fr))]
              items-center gap-8
            "
            id="color"
            onValueChange={handlePrimaryPaletteChange}
            value={primaryPalette === undefined ? [] : [primaryPalette]}
          >
            {PRIMARY_PALETTE_OPTIONS.map((option) => (
              <ToggleColor key={option} value={option} />
            ))}
          </ToggleGroup>
        </DialogResponsivePopup>
      </DialogResponsive>
    </div>
  )
}

function ToggleColor(props: ToggleColorProps): JSX.Element {
  const { value, ...rest } = props

  const colorLabel = formatPrimaryPaletteLabel(value)
  const colorName = value.split("-").at(-1) ?? value

  return (
    <Tooltip>
      <TooltipTrigger
        render={
          <Toggle
            aria-label={colorLabel}
            className="
              flex aspect-1-1 size-full w-full items-center justify-center
              overflow-hidden rounded-full border border-solid outline-offset-2
              data-pressed:outline-2
            "
            style={{
              backgroundColor: `var(--color-primitive-${colorName}-9)`,
              borderColor: `var(--color-primitive-${colorName}-10)`,
            }}
            value={value}
            {...rest}
          />
        }
      />
      <TooltipPopup>{colorLabel}</TooltipPopup>
    </Tooltip>
  )
}
