import { create } from "@stylexjs/stylex"

export const pickerGroupStyles = create({
  base: {
    display: "flex",
    flexDirection: "column",
    rowGap: 2,
  },
  label: {
    color: "var(--color-text-secondary)",
    fontSize: 12,
    fontWeight: 450,
    paddingBlockEnd: 4,
    paddingBlockStart: 6,
    paddingInline: 12,
  },
})
