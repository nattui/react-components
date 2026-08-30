export const COLOR = {
  ACCENT: {
    "01": "var(--color-accent-1)",
    "02": "var(--color-accent-2)",
    "03": "var(--color-accent-3)",
    "04": "var(--color-accent-4)",
    "05": "var(--color-accent-5)",
    "06": "var(--color-accent-6)",
    "07": "var(--color-accent-7)",
    "08": "var(--color-accent-8)",
    "09": "var(--color-accent-9)",
    "10": "var(--color-accent-10)",
    "11": "var(--color-accent-11)",
    "12": "var(--color-accent-12)",
  },
  NEUTRAL: {
    "01": "var(--color-neutral-1)",
    "02": "var(--color-neutral-2)",
    "03": "var(--color-neutral-3)",
    "04": "var(--color-neutral-4)",
    "05": "var(--color-neutral-5)",
    "06": "var(--color-neutral-6)",
    "07": "var(--color-neutral-7)",
    "08": "var(--color-neutral-8)",
    "09": "var(--color-neutral-9)",
    "10": "var(--color-neutral-10)",
    "11": "var(--color-neutral-11)",
    "12": "var(--color-neutral-12)",
  },
} as const

console.log(COLOR.ACCENT["01"])

/*
[data-color-theme="light"][data-color-accent="blue"] {
  --accent:
}

[data-color-theme="dark"][data-color-accent="blue"] {
  --accent:
}
*/
