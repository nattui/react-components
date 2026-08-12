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
    paddingBlock: "6px 4px",
    paddingInline: 12,
  },
})
