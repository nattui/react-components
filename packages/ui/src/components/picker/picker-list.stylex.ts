import { create } from "@stylexjs/stylex"

export const pickerListStyles = create({
  base: {
    display: {
      ":is([data-empty])": "none",
      default: "flex",
    },
    flexDirection: "column",
    overflowY: "auto",
    overscrollBehavior: "contain",
    padding: 4,
    rowGap: 2,
    scrollPadding: 4,
  },
})
