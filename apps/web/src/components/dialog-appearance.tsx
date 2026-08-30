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
import { useMemo, type JSX } from "react"
import { TabsTheme } from "#/components/tabs-theme"
import {
  type AccentPalette,
  ACCENT_PALETTES,
  formatAppearanceLabel,
  setAccentPalette,
  useAppearance,
} from "#/utils/appearance"

interface ToggleColorProps extends ToggleProps<AccentPalette> {
  value: AccentPalette
}

export function DialogAppearance(): JSX.Element {
  const accent = useAppearance()?.accent

  const toggleGroupValue = useMemo(() => (accent === undefined ? [] : [accent]), [accent])

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

          <Row className="justify-between">
            <Label htmlFor="color">Color</Label>

            <p className="text-14 font-500 text-text-primary">
              {accent === undefined ? undefined : formatAppearanceLabel(accent)}
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
            onValueChange={handleAccentChange}
            value={toggleGroupValue}
          >
            {ACCENT_PALETTES.map((option) => (
              <ToggleColor key={option} value={option} />
            ))}
          </ToggleGroup>
        </DialogResponsivePopup>
      </DialogResponsive>
    </div>
  )
}

function handleAccentChange(groupValue: AccentPalette[]): void {
  const [nextAccent] = groupValue

  /* Re-pressing the active toggle emits an empty group; the selection stays. */
  if (nextAccent !== undefined) {
    setAccentPalette(nextAccent)
  }
}

function ToggleColor(props: ToggleColorProps): JSX.Element {
  const { value, ...rest } = props

  const colorLabel = formatAppearanceLabel(value)

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
            data-color-accent={value}
            data-color-theme="light"
            style={{
              backgroundColor: "var(--color-accent-9)",
              borderColor: "var(--color-accent-10)",
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
