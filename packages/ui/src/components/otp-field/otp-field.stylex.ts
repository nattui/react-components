import { create, when } from "@stylexjs/stylex"

export const otpFieldStyles = create({
  base: {
    display: "flex",
    flexWrap: "wrap",
    gap: 8,
    justifyContent: "center",
    width: "fit-content",
  },
  masked_input: {
    fontFamily: {
      default: "inherit",
      [when.ancestor('[data-is-masked="true"]')]: "var(--font-code)",
    },
  },
})
