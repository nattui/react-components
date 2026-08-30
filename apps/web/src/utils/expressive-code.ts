import type { SatteriExpressiveCodeOptions } from "satteri-expressive-code"

export const expressiveCodeOptions = {
  frames: false,
  styleOverrides: {
    borderColor: "transparent",
    borderRadius: "16px",
    borderWidth: "0px",
    codeBackground: "var(--color-neutral-3)",
    codeFontFamily: "var(--font-code), ui-monospace, monospace",
    codeFontSize: "13px",
    codeLineHeight: "1.714",
    codePaddingBlock: "16px",
    codePaddingInline: "16px",
  },
  themeCssSelector: (theme): string =>
    theme.type === "dark" ? '[data-color-theme="dark"]' : '[data-color-theme="light"]',
  themes: ["github-light", "github-dark"],
  useDarkModeMediaQuery: false,
} satisfies SatteriExpressiveCodeOptions
