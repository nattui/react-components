export const COLOR = {
  ACCENT: {
    "01": "var(--color-blue-1)",
    "02": "var(--color-blue-2)",
    "03": "var(--color-blue-3)",
    "04": "var(--color-blue-4)",
    "05": "var(--color-blue-5)",
    "06": "var(--color-blue-6)",
    "07": "var(--color-blue-7)",
    "08": "var(--color-blue-8)",
    "09": "var(--color-blue-9)",
    "10": "var(--color-blue-10)",
    "11": "var(--color-blue-11)",
    "12": "var(--color-blue-12)",
  },
  NEUTRAL: {
    "01": "var(--color-gray-1)",
    "02": "var(--color-gray-2)",
    "03": "var(--color-gray-3)",
    "04": "var(--color-gray-4)",
    "05": "var(--color-gray-5)",
    "06": "var(--color-gray-6)",
    "07": "var(--color-gray-7)",
    "08": "var(--color-gray-8)",
    "09": "var(--color-gray-9)",
    "10": "var(--color-gray-10)",
    "11": "var(--color-gray-11)",
    "12": "var(--color-gray-12)",
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
