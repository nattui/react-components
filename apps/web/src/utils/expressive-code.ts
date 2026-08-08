import { ExpressiveCodeTheme, type SatteriExpressiveCodeOptions } from "satteri-expressive-code"

const PRIMARY = "var(--color-primary)"
const TEXT = "var(--color-text-primary)"
const COMMENT = "var(--color-gray-10)"
const PUNCTUATION = "var(--color-gray-11)"

const MIX_PROPERTY = 85
const MIX_CONSTANT = 70
const MIX_FUNCTION = 60
const MIX_STRING = 45

/*
  Site-token theme for Expressive Code. Workbench colors must be hex (EC resolves
  them at init), but token foregrounds can be CSS variables so highlighting tracks
  the live primary/gray palettes. Chrome (background, border) is set via
  styleOverrides with the same tokens.
*/
function createNattTheme(type: "dark" | "light"): ExpressiveCodeTheme {
  return new ExpressiveCodeTheme({
    colors: {
      "editor.background": type === "dark" ? "#111111" : "#f5f5f5",
      "editor.foreground": type === "dark" ? "#eeeeee" : "#1a1a1a",
    },
    name: `natt-${type}`,
    settings: [
      {
        scope: ["comment", "punctuation.definition.comment"],
        settings: { foreground: COMMENT },
      },
      {
        scope: [
          "keyword",
          "keyword.control",
          "keyword.operator.new",
          "storage",
          "storage.type",
          "entity.name.tag",
          "entity.name.tag.yaml",
          "source.yaml entity.name.tag",
          "entity.name.type",
          "support.type",
          "support.class",
          "variable.language",
        ],
        settings: { foreground: PRIMARY },
      },
      {
        scope: [
          "meta.object-literal.key",
          "support.type.property-name",
          "entity.other.attribute-name",
        ],
        settings: { foreground: mixPrimary(MIX_PROPERTY) },
      },
      {
        scope: ["constant", "constant.language", "constant.numeric", "variable.other.constant"],
        settings: { foreground: mixPrimary(MIX_CONSTANT) },
      },
      {
        scope: ["entity.name.function", "support.function", "meta.function-call"],
        settings: { foreground: mixPrimary(MIX_FUNCTION) },
      },
      {
        scope: ["string", "string.quoted", "markup.inline.raw", "attr.value"],
        settings: { foreground: mixPrimary(MIX_STRING) },
      },
      {
        scope: ["punctuation", "keyword.operator", "meta.brace", "meta.delimiter"],
        settings: { foreground: PUNCTUATION },
      },
    ],
    type,
  })
}

function mixPrimary(percent: number): string {
  return `color-mix(in oklab, ${PRIMARY} ${percent}%, ${TEXT})`
}

export const expressiveCodeOptions = {
  frames: false,
  // CSS-variable token colors cannot be contrast-corrected.
  minSyntaxHighlightingColorContrast: 0,
  styleOverrides: {
    borderColor: "transparent",
    borderRadius: "16px",
    borderWidth: "0px",
    codeBackground: "var(--color-gray-3)",
    codeFontFamily: "var(--font-code), ui-monospace, monospace",
    codeFontSize: "14px",
    codeForeground: TEXT,
    codeLineHeight: "1.714",
    codePaddingBlock: "16px",
    codePaddingInline: "16px",
  },
  themeCssSelector: (theme): string => (theme.type === "dark" ? ".dark" : ".light"),
  themes: [createNattTheme("light"), createNattTheme("dark")],
  useDarkModeMediaQuery: false,
} satisfies SatteriExpressiveCodeOptions
