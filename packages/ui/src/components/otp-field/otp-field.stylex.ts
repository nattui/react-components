import * as stylex from "@stylexjs/stylex"

export const otpFieldStyles = stylex.create({
  base: {
    display: "flex",
    flexWrap: "wrap",
    gap: 8,
    justifyContent: "center",
    width: "fit-content",
  },
  maskedInput: {
    fontFamily: {
      default: "inherit",
      [stylex.when.ancestor('[data-is-masked="true"]')]: "var(--font-code)",
    },
  },
})
